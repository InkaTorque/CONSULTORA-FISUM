angular.module('dokin').factory('socket', function(conf) {
    var Singleton = (function() {
        var instance;
        function createInstance() {
            // var object = io('http://io.balanze.me');
            var object = io(conf.socketUrl);
            return object;
        }
        return {
            getInstance: function() {
                if (!instance) {
                    instance = createInstance();
                }
                return instance;
            }
        };
    })();
    return Singleton.getInstance();
});
