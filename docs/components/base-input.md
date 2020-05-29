# BaseInput

將 VeeValidate 與 `v-text-field` 一起封裝的組件

## Props 組件參數

沒有把原廠全部的參數寫進這個組件，若要參考全部 props 請參考官方文檔，根據需求跟改 `BaseInput`。

| 參數        |      類型      |  預設值   | 說明                                                                                                    |
| ----------- | :------------: | :-------: | ------------------------------------------------------------------------------------------------------- |
| loading     |    boolean     |   false   | 控制項的讀取樣式                                                                                        |
| name        |     String     | undefined | 會做為 `name` 傳遞給組件內的 `ValidationProvider`，會自動轉為 `i18n`，所以不需要在用 `$i18n.t()` 去帶值 |
| rules       |     String     | undefined | 表單驗證的規則，請參閱表單驗證章節                                                                      |
| vid         |     String     | undefined | 參閱[vee-validate 文檔](https://reurl.cc/oLpQOl)                                                        |
| counter     | Number, String | undefined | 字數計數器，會在控制項右下角出現，可搭配 rules 的 `max` 做使用                                          |
| label       |     String     | undefined | 控制項的名稱                                                                                            |
| outlined    |    boolean     |   false   | 啟用 `outlined` 樣式                                                                                    |
| placeholder |     String     | undefined | 就是 placeholder                                                                                        |
| disabled    |    Boolean     |   false   | 禁用控制項                                                                                              |
| readonly    |    Boolean     |   false   | 唯讀                                                                                                    |
| clearable   |    Boolean     |   false   | 清除按鈕                                                                                                |
| appendIcon  |    Boolean     | undefined | 後置 icon                                                                                               |
| dense       |    Boolean     |   false   | 降低控制項高度，若 outlined 為 true，則自動開啟                                                         |
| hideDetails |    Boolean     |   false   | 是否隱藏錯誤訊息區塊 (可以降低控制項所佔高度)                                                           |

## Events 事件

| 事件名稱 | 參數 | 說明       |
| -------- | :--: | ---------- |
| `@focus` |  無  | focus 事件 |
| `@blur`  |  無  | blur 事件  |
| `@input` |  無  | input 事件 |

## 使用方法

### 基本用例

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

### outlined 樣式

```vue
<template>
  <base-input
    outlined
    label="域名廠商"
    name="域名廠商"
    rules="required|max:30"
    counter="30"
    v-model="forms.vendor"
  ></base-input>
</template>
```

### 開啟 loading 狀態

```vue
<template>
  <base-input
    loading
    label="域名廠商"
    name="域名廠商"
    rules="required|max:30"
    counter="30"
    v-model="forms.vendor"
  ></base-input>
</template>
```
