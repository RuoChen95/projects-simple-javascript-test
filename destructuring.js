// [a,b,c] = [1,2,3];
// console.log(a,b,c);

// 提取JSON数据
let {code: a,message, data: {cart: q}} = {code:'0', message: 'ok', data: {cart: [1,2,3]}}
console.log(a,message,q);

// 交换变量
let n = 1;
let m = 0;
[m,n] = [n,m];
console.log(m,n);

// 指定方法获取
let {random} = Math;
console.log(random())