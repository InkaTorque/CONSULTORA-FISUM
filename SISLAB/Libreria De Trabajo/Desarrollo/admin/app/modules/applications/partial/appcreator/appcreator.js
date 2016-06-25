angular.module('applications').controller('AppcreatorCtrl', function ($scope,Application) {
    $scope.Apps = {
        Create: function (app) {
            Application.create(app,function(){
               console.log("exito");
            });
        }
    }


});
