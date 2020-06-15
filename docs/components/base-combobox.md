# BaseCombobox

將 VeeValidate 與 `v-combobox` 一起封裝的組件

## Props 組件參數

沒有把原廠全部的參數寫進這個組件，若要參考全部 props 請參考官方文檔，根據需求更改 `BaseCombobox`。

| 參數          |          類型           |  預設值   | 說明                                                                                                    |
| ------------- | :---------------------: | :-------: | ------------------------------------------------------------------------------------------------------- |
| loading       |         boolean         |   false   | 控制項的讀取樣式                                                                                        |
| name          |         String          | undefined | 會做為 `name` 傳遞給組件內的 `ValidationProvider`，會自動轉為 `i18n`，所以不需要在用 `$i18n.t()` 去帶值 |
| rules         |         String          | undefined | 表單驗證的規則，請參閱表單驗證章節                                                                      |
| vid           |         String          | undefined | 參閱[vee-validate 文檔](https://reurl.cc/oLpQOl)                                                        |
| validMode     |         String          | undefined | 對應官方的 `mode` 參數，可傳入 'lazy' 做延遲驗證，其他參閱[vee-validate 文檔](https://reurl.cc/5lVMmV)  |
| counter       |     Number, String      | undefined | 字數計數器，會在控制項右下角出現，可搭配 rules 的 `max` 做使用                                          |
| label         |         String          | undefined | 控制項的名稱                                                                                            |
| type          |         String          |  'text'   | 控制項模式                                                                                              |
| outlined      |         boolean         |   false   | 啟用 `outlined` 樣式                                                                                    |
| placeholder   |         String          | undefined | 就是 placeholder                                                                                        |
| disabled      |         Boolean         |   false   | 禁用控制項                                                                                              |
| readonly      |         Boolean         |   false   | 唯讀                                                                                                    |
| clearable     |         Boolean         |   false   | 清除按鈕                                                                                                |
| appendIcon    |         Boolean         | undefined | 後置 icon                                                                                               |
| dense         |         Boolean         |   false   | 降低控制項高度，若 outlined 為 true，則自動開啟                                                         |
| hideDetails   |         Boolean         |   false   | 是否隱藏錯誤訊息區塊 (可以降低控制項所佔高度)                                                           |
| multiple      |         Boolean         |   false   | 複選模式，開啟後綁定的值必須為陣列                                                                      |
| items         |          Array          |    []     | select 的 options，格式請參照下方 options                                                               |
| item-text     | String, Array, Function |   text    | 更改預設的 options text key 值                                                                          |
| item-value    | String, Array, Function |   value   | 更改預設的 options value key 值                                                                         |
| item-disabled | String, Array, Function | disabled  | 更改預設的 options disabled key 值                                                                      |
| returnObject  |         Boolean         |   false   | 回傳整個物件                                                                                            |

## 使用方法

與 `BaseInput` 以及 `BaseSelect` 使用方式一樣，差別在於 `items` 傳入的陣列是要預先提供的選項，例如要提供幾個常用幾個預設選項，也想讓使用者自行輸入時就可以用這個組件。

### 基本用例

`items` 可以是陣列字串也可以是陣列物件，而物件必須按照 `text/value` 的格式做為物件的 key/value，若想自訂 key/value 則需再另外傳入 item-text/item-value

```vue
<template>
  <base-combobox
    outlined
    name="功能名稱(英)"
    :items="items"
    v-model="item.MenuEName"
  ></base-combobox>
</template>

<script>
export default {
  data: () => ({
    items: ['選項A', '選項B', '選項C'] // 或是 [{ text: '選項A', value: 1 }, { text: '選項B', value: 2 }]
  })
}
</script>
```
