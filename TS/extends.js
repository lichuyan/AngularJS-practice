var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.sayHello = function () {
        /* return 'ddd'*/
        console.log("hello " + this.name + ",welcome join us," + this.age);
    };
    return Person;
}());
var Student = (function (_super) {
    __extends(Student, _super);
    function Student(name, age, job) {
        var _this = _super.call(this, name, age) || this;
        _this.job = job;
        return _this;
    }
    Student.prototype.sayHello = function () {
        _super.prototype.sayHello.call(this);
    };
    return Student;
}(Person));
var student = new Student('licuhayn', 12, 'web开发');
student.sayHello();
console.log(student.age);
console.log(student.name);
