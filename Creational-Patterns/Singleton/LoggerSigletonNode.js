class Logger {
    
    constructor(){
        console.log("New Instance created");
        this.logs = [];
    }
    log(string){
        const timer = new Date().toISOString();

        console.log(timer+"@"+string);

        this.logs.push(timer+"@"+string);

        console.log("Present No. of logger are",this.logs.length);
    }
}
module.exports = new Logger();