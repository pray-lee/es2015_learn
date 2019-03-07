// this 穿透
const obj = {
  hello: 'world',
  foo () {
    const bar = () => this.hello
    return bar
  }
}
global.hello = 'ES6'
global.bar = obj.foo()
console.log(bar()) //world

// call和apply不能改变箭头函数上下文的指向
const a = {
  init () {
    this.bar = () => this.dam
  },
  dam: 'hei',
  foo () {
    return this.dam
  }
}
const b = {
  dam: 'ha'
}
a.init()
console.log(a.foo()); //hei
console.log(a.foo.bind(b).call(a)); // ha
console.log(a.bar.call(b)) //hei

// 因为箭头函数绑定上下文的特性，故不能随意在顶层作用域使用箭头函数，以防出现下面错误：
const errorObj = {
  msg: 'pong',
  ping: () => this.msg
}
console.log(errorObj.ping()); //这时this指向全局
global.msg = 'haha'
console.log(errorObj.ping()); // haha

// 箭头函数也没有arguments, callee, caller等对象, 如果有arguments的使用需求，可以使用拓展符

// 编写注意事项：
// 不要对单行的函数体做任何换行，以免出现语法错误
// 单行箭头函数只能包含一条语句。如果有多行，使用｛｝包起来
// 如果单行函数直接返回一个对象字面量，使用（）包裹
