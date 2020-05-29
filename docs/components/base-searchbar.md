# BaseSeachbar

主要是 `BaseCard` 的延伸，預設內置一個搜尋按鈕，使用在表單搜尋框。

## Props 組件參數

| 參數  |  類型  | 預設值 | 說明                   |
| ----- | :----: | :----: | ---------------------- |
| title | String | `搜尋` | 卡片標題，預設為`搜尋` |

## Slot 插槽

| 插槽名稱 | 參數 |                    說明                    |
| :------: | :--: | :----------------------------------------: |
| `footer` |  無  | 位於卡片右下方的插槽，預設會有一個搜尋按鈕 |

## Events 事件

| 事件名稱  | 參數 | 說明                   |
| --------- | :--: | ---------------------- |
| `@search` |  無  | 預設搜尋按鈕發出的事件 |

## 使用方法

### 基本用例

```vue
<template>
  <base-searchbar @search="search">
    <v-row dense>
      <v-col cols="6" md="2">
        <base-input outlined label="ID"></base-input>
      </v-col>

      <v-col cols="6" md="2">
        <base-input outlined label="域名"></base-input>
      </v-col>
    </v-row>
  </base-searchbar>
</template>
```

### 替換搜尋按鈕

使用 `footer` 插槽

```vue
<template>
  <base-searchbar @search="search">
    <v-row dense>
      <v-col cols="6" md="2">
        <base-input outlined label="ID"></base-input>
      </v-col>

      <v-col cols="6" md="2">
        <base-input outlined label="域名"></base-input>
      </v-col>

      <template #footer>
        <v-btn>測試一</v-btn>
        <v-btn>測試二</v-btn>
      </template>
    </v-row>
  </base-searchbar>
</template>
```

### 替換標題

使用 `title` 參數

```vue
<template>
  <base-searchbar @search="search" title="新標題在此">
    <v-row dense>
      <v-col cols="6" md="2">
        <base-input outlined label="ID"></base-input>
      </v-col>

      <v-col cols="6" md="2">
        <base-input outlined label="域名"></base-input>
      </v-col>
    </v-row>
  </base-searchbar>
</template>
```
