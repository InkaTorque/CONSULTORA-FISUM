angular.module('admin').controller('LoginCtrl', function ($scope, User, $location) {

    $scope.login = {
        log_in: function (form) {
            if(form.email.$modelValue == '' || form.email.$modelValue == undefined) {
                $scope.v_email = true;
            } else {
                $scope.v_email = false;
            }
            if(form.password.$modelValue == '' || form.password.$modelValue == undefined) {
                $scope.v_password = true;
            } else {
                $scope.v_password = false;
            }

            if(!$scope.v_email && !$scope.v_password) {
                User.login({email: form.email.$modelValue, password: form.password.$modelValue}, function (data, obj) {
                    $scope.User_data = data.user;
                    $location.path('/products');
                });
            }
        }
    }

});
