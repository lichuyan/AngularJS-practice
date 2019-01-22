const a=12,b=5;
const  sum=()=>{
    return a+b;
}
const  show=()=>{
    return 1;
}
class  Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    showName(){
        return `我的名字是${this.name}`
    }
}

export {
    a,b,sum,show
}
const c=12;
export default {
    Person,
    c
}