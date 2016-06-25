angular.module('applications', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('applications').config(function($stateProvider) {

    $stateProvider.state('listapps', {
        url: 'apps',
        parent: 'app',
        views: {
            '@': {
                templateUrl: 'modules/applications/partial/listapps//listapps.html'
            }
        }
    });
    $stateProvider.state('appcreator', {
        parent: 'listapps',
        url: '/creator',
        views: {
            '@': {
                templateUrl: 'modules/applications/partial/appcreator//appcreator.html'
            }
        }
    });
    $stateProvider.state('appdetail', {
        parent: 'listapps',
        url: '/detail/:id',
        views: {
            '@': {
                templateUrl: 'modules/applications/partial/appdetail//appdetail.html'
            }
        }
    });
    /* Add New States Above */

});

