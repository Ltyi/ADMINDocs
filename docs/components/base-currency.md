# BaseCurrency

將 VeeValidate 與 `v-currency-field` 一起封裝的組件，`v-currency-field` 為外部的 Vuetify 插件。

[插件 Github](https://github.com/phiny1/v-currency-field)
[插件 文檔](https://phiny1.github.io/v-currency-field/config.html#component-props)

## Props 組件參數

沒有把 `v-currency-field` 全部的參數寫進這個組件，若要參考全部 props 請參考上面的插件文檔，再根據需求自行調整此組件，另外此組件包含大部分參數都與 `BaseInput` 相同，以下我僅列出新增的部分

| 參數           |  類型  | 預設值 | 說明                                                             |
| -------------- | :----: | :----: | ---------------------------------------------------------------- |
| default-value  | Number |  null  | 預設綁定的值，預設為 Null (使用時 v-model 的預設值也必須為 null) |
| min            | Number |  null  | 可接受的最小值，若輸入超過會自動綁定為最小值                     |
| max            | Number |  null  | 可接受的最大值，若輸入超過會自動綁定為最大值                     |
| decimal-length | Number |   2    | 小數點位數，預設為 2，必須介於 0~20                              |

## 使用方法

### 基本用例

跟用 `BaseInput` 差不多，以下為包含驗證的範例。

```vue
<template>
  <base-currency
    outlined
    prefix="$"
    label="金額"
    name="金額"
    rules="max_value:999999999.99|min_value:0|max:12"
    :min="0"
    :max="999999999.99"
    v-model="test"
  ></base-currency>
</template>

<script>
export default {
  data: () => ({
    test: null
  })
}
</script>
```

### 預設值更改

需要注意是，綁定的預設值是 `null`，如果要預先綁定為指定數字，則需帶入 `default-value` 參數

```vue
<template>
  <base-currency
    outlined
    prefix="$"
    label="金額"
    name="金額"
    rules="max_value:999999999.99|min_value:0|max:12"
    :min="0"
    :max="999999999.99"
    :default-value="0"
    v-model="test"
  ></base-currency>
</template>

<script>
export default {
  data: () => ({
    test: 0
  })
}
</script>
```
