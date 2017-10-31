/**
 * Created by litv-frontend on 2017/10/30.
 */

var fbResponse = {};

var fbBtn = {
    logIn: null,
    logOut: null,
    logInEvent: null,
    logOutEvent: null
};

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
    }
};

var loginScope = {
    scope: 'user_about_me,publish_stream,email,user_likes,friends_photos,read_stream',
    return_scopes: true
};

var fbStatus = {
    display: function (response) {
        console.log(response);
        if (response.status == 'connected') {
            fbBtn.logIn.style.display = 'none';
            fbBtn.logOut.style.display = 'block';
        } else {
            fbBtn.logIn.style.display = 'block';
            fbBtn.logOut.style.display = 'none';
        }
    },
    logIn: function () {
        if (typeof FB != 'undefined') FB.login(function (response) {
            fbStatus.display(response);
            FB.getAuthResponse(function (result) {
                console.log(result);
            })
        }, loginScope);
    },
    logOut: function () {
        if (typeof FB != 'undefined') {
            FB.logout(function (response) {
                fbStatus.display(response);
            });
        }
    }
};

var pulbicCb = {
    fbSuccess: function (result) {
        var statusKey = result.status;
        fbResponse = result;
        fbStatus.display(result);
    }
};

includeFile.script('./js/fbStatus.js', function () {
    fbBtn.logIn = document.querySelector('#log-in-btn');
    fbBtn.logOut = document.querySelector('#log-out-btn');
    fbBtn.logIn.addEventListener('click', function () {
        fbStatus.logIn();
    });
    fbBtn.logOut.addEventListener('click', function () {
        fbStatus.logOut();
    });
}, null);