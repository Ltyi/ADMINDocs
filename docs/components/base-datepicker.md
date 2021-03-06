# BaseDatePicker

將 Vuetify 的 `v-date-picker` 以及 `v-time-picker` 結合的時間日期選擇器

## Props 組件參數

| 參數        |  類型   |  預設值   | 說明                                                                                                    |
| ----------- | :-----: | :-------: | ------------------------------------------------------------------------------------------------------- |
| loading     | Boolean |   false   | 控制項讀取效果，跟 `disabled` 一起搭配使用效果較好                                                      |
| name        | String  | undefined | 會做為 `name` 傳遞給組件內的 `ValidationProvider`，會自動轉為 `i18n`，所以不需要在用 `$i18n.t()` 去帶值 |
| rules       | String  | undefined | 表單驗證的規則，請參閱表單驗證章節                                                                      |
| vid         | String  | undefined | 參閱[vee-validate 文檔](https://reurl.cc/oLpQOl)                                                        |
| validMode   | String  | undefined | 對應官方的 `mode` 參數，可傳入 'lazy' 做延遲驗證，其他參閱[vee-validate 文檔](https://reurl.cc/5lVMmV)  |
| hideDetails | Boolean |   false   | 是否隱藏錯誤訊息區塊 (可以降低控制項所佔高度)                                                           |
| label       | String  | undefined | 控制項的名稱                                                                                            |
| type        | String  |   date    | 接受 `datetimerange` `daterange` `datetime` `month` 參數                                                |
| outlined    | boolean |   false   | 啟用 `outlined` 樣式                                                                                    |
| dense       | Boolean |   false   | 降低控制項高度，若 outlined 為 true，則自動開啟                                                         |
| top         | Boolean |   false   | 視窗彈出後的起始位置調整                                                                                |
| bottom      | Boolean |   false   | 視窗彈出後的起始位置調整                                                                                |
| disabled    | Boolean |   false   | 禁用控制項                                                                                              |

## 使用方法

1. 使用時必須注意不同模式下，綁定的值類型必須正確。

- datetimerange/daterange - 陣列 Array
- datetime/month/date - 字串 String

2. 需從外部傳值的時候（例如單筆資料編輯須帶入預設值時），傳入的值必須為相對應的格式，例如 API 回傳時是 `YYYY-MM-DDTHH:mm:ss` 的格式，而我們要顯示的是 `YYYY-MM-DD` 的話則需要另外使用 `moment` 去做格式化後再把值帶入組件。

### 單一日期選擇

綁定值的類型需為字串，不需要傳入 type 參數。

```vue
<template>
  <base-date-picker label="日期" v-model="date"></base-date-picker>
</template>

<script>
export default {
  data: () => ({
    date: ''
  })
}
</script>
```

### 日期範圍選擇

綁定值的類型需為陣列，需指定 type。

```vue
<template>
  <base-date-picker
    label="日期"
    type="daterange"
    v-model="date"
  ></base-date-picker>
</template>

<script>
export default {
  data: () => ({
    date: []
  })
}
</script>
```

### 日期時間選擇

綁定值的類型需為字串，需指定 type。

```vue
<template>
  <base-date-picker
    label="日期"
    type="datetime"
    v-model="date"
  ></base-date-picker>
</template>

<script>
export default {
  data: () => ({
    date: ''
  })
}
</script>
```

### 日期時間範圍選擇

綁定值的類型需為陣列，需指定 type。

```vue
<template>
  <base-date-picker
    label="日期"
    type="datetimerange"
    v-model="date"
  ></base-date-picker>
</template>

<script>
export default {
  data: () => ({
    date: []
  })
}
</script>
```

### 月份選擇

綁定值的類型需為字串，需指定 type。

```vue
<template>
  <base-date-picker label="日期" type="month" v-model="date"></base-date-picker>
</template>

<script>
export default {
  data: () => ({
    date: ''
  })
}
</script>
```
