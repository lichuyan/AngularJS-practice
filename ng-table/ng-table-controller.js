(function() {
    "use strict";

    var app = angular.module("myApp", ["ngTable"]);

    app.controller("demoController", demoController);

    var data = [
        {name: "Moroni", age: 16, money: 88.1},
        {name: "Enos", age: 99, money: 22.3},
        {name: "Tracy", age: 2, money: 22.4},
        {name: "Oracle", age: 31, money: 33.3},
        {name: "Java", age: 13, money: 53.3},
        {name: "Php", age: 46, money: 67.3}
    ];

    //demoController.$inject = ["NgTableParams"];

    function demoController(NgTableParams,$http,$scope) {
        var self = this;
        self.tableParams = new NgTableParams({}, {
            filterDelay: 0,
            dataset: data
        });
        self.cancel = cancel;
        self.del = del;
        self.save = save;
        function cancel(row, rowForm) {
            var originalRow = resetRow(row, rowForm);
            angular.extend(row, originalRow);
        }

        function del(row) {
            _.remove(self.tableParams.settings().dataset, function(item) {
                return row === item;
            });
            self.tableParams.reload().then(function(data) {
                if (data.length === 0 && self.tableParams.total() > 0) {
                    self.tableParams.page(self.tableParams.page() - 1);
                    self.tableParams.reload();
                }
            });
        }

        function resetRow(row, rowForm){
            row.isEditing = false;
            rowForm.$setPristine();
            self.tableTracker.untrack(row);
            return _.findWhere(originalData, function(r){
                return r.id === row.id;
            });
        }

        function save(row, rowForm) {
            var originalRow = resetRow(row, rowForm);
            angular.extend(originalRow, row);
        }
    }
})();