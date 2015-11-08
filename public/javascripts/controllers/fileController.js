angular.module("fileManager").controller("fileController" , ["$http", function($http) {
    var vm = this;
    vm.list = [];
    vm.inputPath = "";
    vm.openPath = function(){
        $http.get("http://localhost:3000/api/files?path="+vm.inputPath)
            .then(function(response){
                vm.list = response.data;
            }, function(response){
                console.log(response);
            });
        if (! /\/$/.test(vm.inputPath) && vm.inputPath.length > 0) {
            vm.inputPath += "/";
        }
    };
    vm.openPath();
}]);