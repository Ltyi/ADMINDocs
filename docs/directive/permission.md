# permission

目前邏輯為登入後會取得該使用者的權限清單，使用此指令將權限控管套用至各個操作按鈕中。

## 使用方法

目前分為兩種方法可以使用，一般情況下可以直接使用 `v-permission`，但是在 `base-searchbar` 裡面因為有預設按鈕的關係，需要在 `enabled-search` 這個參數上使用 `hasPermission` 函式來套用。

### v-permission

只要在需要權限控管的按紐中直接使用即可，參數為該按鈕的功能英文名稱(需帶入字串)，此功能名稱可以在選單頁面中做增修。

```vue
<template>
  <v-btn v-permission="'mgtMenu_add'" @click="add">
    新增
  </v-btn>
</template>
```

### hasPermission()

像 `base-searchbar` 裡面因為有預設按鈕的組件，可以使用 `enabled-search` 參數帶入 `hasPermission()`，參數一樣是功能英文名稱。

```vue
<template>
  <base-searchbar
    title="選單"
    :enabled-search="hasPermission('mgtMenu_query')"
    @search="dataBind"
  ></base-searchbar>
</template>
```
