angular.module('dokin').controller('DokinwidgetCtrl', function (fscriptService, $scope, $timeout) {
    fscriptService.get().then(function (res) {
        var editor = CodeMirror.fromTextArea(document.getElementById('code'), {
            lineNumbers: true,
            mode:"javascript",
            styleActiveLine: true,
            matchBrackets: true
        });
        editor.getDoc().setValue('<script>\n'+res.toString().replace(' ','')+'</script>');
        $scope.fileScript=res.toString();
    });
    window.dkoAsyncInit = function ($dko) {
        $dko.init({
            appId: 'replace',
            version: 'v1.0'
        });
    };
    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
            window.dkoReset();
            return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "//localhost:8080/js/index.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'dko-jssdk'));

});
