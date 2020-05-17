# 目錄結構

專案的目錄結構跟 NOC 專案結構大致相同，不過組件的命名方式參考了 Vue 官方的風格指南去命名。

[風格指南](https://cn.vuejs.org/v2/style-guide/#%E7%BB%84%E4%BB%B6%E6%96%87%E4%BB%B6%E5%BC%BA%E7%83%88%E6%8E%A8%E8%8D%90)
```
src
├─ assets (靜態圖片資源)
├─ components
│  ├─ base (基礎組件)
|  |  ├─ BaseCard.vue
|  |  ├─ BaseDatePicker.vue
|  |  ├─ BaseDateDialog.vue
|  |  ├─ BaseDateInput.vue
|  |  ├─ BaseDateMenu.vue
|  |  └─ ....
│  ├─ layout (Layout 相關組件)
|  |  ├─ TheBreadcrumb.vue
|  |  ├─ TheHeader.vue
|  |  ├─ TheHeaderAccount.vue
|  |  ├─ TheHeaderLanguage.vue
|  |  ├─ TheHeaderSettings.vue
|  |  └─ ....
│  ├─ loading (其他自訂組件)
│  ├─ searchbar (其他自訂組件)
│  └─ ... (其他自訂組件)
├─ cores
│  ├─ locale.js (i18n 設定)
│  └─ validate.js (vee-validate 設定)
├─ plugins
│  └─ vuetify.js (vuetify 設定)
├─ router
│  └─ index.js (router 設定)
├─ scss
│  ├─ _custom.scss (全局 CSS 樣式)
│  ├─ _vendor.scss (外部 CSS 樣式庫引入)
│  ├─ main.scss (專案 CSS 入口))
│  ├─ mixin.scss (會預導入至各組件的 mixin)
│  └─ variables.scss (會預導入至各組件的 variables，同時也是覆蓋 Vuetify 官方 SASS 變數的地方)
├─ services (API 呼叫管理)
│  ├─ translate.js
│  └─ ...
├─ store (Vuex)
│  ├─ modules (模組)
|  |  ├─ settings.js (網站設定類)
|  |  ├─ user.js (用戶類)
│  └─ index.js
├─ views (視圖組件)
│  ├─ dashboard (首頁儀錶板)
|  |  └─ Dashboard.vue
│  ├─ ... (其他視圖組件)
│  ├─ 404.vue
│  ├─ Home.vue (專案根路由)
│  └─ Login.vue (登入頁面)
├─ App.vue (Vue 組件入口)
└─ main.js (Vue 設定入口)

```

## 命名

目前專案中的組件命名方式皆參考風格指南中的[緊密耦合的組件名](https://cn.vuejs.org/v2/style-guide/#%E7%B4%A7%E5%AF%86%E8%80%A6%E5%90%88%E7%9A%84%E7%BB%84%E4%BB%B6%E5%90%8D%E5%BC%BA%E7%83%88%E6%8E%A8%E8%8D%90)去做命名。

### BaseComponent 基礎組件

[基礎組件名](https://cn.vuejs.org/v2/style-guide/#%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6%E5%90%8D%E5%BC%BA%E7%83%88%E6%8E%A8%E8%8D%90)

根據風格指南中說明，基礎組件是為了專案奠定一致的基礎樣式及行為，且不包含全局狀態 (例如 Vuex)。

這裡有部分進行二次封裝的 Vuetify 組件，例如 `BaseInput`，除了把表單驗證的組件一起封裝進去之外，也因為 Vuetify 提供的樣式參數很多，所以將樣式做一個基礎打底，並額外提供少數參數做選擇，避免專案中出現過多不一致的樣式。

### Layout 單例組件

[單例組件名](https://cn.vuejs.org/v2/style-guide/#%E5%8D%95%E4%BE%8B%E7%BB%84%E4%BB%B6%E5%90%8D%E5%BC%BA%E7%83%88%E6%8E%A8%E8%8D%90)

專案中 Layout 資料夾放的是單例組件，也就是每個頁面只使用一次，所以根據指南使用了 `The` 當作前綴。