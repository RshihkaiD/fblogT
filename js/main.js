/**
 * Created by litv-frontend on 2017/10/6.
 */

var pulbicCb = {
    fbSuccess: function(result) {
        var statusKey = result.status;
        Fbstatus[statusKey](result);
    }
};

var view = {};

var events = {
    btn: {
        fb: document.querySelector('#fb-login'),
        kit: document.querySelector('#account-login')
    },
    bindFbLogin: function() {
        this.btn['fb'].addEventListener('click', function(e) {
            console.log(e);
            FB.login(function(response) {
                console.log(response);
            });
        });
    }
};

var Fbstatus = {
    connected: function(param) {
        console.log(param);
    },
    not_authorized: function(param) {
        events.bindFbLogin();
    },
    unknown: function(param) {
        events.bindFbLogin();
    }
};

var includeFile = {
    head: document.querySelector('head'),
    script: function(url, success, error) {
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
    style: function() {}
};

(function() {
    includeFile.script('./js/fbStatus.js', null);
    if(typeof AccountKit != 'undefined'){
        console.log(AccountKit);
    }
})();