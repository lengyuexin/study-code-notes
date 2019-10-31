module.exports = {
  title: '读书笔记',
  description: '森林看过啥都记录下',
  evergreen: true,
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      {
        text: '《JavaScript设计模式与开发实践》',
        link: '/JavaScriptDesignPatterns/'
      },
      { 
        text: '《你不知道的JS》',
        items: [
          { text: '上册', link: '/scopeCosuresJS1/' },
        ]
      },
      { text: 'github', link: 'https://github.com/dogdogbrother/study-code-notes'},
    ],
    sidebar:{
      '/scopeCosuresJS1/': [
        {
          title: '第1章.作用域是什么',
          path: '/scopeCosuresJS1/1/'
        },
        {
          title: '第2章.词法作用域',
          path: '/scopeCosuresJS1/2/'
        },
        {
          title: '第3章.函数作用域和块作用域',
          path: '/scopeCosuresJS1/3/'
        },
        {
          title: '第4章.提升',
          path: '/scopeCosuresJS1/4/'
        },
        {
          title: '第5章.作用域是闭包',
          path: '/scopeCosuresJS1/5/'
        },
        {
          title: '第6章.关于this的2个误解',
          path: '/scopeCosuresJS1/6/'
        },
        {
          title: '第7章.this全面解析',
          path: '/scopeCosuresJS1/7/'
        },
        {
          title: '第8章.对象',
          path: '/scopeCosuresJS1/8/'
        },

      ],
      "/JavaScriptDesignPatterns/": [
        
      ]
    }
  }
  
}