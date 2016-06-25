angular.module('dokin').controller('DokinagentprofCtrl', function ($scope, $state, User) {
    $scope.Agent = {
        account: {}
    };
    User.findOne({
        filter: {
            where: {
                id: $state.params.id
            }
        }
    }, function (res) {
        $scope.user=$scope.Agent.account = res;
    });
});
