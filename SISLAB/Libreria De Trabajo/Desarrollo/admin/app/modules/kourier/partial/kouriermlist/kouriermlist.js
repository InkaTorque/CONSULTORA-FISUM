angular.module('kourier').controller('KouriermlistCtrl',function($scope,Kourier){
    $scope.mList={
        create:function(list){
            Kourier.mlistCreate(list);
        }
    }
});
