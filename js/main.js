/**
 * Created by litv-frontend on 2017/10/6.
 */


var view = {};

var events = {};

var includeFile = {
    head: document.querySelector('head'),
    script: function (url, success, error) {
        var js = document.createElement("script");

        js.type = "text/javascript";
        js.src = url;
        js.crossorigin = "anonymous";

        if (typeof success == "function") {
            js.onreadystatechange = success;
            js.onload = success;
        }

        if (typeof error == "function") {
            js.onerror = error;
        }

        this.head.appendChild(js);
    },
    style: function () {
    }
};

(function () {
    includeFile.script('./js/fbStatus.js', function () {
        if (typeof FB != 'undefined') {
            FB.getLoginStatus(function (response) {
                // statusChangeCallback(response);
                console.log(res)
            });
        }
    });
})();