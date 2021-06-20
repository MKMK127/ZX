$(document).ready(function() {

    $('.section-fut').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('stikey');

        } else {
            $('nav').removeClass('stikey');

        }
    }, {
        offset: '60px'
    });
    $('.scroll-plan').click(function() {
        $('html , body').animate({ scrollTop: $('.js--section-plans').offset().top }, 1000);
    });
    $('.scroll-start').click(function() {
        $('html , body').animate({ scrollTop: $('.section-fut').offset().top }, 1000);
    });
    $('.scroll-works').click(function() {
        $('html , body').animate({ scrollTop: $('.section-Steps').offset().top }, 1000);
    });
    $('.scroll-meals').click(function() {
        $('html , body').animate({ scrollTop: $('.section-meals').offset().top }, 1000);
    });
    $('.scroll-city').click(function() {
        $('html , body').animate({ scrollTop: $('.Cities').offset().top }, 1000);
    });
    $('.wp-1').waypoint(function(direction) {
        $('.wp-1').addClass('animated fadInUPBig');
    }, {
        offset: '50%'
    });
    $('.wp-2').waypoint(function(direction) {
        $('.wp-2').addClass('animated backInUp');
    }, {
        offset: '50%'
    });
    $('.wp-3').waypoint(function(direction) {
        $('.wp-3').addClass('animated wobble');
    }, {
        offset: '50%'
    });
    $('.wp-4').waypoint(function(direction) {
        $('.wp-4').addClass('animated fadInLeft');
    }, {
        offset: '50%'
    });




});






/*
var waypoints = $('#handler-first').waypoint(function(direction) {
    notify(this.element.id + ' hit 25% from top of window') 
  }, {
    offset: '25%'
  })
  */