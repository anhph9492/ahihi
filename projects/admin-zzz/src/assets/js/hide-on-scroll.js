"use strict";
$(window).scroll(function() {
    if ($(this).scrollTop()>100){
        $('.pages-main-header').fadeOut();
        $( ".pages-body-wrapper" ).addClass( "scorlled" );
    }
    else
    {
        $('.pages-main-header').fadeIn();
        $( ".pages-body-wrapper" ).removeClass( "scorlled" );
    }
});
