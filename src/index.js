//CSS
require('../front/css/animate.css');
require('../node_modules/bootswatch/paper/bootstrap.min.css');
require('../front/css/style.css');
require('../front/css/animate.css');
//JS
window['jQuery'] = require('jquery');
require('bootstrap');
require('../front/scripts/packages/jquery.easing.js');
require('../front/scripts/packages/move-top.js');
window['jQuery']('document').ready(function ($) {
    //initiate smooth scrolling
    $(".scroll").click(function (event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 1000);
    });
    (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments);
        }, i[r].l = 1 * new Date();
        a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m);
    })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
    ga('create', 'UA-73565220-1', 'auto');
    ga('send', 'pageview');
});
//# sourceMappingURL=index.js.map