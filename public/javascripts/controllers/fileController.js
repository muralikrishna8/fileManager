angular.module("fileManager").controller("fileController" , ["$http", function($http) {
    var vm = this;
    vm.list = [];
    vm.path = "";
    vm.openPath = function(){
        $http.get("http://localhost:3000/api/files?path="+vm.path)
            .then(function(response){
                vm.list = response.data;
            }, function(response){
                console.log(response);
            });
    };
    vm.openPath();
}]);