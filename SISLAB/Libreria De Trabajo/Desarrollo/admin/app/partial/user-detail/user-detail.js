angular.module('admin').controller('UserDetailCtrl',function($scope,User, $stateParams){

    $scope.order = {
        user: null,
        _constructor: function() {
            var self = this;
            User.orders({id: $stateParams.id}, function(res) {
                //self.user = res;
                console.log(res,"res")
            });
        }
    };

    $scope.order._constructor();

});
