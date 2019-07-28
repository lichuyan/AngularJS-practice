class Person{
    name:string;
    private age:number;
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    sayHello(){
       /* return 'ddd'*/
        console.log(`hello ${this.name},welcome join us,${ this.age}`)
    }
}

class Student extends Person{
    job:string;
    constructor(name,age,job){
        super(name,age);
        this.job=job;
    }
    sayHello(){
        super.sayHello();
    }
}
const student=new Student('licuhayn',12,'web开发');
student.sayHello();
console.log(student.age);
console.log(student.name);
