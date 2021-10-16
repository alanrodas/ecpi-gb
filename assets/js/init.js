(function ($) {
  'use strict';

  //
  // Preloader
  jQuery(window).load(function() {
    jQuery(".preloader").delay(1000).fadeOut("slow");
  });

  $( document ).ready(function() {

    //
    // Sticky Header
    $(window).scroll(function () {
      if ($(this).scrollTop() > 1) {
        $('body').addClass("sticky-nav");
      }
      else {
        $('body').removeClass("sticky-nav");
      }
    });
    $(window).scroll();

    //
    // Smooth Scrolling
    $('.fp-navbar a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - 50
          }, 500);
          return false;
        }
      }
    });

    //
    // ScrollSpy
    $("body").scrollspy({
      target  : '.navbar',
      offset  : 60
    });

    //
    // Fitvids
    $(".vid-responsive").fitVids();

    //
    // Countdown
    var time = '2021/11/27 10:00:00'; //Change this date with your counting date. Its Format is "Y/M/D"
    $('#countdown-timer').countdown( time , function( e ) {
      $(this).html(e.strftime(''
          +'<div class="countdown-box"><div class="box-inner"><div class="count-amount">%D</div><span class="fp-unit">Days</span></div></div>'
          +'<div class="countdown-box"><div class="box-inner"><div class="count-amount">%H</div><span class="fp-unit">Hours</span></div></div>'
          +'<div class="countdown-box"><div class="box-inner"><div class="count-amount">%M</div><span class="fp-unit">Minutes</span></div></div>'
          +'<div class="countdown-box"><div class="box-inner"><div class="count-amount">%S</div><span class="fp-unit">Seconds</span></div></div>'
      ));
    });

    //
    // Custom Tabs (Without Bootstrap)
    var tab = $('.tabs > li > a');
    tab.on('click', function( e ) {
      e.preventDefault();

      var tab_id = $(this).attr('data-tab');

      tab.removeClass('active');
      $('.tab-content').removeClass('current');

      $(this).addClass('active');
      $("#"+tab_id).addClass('current');

    });

    //
    // Subscribe (mailchimp)
    var mailSubscribe   = $('.subscribe-form');

    mailSubscribe.ajaxChimp({
      callback: mailchimpCallback,
      url: "http://frontpixels.us11.list-manage.com/subscribe/post?u=8ed724b6f4db710960cbc2439&amp;id=26648b74c9" // Just paste your mailchimp list url inside the "".
    });

    function mailchimpCallback(resp) {

      var successMessage    = $('.subscribe-success'),
        errorMessage      = $('.subscribe-error'),
        successIcon       = '<i class="ion-ios-checkmark"></i> ',
        errorIcon         = '<i class="ion-ios-close"></i> ';

      if (resp.result === 'success') {
        successMessage.html(successIcon + resp.msg).fadeIn(1000);
        errorMessage.fadeOut(300);

      } else if(resp.result === 'error') {
        errorMessage.html(errorIcon + resp.msg).fadeIn(1000);
      }

    }

    //
    // Google Map

    var map = L.map('map').setView([-35.769723, -58.493665], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    L.marker([-35.769723, -58.493665]).addTo(map)
        .bindPopup('<h4>Cine y Teatro Español</h4><p>Av. Larrea y Rodriguez Peña, General Belgrano, Buenos Aires, Argentina</p>')
        .openPopup();
    
});

  //
  // Gallery
  $('.gallery').owlCarousel({
    loop                : true,
    autoplay            : true,
    autoplayTimeout     : 5000,
    autoplayHoverPause  : true,
    items               : 1,
    margin              : 0,
    mouseDrag           : false,
    nav                 : true,
    navText             : ['<i class="ion-ios-arrow-left"><i/>','<i class="ion-ios-arrow-right"><i/>']
  });

  //
  // Sponsors
  $('.sponsors').owlCarousel({
    loop            : true,
    autoplay        : true,
    autoplayTimeout : 7000,
    margin          : 30,
    responsiveClass : true,
    responsive:{
      0:{
        items   : 1,
        margin  : 0
      },
      736:{
        items   : 2
      },
      991:{
        items   : 3
      },
      1000:{
        items   : 4
      },
      1200:{
        items   : 5
      }
    }
  });

  jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.2
  });

})(window.jQuery);
