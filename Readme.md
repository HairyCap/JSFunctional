# 函数式编程

_函数的第一原则是要小。函数的第二原则是要更小。_

## 什么是函数

- 函数总是接受一个参数。
- 函数总是返回一个参数。
- 函数应该依据接收到的参数而不是外部环境运行。
- 对于一个给定的 X,只会输出唯一的一个 Y。

## 引用透明性

```js
var identity = i => {
  return i;
};
```

- 支持替换模型(Substitution Model)

  可以用函数运行的结果直接替换函数，因为他的逻辑不依赖其他全局变量，这使并发代码和缓存成为可能。

## 命令式、声明式与抽象

- 声明式的方法遍历数组(关注如何做)

```js
var array = [1, 2, 3];
for (i = 0; i < array.length; i++) console.log(array[i]); // 1,2,3
```

- 用声明式的方法遍历数组(关注做什么)

```js
var array = [1, 2, 3];
array.forEach(element => console.log(element)); // 1,2,3
```

函数式主张以抽像的方式创建函数，这些函数能在代码的其他部分重用。

## 纯函数

- 纯函数是对给定的输入返回相同的输出的函数。

```js
let double = value => value * 2;
```

### 纯函数产生可测试的代码

- 纯函数不具有副作用，不依赖全局变量也不改变全局变量

## 并发代码

```js
//非纯函数 两个函数并发运行可能发生错误
let global = "something";
let functionl = input => {
  //do something
  global = "somethingElse";
};
let function2 = () => {
  if (global === "something") {
    //do something
  }
};

//纯函数  可以安全的并发运行
let function1 = (input, global) => {
  //dosomething
  global = "somethingElse";
};
let function2 = global => {
  if (global === "something") {
    // do something
  }
};
```

## 可缓存

- 由于引用透明性，计算过一次的结果可以缓存起来供下次直接调用

## 管道与组合(Functional Composition)

纯函数应该被设计为只做一件事。只做一件事并把他做到完美是 UNIX 的哲学，函数式的编程也将遵循这个原则,下面的 UNIX 命令一次解决一个问题，通过对命令的组合完成需要的操作，在一个文件中找到特定的词统计它出现的次数

```bash
cat jsBook | grep -i "composing"  | wc
```
