# BaseTextarea

將 VeeValidate 與 `v-textarea` 一起封裝的組件

沒有把原廠全部的參數寫進這個組件，若要參考全部 props 請參考官方文檔，根據需求跟改 `BaseTextarea`。

| 參數        |      類型      |  預設值   | 說明                                                                                                    |
| ----------- | :------------: | :-------: | ------------------------------------------------------------------------------------------------------- |
| loading     |    boolean     |   false   | 控制項的讀取樣式                                                                                        |
| name        |     String     | undefined | 會做為 `name` 傳遞給組件內的 `ValidationProvider`，會自動轉為 `i18n`，所以不需要在用 `$i18n.t()` 去帶值 |
| rules       |     String     | undefined | 表單驗證的規則，請參閱表單驗證章節                                                                      |
| counter     | Number, String | undefined | 字數計數器，會在控制項右下角出現，可搭配 rules 的 `max` 做使用                                          |
| label       |     String     | undefined | 控制項的名稱                                                                                            |
| outlined    |    boolean     |   false   | 啟用 `outlined` 樣式                                                                                    |
| placeholder |     String     | undefined | 就是 placeholder                                                                                        |
| disabled    |    Boolean     |   false   | 禁用控制項                                                                                              |
| readonly    |    Boolean     |   false   | 唯讀                                                                                                    |
| clearable   |    Boolean     |   false   | 清除按鈕                                                                                                |
| hideDetails |    Boolean     |   false   | 是否隱藏錯誤訊息區塊 (可以降低控制項所佔高度)                                                           |
| rows        | String, Number |     3     | 預設高度                                                                                                |

## Events 事件

| 事件名稱 | 參數 | 說明       |
| -------- | :--: | ---------- |
| `@input` |  無  | input 事件 |

## 使用方法

### 基本用例

跟其他組件的基本用法相同

```vue
<template>
  <base-textarea
    label="域名"
    name="域名"
    rules="required|max:500"
    counter="500"
    v-model="forms.domain"
  ></base-textarea>
</template>
```
