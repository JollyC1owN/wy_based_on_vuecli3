// var a = [1, 3, 6, 4, 5]
// // 1、排序：
// // 正序
// a.sort(function (a, b) { return a - b })
// // 倒序
// a.sort(function (a, b) { return b - a })
// // 2、在下标为2的元素后面插入数字10
// a.splice(2, 0, 10)
// // 3、删除下标为3的元素
// a.splice(3, 1)
// console.log(a);

var a = "aaa 11 bb 123 eel dd333"
function findNum (str) {
	return str.match(/\d+/g);
}
console.log(findNum(a))

var b = "<div data-name={name}>{name}-{age}</div>"
// var reg = /([\{])(\bname\b)([^\}])/g
// var reg = /\b{name}\b/
// var reg = /\\{[^}]+\\}/
// b = b.replace(reg, "$1小明$3")
// console.log(b);
var reg = new RegExp('{name}', 'g')
var reg1 = new RegExp('{age}', 'g')
var str1 = b.replace(reg, '小明')
var str2 = str1.replace(reg1, "18岁")
console.log(str2)
