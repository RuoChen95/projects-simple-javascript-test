function Person() {
  this.name = 'Bob';
  this.sayName = function() {
    this.name = 'Jack';
    console.log(this.name);
  }
}

let person1 = new Person();

person1.sayName();

// var person = {
//   name: 'Jack',
//
//   sayName: function() {
//     this.name = 'Lisa';
//     console.log(this.name)
//   }
// }
//
// person.sayName()