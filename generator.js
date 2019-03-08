function *generator () {
  let a = 2
  yield a
  console.log(a)
  while ( true ) {
    yield a = a / (2 * a + 1)
  }
}
const ge = generator()
console.log(ge.next());
console.log(ge.next());
console.log(ge.next());
console.log(ge.next());
console.log(ge.next());
console.log(ge.next());