angular.module('dokin', ['ui.bootstrap', 'ui.utils', 'ui.router', 'hSweetAlert', 'angularAwesomeSlider', 'colorpicker.module']);

angular.module('dokin').config(function($stateProvider, $httpProvider) {

    $stateProvider.state('dokin', {
        parent: "app",
        url: 'dk',
        abstract: true,
        views: {
            "header@": {
                templateUrl: 'modules/dokin/partial/dokinheader//dokinheader.html'
            },
            "panel@": {
                templateUrl: 'modules/dokin/partial/dokinpanel//dokinpanel.html'
            }
        },
        onEnter: function(parent) {
            parent.init();
        }
    });
    $stateProvider.state('dokin.visitor', {
        parent: "dokin",
        url: '/visitors',
        params: {
            'openchat': null
        },
        views: {
            "@": {
                templateUrl: 'modules/dokin/partial/dokinvisitor//dokinvisitor.html'
            },
            "header@": {
                templateUrl: 'modules/dokin/partial/dokinheader//dokinheader.html'
            },
            "panel@": {
                templateUrl: 'modules/dokin/partial/dokinpanel//dokinpanel.html'
            }
        }
    });
    $stateProvider.state('dokin.home', {
        parent: "dokin",
        url: '/home',
        views: {
            "@": {
                templateUrl: 'modules/dokin/partial/dokinhome//dokinhome.html'
            },
            "header@": {
                templateUrl: 'modules/dokin/partial/dokinheader//dokinheader.html'
            },
            "panel@": {
                templateUrl: 'modules/dokin/partial/dokinpanel//dokinpanel.html'
            }
        }
    });
    $stateProvider.state('landing', {
        url: '/landing',
        views: {
            "@": {
                templateUrl: 'modules/dokin/partial/landing//landing.html'
            },
            "header@": {
                templateUrl: 'modules/dokin/partial/dokinheader//dokinheader.html'
            },
            "panel@": {
                //templateUrl: 'modules/dokin/partial/dokinpanel//dokinpanel.html'
            }
        }
    });
    $stateProvider.state('dokinsignin', {
        url: '/signin',
        views: {
            "@": {
                templateUrl: 'modules/dokin/partial/dokinsignin//dokinsignin.html'
            },
            "header@": {
                templateUrl: 'modules/dokin/partial/dokinheader//dokinheader.html'
            }
        }
    });
    $stateProvider.state('dokinsignup', {
        url: '/signup',
        views: {
            "@": {
                templateUrl: 'modules/dokin/partial/dokinsignup//dokinsignup.html'
            }
        },
        onEnter: function($rootScope) {
            $rootScope.actualModule = null;
        },
        onExit: function() {
            $rootScope.actualModule = 'root';
        }
    });
    $stateProvider.state('dokin.agent', {
        parent: "dokin",
        url: '/agents',
        views: {
            "@": {
                templateUrl: 'modules/dokin/partial/dokinagent//dokinagent.html'
            },
            "header@": {
                templateUrl: 'modules/dokin/partial/dokinheader//dokinheader.html'
            }
        }
    });
    $stateProvider.state('dokin.agent.add', {
        parent: "dokin.agent",
        url: '/add',
        views: {
            "@": {
                templateUrl: 'modules/dokin/partial/dokinagentadd//dokinagentadd.html'
            },
            "header@": {
                templateUrl: 'modules/dokin/partial/dokinheader//dokinheader.html'
            }
        }
    });
    $stateProvider.state('dokin.history', {
        parent: "dokin",
        url: '/history',
        views: {
            "@": {
                templateUrl: 'modules/dokin/partial/dokinhistory//dokinhistory.html'
            },
            "header@": {
                templateUrl: 'modules/dokin/partial/dokinheader//dokinheader.html'
            }
        }
    });
    $stateProvider.state('dokin.sub', {
        parent: "dokin",
        url: '/subscription',
        views: {
            "@": {
                templateUrl: 'modules/dokin/partial/dokinsub//dokinsub.html'
            },
            "header@": {
                templateUrl: 'modules/dokin/partial/dokinheader//dokinheader.html'
            }
        }
    });
    $stateProvider.state('dokin.widget', {
        url: '/widget',
        parent: "dokin",
        views: {
            "@": {
                templateUrl: 'modules/dokin/partial/dokinwidget//dokinwidget.html'
            },
            "header@": {
                templateUrl: 'modules/dokin/partial/dokinheader//dokinheader.html'
            }
        }
    });
    $stateProvider.state('dokin.agent.prof', {
        parent: "dokin.agent",
        url: '/prof/:id',
        views: {
            "@": {
                templateUrl: 'modules/dokin/partial/dokinagentprof//dokinagentprof.html'
            },
            "header@": {
                templateUrl: 'modules/dokin/partial/dokinheader//dokinheader.html'
            }
        }
    });
    $stateProvider.state('dokin.analytics', {
        parent: "dokin",
        url: '/analytics',
        views: {
            "@": {
                templateUrl: 'modules/dokin/partial/dokinanalytics//dokinanalytics.html'
            },
            "header@": {
                templateUrl: 'modules/dokin/partial/dokinheader//dokinheader.html'
            }
        }
    });
    $stateProvider.state('dokin.account', {
        url: '/account',
        parent: "dokin",
        views: {
            "@": {
                templateUrl: 'modules/dokin/partial/dokinaccount//dokinaccount.html'
            },
            "header@": {
                templateUrl: 'modules/dokin/partial/dokinheader//dokinheader.html'
            }
        }
    });
    $stateProvider.state('dokin.benefits', {
        url: '/benefits',
        parent: "dokin",
        views: {
            "@": {
                templateUrl: 'modules/dokin/partial/dokinbenefits//dokinbenefits.html'
            },
            "header@": {
                templateUrl: 'modules/dokin/partial/dokinheader//dokinheader.html'
            }
        }
    });
    /* Add New States Above */
}).run(function($rootScope, socket, proxysocket) {
    socket.on("visitor:asking", function(obj) {
        function notifyMe() {
            if (!Notification) {
                alert('Notifications are supported in modern versions of Chrome, Firefox, Opera and Firefox.');
                return;
            }
            if (Notification.permission !== "granted")
                Notification.requestPermission();

            var notification = new Notification('Nuevo mensaje de usuario', {
                icon: 'http://kodevian.com/static_kodevian/img/Logo_Kodevian.png',
                body: obj.context.user.firstName || "Anonimo :" + " " + obj.context.text,
                data: obj
            });
            notification.onclick = function() {
                var data = this.data;
                $rootScope.$broadcast('open-chat', data)
                this.close();
            };
        }
        notifyMe();
    });
    socket.on("visitor:connected", function(obj) {
        proxysocket.prepForBroadcast(obj);
    });

});
