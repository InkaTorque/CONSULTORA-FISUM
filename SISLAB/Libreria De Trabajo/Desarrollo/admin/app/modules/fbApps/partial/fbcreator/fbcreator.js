angular.module('fbApps').controller('FbcreatorCtrl', function ($scope, Fbapp, $state) {
    $scope.FbApps = {
        Create: function (fbapp) {
            var reader = new FileReader();
            reader.onload = function (e) {
                fbapp.file = reader.result.split(',')[1];
                Fbapp.upload(fbapp, function (res) {
                    $state.go("fbapp", {
                        appname: res.response.name
                    })
                });
            };
            reader.readAsDataURL(fbapp.file[0]);
        }
    }
});
