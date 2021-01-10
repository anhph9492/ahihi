"use strict";
$(window).bind("resize", function () {
        console.log($(this).width())
        if ($(this).width() < 1024) {
            $('.pages-body-wrapper').removeClass('sidebar-icon');
        } else {
            $('.pages-body-wrapper').addClass('sidebar-icon')
        }
    }).trigger('resize');
