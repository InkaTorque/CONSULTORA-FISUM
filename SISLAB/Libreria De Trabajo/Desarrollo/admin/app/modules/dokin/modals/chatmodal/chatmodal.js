angular.module('dokin').controller('ChatmodalCtrl', function($scope, User, socket, client, $timeout, minimizeChat) {


    var agent = {};
    $scope.Chat = {
        client: client,
        conversation: [],
        message: "",
        send: function(e) {
            if (e.keyCode == 13) {
                socket.emit("SEND:MESSAGE", {
                    user: agent,
                    text: this.message
                });
                this.message = "";
            }
        },
        scrollDown: function() {
            $timeout(function() {
                var scroller = document.getElementById("dk-scroll");
                scroller.scrollTop = scroller.scrollHeight;
            }, 300)
        }
    }
    User.getCurrent(function(res) {
        agent = res;
        socket.emit("AGENT:JOIN", {
            id: client.id,
            userKey: client.id,
            agent: agent
        }, function() {
            if (!minimizeChat.getConversation(client.id)) {
                socket.emit("GET:MESSAGES", function(err, list) {
                    $timeout(function() {
                        minimizeChat.cacheConversation(list)
                        $scope.Chat.conversation = list.thread;
                    })
                });
            } else {
                $timeout(function() {
                    $scope.Chat.conversation = minimizeChat.getConversation(client.id);
                })
            }
            var scroller = document.getElementById("dk-scroll");
            scroller.scrollTop = scroller.scrollHeight;
        });
    });
    
    $scope.$on('scroll-down', function() {
        $timeout(function() {
            var scroller = document.getElementById("dk-scroll");
            scroller.scrollTop = scroller.scrollHeight;
        })
    })
});
