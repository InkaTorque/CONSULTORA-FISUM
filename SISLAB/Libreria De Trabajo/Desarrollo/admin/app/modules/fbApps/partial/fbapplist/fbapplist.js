angular.module('fbApps').controller('FbapplistCtrl', function ($scope, Fbapp, $state) {
    $scope.Fbapplist = {
        list: Fbapp.find(),
        Goapp: function (app) {
            $state.go("fbapp", {
                appname: app.name
            })
        }
    }

});
