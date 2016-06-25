angular.module('applications').controller('AppdetailCtrl',function($scope,$state,Application){

    Application.findOne({
        where:{
            id:$state.params.id
        }
    },function(res){
        $scope.detail=JSON.stringify(res, undefined, 2);
    })

});
