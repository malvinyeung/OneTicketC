jQuery(document).ready(function($){
 // Defining a function to set size for #hero 
	function fullscreen(){
		jQuery('#hero').css({
            width: jQuery(window).width(),
            height: jQuery(window).height()
        });
	}
  
	fullscreen();

  // Run the function in case of window resize
  jQuery(window).resize(function() {
       fullscreen();         
    });

});

$(window).scroll(function() {    
   var scroll = $(window).scrollTop();
   if (scroll >= 10) {
    $(".top-banner").addClass("remove-banner");
   }else{
   	$(".top-banner").removeClass("remove-banner");
   }
});



// init ScrollMagic Controller
var controller = new ScrollMagic.Controller();

$(function () { // wait for document ready
    // build scene
    var scene = new ScrollMagic.Scene({
      triggerElement: "#trigger1", 
      duration: 2000,
      triggerHook: 0,
      reverse: true
    })
        .setPin("#pin1")
        .addIndicators({name: "1 (duration: 2000)"}) // add indicators (requires plugin)
        .addTo(controller);
});

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
