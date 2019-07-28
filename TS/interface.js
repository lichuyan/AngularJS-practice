var Person1 = (function () {
    function Person1(config) {
        this.config = config;
    }
    return Person1;
}());
var p1 = new Person1({
    name: 'LICUYAN',
    age: 12
});
console.log(p1);
