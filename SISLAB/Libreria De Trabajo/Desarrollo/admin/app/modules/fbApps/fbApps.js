angular.module('fbApps', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);
angular.module('fbApps').config(function($stateProvider) {
    $stateProvider.state('fbapplist', {
        url: 'fbapps',
        parent: 'app',
        views: {
            '@': {
                templateUrl: 'modules/fbApps/partial/fbapplist//fbapplist.html'
            }
        }
    });
    $stateProvider.state('fbcreator', {
        url: '/creator',
        parent: 'fbapplist',
        views: {
            '@': {
                templateUrl: 'modules/fbApps/partial/fbcreator//fbcreator.html'
            }
        }
    });
    $stateProvider.state('fbapp', {
        url: '/:appname',
        parent: 'fbcreator',
        views: {
            '@': {
                templateUrl: 'modules/fbApps/partial/fbapp//fbapp.html'
            }
        }
    });
    /* Add New States Above */
}).constant("fborigin","https://kodevianapps.com/rel/fbapps/").run(function($rootScope,fborigin){
    $rootScope.fborigin=fborigin;
});

