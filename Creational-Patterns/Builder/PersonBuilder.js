var Person = require('./Person');

class PersonBuilder {
    constructor(name){
        this.name = name;
    }
    makeEmployer(){
        this.type = 'Employer';
        return this;//you need to return this to chain calls
    }
    assignMoney(money){
        this.money = money;
        return this;
    }
    assignWorkingHours(hours=40){
        this.hours = hours;
        return this;
    }
    giveList(list=[]){
        this.list = list;
        return this;
    }
    build(){
        return new Person(this);
    }
}
module.exports = PersonBuilder;