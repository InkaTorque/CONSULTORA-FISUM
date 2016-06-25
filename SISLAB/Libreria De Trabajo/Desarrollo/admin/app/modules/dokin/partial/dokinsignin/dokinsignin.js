angular.module('dokin').controller('DokinsigninCtrl', function($scope, User, $state, $timeout) {
    $scope.SignIn = {
        signIn: function(user, form) {
            if (form.$valid)
                User.login(user).$promise.then(function(data) {
                    $scope.User_data = data.user;
                    $state.go('dokin.home');
                }).catch(function(res) {
                    if (res.status == 401) {
                        $scope.error = {
                            message: "Su credenciales son incorrectas intente de nuevo por favor."
                        }
                        $timeout(function() {
                            $scope.error = {};
                        }, 5500)
                    }
                });
        }
    }
});
