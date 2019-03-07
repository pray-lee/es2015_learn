// 对象字面量拓展  Literals 字面量    Enhanced: 拓展,增强

const obj = {
  // enhanced object literals
  doSomething () {
    console.log(`do some thing!`)
  },
  doAnotherthing () {
    console.log(`do another thing`)
  }
}

// 支持__proto__注入
import { EventEmitter } from 'events'
const machine = {
  __proto__: new EventEmitter(),
  doSomething () {
    console.log('some thing down!')
  }
}
console.log(machine instanceof EventEmitter) //true
console.log(machine.__proto__ === EventEmitter.prototype)
machine.on('someEvent', msg => console.log(msg)) //emited
machine.emit('someEvent', 'emited')
machine.doSomething() // some thing down!

// 可动态计算的属性名
const prefix = 'es2015'
const prefixObj = {
  [prefix]: 'learn about es2015'
}
console.log(prefixObj)

