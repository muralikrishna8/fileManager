app.directive("tooltip", function(){
    return {
        link : function(scope, element, attrs) {
            $(element).hover(function(){
                $(element).tooltip('show');
            }, function() {
                $(element).tooltip('hide');
            });
        }
    }
});