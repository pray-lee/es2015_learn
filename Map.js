// Map映射类型
const map = new Map()
// set
map.set('foo', 1)
map.set('foo', 2)
console.log(map) // foo=>2
// get
console.log(map.get('foo')) // 2
map.set('bar', 1)
//delete
map.delete('bar')
console.log(map)
// clear
map.clear()
console.log(map); // {}
// size
console.log(map.size) // 0
// has
console.log(map.has('foo')) // false

// 遍历
const map1 = new Map()
map1.set('a', 1)
map1.set('b', 2)
map1.set('c', 3)
for (const [key, value] of map1) {
  console.log(key, value) // a 1, b 2, c 3
}

map1.forEach((value, key) => {
  console.log(value, key) // 1 a, 2 b, 3 c
})

// map 和 Object的区别

  //object不能以对象作为键名
  // json的序列化结果也不一样。map的json结果以关系数组的形式表达。这种序列化的意义是为了网络传输