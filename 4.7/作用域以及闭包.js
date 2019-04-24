// 下面五段代码分别输出什么？并且什么时候输出什么？


// for(let i = 0; i < 5; i++) {
//   console.log(i);
// }
// for(let i = 0; i < 5; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, 1000 * i);
// }
// for(let i = 0; i < 5; i++) {
//   (function(i) {
//     setTimeout(function() {
//       console.log(i);
//     }, i * 1000);
//   })(i);
// }
for(let i = 0; i < 5; i++) {
  (function() {
    setTimeout(function() {
      console.log(i);
    }, i * 1000);
  })(i);
}
// for(var i = 0; i < 5; i++) {
//   setTimeout((function(i) {
//     console.log(i);
//   })(i), i * 1000);
// }