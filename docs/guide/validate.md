# 表單驗證

此專案使用的 VeeValidate 版本為 v3.x。

過去專案中使用的 VeeValidate 為 v2 版本，主要是用 `directive` 的方式來做驗證，不過對於某些情況例如使用了 `v-if` `v-show` 的控制項時偶爾會產生一些 `non-existing field` 的錯誤警告，而這個問題在 v3 使用不同的方式做驗證後應該不會再發生了。

且新版本解決了使用指令做驗證的一些常見問題 (官方說的，詳細是哪些問題我也不知道)。

## 使用方法

這邊我先將官方文檔的使用方法做一個簡要的範例，後面會在說明這專案中我做的一些調整，至於更詳細的用例以及 API 請參考[官方文檔](https://logaretm.github.io/vee-validate/guide/basics.html)。

### ValidationProvider

v3 版本需要對控制項的外層套上一層 `ValidationProvider` 組件，控制項的 `name` 以及 `rules` 都必須傳進這個組件。

驗證規則是利用 `rules` 參數傳入，多個規則就用 `|` 分開，而 slot 插槽提供的值我們可以將 `errors` 解構出來，這是驗證的錯誤訊息。

```vue {2,6,10}
<template>
  <ValidationProvider v-slot="{ errors }" name="Name" rules="required|max:10">
    <v-text-field
      v-model="name"
      :counter="10"
      :error-messages="errors"
      label="Name"
    ></v-text-field>
  </ValidationProvider>
</template>
```

甚至你可以將 `valid` 或是 `invalid` 這樣的驗證狀態解構出來，讓該控制項的驗證狀態用於模板中。

以下範例為如果該控制項驗證沒過，就不能點擊 Submit。

```vue {2,10}
<template>
  <ValidationProvider v-slot="{ errors, invalid }" name="Name" rules="required|max:10">
    <v-text-field
      v-model="name"
      :counter="10"
      :error-messages="errors"
      label="Name"
    ></v-text-field>

    <v-btn @click="submit" :disabled="invalid">Submit</v-btn>
  </ValidationProvider>
</template>
```

### ValidationObserver

上面提到的都是對單一控制項的驗證狀態，但是我們通常需要的是整個表單的驗證，所以就需要將 `ValidationObserver` 包在整個表單中。

`v-slot` 同樣也可以解構出 `valid` 或是 `invalid` 這種對於整個表單的狀態值，以及 `validate` `reset` 驗證及重製的方法讓我們可以直接在模板中使用及呼叫。

```vue {2,19-21}
<template>
  <ValidationObserver ref="observer" v-slot="{ invalid, validate, reset }">
    <ValidationProvider v-slot="{ errors }" name="Name" rules="required|max:10">
      <v-text-field
        v-model="name"
        :counter="10"
        :error-messages="errors"
        label="Name"
      ></v-text-field>
    </ValidationProvider>
    <ValidationProvider v-slot="{ errors }" name="email" rules="required|email">
      <v-text-field
        v-model="email"
        :error-messages="errors"
        label="E-mail"
      ></v-text-field>
    </ValidationProvider>

    <v-btn @click="submit" v-if="invalid">submit</v-btn>
    <v-btn @click="validate">validate</v-btn>
    <v-btn @click="reset">reset</v-btn>
  </ValidationObserver>
</template>
```

#### \$refs

但是依照我們過去使用的習慣，通常會在 submit 事件裡面去做表單驗證，以及會使用到 `reset` 的功能，而這個部分就跟 v2 版的使用方法差不多，但差別是需要利用 `$refs` 去訪問這些方法。

以上面的表單為例，`ref` 名稱為 `observer`，我們可以這樣使用。

```vue
<script>
export default {
  methods: {
    submit() {
      this.$refs.observer.validate().then((success) => {
        if (!success) return
      })
    },

    close() {
      this.$nextTick(() => {
        this.$refs.observer.reset()
      })
    }
  }
}
</script>
```

## 驗證規則

### 規則引入

v3 版本跟 v2 有一個差異是為了減輕重量，預設是不導入任何規則的，所以必須自行導入規則，至於可用規則請參照規則列表。

[可用規則](https://ogaretm.github.io/vee-validate/guide/rules.html#rules)

```js {5,15-17}
// src/cores/validate.js

import Vue from 'vue'
import { ValidationObserver, ValidationProvider, extend, configure } from 'vee-validate'
import { required, excluded, max } from 'vee-validate/dist/rules'
import i18n from './locale'

configure({
  defaultMessage: (field, values) => {
    values._field_ = i18n.t(field)
    return i18n.t(`validation.${values._rule_}`, values)
  }
})

extend('required', required)
extend('excluded', excluded)
extend('max', max)

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
```

### 自訂規則

除了官方提供的規則，我們也可以加入[自訂規則](https://logaretm.github.io/vee-validate/guide/basics.html#adding-rules)

```js
// src/cores/validate.js

extend('odd', {
  validate: value => {
    return value % 2 !== 0;
  }
})
```

### 錯誤訊息 i18n

VeeValidate 有提供各個語系的驗證規則文字 i18n，這邊已經將它與 i18n 做整合

```js
// src/cores/locale.js

import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { getAllTranslate } from '@/services/translate'

// [ 將 vee-validate 預設的驗證訊息引入 ]
import en from 'vee-validate/dist/locale/en.json'
import tw from 'vee-validate/dist/locale/zh_TW.json'
import cn from 'vee-validate/dist/locale/zh_CN.json'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'tw',
  messages: {
    en: {
      validation: en.messages
    },
    'zh-TW': {
      validation: tw.messages
    },
    'zh-CN': {
      validation: cn.messages
    }
  },
  silentFallbackWarn: true,
  silentTranslationWarn: true
})

// [ 將 API 回傳的語系資料合併至 i18n 設定 ]
const asyncTranslate = async () => {
  const localeMessage = await getAllTranslate() // 這邊等之後接語系 API
  i18n.mergeLocaleMessage('en', localeMessage['en-US'])
  i18n.mergeLocaleMessage('zh-TW', localeMessage['zh-TW'])
  i18n.mergeLocaleMessage('zh-CN', localeMessage['zh-CN'])
}

asyncTranslate()

export default i18n
```

#### 加入自訂規則的錯誤訊息

以剛剛建立的 `odd` 規則為例。

```js {9,15,22}
// src/cores/locale.js

const i18n = new VueI18n({
  locale: 'tw',
  messages: {
    en: {
      validation: {
        ...en.messages,
        odd: 'This field must be an odd number',
      }
    },
    'zh-TW': {
      validation: {
        ...tw.messages,
        odd: '必須為奇數',
        required: ''
      }
    },
    'zh-CN': {
      validation: {
        ...cn.messages,
        odd: '必须为奇数'
      }
    }
  },
  silentFallbackWarn: true,
  silentTranslationWarn: true
})
```

#### 預設錯誤訊息

前面我們將 VeeValidate 提供的語系做了整合，不過在繁體中文以及簡體中文，提示訊息並不一致，我想應該是因為這是在 Github 上由不同人做的 PR 導致。

例如 `required` 規則的提示訊息就不同

| 語系         |   訊息   |
| ------------ | :------: |
| zh-TW | 為必填 |
| zh-CN | 是必须的 |

所以為了將這些不一致的訊息做調整，必須跟自訂規則一樣將訊息加入設定。

```js {16,23}
// src/cores/locale.js

const i18n = new VueI18n({
  locale: 'tw',
  messages: {
    en: {
      validation: {
        ...en.messages,
        odd: 'This field must be an odd number'
      }
    },
    'zh-TW': {
      validation: {
        ...tw.messages,
        odd: '必須為奇數',
        required: '{_field_} 為必填'
      }
    },
    'zh-CN': {
      validation: {
        ...cn.messages,
        odd: '必须为奇数',
        required: '{_field_} 为必填'
      }
    }
  },
  silentFallbackWarn: true,
  silentTranslationWarn: true
})
```

## 調整

從上面官方的範例來看，比起 v2 的使用方法來說，表面上看來需要進行更多步驟，因為需要將每個控制項包進 `ValidationProvider` 裡面，可能稍嫌麻煩，不過專案中原本就有做一些基礎控制項的封裝，所以我把 `ValidationProvider` 也一同封裝進去這些基礎控制項組件，這樣使用起來跟我們原先的習慣並無太大差異。

**以 BaseInput.vue 做示範**

這是我封裝的 BaseInput.vue

```vue
// components/base/BaseInput.vue

<template>
  <ValidationProvider v-slot="{ errors }" :name="name" :rules="rules">
    <v-text-field
      :counter="counter"
      :error-messages="errors"
      :hide-details="hideDetails"
      :clearable="clearable"
      :readonly="readonly"
      :disabled="disabled"
      :placeholder="placeholder"
      :dense="isDense"
      :outlined="outlined"
      :append-icon="appendIcon"
      :label="label"
      :value="value"
      @focus="$emit('focus', $event)"
      @blur="$emit('blur', $event)"
      @input="$emit('input', $event)"
    ></v-text-field>
  </ValidationProvider>
</template>
```

所以使用這一個組件的時候，只要將 `name` 以及 `rules` 傳進去這個組件就完事了。

```vue
<template>
  <base-input
    label="域名廠商"
    name="域名廠商"
    rules="required|max:30"
    counter="30"
    v-model="forms.vendor"
  ></base-input>
</template>
```
