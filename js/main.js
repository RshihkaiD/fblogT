// /**
//  * Created by litv-frontend on 2017/10/6.
//  */
//
// var vueDialog;
//
// var pulbicCb = {
//     fbSuccess: function (result) {
//         var statusKey = result.status;
//         vueDialog.fbResponse = result;
//     }
// };
//
// var includeFile = {
//     head: document.querySelector('head'),
//     script: function (url, success, error) {
//         var js = document.createElement("script");
//
//         js.type = "text/javascript";
//         js.src = url;
//         js.crossorigin = "anonymous";
//
//         if (typeof success == "function") {
//             js.onreadystatechange = success;
//             js.onload = success;
//         }
//
//         if (typeof error == "function") {
//             js.onerror = error;
//         }
//
//         this.head.appendChild(js);
//     }
// };
//
// var check = {
//     isObjEmpty: function (obj) {
//         if (obj == null) return true;
//         if (obj.length > 0) return false;
//         if (obj.length === 0) return true;
//         if (typeof obj !== 'object') return true;
//         for (var i in obj) {
//             if (hasOwnProperty.call(obj, i)) return false;
//         }
//         return true;
//     }
// };
//
// // Vue.extend()
//
// (function () {
//     includeFile.script('./js/fbStatus.js', function () {
//         if (typeof Vue != 'undefined') {
//             Vue.component('',{});
//             Vue.component('fb-login', {
//                 template: '<div class="dialog">\
//                                <div class="header">\
//                                     <i aria-hidden="true" data-btn-type="close" class="fa fa-times fa-3 close-btn"></i>\
//                                     <h2 class="header-title">登入</h2>\
//                                     <p class="header-second-title">請先登入，即可購買或觀看付費影片</p>\
//                                </div>\
//                                <div class="logo-site">\
//                                    <div class="logo-icon"></div>\
//                                    <h2>LiTV</h2>\
//                                </div>\
//                                <div class="content">\
//                                    <h2 class="login-dialog-title">= 會員註冊或登入 =</h2>\
//                                    <div class="login-dialog">\
//                                        <div data-btn-type="fb-login" class="facebook-login-btn" v-on:click="clickEvent">\
//                                             <i aria-hidden="true" class="fa fa-facebook-official fa-1"></i> Facebook 登入 \
//                                        </div>\
//                                        <div data-btn-type="accountKit-login" class="account-kit-btn" v-on:click="clickEvent">\
//                                             <i aria-hidden="true" class="fa fa-phone-square fa-1"></i> 行動電話 登入 \
//                                        </div>\
//                                    </div>\
//                                    <div class="attentions">\
//                                         <p>註冊即表示同意《LiTV 線上影視》的<a href="">服務條款</a> 以及 <a href="">隱私權政策</a></p>\
//                                    </div>\
//                                </div>\
//                            </div>',
//                 methods: {
//                     clickEvent: function (event) {
//                         var clickTarget = event.target;
//                         var clickEvent = clickTarget.dataset['btnType'];
//                         var status = vueDialog.fbResponse;
//                         if (clickEvent != 'close') {
//                             if (!check.isObjEmpty(status)) {
//                                 var splitEvent = clickEvent.split('-')[0];
//                                 if (splitEvent == 'fb') {
//                                     FB.login(function (response) {
//                                         console.log(response);
//                                     });
//                                 }
//                                 if (splitEvent == 'accountKit') {
//                                     if (typeof AccountKit != 'undefined') {
//
//                                         // AccountKit.init({
//                                         //     appId: "239307029890742",
//                                         //     // state: "{{csrf}}",
//                                         //     version: "v1.1",
//                                         //     fbAppEventsEnabled: true,
//                                         //     redirect: window.location.href
//                                         // });
//                                     }
//                                 }
//                             }
//                         } else {
//                             var documentContainer = document.getElementById('fb-login-dialog');
//                             documentContainer.remove();
//                         }
//                     }
//                 }
//             });
//             vueDialog = new Vue({
//                 data: {
//                     dialogType:'login',
//                     vueDialogStatus: "basic",
//                     fbResponse: {},
//                 },
//                 el: '#fb-login-dialog',
//                 watch: {
//                     fbResponse: function (response) {
//                         console.log(response);
//                     }
//                 }
//             });
//         }
//     });
//
//     AccountKit_OnInteractive = function () {
//         console.log('Initing signup funciton');
//         AccountKit.init(
//             {
//                 appId: "239307029890742",
//                 version: "v1.1",
//                 fbAppEventsEnabled: true,
//                 Redirect: window.location.href,
//                 debug: true
//             }
//         );
//     };
// })();