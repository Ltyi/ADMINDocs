# $loading

過去使用 ElementUI 時，經常會使用到全局的加載服務來呈現全螢幕讀取的效果，但是 Vuetify 並沒有提供這個功能，所以自行製作了一個類似的功能。

## 使用方法

方法會掛載在 `Vue.prototype`，`main.js` 引入後使用 `Vue.use()` 即可。

```js
// main.js

import loading from '@/components/loading/'
Vue.use(loading)
```

使用 `this.$loading(true)` 呼叫

```js
export default {
  methods: {
    test() {
      this.$loading(true)
    }
  }
}
```

::: tip 提示
讀取組件請參照專案 components 目錄下的 `loading` 資料夾
:::

## 外部 JS 檔案使用

如果在其他非 Vue 實例中的 js 檔案想使用這個指令的話，可以參照以下方法

```js
import loading from '@/components/loading/'

// 在需要的地方呼叫 loading.overlay(true) 即可
```