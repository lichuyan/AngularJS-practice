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
var Person2 = (function () {
    function Person2(name, age) {
        this.name = name;
        this.age = age;
        this.weight = 120;
    }
    Person2.prototype.eat = function () {
        alert(this.name + " eat something");
    };
    Person2.prototype.speak = function () {
        alert("my name is " + this.name + ",age " + this.age);
    };
    return Person2;
}());
// 子类继承父类
var Student2 = (function (_super) {
    __extends(Student2, _super);
    function Student2(name, age, number) {
        var _this = _super.call(this, name, age) || this;
        _this.number = number;
        _this.girlfriend = 'xiaoli';
        return _this;
    }
    Student2.prototype.study = function () {
        console.log(this.girlfriend);
        alert(this.name + " study");
    };
    Student2.prototype.getWeight = function () {
        alert("" + this.weight);
    };
    return Student2;
}(Person2));
var xiaoming = new Student2('xiaoming', 22, 'A1');
xiaoming.getWeight();
console.log(xiaoming.girlfriend); // 编译不成功，不能在外面访问
