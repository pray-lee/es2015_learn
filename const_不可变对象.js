// const 用来设置常量，设置之后的值是不可以改变的。但是因为object的特殊性，如果我们设置const obj = {}的时候，改变对象里面的属性，也是可以的。因为对象的引用地址是没有发生变化的。如果想要一个不可变对象，我们可以这样做：

// object.freeze只能冻结第一层，如果第一层的属性里有对象，那么也是可以改变的。
const obj1 = Object.freeze({
  a: 1,
  b: 2,
  c: {}
})

// 深冻结
Object.deepFreeze = obj => {
  var props = Object.getOwnPropertyNames(obj)
  props.forEach(name => {
    var prop = obj[name]
    if(typeof prop === 'object' && prop !== null){
      Object.deepFreeze(prop)
    }
  })
  return Object.freeze(obj)
  console.log(1)
}
const obj2 = Object.freeze({
  a: {
    aa: 1
  }
})
const obj3 = Object.deepFreeze(obj2)
obj3.a.aa = 2
console.log(obj3) // it worked

// for of and entries
const arr = [1, 3, 5]
function entry (obj) {
  for(const [a, b] of obj.entries()){
    console.log(a, b)
  }
}
console.log(entry(arr))