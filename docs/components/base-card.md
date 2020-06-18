# BaseCard

卡片基底樣式，使用 Vuetify 的 `v-card` 組件建立的基底組件。

## Props 組件參數

| 參數         |  類型   |  預設值   | 說明                                                                                    |
| ------------ | :-----: | :-------: | --------------------------------------------------------------------------------------- |
| title        | String  | undefined | 卡片標題                                                                                |
| sub-title    | String  | undefined | 卡片副標題                                                                              |
| text-color   | String  | undefined | 變更卡片標題及 `prepend-icon` 的顏色，請帶入 Vuetify 的文字色彩 class，例如 `red--text`，或是自訂 Class |
| background-color   | String  | undefined | 變更卡片標題底色，請帶入 Vuetify 的背景色彩 class，例如 `teal darken-2`，或是自訂 Class |
| collapse     | Boolean |   false   | 是否啟用卡片的 collapse                                                                 |
| prepend-icon | String  | undefined | 標題前置 icon，請帶入 `fa` 或 `mdi` 前綴的 icon                                         |
| body-class   | String  | undefined | `card-text` 階層的 class，如果你想改內距可以用 `pa-2` 之類的                            |

## Slot 插槽

|    插槽名稱    | 參數 |                                說明                                |
| :------------: | :--: | :----------------------------------------------------------------: |
|    defalut     |  無  |          預設內置不具名插槽，會置入在 `v-card-text` 階層           |
| `title-append` |  無  | 位於標題尾端的插槽，如果有需要在標題尾端置入按鈕支類的需求可以使用 |

## 使用方法

### 基本用例

```vue
<template>
  <base-card title="這是一張卡片" sub-title="這是卡片副標題"></base-card>
</template>
```

### 標題前 icon

要在標題前置入 icon 帶入 `prepend-icon` 參數即可，可以用 `fa` 或 `mdi` 前綴的 icon

```vue
<template>
  <base-card
    title="這是一張卡片"
    sub-title="這是卡片副標題"
    prepend-icon="fa-filter"
  ></base-card>
</template>
```

### 收合按鈕

帶入 `collapse` 參數可以啟用收合按鈕

```vue
<template>
  <base-card
    title="這是一張卡片"
    sub-title="這是卡片副標題"
    prepend-icon="fa-filter"
    collapse
  ></base-card>
</template>
```

### 更改標題及 icon 的顏色

帶入 `text-color` 參數即可，請帶入 Vuetify 的文字色彩 class，例如 `red--text`

```vue
<template>
  <base-card
    title="這是一張卡片"
    sub-title="這是卡片副標題"
    prepend-icon="fa-filter"
    collapse
    text-color="red--text"
  ></base-card>
</template>
```

### body-class

用到的機會可能不多，不過若想要更改 `v-card-text` 階層的內距時就可以用

```vue
<template>
  <base-card
    title="這是一張卡片"
    sub-title="這是卡片副標題"
    prepend-icon="fa-filter"
    collapse
    body-class="pa-0"
  ></base-card>
</template>
```

### title-append

標題尾端的插槽，若有需要在標題尾端置入按鈕之類的需求就可以使用

```vue
<template>
  <base-card
    title="這是一張卡片"
    sub-title="這是卡片副標題"
    prepend-icon="fa-filter"
    collapse
  >
    <template #title-append>
      <v-btn color="primary">測試</v-btn>
    </template>
  </base-card>
</template>
```