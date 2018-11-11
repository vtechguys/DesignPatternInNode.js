class LocalStorage{

    constructor(){
        
        this.items = {};
    }

    getItem(key){
        return this.items[key];
    }

    setItem(key,value){
        this.items[key] = value;
    }
    clear(){
        delete this.items;
    }
    get length(){
        return Object.keys(this.items).length;
    }



}

module.exports = new LocalStorage();