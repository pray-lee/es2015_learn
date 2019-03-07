// swap 变量值转换
// old
function swap(a, b) {
  var tmp = a
  a = b
  b = tmp
}
// new 
let foo = 1
let bar = 2
;[foo, bar] = [bar, foo]
console.log(foo, bar) // 2 1

// 高级用法

  // 解构别名
  function fetchData () {
    return {
      response: ['foo', 'bar']
    }
  }
  const {response: data} = fetchData()
  console.log(data) // ['foo', 'bar']

  // 无法匹配的缺省值
  // Object
  const { foo1, bar1 } = { foo1: 1 }
  console.log(bar1) // undefined
  // Array
  const [foo2, bar2] = [1]
  console.log(bar2) // undefined
  // 可以设置默认值
  const {foo3 = 2} = {bar3: 1}
  console.log(foo3) // 2
  const [a, b = 2] = [1]
  console.log(a, b) // 1, 2

  
  