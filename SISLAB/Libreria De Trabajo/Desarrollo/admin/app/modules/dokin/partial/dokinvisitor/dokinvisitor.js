angular.module('dokin').controller('DokinvisitorCtrl', function($scope, $modal, socket, $timeout, User, minimizeChat, $stateParams,ioServ) {

    $scope.Visitor = {
        openChat: function(client) {
            console.log(client);
            $modal.open({
                templateUrl: 'modules/dokin/modals/chatmodal/chatmodal.html',
                controller: 'ChatmodalCtrl',
                windowClass: "modal-chat",
                size: "lg",
                resolve: {
                    client: function() {
                        return client;
                    }
                }
            }).result.then(function(result) {
                console.log("se cierra");
                //do something with the result
            }, function(instance) {
                minimizeChat.add(client);
            });
        },
        minimized: minimizeChat.list,
        alertClose: function(client,index) {
          var that=this;
            $modal.open({
                templateUrl: 'modules/dokin/modals/closeminChat/closeminChat.html',
                controller: 'CloseminchatCtrl'
            }).result.then(function(result) {
              if(result){
                ioServ.leaveChat(client,function(){
                  that.minimized.splice(index,1);
                })
              }
            });
        }
    };
    $timeout(function inspect() {
        if (socket.appId) {
            socket.emit("GET:VISITORS", function(list) {
                $scope.safeApply(function() {
                    $scope.Visitor.list = list;
                });
            });
            socket.emit("AGENT:ATTENDING", function(err, list) {
                for (var i in list) {
                    minimizeChat.add(list[i].visitor)
                }
                $scope.$apply();
            });
        } else {
            $timeout(inspect, 2000);
        }
    })
    var openchat = $stateParams.openchat;
    if (openchat) {
        var room = openchat.id;
        $scope.Visitor.openChat(openchat.visitor)
    }
});
