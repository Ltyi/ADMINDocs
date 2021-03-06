# $message

同樣的 Vuetify 也沒有提供 Message 消息提示的全局服務，但是有提供這樣子的組件，只是使用上比較麻煩，所以這邊也會封裝一個跟 ElementUI 相同使用方法的服務。

Vuetify 的訊息組件可以參考 `v-snackbar`，不過目前這個組件並不像 ElementUI 的那麼好用，它屬於單例，畫面上沒辦法像 ElementUI 那樣有佇列依序顯示，而是後者會蓋過前者。

## 使用方法

方法會掛載在 `Vue.prototype`，`main.js` 引入後使用 `Vue.use()` 即可。

```js
// main.js

import snackbar from '@/components/snackbar/'
Vue.use(snackbar)
```

使用 `this.$message(options)` 呼叫

```js
export default {
  methods: {
    test() {
      this.$message({
        color: 'success',
        timeout: 3000,
        message: '成功！'
      })
    }
  }
}
```

### options 參數

| 參數    |  類型  |  預設值   | 說明                                                                                                         |
| ------- | :----: | :-------: | ------------------------------------------------------------------------------------------------------------ |
| color   | string |  success  | 可以是色碼，也可以是 Vuetify 官方的主題參數，例如 `success` `error` 或是調色盤 `indigo` `red lighten-4` 等等 |
| timeout | number |   3000    | 幾秒後消失                                                                                                   |
| message | string | undefined | 要顯示的訊息                                                                                                 |


## 備註

目前僅做純文字的顯示，未來如果有需要增加 `icon` 或是遷入 `HTML` 的需求則需要另外在做調整。

## 外部 JS 檔案使用

如果在其他非 Vue 實例中的 js 檔案想使用這個指令的話，可以參照以下方法

```js
import snackbar from '@/components/snackbar/'

// 在需要的地方呼叫 snackbar.message(options) 帶入選項即可
```