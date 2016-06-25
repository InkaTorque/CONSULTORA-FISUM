angular.module('dokin').controller('DokinpanelCtrl',function($scope,$state,User){
    $scope.status = {
        isopen: false
    };
    $scope.toggleDropdown = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.status.isopen = !$scope.status.isopen;
    };
    $scope.Panel={
      logout:function(){
        User.logout().$promise.then(function(){
          $state.go("dokinsignin");
        })
      }
    }

});
