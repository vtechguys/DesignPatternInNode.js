// // //version 1
// // var Person = require('./Person');

// // var alex = new Person('Alex','employeer',100,50);

// // var sue = new Person('Sue','shopper',1000,0,['jeans','garments']);

// // console.log(sue);
// // console.log(alex);

// //version 2

// var PersonBuilder = require('./PersonBuilder');

// var alex = new PersonBuilder('alex').makeEmployer().assignMoney(100).assignWorkingHours(50).build();
// var sue = new PersonBuilder('sue').assignMoney(1000).giveList(['jeans','garments']).build();

// console.log(alex);
// console.log(sue);
