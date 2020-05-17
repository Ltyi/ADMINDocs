# Vuex

專案中的 Vuex 已經做預先的模組化設定，將過去專案中習慣使用的值大致區分為兩類 `user` 及 `settings`。

以下貼的程式碼只是做為後面的範例使用，實際程式碼可能不同，請直接參照專案目錄中的 `store` 資料夾。

## User

這邊我預先把之前專案中用到的 `accessToken` `signalr` `identity` 放在 User.js，若還有其他的參數要歸類到 User 的話再自行加入即可。

```js
/* 用戶相關 */

const state = {
  accessToken: '',
  signalr: null,
  identity: null
}

// [ Mutations Types ]
const types = {
  SET_ACCESS_TOKEN: 'SET_ACCESS_TOKEN',
  SET_SIGNALR: 'SET_SIGNALR',
  SET_IDENTITY: 'SET_IDENTITY'
}

const mutations = {
  [types.SET_ACCESS_TOKEN](state, payload) {
    state.loading = payload
  },

  [types.SET_SIGNALR](state, payload) {
    state.drawer = payload
  },

  [types.SET_IDENTITY](state, payload) {
    state.drawer = payload
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
```

## Settings

這邊則是一些跟網站設定有關係的值，包含語系、深色模式、主題色等等。

```js
/* 網站設定相關 */
import { localeChanged } from 'vee-validate'

const state = {
  loading: {
    visible: false,
    lock: true
  },
  drawer: false,
  locale: 'zh-TW',
  dark: true,
  primaryColor: '#1ABC9C'
}

// [ Mutations Types ]
const types = {
  SET_LOADING: 'SET_LOADING',
  SET_DRAWER: 'SET_DRAWER',
  SET_LOCALE: 'SET_LOCALE',
  SET_DARK: 'SET_DARK',
  SET_PRIMARY_COLOR: 'SET_PRIMARY_COLOR'
}

const mutations = {
  [types.SET_LOADING](state, payload) {
    state.loading = payload
  },

  [types.SET_DRAWER](state, payload) {
    state.drawer = payload
  },

  [types.SET_LOCALE](state, payload) {
    state.locale = payload
  },

  [types.SET_DARK](state, payload) {
    state.dark = payload
  },

  [types.SET_PRIMARY_COLOR](state, payload) {
    state.primaryColor = payload
  }
}

const actions = {
  setLocale({ commit }, payload) {
    payload.vm.$i18n.locale = payload.lang
    localeChanged()
    commit(types.SET_LOCALE, payload.lang)
  },

  setDark({ commit }, payload) {
    payload.vm.$vuetify.theme.dark = payload.value
    commit(types.SET_DARK, payload.value)
  },

  setPrimaryColor({ commit }, payload) {
    payload.vm.$vuetify.theme.themes.dark.primary = payload.color
    payload.vm.$vuetify.theme.themes.light.primary = payload.color
    commit(types.SET_PRIMARY_COLOR, payload.color)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
```

## State 取值

詳細請直接參照[官方文檔](https://vuex.vuejs.org/zh/guide/modules.html)，以下僅做簡單範例。

例如要取得 `User` 裡面的 `accessToken` 。

### 直接取值

```js
export default {
  computed: {
    accessToken() {
      return this.$store.state.user.accessToken
    }
  }
}
```

### 使用 mapState

如果組件中大量訪問 Vuex 中的 State，一個一個寫 `computed` 很麻煩，所以可以利用官方提供的 `mapState()`。

例如要取得 `User` 裡面的 `accessToken` `identity`。

```js
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('user', ['accessToken', 'identity']) // 接著直接用 this.accessToken 就可以訪問了
  }
}
```

例如要取得 `User` 裡面的 `accessToken` `identity` 跟 `settings` 裡面的 `locale`。

```js
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('settings', ['locale']),
    ...mapState('user', ['accessToken', 'identity'])
  }
}
```

## mutations 取得

大家都知道 mutations 用 `this.$store.commit` 去呼叫，以下直接示範模組化的 Vuex 怎麼呼叫

### 直接呼叫

直接把 `commit` 的第一個參數改成模組路徑即可。

```js
export default {
  methods: {
    test() {
      // ... 例如在這邊要 call settings 裡面的 SET_DRAWER  
      this.$store.commit('settings/SET_DRAWER', !this.$store.state.settings.drawer)
    }
  }
}
```

### 使用 mapMutations

如果組件內有大量呼叫不同 Mutations 的需求，同樣可以用 mapMutations。

```js
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations('settings', ['SET_LOCALE']), // 然後用 this.SET_LOCALE() 就可以呼叫了
    ...mapMutations('user', ['SET_IDENTITY'])
  }
}
```

## actions 取得

跟 `mapMutations` 一樣，在 `methods` 使用 `mapActions`

## getters 取得

跟 `mapState` 一樣，在 `computed` 使用 `mapGetters`