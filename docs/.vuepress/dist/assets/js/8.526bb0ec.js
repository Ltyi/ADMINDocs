(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{355:function(t,a,s){"use strict";s.r(a);var n=s(43),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"basedialog"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basedialog"}},[t._v("#")]),t._v(" BaseDialog")]),t._v(" "),s("p",[t._v("使用 Vuetify 的 "),s("code",[t._v("v-dialog")]),t._v(" 封裝的組件。")]),t._v(" "),s("h2",{attrs:{id:"props-組件參數"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#props-組件參數"}},[t._v("#")]),t._v(" Props 組件參數")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("參數")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("類型")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("預設值")]),t._v(" "),s("th",[t._v("說明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("loading")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Boolean")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),s("td",[t._v("視窗讀取效果")])]),t._v(" "),s("tr",[s("td",[t._v("fullscreen")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Boolean")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),s("td",[t._v("可以搭配斷點在行動裝置顯示全螢幕版的 dialog，主要因應行動版寬度可能不夠的情況")])]),t._v(" "),s("tr",[s("td",[t._v("hideOverlay")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Boolean")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),s("td",[t._v("是否顯示遮罩")])]),t._v(" "),s("tr",[s("td",[t._v("persistent")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Boolean")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),s("td",[t._v("禁止使用者點擊外部區域關閉彈窗")])]),t._v(" "),s("tr",[s("td",[t._v("title")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("undefined")]),t._v(" "),s("td",[t._v("彈窗標題")])]),t._v(" "),s("tr",[s("td",[t._v("maxWidth")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("String,Number")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("600")]),t._v(" "),s("td",[t._v("彈窗最大寬度，預設 600")])])])]),t._v(" "),s("h2",{attrs:{id:"slot-插槽"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#slot-插槽"}},[t._v("#")]),t._v(" Slot 插槽")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("插槽名稱")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("參數")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("說明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("body")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("無")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("彈窗內置卡片元素，必須使用此插槽來放置元素")])])])]),t._v(" "),s("h2",{attrs:{id:"使用方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[t._v("#")]),t._v(" 使用方法")]),t._v(" "),s("p",[t._v("通常會使用開一個獨立的 "),s("code",[t._v(".vue")]),t._v(" 檔案放 "),s("code",[t._v("base-dialog")]),t._v("，然後用 "),s("code",[t._v("value/input")]),t._v(" 去跟父層做 "),s("code",[t._v("v-model")]),t._v(" 雙向同步開啟的狀態，這樣做的時候請務必記得 "),s("code",[t._v("props")]),t._v(" 必須有 "),s("code",[t._v("value")]),t._v(" 參數。")]),t._v(" "),s("p",[t._v("而從內部關閉這個視窗的方法可以在按鈕上掛載 "),s("code",[t._v("method")]),t._v(" 然後發送 "),s("code",[t._v("$emit('input', false)")]),t._v(" 事件出去即可關閉，目前 "),s("code",[t._v("base-dialog")]),t._v(" 只有在 "),s("code",[t._v("fullscreen")]),t._v(" 模式下有預設關閉按鈕。")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("base-dialog")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("帳號管理 編輯"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("persistent")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":fullscreen")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$vuetify.breakpoint.xsOnly"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@input")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$emit('input', $event)"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("#body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("v-btn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("close"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("關閉"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("v-btn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("base-dialog")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Test'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  props"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Boolean\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  methods"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("close")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$emit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'input'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);