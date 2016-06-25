angular.module('dokin').factory('proxysocket',function($rootScope) {
	var proxysocket = {};
    proxysocket.prepForBroadcast = function(obj) {
        this.broadcastItem(obj);
    };
    proxysocket.broadcastItem = function(obj) {
        $rootScope.$broadcast('socket',obj);
    };
	return proxysocket;
});
