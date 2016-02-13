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
});
//# sourceMappingURL=index.js.map