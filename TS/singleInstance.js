var SingleInstance = (function () {
    function SingleInstance() {
    }
    SingleInstance.prototype.login = function () {
        console.log('login');
    };
    SingleInstance.getInstance = function () {
        var instance;
        if (!this.instance) {
            this.instance = new SingleInstance();
        }
        return this.instance;
    };
    return SingleInstance;
}());
/*SingleInstance.getInstance=function () {
    let instance;
    if(!this.instance){
        this.instance=new SingleInstance();
    }
    return this.instance;
}*/
var obj1 = SingleInstance.getInstance();
obj1.login();
var obj2 = SingleInstance.getInstance();
obj2.login();
console.log(obj1 === obj2);
