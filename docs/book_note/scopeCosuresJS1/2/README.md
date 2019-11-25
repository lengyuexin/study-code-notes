# 词法作用域
>**无语  ???**  
一大章晦涩难懂,结局是,"这些都没用了,已经被抛弃了,我只是给你介绍介绍而已."  


## 词法阶段
>书中絮絮叨叨说了不少,我到底也没看出来词法作用域和变量作用域有啥区别,感觉全是废话.

第一章介绍过,大部分标准语言编译器的第一个工作阶段叫做词法化(也叫单词化).  

这个概念是理解词法作用域及其名称来历的基础.

## 欺骗词法

如果词法作用域完全由写代码期间函数声明的位置来定义,怎样才能在运行时来"修正"词法作用域呢?(也可以说是欺骗).

都不推荐使用,性能也不好.

### 1. eval

直接看个例子:
```js
fonction foo(str, a) {
    eval(str); //欺骗
    console.log(a, b)
}
var b = 2;
foo("var b = 3;", 1); //1,3
```
根据上面的对词法作用域的说明,打印的b应该是2.事实上却是3,是因为`eval`函数执行所生成的`b`覆盖了外层的`b`,这违背了词法作用域的规则,故此叫做 **欺骗词法**.

`eval()`通常用来动态的创建代码.

在严格模式下`eval()`有其自己的词法作用域,意味着其中的声明无法修改所在的作用域.

### 2. with

已经在严格模式下完全的禁止了,我是真的懒得看.跳过了.

### 性能

js引擎会在编译阶段进行数项的性能优化,其中有些优化依赖于能够根据代码块的词法进行静态分析,并预先确认所有变量和函数的定义位置,才能在执行过程中快速找到标识符.

`eval()`和`with`的存在破坏了这种优化,因为你不知道`eval`里面会创建什么东西出来,会不会和你的标识符有冲突.所以最简单的做法就是 **完全不做任何优化**.

### 小结

词法作用域意味着作用域是由书写代码时的函数声明的位置来决定的.  
编译的词法分析阶段基本能够知道全部的标识符在哪里以及是如何声明的,从而能够预测在执行过程中如何对他们进行查找.



