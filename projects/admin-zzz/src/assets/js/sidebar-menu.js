    $(".toggle-nav").click(function () {
        $('.nav-menu').css("left", "0px");
    });
    $(".mobile-back").click(function () {
        $('.nav-menu').css("left", "-410px");
    });

    $(".pages-wrapper").attr("class", "pages-wrapper "+localStorage.getItem('pages-wrapper'));
    $(".pages-body-wrapper").attr("class", "pages-body-wrapper "+localStorage.getItem('pages-body-wrapper'));

    if (localStorage.getItem("pages-wrapper") === null) {
        $(".pages-wrapper").addClass("compact-wrapper");
        $(".pages-body-wrapper").addClass("sidebar-icon");
    }

  // left sidebar and vertical menu
    if($('#pageWrapper').hasClass('compact-wrapper')){

        jQuery('.menu-title').append('<div class="according-menu"><i class="fa fa-angle-right"></i></div>');
          jQuery('.menu-title').click(function () {
              jQuery('.menu-title').removeClass('active').find('div').replaceWith('<div class="according-menu"><i class="fa fa-angle-right"></i></div>');
              jQuery('.menu-content').slideUp('normal');
              if (jQuery(this).next().is(':hidden') == true) {
                  jQuery(this).addClass('active');
                  jQuery(this).find('div').replaceWith('<div class="according-menu"><i class="fa fa-angle-down"></i></div>');
                  jQuery(this).next().slideDown('normal');
              } else {
                  jQuery(this).find('div').replaceWith('<div class="according-menu"><i class="fa fa-angle-right"></i></div>');
              }
          });
          jQuery('.menu-content').hide();


          jQuery('.submenu-title').append('<div class="according-menu"><i class="fa fa-angle-right"></i></div>');
          jQuery('.submenu-title').click(function () {
              jQuery('.submenu-title').removeClass('active').find('div').replaceWith('<div class="according-menu"><i class="fa fa-angle-right"></i></div>');
              jQuery('.submenu-content').slideUp('normal');
              if (jQuery(this).next().is(':hidden') == true) {
                  jQuery(this).addClass('active');
                  jQuery(this).find('div').replaceWith('<div class="according-menu"><i class="fa fa-angle-down"></i></div>');
                  jQuery(this).next().slideDown('normal');
              } else {
                  jQuery(this).find('div').replaceWith('<div class="according-menu"><i class="fa fa-angle-right"></i></div>');
              }
          });
          jQuery('.submenu-content').hide();

    } else if ($('#pageWrapper').hasClass('horizontal-wrapper')) {
        var contentwidth = jQuery(window).width();
        if ((contentwidth) < '992') {
            $('#pageWrapper').removeClass('horizontal-wrapper').addClass('compact-wrapper');
            $('.pages-body-wrapper').removeClass('horizontal-menu').addClass('sidebar-icon');
            jQuery('.submenu-title').append('<div class="according-menu"><i class="fa fa-angle-right"></i></div>');
          jQuery('.submenu-title').click(function () {
              jQuery('.submenu-title').removeClass('active');
              jQuery('.submenu-title').find('div').replaceWith('<div class="according-menu"><i class="fa fa-angle-right"></i></div>');
              jQuery('.submenu-content').slideUp('normal');
              if (jQuery(this).next().is(':hidden') == true) {
                  jQuery(this).addClass('active');
                  jQuery(this).find('div').replaceWith('<div class="according-menu"><i class="fa fa-angle-down"></i></div>');
                  jQuery(this).next().slideDown('normal');
              } else {
                  jQuery(this).find('div').replaceWith('<div class="according-menu"><i class="fa fa-angle-right"></i></div>');
              }
          });
          jQuery('.submenu-content').hide();

          jQuery('.menu-title').append('<div class="according-menu"><i class="fa fa-angle-right"></i></div>');
          jQuery('.menu-title').click(function () {
              jQuery('.menu-title').removeClass('active');
              jQuery('.menu-title').find('div').replaceWith('<div class="according-menu"><i class="fa fa-angle-right"></i></div>');
              jQuery('.menu-content').slideUp('normal');
              if (jQuery(this).next().is(':hidden') == true) {
                  jQuery(this).addClass('active');
                  jQuery(this).find('div').replaceWith('<div class="according-menu"><i class="fa fa-angle-down"></i></div>');
                  jQuery(this).next().slideDown('normal');
              } else {
                  jQuery(this).find('div').replaceWith('<div class="according-menu"><i class="fa fa-angle-right"></i></div>');
              }
          });
          jQuery('.menu-content').hide();
        }

    }

// toggle sidebar
$nav = $('.main-nav');
$header = $('.pages-main-header');
$toggle_nav_top = $('.toggle-sidebar');
$toggle_nav_top.click(function() {
  $this = $(this);
  $nav = $('.main-nav');
  $nav.toggleClass('close_icon');
  $header.toggleClass('close_icon');
});

$( window ).resize(function() {
  $nav = $('.main-nav');
  $header = $('.pages-main-header');
  $toggle_nav_top = $('.toggle-sidebar');
  $toggle_nav_top.click(function() {
    $this = $(this);
    $nav = $('.main-nav');
    $nav.toggleClass('close_icon');
    $header.toggleClass('close_icon');
  });
});

$body_part_side = $('.body-part');
$body_part_side.click(function(){
  $toggle_nav_top.attr('checked', false);
  $nav.addClass('close_icon');
  $header.addClass('close_icon');
});

//    responsive sidebar
var $window = $(window);
var widthwindow = $window.width();
(function($) {
"use strict";
if(widthwindow <= 991) {
    $toggle_nav_top.attr('checked', false);
    $nav.addClass("close_icon");
    $header.addClass("close_icon");
}
})(jQuery);
$( window ).resize(function() {
var widthwindaw = $window.width();
if(widthwindaw <= 991){
    $toggle_nav_top.attr('checked', false);
    $nav.addClass("close_icon");
    $header.addClass("close_icon");
}else{
    $toggle_nav_top.attr('checked', true);
    $nav.removeClass("close_icon");
    $header.removeClass("close_icon");
}
});

// horizontal arrows
var view = $("#mainnav");
var move = "1800px";
var leftsideLimit = -1800

var Windowwidth = jQuery(window).width();
if ((Windowwidth) > '1460') {
    var sliderLimit = -1800
} else if ((Windowwidth) >= '992') {
    var sliderLimit = -1000

} else {
    var sliderLimit = 0
}

$("#left-arrow").addClass("disabled");

$("#right-arrow").click(function(){
    var currentPosition = parseInt(view.css("left"));
    if (currentPosition >= sliderLimit) {
        $("#left-arrow").removeClass("disabled");
        view.stop(false,true).animate({left:"-="+move},{ duration: 400})
        if (currentPosition == sliderLimit) {
            $(this).addClass("disabled");
        }
    }
});

$("#left-arrow").click(function(){
    var currentPosition = parseInt(view.css("left"));
    if (currentPosition < 0) {
        view.stop(false,true).animate({left:"+="+move},{ duration: 400})
        $("#right-arrow").removeClass("disabled");
        $("#left-arrow").removeClass("disabled");
        if (currentPosition >= leftsideLimit) {
            $(this).addClass("disabled");
        }
    }

});

// pages active
    $( ".main-navbar" ).find( "a" ).removeClass("active");
    $( ".main-navbar" ).find( "li" ).removeClass("active");

    var current = window.location.pathname
    $(".main-navbar ul>li a").filter(function() {

        var link = $(this).attr("href");
        if(link){
            if (current.indexOf(link) != -1) {
                $(this).parents().children('a').addClass('active');
                $(this).parents().parents().children('ul').css('display', 'block');
                $(this).addClass('active');
                $(this).parent().parent().parent().children('a').find('div').replaceWith('<div class="according-menu"><i class="fa fa-angle-down"></i></div>');
                $(this).parent().parent().parent().parent().parent().children('a').find('div').replaceWith('<div class="according-menu"><i class="fa fa-angle-down"></i></div>');
                return false;
            }
        }
    });

$('.left-menu-header .mega-menu .nav-link').on('click', function (e) {
    $(this).toggleClass("active");
    $(this).parent().children('.mega-menu-container').toggleClass("d-block").slideToggle();
});

$('.left-menu-header .link-section > div').on('click', function (e) {
    if ($(window).width() <= 1199) {
     $(".left-menu-header .link-section > div").removeClass("active");
     $(this).toggleClass("active");
    $(this).parent().children('ul').toggleClass("d-block").slideToggle();
}
});


 if ($(window).width() <= 1199) {
    $(".left-menu-header .link-section").children('ul').css('display', 'none');
    $(this).parent().children('ul').toggleClass("d-block").slideToggle();
}
 if ($(window).width() <= 991) {
    $('.main-nav .back-btn').on('click', function (e) {
         $(".pages-main-header").toggleClass("close_icon");
         $(".main-nav").toggleClass("close_icon");
    });
}
