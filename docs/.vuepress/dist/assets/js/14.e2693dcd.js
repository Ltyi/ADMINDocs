(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{359:function(t,s,a){"use strict";a.r(s);var e=a(43),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#message"}},[t._v("#")]),t._v(" $Message")]),t._v(" "),a("p",[t._v("同樣的 Vuetify 也沒有提供 Message 消息提示的全局服務，但是有提供這樣子的組件，只是使用上比較麻煩，所以這邊也會封裝一個跟 ElementUI 相同使用方法的服務。")]),t._v(" "),a("p",[t._v("Vuetify 的訊息組件可以參考 "),a("code",[t._v("v-snackbar")]),t._v("，不過目前這個組件並不像 ElementUI 的那麼好用，它屬於單例，畫面上沒辦法像 ElementUI 那樣有佇列依序顯示，而是後者會蓋過前者。")]),t._v(" "),a("h2",{attrs:{id:"使用方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[t._v("#")]),t._v(" 使用方法")]),t._v(" "),a("p",[t._v("方法掛載在 "),a("code",[t._v("Vue.prototype")]),t._v(" 。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// main.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Message "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/components/snackbar/index'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$message "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("service\n")])])]),a("p",[t._v("使用 "),a("code",[t._v("this.$message(options)")]),t._v(" 呼叫")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  methods"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$message")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        color"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'success'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        timeout"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        message"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'成功！'")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"options-參數"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options-參數"}},[t._v("#")]),t._v(" options 參數")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("參數")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("類型")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("預設值")]),t._v(" "),a("th",[t._v("說明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("color")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("success")]),t._v(" "),a("td",[t._v("可以是色碼，也可以是 Vuetify 官方的主題參數，例如 "),a("code",[t._v("success")]),t._v(" "),a("code",[t._v("error")]),t._v(" 或是調色盤 "),a("code",[t._v("indigo")]),t._v(" "),a("code",[t._v("red lighten-4")]),t._v(" 等等")])]),t._v(" "),a("tr",[a("td",[t._v("timeout")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("6000")]),t._v(" "),a("td",[t._v("幾秒後消失")])]),t._v(" "),a("tr",[a("td",[t._v("message")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("undefined")]),t._v(" "),a("td",[t._v("要顯示的訊息")])])])]),t._v(" "),a("h2",{attrs:{id:"備註"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#備註"}},[t._v("#")]),t._v(" 備註")]),t._v(" "),a("p",[t._v("目前僅做純文字的顯示，未來如果有需要增加 "),a("code",[t._v("icon")]),t._v(" 或是遷入 "),a("code",[t._v("HTML")]),t._v(" 的需求則需要另外在做調整。")])])}),[],!1,null,null,null);s.default=n.exports}}]);