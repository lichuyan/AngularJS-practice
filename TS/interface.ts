interface IPerson{
    name:string;
    age:number;
}
class Person1 {
    constructor(public config:IPerson){
    }
}

const  p1=new Person1({
    name:'LICUYAN',
     age:12
});
console.log(p1);