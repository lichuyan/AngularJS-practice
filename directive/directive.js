(function () {
    var app = angular.module('app', []);

    // 父指令是公共的
    app.directive('parent',function () {
        return{
            scope: {},
            template:"<div class=parent>我是父指令模板：<input type='text' ng-model='username'/>{{username}}"
            +"<div class=childspeak><button ng-click='ctrl.sendToC()'></button><ng-transclude></ng-transclude></div>",
            controller: function ($scope) {
                var ctrl = this;
                $scope.username='父';

                // 得到子控制器。肯很多子
                ctrl.childCtrl = [];
                ctrl.register = function(childCtrl) {
                    console.log(childCtrl);
                    ctrl.childCtrl.push(childCtrl);
                    console.log("----------------childCtrl",ctrl.childCtrl);
                }

                ctrl.father=function (name) {
                    console.log("---------name",name)
                }

                ctrl.sendToC=function () {
                    // 放到函数里
                    // 用子控制器去调用子的方法
                    ctrl.childCtrl[0].alert("111");
                }


            },
            controllerAs: 'ctrl',   // 给当前controller起个名称

            // 将子指令的内容放到<ng-transclude></ng-transclude>部位
            transclude: true
        };

    })

    app.directive('child',function(){
        // 返回对象
        return {
            // 使用独立作用域
            scope: {},
            template: '<div >我是子指令模板</div>',
            require: ["child", "^parent"],
            link: function($scope, $elem, $attr, ctrls) {
                var childCtrl = ctrls[0];

                // 得到父控制器
                var parentCtrl = ctrls[1];
                // 用父控制器调用父的函数并将子控制器传过去
                parentCtrl.register(childCtrl);

                  // 用父控制器调用父的函数并传参过去
                var name="li"
                parentCtrl.father(name);
            },
            // 指令之间的交互，是通过指令的controller中暴露出来的方法，给外部指令使用。
            controller:  function ($scope) {
                var ctrl = this;
                ctrl.child=function(name) {
                    console.log('------------子调父指令，并传参',name);
                }

                ctrl.alert=function (ss) {
                    alert(ss);
                }

            }

        }
    })

})();

