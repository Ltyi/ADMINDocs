module.exports = {
  base: process.env.NODE_ENV === 'production' ? '/ADMINDocs/' : '/',
  title: 'ADMIN Docs',
  themeConfig: {
    lastUpdated: '最後更新',
    sidebar: [
      {
        title: '指南',
        collapsable: false,
        sidebarDepth: 2,
        children: [
          '/guide/directory-structure',
          '/guide/i18n',
          '/guide/font',
          '/guide/eslint',
          '/guide/validate',
          '/guide/vuex',
          '/guide/api'
        ]
      },
      {
        title: '指令 (服務)',
        collapsable: false,
        sidebarDepth: 2,
        children: [
          '/directive/loading',
          '/directive/message',
          '/directive/resize',
          '/directive/scroll',
          '/directive/mutate'
        ]
      },
      {
        title: '自訂組件',
        collapsable: false,
        sidebarDepth: 2,
        children: [
          '/components/base-card',
          '/components/base-searchbar',
          '/components/base-pagination',
          '/components/base-table',
          '/components/base-input',
          '/components/base-select',
          '/components/base-textarea',
          '/components/base-datepicker',
          '/components/base-dialog'
        ]
      }
    ]
  },
  locales: {
    '/': {
      lang: 'zh-TW'
    }
  }
}
