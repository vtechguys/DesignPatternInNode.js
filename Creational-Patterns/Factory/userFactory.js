
var Employer = require('./Employer');
var Shopper = require('./Shopper');

var userFactory = (userType,name) =>{
    if(userType==='employer'){
        return new Employer(name)
    }
    else if(userType==='shopper'){
        return new Shopper(name);
    }
}

module.exports = userFactory;