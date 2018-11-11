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
class SingleToningLogger{
    constructor(){
        console.log("construtor call");
        if(!Logger.instance){
            console.log("No instance already exist");
            Logger.instance = new Logger();
        }
        else{
            console.log("Old instance will be used");
        }
    }
    getInstance(){
        return Logger.instance;
    }
}
module.exports = SingleToningLogger;