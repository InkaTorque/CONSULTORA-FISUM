angular.module('dokin').service('ioServ', function(socket, minimizeChat, $rootScope, $timeout) {

    socket.on("agent:join", function(agent) {
        console.log(agent);
    });
    socket.on("send:message", function(res) {
        $timeout(function() {
            minimizeChat.addMessageToConversation(res);
            $rootScope.$broadcast('scroll-down');
        })
    });
    this.leaveChat = function(client,cb) {
        socket.emit("AGENT:LEAVE", client,function(){
          cb();
        })
    }

});
