/**
 * Created by litv-frontend on 2017/10/6.
 */

window.fbAsyncInit = function () {
    FB.init({
        appId: '239307029890742',
        xfbml: true,
        cookie: false,
        version: 'v2.10'
    });

    FB.AppEvents.logPageView();

    FB.getLoginStatus(function(response){
        pulbicCb.fbSuccess(response);
    });
};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);

}(document, 'script', 'facebook-jssdk'));