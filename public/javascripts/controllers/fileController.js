angular.module("fileManager").controller("fileController", ["$http", "RESOURCES", function ($http, RESOURCES) {
    var vm = this;
    vm.list = [];
    vm.inputPath = "";
    vm.openPath = function () {
        $http.get(RESOURCES.BASE_API+RESOURCES.FILES+"?path=" + vm.inputPath)
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