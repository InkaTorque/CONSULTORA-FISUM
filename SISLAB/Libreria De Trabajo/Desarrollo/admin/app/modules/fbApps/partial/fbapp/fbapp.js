angular.module('fbApps').controller('FbappCtrl', function ($scope, $state, fborigin, $sce, $modal, Fbapp) {
    $scope.Fbapp = {
        app: Fbapp.findOne({where: {name: $state.params.appname}}, function (res) {
            $scope.Fbapp.app=res;
            $scope.Fbapp.appshow = JSON.stringify(res, undefined, 2);
        }),
        trustSrc: function (src) {
            return $sce.trustAsResourceUrl(src);
        },
        iframe: fborigin + $state.params.appname,
        tab: function () {
            window.open("https://www.facebook.com/dialog/pagetab?app_id=" + this.app.app_id + "&redirect_uri=" + this.app.redirect_uri);
        },
        deleteTab: function () {
            var that = this;
            $modal.open({
                templateUrl: 'modules/fbApps/modals/deleteFbapp/deleteFbapp.html',
                controller: 'DeletefbappCtrl'
            }).result.then(function (result) {
                    Fbapp.deleteById({id: that.app.id}, function () {
                        $state.go("fbapplist");
                    })
                });
        }
    }
});
//require("TimeSlice").guard(function () {
//    bigPipe.onPageletArrive({
//        "display_dependency": ["pagelet_canvas_content"],
//        "is_last": true,
//        "content": {"pagelet_iframe_canvas_content": {"container_id": "u_0_o"}},
//        "jsmods": {
//            "elements": [["m_0_16", "canvas_iframe_post_5548d7002beae1d16486998", 2], ["m_0_17", "canvas_iframe_post_5548d7002beae1d16486998", 2]],
//            "require": [["PlatformAppController", "setActiveIframeAndAppID", [], ["iframe_canvas", "https:\/\/kodevianapps.com", "671686332935396"]], ["CanvasIFrameLoader", "loadFromForm", ["m_0_16"], [{"__m": "m_0_16"}]]]
//        },
//        "css": ["VZsFo", "1y\/ac", "bB6wv"],
//        "resource_map": {
//            "HVBIx": {
//                "type": "js",
//                "src": "https:\/\/fbstatic-a.akamaihd.net\/rsrc.php\/v2\/yY\/r\/LkhYPTWlg5P.js",
//                "crossOrigin": 1
//            }
//        },
//        "js": ["PVeyR", "wMxiT", "0eFW\/", "HVBIx", "KA2eG", "rtzYq", "PqbW\/", "5lV\/Y"],
//        "displayJS": ["rtzYq"],
//        "id": "pagelet_iframe_canvas_content",
//        "phase": 1,
//        "tti_phase": 1
//    });
//}, "onPageletArrive pagelet_iframe_canvas_content")();
