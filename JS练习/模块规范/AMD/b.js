define(function () {
    // 假设这个模块没有依赖其他模块
    var add=function (x,y) {
        return x+y;
    };
    return{ // 将新定义的模块暴露出去
        add:add
    };
});