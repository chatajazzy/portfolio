$(function() {
  var $columns = $('.header-item');
var height = 0;
$columns.each(function () {
  if ($(this).height() > height) {
    height = $(this).height();
  }
});

$columns.height(height);
  $("#page-header h1").fitText(1, { minFontSize: '22px', maxFontSize: '55px' });
  $("#page-header .subtitle").fitText(1, { minFontSize: '10px', maxFontSize: '25px' });
});

//preloader
document.body.classList.add("js");

$(window).load(preLoader);

function preLoader() {
	setTimeout(function() {
		$('#preload').delay(750).fadeOut(750);
		$('#page-header').delay(1000).css({border: '0 solid black'}).animate({
        borderWidth: 15
    }, 500);
		$('nav').delay(1750).css({display: 'none'}).fadeIn(500);
		$('#page-header .square').delay(750).animate({paddingRight : '40px', paddingLeft : '40px'},500);
	}, 500);
};

//waypoint markers and square animations
$('#info').waypoint(function() {
  		$('#info .square').animate({paddingRight : '40px', paddingLeft : '40px'},500);
  		$('#info .left-marker').delay(500).animate({paddingRight : '60px'},1000);
  		$('#info .right-marker').delay(500).animate({paddingLeft : '60px'},1000);
	});
	
	$('#portfolio').waypoint(function() {
  		$('#portfolio .square').animate({paddingRight : '40px', paddingLeft : '40px'},500);
  		$('#portfolio .left-marker').delay(500).animate({paddingRight : '60px'},1000);
  		$('#portfolio .right-marker').delay(500).animate({paddingLeft : '60px'},1000);
	});

	$('#contact').waypoint(function() {
  		$('#contact .square').animate({paddingRight : '40px', paddingLeft : '40px'},500);
  	});

//display navigation on scroll
	$(window).scroll(function() {
// 100 = The point you would like to fade the nav in.
  
	if ($(window).scrollTop() > 10 ){
    
 		$('.page-nav').addClass('show');
    
  } else {
    
    $('.page-nav').removeClass('show');
    
 	};   	
});

//display footer arrow on scroll
  $(window).scroll(function() {
// 100 = The point you would like to fade the nav in.
  if ($(window).scrollTop() > 10){
    
    $('#back').addClass('show-aside');
    
  } else {
    
    $('#back').removeClass('show-aside');
    
  };    
});
//data spy on scroll
	var sections = $('section')
  , nav = $('.page-nav')
  , nav_height = nav.outerHeight();

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
  
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
    
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');
      
      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});

nav.find('a').on('click', function () {
  var $el = $(this)
    , id = $el.attr('href');
  
  $('html, body').animate({
    scrollTop: $(id).offset().top - nav_height
  }, 500);
  
  return false;
});

//smooth linking
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});



//skills modal
$(".modal-toggle").on("click", function(e) {
  e.preventDefault();
  $(".modal").toggleClass("is-visible");
  $("progress").each(function() {
    var max = $(this).val();
    $(this).val(0).animate({ value: max }, { duration: 2000, easing: 'linear' });
      });
});

//porftolio animation 
	new AnimOnScroll( document.getElementById( 'grid' ), {
				minDuration : 0.4,
				maxDuration : 0.7,
				viewportFactor : 0.2
			} );


/*global jQuery */
/*!
* FitText.js 1.2
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );