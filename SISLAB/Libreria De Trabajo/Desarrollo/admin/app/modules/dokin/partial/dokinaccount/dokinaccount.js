angular.module('dokin').controller('DokinaccountCtrl',function($scope,User){
    User.getCurrent(function(user){
      $scope.user=user;
    });

    $scope.Account={
        active:"account",
        change:function(select){
            this.active=select;
        }
    }

    $scope.value = "50";
    $scope.options = {
        from: 1,
        to: 100,
        step: 1,
        dimension: " km",
        scale: [0, '|', 50, '|' , 100]
    };

});
