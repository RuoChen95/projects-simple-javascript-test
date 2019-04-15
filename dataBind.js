function bindData(target, event){
  // console.log(7,target);
  for(let key in target) {
    // console.log(key)
    if(target.hasOwnProperty(key)) {
      // console.log(1)
      {
        let v = target[key];
        Object.defineProperty(target, key, {
          get: function() {
            return v;
          },
          set: function(_value) {
            v = _value;
            event.call(this)
          }
        })
      }
    }
  }
}

let a = {a: 12, b: 23};
function b() {
  console.log('a has been changed')
}
bindData(a, b());
a[b] = 33;
a[b] = 44;
console.log(a.a, a.b)