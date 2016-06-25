angular.module('dokin').controller('DokinsignupCtrl',function($scope,$state,User,$log){
    $('form input').tooltip({
        placement: 'top',
        trigger: 'focus',
        title: function (){
            return $(this).attr('placeholder');
        }
    });
    $scope.dkSignup={
        signup:function(user){
            $log.log(user);
            User.create(user,function(res){
                $state.go('dokinsignin');
            })
        }
    }
});
