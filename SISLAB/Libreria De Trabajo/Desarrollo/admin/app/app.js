angular.module("conf", ['dokin']).constant("enviroment",{
    development:{
        apiBase:"http://localhost:3002/api",
        media:"http://localhost:3002/storage",
        socketUrl:"http://localhost:3002"
    },
    production:{
      apiBase:"http://io.balanze.me/api",
      media:"http://io.balanze.me/storage",
      socketUrl:"http://io.balanze.me"
    }
}).provider("conf",function(enviroment){
    this.$get = function(){
        return enviroment[window.enviroment||"production"]
        // return enviroment["production"]
    }
});

angular.module('admin', ['conf','ui.bootstrap', 'ui.utils', 'ui.router', 'lbServices', 'angularFileUpload','dokin']);
angular.module('admin').config(function ($stateProvider, $urlRouterProvider, $locationProvider, LoopBackResourceProvider, $httpProvider,confProvider) {
    var conf=confProvider.$get();
    LoopBackResourceProvider.setUrlBase(conf.apiBase);
    $locationProvider.html5Mode({
        enabled: true
        //requireBase: false
    });
    LoopBackResourceProvider.setAuthHeader('X-Access-Token');
    $httpProvider.interceptors.push(function($q, $location) {
        return {
            responseError: function(rejection) {
                if (rejection.status == 401) {
                    $location.nextAfterLogin = $location.path();
                    $location.path('/signin');
                }
                return $q.reject(rejection);
            }
        };
    });
    $stateProvider.state('login', {
        url: '/login',
        views: {
            'login': {
                templateUrl: 'partial/login//login.html'
            }
        }
    });
    $stateProvider.state('app', {
        url: '/',
        abstract: true,
        resolve: {

        },
        views: {
            'header': {
                templateUrl: 'partial/header//header.html'
            },
            'panel': {
                templateUrl: 'partial/panel//panel.html'
            }
        }
    });
    $stateProvider.state('app.profile', {
        url: 'profile',
        parent: 'app',
        views: {
            '@': {
                templateUrl: 'partial/profile//profile.html'
            }
        }
    });
    $stateProvider.state('app.users', {
        url: 'users',
        parent: 'app',
        views: {
            '@': {
                templateUrl: 'partial/user//user.html'
            }
        }
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/dk/home');

});

angular.module('admin').run(function ($rootScope,media) {
    $rootScope.actualModule='root';
    $rootScope.safeApply = function (fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };
    $rootScope.media=media;

}).constant('media','http://kodevianapps.com/storage');
angular.module('admin').controller('initializerCtrl', function ($scope) {

});
angular.module('admin').directive('center', function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            function center() {
                element.css({
                    "position": "fixed",
                    "z-index": "111",
                    "top": $(window).height() / 2 - element.height() / 2,
                    "left": $(window).width() / 2 - element.width() / 2
                });
            }

            center();
            scope.$watch(function () {
                return element.height();
            }, function () {
                scope.$evalAsync(function () {
                    center();
                });
            });
            $(window).resize(function () {
                center();
            });
            scope.$on("art_center", function (e) {
                center();
            })
        }
    }
});
