var localStorageNode = require('./localStorage');

var localStorage = localStorage || localStorageNode;

console.log("Local Storage",localStorage.length);

var uuid = localStorage.getItem("uuid");

if(!uuid){
    console.log("Creating a new uuid");
    localStorage.setItem("key",1234567890);
}
else{
    console.log("UUID found",uuid);
    console.log("clearing the localStorage");
    localStorage.clear();
}
console.log("Local Storage",localStorage.length);
