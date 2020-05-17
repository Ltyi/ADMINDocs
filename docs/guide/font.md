# 字型

引入了 Google fonts 的 Noto sans TC/SC，目前在 `index.html` 使用 link 的方式載入這個字體。

| 字型         |   語系   |
| ------------ | :------: |
| Noto Sans TC | 繁體中文 |
| Noto Sans SC | 簡體中文 |

::: warning 關於字型載入
字型載入的部分如果產品的目標受眾主要為中國地區的話，則可能需要調整 `index.html` 裡面的引入網址。

原因是因為中國地區雖然對 Google Fonts 已經解封，但是似乎部分用戶對於 Google Fonts 的載入速度會過於緩慢，所以需要將引入的網址改為由 `font.im` 這個為中國地區服務的 Web Fonts 網站引入。

  - [Google Fonts](https://fonts.google.com/) 
  - [font.im](https://www.font.im/)
:::

## 切換

因為簡體中文跟繁體中文在部分中文字下會有字體差異，所以會根據目前的 html:lang 設定切換當前字型。

```scss
// src/scss/_custom.scss
html:lang(zh-CN) .v-application {
  font-family: 'Noto Sans SC', 'Microsoft YaHei', sans-serif;
}

html:lang(zh-TW) .v-application {
  font-family: 'Noto Sans TC', 'Microsoft JhengHei', sans-serif;
}
```

::: tip 雅黑/正黑

微軟雅黑體因為一開始就不是為繁體字而設定的字體，所以很多繁體字的高度並沒有做一致性的調整，導致網頁看起來會有一些雜亂感，所以這邊我把繁體語系的預設字體調整為微軟正黑體，如果 Google Fonts 有載入問題時的預設字體顯示。

:::