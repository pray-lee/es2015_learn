// set 跟 array的区别： 无序并且不可重复

const set = new Set()
set.add(1)
set.delete(1)
console.log(set) // {}
set.add(2)
set.clear()
console.log(set) // {}
set.add(3)
console.log(set.has(3)) // true

// set 中如果之前有元素，再次添加的话，不会起到任何作用

// set中提供forEach方法进行遍历, 这个循环也是无法中断的
set.forEach(item => {
  console.log(item)
})

// 数组去重
const arr = [1, 2, 2, 3, 3]
const set1 = new Set(arr)
console.log(set1)
