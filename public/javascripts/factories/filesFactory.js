app.factory("filesFactory", ["$http", "RESOURCES", function ($http, RESOURCES) {
    return {
        getFiles: function (path) {
            return $http.get(RESOURCES.BASE_API + RESOURCES.FILES + "?path=" + path);
        }
    }
}]);