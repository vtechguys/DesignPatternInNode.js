// var Shopper = require('./shopper');

// var alex = new Shopper('Alex Bank');
// alex.addItemToShopppingList('campling knife');
// alex.addItemToShopppingList('tent');
// alex.addItemToShopppingList('bag pack');
// alex.addItemToShopppingList('map');




// var sue = new Shopper('Sue Roberts');
// sue.addItemToShopppingList('campling knife');
// sue.addItemToShopppingList('tent');
// sue.addItemToShopppingList('bag pack');
// sue.addItemToShopppingList('map');
// sue.addItemToShopppingList('paddings');

// console.log(`${alex.name}: ${alex.shoppigList}`)
// console.log(`${sue.name}: ${sue.shoppigList}`)

//version 2

var scout_protorype = require('./scout_prototype');

var alex = scout_protorype.clone();
alex.name = "Alex Bank";//setter called 
alex.addItemToShoppingList('shots');


var sue = scout_protorype.clone();
sue.name = "Sue Roberts";
sue.addItemToShoppingList('reading lamp');


console.log(`${alex.name}: ${alex.shoppingList}`)
console.log(`${sue.name}: ${sue.shoppingList}`)