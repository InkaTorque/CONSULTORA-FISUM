angular.module('dokin').controller('CloseminchatCtrl', function($scope,$modalInstance) {
    $scope.Closemin = {
        confirm: function() {
          $modalInstance.close(true);
        }
    }
});
