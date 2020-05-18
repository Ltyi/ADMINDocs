# BasePagination

使用 Vuetify 的 `v-pagination` 跟一些其他自訂控制項組成的組件，不過 `v-pagination` 目前尚有一些小 BUG，在寬度過窄的情況下，並不會適應父組件的大小而是會隨著目前頁數，所以有可能會溢出。

對於這個部分我將 `total-visible` 這個參數固定在 5，雖然在寬度 375 的情況下還是有些不完美，不過下調到 4 的話，頁數一多這個組件的表現會變得不太理想，有興趣可以自行嘗試看看，若有更好的解決方法可以一起討論~。

## Props 組件參數

| 參數           |  類型  |  預設值   | 說明                                                                                 |
| -------------- | :----: | :-------: | ------------------------------------------------------------------------------------ |
| page-size      | Number | undefined | 每頁顯示筆數，請使用 `.sync` 修飾符，這會同步每頁顯示總數到外層組件                  |
| page-count     | Number | undefined | 資料總數                                                                             |
| visible-length | Number | undefined | 分頁方塊最多顯示數量，組件內已經有針對不同寬度做預設值，若有帶入此參數則以此參數優先 |

## Events 事件

| 事件名稱  |  參數  | 說明                                   |
| --------- | :----: | -------------------------------------- |
| `@change` | number | 分頁變更發送的事件，參數為變更後的頁面 |

## 使用方法

```vue
<template>
  <base-pagination
    v-model="pagination.pageIndex"
    :page-count="pagination.pageCount"
    :page-size.sync="pagination.pageSize"
    @change="pageChange"
  ></base-pagination>
</template>

<script>
export default {
  data: () => ({
    pagination: {
      pageIndex: 1,
      pageSize: 10,
      pageCount: 150 // 這邊帶入 API 回傳的資料總數
    }
  }),

  methods: {
    pageChange(pageIndex)) {
      // 執行換頁後的動作，取得資料等等
    }
  }
}
</script>
```
