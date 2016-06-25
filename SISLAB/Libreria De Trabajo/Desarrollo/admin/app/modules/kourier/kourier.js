angular.module('kourier', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('kourier').config(function($stateProvider) {

    $stateProvider.state('kourier', {
        parent: "app",
        url: 'ko',
        abstract: true,
        views: {
            "header@": {
                templateUrl: 'modules/dokin/partial/dokinheader//dokinheader.html'
            },
            "panel@": {
                templateUrl: 'modules/kourier/partial/kourierpanel//kourierpanel.html'
            }
        },
        onEnter: function (parent) {
            parent.init();
        }
    });
    $stateProvider.state('kourier.home', {
        url: '',
        parent:'kourier',
        views: {
            "@": {
                templateUrl: 'modules/kourier/partial/kourierhome//kourierhome.html'
            }
        }
    });
    $stateProvider.state('kourier.mlist', {
        url: '/mlist',
        views: {
            "@": {
                templateUrl: 'modules/kourier/partial/kouriermlist//kouriermlist.html'
            }
        }
    });
    $stateProvider.state('kourier.report', {
        url: '/reports',
        views: {
            "@": {
                templateUrl: 'modules/kourier/partial/kourierreport//kourierreport.html'
            }
        }
    });
    $stateProvider.state('kourier.campaign', {
        url: '/campaign',
        views: {
            "@": {
                templateUrl: 'modules/kourier/partial/kouriercampaign//kouriercampaign.html'
            }
        }
    });
    /* Add New States Above */

});

