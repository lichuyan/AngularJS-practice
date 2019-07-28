const _y = Symbol('y');    // 定义symbol
const _x = Symbol('x');    // 定义symbol

class A {
    constructor (x) {
        // 利用symbol声明私有变量
        this[_x] = x;  //使用symbol的好处就是让形式上更漂亮,this[_x]而非this._x
    }
    showX () {
        return   this[_x];
    }
    [_y](){
        return 'hello y'
    }
}
/*let a = new A(1);
console.log( a[_x]);
console.log(a.showX()) ;
console.log(a[_y]());*/

export {
    A
}

