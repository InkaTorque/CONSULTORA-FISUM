angular.module('admin').controller('UserCtrl',function($scope, User, $location){

    $scope.users = {
        _constructor: function() {
            var self = this;
            User.find(function(res) {
                self.data = res;
            });
        },
        go_orders: function(item) {
            $location.path('/users/'+item.id);
        }
    };

    $scope.users._constructor();

});
