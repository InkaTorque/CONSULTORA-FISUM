angular.module('dokin').factory('parent', function($rootScope, User, Conf, sweet, socket, ioServ, $state) {
    var parent = {
        init: function() {
            $rootScope.Account = {
                set: function(conf, fileScript) {
                    socket.emit("connect:app", {
                        appId: conf.appId,
                        userKey: $rootScope.Account.user.email //Para externos el email para interno el id de usuario
                    }, function(err, res) {
                        console.log(err);
                        socket.appId = conf.appId;
                        
                        socket.emit('GET:VISITORS:WAITING', function(err, list) {
                            console.log(list, "lista espera");
                        })
                    });
                    this.conf = conf;
                    if (conf.subscriber == this.user.id) {
                        this.role = "subscriber";
                    } else {
                        this.role = "agent";
                    }
                    var edge = conf.edge[this.user.id];

                    $rootScope.fileScript = fileScript.response.file.toString();
                    if (!edge.tour) {
                        sweet.show({
                            title: '¡Bienvenido! ' + this.user.firstName,
                            text: 'Esta herramienta esta hecha pensado en ti esperemos que la disfrutes.',
                            showCancelButton: false,
                            closeOnConfirm: false,
                            animation: 'slide-from-top',
                            confirmButtonText: 'Continuar'
                        }, function(inputValue) {
                            sweet.show({
                                title: 'Tu script de monitoreo',
                                text: 'Copia y pega el siguiente script en tu sitio web' +
                                    '<br/><br/>' +
                                    '<pre style="text-align: left;padding: 3px;background: rgb(68, 68, 68);color: white">' +
                                    fileScript.response.file.toString().replace("replace", conf.appId) +
                                    '</pre>',
                                html: true,
                                showCancelButton: false,
                                closeOnConfirm: false,
                                confirmButtonText: 'Continuar'
                            }, function(inputValue) {
                                sweet.show('Muy Bien', 'Eso es todo, Gracias por confiar en Nosotros', 'success');
                                edge.tour = true;
                                console.log($rootScope.Account.conf);
                                Conf.update({
                                    where: {
                                        id: $rootScope.Account.conf.id
                                    }
                                }, $rootScope.Account.conf);
                            });
                        });
                    }

                },
                setUser(user) {
                    this.user = user;
                }
            };
            User.getCurrent().$promise.then(function(res) {
                $rootScope.Account.setUser(res);
                return User.conf({
                    id: res.id
                }).$promise;
            }).then(function(confi) {
                User.fileScript(function(res) {
                    $rootScope.Account.set(confi[0], res);
                });
            })
            $rootScope.$on('open-chat', function(e, obj) {
                $state.go('dokin.visitor', {
                    openchat: obj
                });
            })

        }
    };

    return parent;
});
