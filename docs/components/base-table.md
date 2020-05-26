# BaseTable

使用 Vuetify 的 `v-data-table` 封裝的組件，使用方法上大致與 ElementUI 相同。

## Props 組件參數

| 參數              |     類型      |  預設值   | 說明                                                                                                      |
| ----------------- | :-----------: | :-------: | --------------------------------------------------------------------------------------------------------- |
| loading           |    Boolean    |   false   | 表格讀取時的畫面呈現，會有一個讀取條及遮罩                                                                |
| headers           |     Array     |    []     | 表頭，詳細設定格式請參照下面的 `headers`                                                                  |
| items             |     Array     |    []     | 數據                                                                                                      |
| show-select       |    Boolean    |   false   | 是否顯示 checkbox                                                                                         |
| v-model           |     Array     |   none    | 開啟 `show-select` 時同步綁定的值                                                                         |
| item-key          |    String     | undefined | 開啟 `show-select` 的話請務必帶入此值，請帶入數據中的 key，而 value 必須為唯一值，建議可以帶入數據中的 id |
| mobile-breakpoint | String,Number |    600    | 顯示 mobile 版本的斷點，如果希望表格始終為橫式請帶入 0                                                    |
| formatter         |   Function    |           | 格式化對應欄位內容，使用方法跟之前專案一樣                                                                |

## headers 表頭格式

```
{
  text: <欄位顯示值>,
  value: <欄位名稱>,
  align: <對齊 left|center|right>,
  customized: <自定義欄位 Boolean>,
  width: <欄位寬度，帶入數字即可>
}
```

## Slot 插槽

|     插槽名稱      |    參數    |                                                               說明                                                               |
| :---------------: | :--------: | :------------------------------------------------------------------------------------------------------------------------------: |
|       `top`       |     無     |                                        位於表格上方的插槽，可以放一些 批量操作之類的按鈕                                         |
| `<headers.value>` | `{ item }` | 自定義欄位，item 對象帶有該列的值<br />例如操作選項 : v-slot:action="{ item }"<br />headers 的 customized 屬性必須為 true 才有用 |
|     `footer`      |     無     |                                       位於表格底部的插槽，可以把 `BasePagination` 放在這邊                                       |

## 使用方法

### 基本用例

```vue
<template>
  <base-table :headers="headers" :items="dataSource"></base-table>
</template>

<script>
export default {
  data: () => ({
    headers: [
      {
        text: 'ID',
        align: 'start',
        value: 'id'
      },
      { text: '域名', value: 'domain' },
      { text: '域名廠商', value: 'vendor' },
      { text: '域名廠商帳號', value: 'vendorAcc' },
      { text: 'DNS廠商', value: 'dnsVendor' }
    ],
    dataSource: [
      {
        id: 1,
        domain: 'test',
        vendor: 'vendor',
        vendorAcc: 'vendorAcc',
        dnsVendor: 'dnsVendor'
      },
      {
        id: 2,
        domain: 'test2',
        vendor: 'vendor2',
        vendorAcc: 'vendorAcc2',
        dnsVendor: 'dnsVendor2'
      },
      {
        id: 3,
        domain: 'test3',
        vendor: 'vendor3',
        vendorAcc: 'vendorAcc3',
        dnsVendor: 'dnsVendor3'
      }
    ]
  })
}
</script>
```

### 自訂欄位

例如我們要在每一行的尾端加上一些單筆操作的按鈕選項，在 `headers` 加入 `action` 屬性，並把 `customized` 設定為 `true`。

```vue
<script>
export default {
  data: () => ({
    headers: [
      {
        text: 'ID',
        align: 'start',
        value: 'id'
      },
      { text: '域名', value: 'domain' },
      { text: '域名廠商', value: 'vendor' },
      { text: '域名廠商帳號', value: 'vendorAcc' },
      { text: 'DNS廠商', value: 'dnsVendor' },
      {
        text: '操作',
        value: 'action',
        align: 'center',
        customized: true
      }
    ]
  })
}
</script>
```

接著模板中，使用插槽來自定義我們的按鈕，解構出來的 `item` 屬性則是該行的資料。

```vue
<template>
  <base-table :headers="headers" :items="dataSource">
    <template #action="{ item }">
      <v-btn icon @click="edit(item)">
        編輯
      </v-btn>
      <v-btn icon @click="remove(item)">
        刪除
      </v-btn>
    </template>
  </base-table>
</template>
```

### 加入 checkbox

開啟此功能必須傳入兩個參數 `show-select` 以及 `item-key`，`item-key` 請傳入資料中帶有唯一值的 Key，例如資料中幾乎都會有的 ID。

然後使用 `v-model` 進行雙向同步，這邊我們在 data 中定義 `selected` 屬性為空陣列。

```vue
<template>
  <base-table :headers="headers" :items="dataSource" show-select item-key="id">
    <template #action="{ item }">
      <v-btn icon @click="edit(item)">
        編輯
      </v-btn>
      <v-btn icon @click="remove(item)">
        刪除
      </v-btn>
    </template>
  </base-table>
</template>

<script>
export default {
  data: () => ({
    headers: [
      {
        text: 'ID',
        align: 'start',
        value: 'id'
      },
      { text: '域名', value: 'domain' },
      { text: '域名廠商', value: 'vendor' },
      { text: '域名廠商帳號', value: 'vendorAcc' },
      { text: 'DNS廠商', value: 'dnsVendor' },
      {
        text: '操作',
        value: 'action',
        align: 'center',
        customized: true
      }
    ],
    selected: []
  })
}
</script>
```

### 讀取效果

傳入 `loading` 參數，即可控制表單的讀取效果顯示。

### 完整範例

與 `BaseCard` 以及 `BasePagination` 搭配使用，若有對數據文字格式化的需求也可以傳入 `formatter` method。

```vue
<template>
  <base-card title="域名列表" sub-title="Domain List" prepend-icon="fa-list">
    <base-table
      show-select
      :loading="dataLoading"
      :headers="headers"
      :items="dataSource"
      item-key="id"
      :formatter="formatter"
      v-model="selected"
    >
      <template #top>
        <div class="d-flex">
          <v-btn small color="primary" class="mr-1" @click="edit()">
            編輯
          </v-btn>
          <v-btn small color="primary" class="mr-1">分組</v-btn>

          <v-spacer></v-spacer>

          <v-btn small color="indigo" dark class="mr-1">
            <v-icon left>fa-file-import</v-icon>
            匯入
          </v-btn>
          <v-btn small color="green" dark>
            <v-icon left>fa-file-export</v-icon>
            匯出
          </v-btn>
        </div>
      </template>

      <template #status="{ item }">
        <v-chip
          small
          text-color="white"
          :color="item.status === '啟用' ? 'green' : 'red'"
          v-text="item.status"
        ></v-chip>
      </template>

      <template #action="{ item }">
        <v-btn icon @click="edit(item)">
          <v-icon small>far fa-edit</v-icon>
        </v-btn>
        <v-btn icon @click="remove(item)">
          <v-icon small>far fa-trash-alt</v-icon>
        </v-btn>
      </template>

      <template #footer>
        <base-pagination
          v-model="pagination.pageIndex"
          :page-count="pagination.pageCount"
          :page-size.sync="pagination.pageSize"
          @change="pageChange"
        ></base-pagination>
      </template>
    </base-table>
  </base-card>
</template>

<script>
export default {
  data: () => ({
    headers: [
      {
        text: 'ID',
        align: 'start',
        value: 'id'
      },
      { text: '域名', value: 'domain' },
      { text: '域名廠商', value: 'vendor' },
      { text: '域名廠商帳號', value: 'vendorAcc' },
      { text: 'DNS廠商', value: 'dnsVendor' },
      {
        text: '狀態',
        value: 'status',
        align: 'center',
        customized: true
      },
      {
        text: '操作',
        value: 'action',
        align: 'center',
        customized: true
      }
    ],
    dataLoading: false,
    dataSource: [
      {
        id: 1,
        domain: 'test',
        vendor: 'vendor',
        vendorAcc: 'vendorAcc',
        dnsVendor: 'dnsVendor'
      },
      {
        id: 2,
        domain: 'test2',
        vendor: 'vendor2',
        vendorAcc: 'vendorAcc2',
        dnsVendor: 'dnsVendor2'
      },
      {
        id: 3,
        domain: 'test3',
        vendor: 'vendor3',
        vendorAcc: 'vendorAcc3',
        dnsVendor: 'dnsVendor3'
      }
    ],
    selected: []
  }),

  methods: {
    edit(item) {
      console.log(item)
    },

    remove(item) {
      console.log(item)
    },

    // [ 欄位內容格式化 ]
    formatter(cell, value) {
      switch (cell) {
        case 'dnsVendor':
          switch (value) {
            case 'dnsVendor2':
              return `${value} + formatTest`
            default:
              return value
          }
        default:
          return value
      }
    }
  }
}
</script>
```
