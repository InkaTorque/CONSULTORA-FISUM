angular.module('dokin').controller('DokinagentCtrl',function($scope,User,User_conf){
    $scope.Agent={

    };
    User.getCurrent().$promise.then(function(user){
        User.conf({
            id:user.id
        },function(res){
            var conf=res[0];
            User_conf.find({
                filter:{
                    where:{
                        confId:conf.id
                    },
                    include:"user"
                }
            },function(res){
               $scope.Agent.list=res;
            });
        });
    })
});
