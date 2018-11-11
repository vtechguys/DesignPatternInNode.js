
// //version 1
// class Person {
//     constructor(name,type,money,hours,list){
//         this._name = name;
//         this._type = type || 'shopper';
//         this._money = money || 0;
//         this._hours = hours ||0;
//         this._list = list || [];
//     }
// }


//version 2
class Person {
    constructor(builder){
        this._name = builder.name;
        this._type = builder.type || 'shopper';
        this._money = builder.money || 0;
        this._hours = builder.hours ||0;
        this._list = builder.list || [];
    }
}
module.exports = Person;