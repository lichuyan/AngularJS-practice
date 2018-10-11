(function() {
    "use strict";

    var app = angular.module("myApp", ["ngTable", "ui.bootstrap"]);

    app.controller("testController", demoController);

    var data = [{
        'id': "1",
        'question': "问题1",
        'module': "IQ",
        'category': "Single-choice",
        'level': "Easy",
        'score': "15"
    }, {
        'id': "2",
        'question': "问题2",
        'module': "Logical",
        'category': "Mutiple-choice",
        'level': "Difficult",
        'score': "20"
    }, {
        'id': "3",
        'question': "问题3",
        'module': "English",
        'category': "Short-Answer",
        'level': "Easy",
        'score': "10"
    }, {
        'id': "4",
        'question': "问题4",
        'module': "JAVA",
        'category': "Programming",
        'level': "Difficult",
        'score': "25"
    }, {
        'id': "5",
        'question': "问题5",
        'module': ".NET",
        'category': "Programming",
        'level': "Easy",
        'score': "20"
    }];

    var Level = [{
        'id': "Easy",
        'title': "Easy"
    }, {
        'id': "Difficult",
        'title': "Difficult"
    }];

    var Category = [{
        'id': "Single-choice",
        'title': "Single-choice"
    }, {
        'id': "Mutiple-choice",
        'title': "Mutiple-choice"
    }, {
        'id': "Short-Answer",
        'title': "Short-Answer"
    }, {
        'id': "Programming",
        'title': "Programming"
    }];

    var Module = [{
        'id': "IQ",
        'title': "IQ"
    }, {
        'id': "Logical",
        'title': "Logical"
    }, {
        'id': "English",
        'title': "English"
    }, {
        'id': "JAVA",
        'title': "JAVA"
    }, {
        'id': " .NET",
        'title': " .NET"
    },

    ];

    function demoController(NgTableParams, $scope) {
        var self = this;

        //init data
        self.data = data;
        self.Level = Level;
        self.Category = Category;
        self.Module = Module;
        self.checkboxes = {
            checked: false,
            items: {}
        };

        self.tableParams = new NgTableParams({
            'count': 15
        }, {
            counts: [],
            filterDelay: 0,
            dataset: data
        });

        // watch for check all checkbox
        $scope.$watch(function() {
            return self.checkboxes.checked;
        }, function(value) {
            angular.forEach(data, function(item) {
                self.checkboxes.items[item.id] = value;
            });
        });

    }
})();