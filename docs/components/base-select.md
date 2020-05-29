# BaseSelect

將 VeeValidate 與 `v-select` 一起封裝的組件

## Props 組件參數

沒有把原廠全部的參數寫進這個組件，若要參考全部 props 請參考官方文檔，根據需求跟改 `BaseSelect`。

| 參數             |          類型           |  預設值   | 說明                                                                                                    |
| ---------------- | :---------------------: | :-------: | ------------------------------------------------------------------------------------------------------- |
| loading          |         boolean         |   false   | 控制項的讀取樣式                                                                                        |
| name             |         String          | undefined | 會做為 `name` 傳遞給組件內的 `ValidationProvider`，會自動轉為 `i18n`，所以不需要在用 `$i18n.t()` 去帶值 |
| rules            |         String          | undefined | 表單驗證的規則，請參閱表單驗證章節                                                                      |
| counter          |     Number, String      | undefined | 字數計數器，會在控制項右下角出現，可搭配 rules 的 `max` 做使用                                          |
| label            |         String          | undefined | 控制項的名稱                                                                                            |
| outlined         |         boolean         |   false   | 啟用 `outlined` 樣式                                                                                    |
| placeholder      |         String          | undefined | 就是 placeholder                                                                                        |
| disabled         |         Boolean         |   false   | 禁用控制項                                                                                              |
| readonly         |         Boolean         |   false   | 唯讀                                                                                                    |
| clearable        |         Boolean         |   false   | 清除按鈕                                                                                                |
| appendIcon       |         Boolean         | undefined | 後置 icon                                                                                               |
| prependInnerIcon |         Boolean         | undefined | 前置 icon icon                                                                                          |
| dense            |         Boolean         |   false   | 降低控制項高度，若 outlined 為 true，則自動開啟                                                         |
| hideDetails      |         Boolean         |   false   | 是否隱藏錯誤訊息區塊 (可以降低控制項所佔高度)                                                           |
| multiple         |         Boolean         |   false   | 複選模式，開啟後綁定的值必須為陣列                                                                      |
| items            |          Array          |    []     | select 的 options，格式請參照下方 options                                                               |
| item-text        | String, Array, Function |   text    | 更改預設的 options text key 值                                                                          |
| item-value       | String, Array, Function |   value   | 更改預設的 options value key 值                                                                         |
| item-disabled    | String, Array, Function | disabled  | 更改預設的 options disabled key 值                                                                      |
| returnObject     |         Boolean         |   false   | 回傳整個物件                                                                                            |

## Events 事件

| 事件名稱  | 參數 | 說明        |
| --------- | :--: | ----------- |
| `@change` |  無  | change 事件 |

## 使用方法

### 基本用例

預設的 `items` 必須按照 `text/value` 的格式做為物件鍵值

```vue
<template>
  <base-select
    label="選項測試"
    name="選項測試"
    rules="excluded:-1"
    :items="items"
    v-model="test"
  ></base-select>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        text: '請選擇',
        value: -1
      },
      {
        text: '選項A',
        value: 1
      },
      {
        text: '選項B',
        value: 2
      }
    ],

    test: ''
  })
}
</script>
```

### 更換鍵值

如果要依照自訂的鍵值，則需另外傳入 `item-text` 以及 `item-value` 當作參數。

假設選項格式是這樣

```js
{
  GroupName: '分組名稱',
  GroupID: 1
}
```

```vue
<template>
  <base-select
    label="選項測試"
    name="選項測試"
    rules="excluded:-1"
    :items="items"
    item-text="GroupName"
    item-value="GroupID"
    v-model="group"
  ></base-select>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        GroupName: '請選擇',
        GroupID: -1
      },
      {
        GroupName: '分組A',
        GroupID: 1
      },
      {
        GroupName: '分組B',
        GroupID: 2
      }
    ],

    group: ''
  })
}
</script>
```

### 回傳整個物件

可以指定將 v-model 的值綁定為回傳整個物件，呈上個案例，加上 `return-object` 參數，則會將整個物件回傳至綁定值。

```vue
<template>
  <base-select
    label="選項測試"
    name="選項測試"
    rules="excluded:-1"
    :items="items"
    item-text="GroupName"
    item-value="GroupID"
    v-model="group"
    return-object
  ></base-select>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        GroupName: '請選擇',
        GroupID: -1
      },
      {
        GroupName: '分組A',
        GroupID: 1
      },
      {
        GroupName: '分組B',
        GroupID: 2
      }
    ],

    group: {} // 會回傳單一物件
  })
}
</script>
```

### 複選

傳入 `multiple` ，開啟複選模式，綁定值必須為陣列否則無效

```vue
<template>
  <base-select
    label="選項測試"
    name="選項測試"
    rules="excluded:-1"
    :items="items"
    item-text="GroupName"
    item-value="GroupID"
    v-model="group"
    multiple
  ></base-select>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        GroupName: '請選擇',
        GroupID: -1
      },
      {
        GroupName: '分組A',
        GroupID: 1
      },
      {
        GroupName: '分組B',
        GroupID: 2
      }
    ],

    group: [] // 必須是陣列
  })
}
</script>
```

### 禁用部分選項

若有部分選項需為禁用狀態，可以在選項中加入 `disabled` 的屬性即可。

```vue
<template>
  <base-select
    label="選項測試"
    name="選項測試"
    rules="excluded:-1"
    :items="items"
    item-text="GroupName"
    item-value="GroupID"
    v-model="group"
    multiple
  ></base-select>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        GroupName: '請選擇',
        GroupID: -1
      },
      {
        GroupName: '分組A',
        GroupID: 1,
        disabled: true
      },
      {
        GroupName: '分組B',
        GroupID: 2
      }
    ],

    group: []
  })
}
</script>
```

如果想更換 `disabled` 的名稱也可以用 `item-disabled` 去指定。

```vue
<template>
  <base-select
    label="選項測試"
    name="選項測試"
    rules="excluded:-1"
    :items="items"
    item-text="GroupName"
    item-value="GroupID"
    item-disalbed="anythingYouWant"
    v-model="group"
    multiple
  ></base-select>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        GroupName: '請選擇',
        GroupID: -1
      },
      {
        GroupName: '分組A',
        GroupID: 1,
        anythingYouWant: true
      },
      {
        GroupName: '分組B',
        GroupID: 2
      }
    ],

    group: []
  })
}
</script>
```
