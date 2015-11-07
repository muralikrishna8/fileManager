angular.module("fileManager").controller("fileController" , ["$http", function($http) {
    var vm = this;
    vm.list = [];

    $http.get("http://localhost:3000/api/files")
        .then(function(response){
            vm.list = response.data;
        }, function(response){
            console.log(response);
        });
}]);