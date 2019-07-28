class SingleInstance{
    constructor(){
    }
    login(){
        console.log('login')
    }
    static getInstance () {    // 静态方法挂在类上，而不是实例上
        let instance;
        if(!this.instance){
            this.instance=new SingleInstance();
        }
        return this.instance;
    }
}
/*SingleInstance.getInstance=function () {
    let instance;
    if(!this.instance){
        this.instance=new SingleInstance();
    }
    return this.instance;
}*/
var obj1=SingleInstance.getInstance();
obj1.login();
var obj2=SingleInstance.getInstance();
obj2.login();

console.log(obj1===obj2);