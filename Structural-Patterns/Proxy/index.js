console.log('Start');
var fs = require('fs');
var path  = require('path');
var FILE_PROXY = require('./file_proxy');

var fs = new FILE_PROXY( require('fs') );


var txtFilePath =  path.join(__dirname,'Readme.txt');
var mdFilePath = path.join(__dirname,'Readme.md');



var result = (error, contents) => {

    if(error){
        console.log('\x07');
        console.log(error);
        process.exit(0);

    }

    console.log('reading File...');
    console.log(contents);


}

fs.readFile(txtFilePath, 'UTF-8', result);
fs.readFile(mdFilePath, 'UTF-8', result);

console.log('End');