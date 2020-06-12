# BaseDialog

使用 Vuetify 的 `v-dialog` 封裝的組件。

## Props 組件參數

| 參數           |     類型      |  預設值   | 說明                                                                          |
| -------------- | :-----------: | :-------: | ----------------------------------------------------------------------------- |
| loading        |    Boolean    |   false   | 視窗讀取效果                                                                  |
| fullscreen     |    Boolean    |   false   | 可以搭配斷點在行動裝置顯示全螢幕版的 dialog，主要因應行動版寬度可能不夠的情況 |
| hideOverlay    |    Boolean    |   false   | 是否顯示遮罩                                                                  |
| persistent     |    Boolean    |   false   | 禁止使用者點擊外部區域關閉彈窗                                                |
| title          |    String     | undefined | 彈窗標題                                                                      |
| maxWidth       | String,Number |    600    | 彈窗最大寬度，預設 600                                                        |
| disabled-close |    Boolean    |   false   | 隱藏右上角關閉按鈕                                                            |

## Slot 插槽

| 插槽名稱 | 參數 |                    說明                    |
| :------: | :--: | :----------------------------------------: |
|  `body`  |  無  | 彈窗內置卡片元素，必須使用此插槽來放置元素 |
| `footer` |  無  |              彈窗內置底部插槽              |

## 使用方法

通常會使用開一個獨立的 `.vue` 檔案放 `base-dialog`，然後用 `value/input` 去跟父層做 `v-model` 雙向同步開啟的狀態，這樣做的時候請務必記得 `props` 必須有 `value` 參數。

而從內部關閉這個視窗的方法可以在按鈕上掛載 `method` 然後發送 `$emit('input', false)` 事件出去即可關閉，視窗右上角也有預設關閉按鈕。

```vue
<template>
  <base-dialog
    title="帳號管理 編輯"
    persistent
    :fullscreen="$vuetify.breakpoint.xsOnly"
    :value="value"
    @input="close"
  >
    <template #body>
      <v-btn @click="close">關閉</v-btn>
    </template>
  </base-dialog>
</template>

<script>
export default {
  name: 'Test',

  props: {
    value: Boolean
  },

  methods: {
    close() {
      this.$emit('input', false)
    }
  }
}
</script>
```
