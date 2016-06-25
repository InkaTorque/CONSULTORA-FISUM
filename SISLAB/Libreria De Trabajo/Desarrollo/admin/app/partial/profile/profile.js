angular.module('admin').controller('ProfileCtrl',function($scope, User){

    User.getCurrent(function(data){
        $scope.user = data;
    });

    $scope.profile = {
        edit: function(user) {
            User.update({where: {id: $scope.user.id}},user, function(res) {
                $scope.user = res;
            });
        },
        password: function(pass) {
            User.updatepass({userId: $scope.user.id, password: pass.new_pass}, function(res) {
                console.log(res,"res");
            });
        }
    }

});
