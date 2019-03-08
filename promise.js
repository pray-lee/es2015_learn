// promise 处理异步代码
// basic structure
function asyncMethod () {
  return new Promise((resolve, reject) => {
    // ...
  }) 
}

// promise 里面如果出现throw 语句，Promise对象便会直接进入失败状态，并以throw语句的抛出值作为错误值进行错误处理
(new promise(function () {
  throw new Error('something wrong!')
})).catch(err => {
  console.error(err)
})
// return 语句不会使promise进入失败状态，他会一直处于等待状态

promise.race()
promise.all()