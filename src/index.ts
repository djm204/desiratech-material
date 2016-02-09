//CSS
import '../front/css/animate.css';
import '../node_modules/bootswatch/paper/bootstrap.min.css';
import '../front/css/style.css';
import '../front/css/animate.css';


//JS
window['jQuery'] = require('jquery');
require('bootstrap');
require('../front/scripts/packages/jquery.easing.js');
require('../front/scripts/packages/move-top.js');
require('../front/scripts/packages/wow.min.js');


window['jQuery'].ready(function($) {
    
    //initiate smooth scrolling
				$(".scroll").click(function(event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 1000);
				});
                
    //instantiate wow
});


