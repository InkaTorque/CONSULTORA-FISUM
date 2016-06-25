angular.module('fbApps').controller('DeletefbappCtrl',function($scope,$modalInstance){
    $scope.mdFbapp={
        confirm:function(){
            $modalInstance.close(true);
        }
    }
});