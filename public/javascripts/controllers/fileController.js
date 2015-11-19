angular.module("fileManager").controller("fileController", ["$http", "filesFactory" , function ($http, filesFactory) {
    var vm = this;
    vm.list = [];
    vm.inputPath = "";
    vm.openPath = function () {
        filesFactory.getFiles(vm.inputPath)
            .then(function (response) {
                vm.list = response.data;
            }, function (response) {
                console.log(response);
            });
        if (!/\/$/.test(vm.inputPath) && vm.inputPath.length > 0) {
            vm.inputPath += "/";
        }
    };
    vm.openPath();
}]);