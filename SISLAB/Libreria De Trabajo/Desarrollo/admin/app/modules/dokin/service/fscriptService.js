angular.module('dokin').service('fscriptService', function ($q, User, Conf) {
    var that = this;
    this.data;
    this.get = function () {
        var derfered = $q.defer();
        if (this.data) {
            derfered.resolve(this.data)
        } else {
            User.getCurrent().$promise.then(function (res) {
                return $q.all([Conf.findOne({
                    filter: {
                        userId: res.id
                    }
                }).$promise, User.fileScript().$promise]);
            }).then(function (confi) {
                var one = confi[0];
                var two = confi[1];
                that.data = two.response.file.replace('replace', one.appId);
                derfered.resolve(that.data);
            });
        }
        return derfered.promise;
    };
});
