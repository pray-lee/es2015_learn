// 模版字符串不能像多引号嵌套单引号一样使用。需要使用反斜杠转意

const str1 = "im a new 'student'."
const str2 = `im a new \`student\`.`
console.log(str2)