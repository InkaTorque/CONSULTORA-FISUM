angular.module('admin').controller('HeaderCtrl',function($scope, User, $location){

    User.getCurrent(function(data){
        $scope.user_data = data;
    });

    $scope.header = {
        drop_toggle: function () {
            $('.hud_content').slideToggle(200);
        },
        logout: function() {
            User.logout(function(res) {
                $location.path('/login');
            });
        }
    }

});
