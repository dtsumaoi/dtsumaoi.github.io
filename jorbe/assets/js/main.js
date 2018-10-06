"use strict";
jQuery(document).ready(function ($) {

    $(window).load(function () {
        $(".loaded").fadeOut();
        $(".preloader").delay(1000).fadeOut("slow");
    });
    /*---------------------------------------------*
     * Mobile menu
     ---------------------------------------------*/
    $('.navbar-collapse').find('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 40)
                }, 1000);
                if ($('.navbar-toggle').css('display') != 'none') {
                    $(this).parents('.container').find(".navbar-toggle").trigger("click");
                }
                return false;
            }
        }
    });


    // slick slider active 
    $(".main_home_slider").slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<i class='fa fa-angle-left nextprevleft'></i>",
        nextArrow: "<i class='fa fa-angle-right nextprevright'></i>"
    });

    //    $(".study_slider").slick({
    //        dots: true,
    //        slidesToShow: 1,
    //        slidesToScroll: 1
    //    });
    $(".study_slider").slick({
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    /*---------------------------------------------*
     * STICKY scroll
     ---------------------------------------------*/

    $("").localScroll();

    /*---------------------------------------------*
     * WOW
     ---------------------------------------------*/

    var wow = new WOW({
        mobile: false // trigger animations on mobile devices (default is true)
    });
    wow.init();


    // magnificPopup

    // $('.portfolio-img').magnificPopup({
    //     type: 'image',
    //     verticalFit: true,
    //     horizontalFit: true,
    //     gallery: {
    //         enabled: true
    //     }
    // });

    $('.portfolio-img').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom', // this class is for CSS animation below
        gallery:{
            enabled:true
          },
        zoom: {
          enabled: true, // By default it's false, so don't forget to enable it
      
          duration: 300, // duration of the effect, in milliseconds
          easing: 'ease-in-out', // CSS transition easing function
      
          // The "opener"   function should return the element from which popup will be zoomed in
          // and to which popup will be scaled down
          // By defailt it looks for an image tag:
          opener: function(openerElement) {
            // openerElement is the element on which popup was initialized, in this case its <a> tag
            // you don't need to add "opener" option if this code matches your needs, it's defailt one.
            return openerElement.is('img') ? openerElement : openerElement.find('img');
          }
        }
      
      });
    
    
    // main-menu-scroll

    jQuery(window).scroll(function () {
        var top = jQuery(document).scrollTop();
        var height = 200;
        //alert(batas);

        if (top > height) {
            jQuery('.navbar-fixed-top').addClass('menu-scroll');
        } else {
            jQuery('.navbar-fixed-top').removeClass('menu-scroll');
        }
    });

    // scroll Up

    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('.scrollup').fadeIn('slow');
        } else {
            $('.scrollup').fadeOut('slow');
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });


    // scroll home
    $('.scrollhome').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });


    // scroll Down
    $('.scrolldown a').bind('click', function () {
        $('html , body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 160
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    $('.scrolldownabout a').bind('click', function () {
        $('html , body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });



    // Portfoliowork init
    jQuery('#productswork').mixItUp({
        selectors: {
            target: '.tile',
            filter: '.filter'
            //           sort: '.sort-btn'
        },
        animation: {
            animateResizeContainer: false,
            effects: 'fade scale'
        }

    });

    // dropdown menu
    $('.dropdown-menu').click(function (e) {
        e.stopPropagation();
    });

    //End

});



$(document).on("scroll", function () {
    if ($(document).scrollTop() > 120) {
        $("nav").addClass("small");
    } else {
        $("nav").removeClass("small");
    }
});



