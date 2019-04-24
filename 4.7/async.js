setTimeout(function() {
  console.log(345)
}, 0);


var promise1 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve('foo');
  }, 0);
});

promise1.then(function(value) {
  console.log(value);
  // expected output: "foo"
});

console.log(123);