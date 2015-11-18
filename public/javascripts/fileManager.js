var app = angular.module("fileManager", []);

app.constant("RESOURCES", (function () {
    var apiUrl = "http://localhost:3000/api";
    return {
        BASE_API : apiUrl,
        FILES : "/files"
    }
})());