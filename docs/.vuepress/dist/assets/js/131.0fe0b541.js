(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{166:function(s,a,t){"use strict";t.r(a);var e=t(0),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"使用loader打包静态资源-css篇"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用loader打包静态资源-css篇","aria-hidden":"true"}},[s._v("#")]),s._v(" 使用Loader打包静态资源(css篇)")]),s._v(" "),t("h2",{attrs:{id:"打包过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#打包过程","aria-hidden":"true"}},[s._v("#")]),s._v(" 打包过程")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("在5-笔记中,我们import了图片资源,但是能import css资源吗?\n"),t("code",[s._v("import './index.css '")]),s._v("\n尝试打包,失败.很明显,打包img的思路并不适用于css文件.")])]),s._v(" "),t("li",[t("p",[s._v("我们在rules数组中新添加个规则进行配置.")])])]),s._v(" "),t("div",{staticClass:"language-JavaScript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/\\.css$/")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    use"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'style-loader'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'css-loader'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("install安装后再次打包,我们发现样式已经生效了.")]),s._v(" "),t("h2",{attrs:{id:"style-loader和css-loader的作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#style-loader和css-loader的作用","aria-hidden":"true"}},[s._v("#")]),s._v(" style-loader和css-loader的作用")]),s._v(" "),t("ol",[t("li",[t("code",[s._v("css-loader")]),s._v("可以帮我们处理解析css文件中import css的行为,可以让几个css文件可以相互关联.")]),s._v(" "),t("li",[s._v("打开F12查看便签信息,发现被影响的元素身上挂载了style属性,这就是"),t("code",[s._v("style-loader的")]),s._v("的作用.通常这两个工具是搭配使用的.")])]),s._v(" "),t("h2",{attrs:{id:"如果我们使用sass-less等预处理工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如果我们使用sass-less等预处理工具","aria-hidden":"true"}},[s._v("#")]),s._v(" 如果我们使用sass,less等预处理工具")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("很明显我们需要更改配置."),t("code",[s._v("test:/\\.sass$/")]),s._v(".\n测试打包,成功.打开页面发现没有效果.F12查看便签信息,发现style的值就是sass编写时的值,没有变成可用的css样式.")])]),s._v(" "),t("li",[t("p",[s._v("明显我们缺少一个编译css的loader,在use中添加sass-loader\n"),t("code",[s._v("use:['style-loader','css-loader',sass-loader]")]),s._v("\nintall,测试打包,成功,查看页面也没有问题.")])]),s._v(" "),t("li",[t("p",[s._v("loader运行过程是有顺序的,是先执行sass-loader,后执行css-loader,最后执行style-loader;")])])]),s._v(" "),t("h2",{attrs:{id:"自动添加浏览器前缀的loader-postcss"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自动添加浏览器前缀的loader-postcss","aria-hidden":"true"}},[s._v("#")]),s._v(" 自动添加浏览器前缀的loader-----postcss")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("相比较上面的loader而言,postcss-loader的安装是稍稍麻烦一点的.他需要在根目录下新建postcss.config.js文件,可以在webpack官网上查看配置教程.")])]),s._v(" "),t("li",[t("p",[s._v("在use数组中添加postcss-loader,打包.")])]),s._v(" "),t("li",[t("p",[s._v("查看页面,css3属性的前面会自动加上"),t("code",[s._v("-webkit-")])])])]),s._v(" "),t("h2",{attrs:{id:"知识点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#知识点","aria-hidden":"true"}},[s._v("#")]),s._v(" 知识点")]),s._v(" "),t("ol",[t("li",[s._v("loader工具执行的顺序是从右到左,从下到上执行的.")])])])}),[],!1,null,null,null);a.default=r.exports}}]);