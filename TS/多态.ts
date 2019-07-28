class Person2 {
    name;  // ts语法要求，必须先定义，再使用
    age;
    protected weight; // 定义weight属性
    constructor(name,age){
        this.name=name;
        this.age=age;
        this.weight=120;
    }
    eat(){

        alert(`${this.name} eat something`)
    }
    speak(){
        alert(`my name is ${this.name},age ${this.age}`)
    }
}

// 子类继承父类
class Student2 extends Person2{
    number;
    private girlfriend ; // 定义private属性，只能在这里用
    constructor(name,age,number){
        super(name,age); // 父类的constructor来做 ，学生才有学号和学习过程
        this.number=number;
        this.girlfriend='xiaoli'
    }
    study(){
        console.log(this.girlfriend);
        alert(`${this.name} study`)
    }
    getWeight(){
        alert(`${this.weight}`)
    }
}

let xiaoming=new Student2('xiaoming',22,'A1');
xiaoming.getWeight();
console.log(xiaoming.girlfriend)   // 编译不成功，不能在外面访问
