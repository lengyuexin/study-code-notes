(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{159:function(s,t,a){"use strict";a.r(t);var n=a(0),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"最长回文子串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最长回文子串","aria-hidden":"true"}},[s._v("#")]),s._v(" 最长回文子串")]),s._v(" "),a("h2",{attrs:{id:"需求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#需求","aria-hidden":"true"}},[s._v("#")]),s._v(" 需求")]),s._v(" "),a("p",[a("strong",[s._v("给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。")])]),s._v(" "),a("blockquote",[a("p",[s._v("示例 1："),a("br"),s._v('\n输入: "babad"'),a("br"),s._v('\n输出: "bab"'),a("br"),s._v('\n注意: "aba" 也是一个有效答案。')])]),s._v(" "),a("blockquote",[a("p",[s._v("示例 2："),a("br"),s._v('\n输入: "cbbd"'),a("br"),s._v('\n输出: "bb"')])]),s._v(" "),a("h2",{attrs:{id:"第一种解题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一种解题","aria-hidden":"true"}},[s._v("#")]),s._v(" 第一种解题")]),s._v(" "),a("p",[s._v("这个题要是我写的话肯定是暴力解法了,可以说是非常蠢了,所以我直接看了答案,我打算用2种解法")]),s._v(" "),a("p",[a("strong",[s._v("一种是中心扩展算法,一种是马拉车算法")])]),s._v(" "),a("p",[s._v("中心扩展算法的做法是,先遍历整个数组(从1位到倒数第2位,因为第一位和最后一位构不成中心点)")]),s._v(" "),a("p",[s._v("因为是回文,所以中心点的左侧也就是-1和右侧+1是一样的,直到不一样了或是超出数组边界了,代表回文结束")]),s._v(" "),a("p",[s._v("这其中有个不小的问题是,中心点有可能是2个数,例如abccba也是个回文.")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * @param {string} s\n * @return {string}\n */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("longestPalindrome")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("s")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" start "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" end "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("expandAroundCenter")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("right")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这个 while 循环有三个条件,全部成立的情况下才是回文,缺一不可.如果是回文的话左侧-1,右侧加1")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("left "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" right "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("charAt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("charAt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      left"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      right"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//这里为啥 要减1呢,假如 0为到7位是回文,那么是8位数,7-0 = 7 应该加1才对啊.")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//这是因为我对while循环不熟悉的原因,while符合条件了就执行,当发现不符合的时候,left和right已经超界了.")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//也就是-1和+1了,所以本来是加1的操作变成了-1的操作了")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" right "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" left "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//这里我定义一个函数,用于返回中心点扩展的回文长度")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" len1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("expandAroundCenter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这里其实有2个问题,1是为啥要有2个一模一样的函数,2是为啥第一个函数里面i要给2次而下面的给i+1")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 其实这个地方是为了兼容 abbc 这样的情况出现,说实话我觉得这个地可以优化一下,")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" len2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("expandAroundCenter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 如果是 偶数中心那么 len1肯定是非常小的 反之亦然")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" len "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("len1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" len2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//这个地方就是更新最长数据,如果找到的回文不是最长的也没啥意义,如果是最长的就更新 tsart和end的位置")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("len "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" end "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("start "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// -2 的原因我用上面的例子去说, abcddcba 0-7是回文,那么len的长度是8,i的值是3, start就是 3 - (8-2)/2 = 1")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 为啥要减2呢，其实正常来讲-1是对的，-2是为了兼容偶数中心位，那么问题来了，-2的话 奇数中心位置也没问题呢")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这就触及到我的知识盲点了，原来arr[1.5]取到的值是arr[2]。。。。。。。。")]),s._v("\n      start "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("len "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      end "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" len "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("    \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("substring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" end "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("longestPalindrome")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'eabcdcbawowejd'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br")])]),a("h2",{attrs:{id:"第二种解法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第二种解法","aria-hidden":"true"}},[s._v("#")]),s._v(" 第二种解法")]),s._v(" "),a("p",[s._v("累了，马拉车哪天再弄吧")])])}),[],!1,null,null,null);t.default=r.exports}}]);