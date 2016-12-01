
 $(window).on("load",function(){
	if($('.mcs-horizontal-example').length){
		 $(".mcs-horizontal-example").mCustomScrollbar({
      axis:"x",
      theme:"dark-3"
    });
	}
});

document.addEventListener('DOMContentLoaded', function(){
    var trigger = new ScrollTrigger({
      toggle: {
        visible: 'visibleClass',
        hidden: 'hiddenClass'
      },
      offet: {
        x: 0,
        y: 50
      },
      addHeight: false,
      once: true
    }, document.body, window);
});

$( document ).ready(function() {
  // Handler for .ready() called.
    var isMobile = window.matchMedia("only screen and (max-width: 760px)");


  	$('.button-collapse').sideNav();
  	
  	/* random modal background */

  	var bgArray = [
  	'rec-blue-stroke-large.svg', 'rec-yellow-stroke-large.svg', 'rec-pink-stroke-large.svg','rec-teal-stroke-large.svg',
  	'rec-blue-stroke-r90-large.svg', 'rec-yellow-stroke-r90-large.svg', 'rec-pink-stroke-r90-large.svg','rec-teal-stroke-r90-large.svg',
  	'rec-blue-stroke-r75-large.svg', 'rec-yellow-stroke-r75-large.svg', 'rec-pink-stroke-r75-large.svg','rec-teal-stroke-r75-large.svg',
  	'cir-blue-stroke-large.svg', 'cir-yellow-stroke-large.svg', 'cir-pink-stroke-large.svg','cir-teal-stroke-large.svg',
  	'cir-blue-stroke-medium.svg', 'cir-yellow-stroke-medium.svg', 'cir-pink-stroke-medium.svg','cir-teal-stroke-medium.svg',
  	'cir-blue-stroke-small.svg', 'cir-yellow-stroke-small.svg', 'cir-pink-stroke-small.svg','cir-teal-stroke-small.svg',
  	'cir-blue-fill-small.svg', 'cir-yellow-fill-small.svg', 'cir-pink-fill-small.svg','cir-teal-fill-small.svg'
  	];
    var bg1 = bgArray[Math.floor(Math.random() * bgArray.length)];
    var bg2 = bgArray[Math.floor(Math.random() * bgArray.length)];
    var bg3 = bgArray[Math.floor(Math.random() * bgArray.length)];
    var bg4 = bgArray[Math.floor(Math.random() * bgArray.length)];
    var bg5 = bgArray[Math.floor(Math.random() * bgArray.length)];

    // If you have defined a path for the images
    var path = '../img/svg/';

    var url1 = "url(' " + path+bg1 + " ') ";
    var url2 = "url(' " + path+bg2 + " ') ";
    var url3 = "url(' " + path+bg3 + " ') ";
    var url4 = "url(' " + path+bg4 + " ') ";
    var url5 = "url(' " + path+bg5 + " ') ";

    // then you can put it right before the variable 'bg'
    $('.modal').css({
      "background-image": url1 + ',' + url2 + ',' + url3 + ',' + url4 + ',' + url5,
      "background-position": "right -80px bottom 20px, right -20px top 10px, left -40px top -40px, left -20px bottom -30px, left -10px bottom 350px",
      "background-repeat": "no-repeat, no-repeat, no-repeat, no-repeat, no-repeat",
      "background-size": "auto, auto, auto, auto, auto",
    });


  	/* scrolltop when page is refreshed */
  	$(this).scrollTop(0);

  	/* sticky navigation */
  	$('.site-header').stickMe({
  		topOffset: 100,
  		transitionDuration: 100,
		shadow: true,
		shadowOpacity: 0.3,
		animate: true,
		triggerAtCenter: true,
		transitionStyle: 'fade',
		stickyAlready: false
  	}); 

  	$('.site-header').on('sticky-begin', function() { 
	    $('#logo-container').animate({ opacity: "0" }, 100 );
	});

  	$('.site-header').on('top-reached', function() { 
	    $('#logo-container').animate({ opacity: "1" }, 100 );
	});

  	/* text header on home page*/

  	$('.line-1').hide();
  	$('.line-2').hide();

  	 $('.tlt1').textillate({
  	 	minDisplayTime: 500,
  	 	initialDelay: 0,
	    loop: true,
	    in:{ 
	        effect: 'fadeInLeft',
	        delayScale: 0,
		    delay: 0,
		    sync: false,
		    shuffle: false,
		    reverse: true,
		     callback: function () 
	        {
	            $('.line-1').show();
	        }
	    },
	    out: { 
	        effect: 'fadeOut',
	        delayScale: 0,
		    delay: 0,
		    sync: false,
		    shuffle: false,
		    reverse: true,
	        callback: function () 
	        {
	            $('.tlt1').hide();
	            $('.line-1').hide();
	        }
	    }
	});

  	$('.tlt2').textillate({
  		minDisplayTime: 2000,
  		initialDelay: 1500,
	    loop: false,
	    in:{ 
	        effect: 'fadeInLeft',
	        delayScale: 0,
		    delay: 0,
		    sync: false,
		    shuffle: false,
		    reverse: true,
		    callback: function () 
	        {
	            $('.line-2').show();
	        }
	    },
	    out: { 
	        effect: 'fadeOutRight',
	        callback: function () 
	        {
	            
	        }
	    }
	});

  	$('.tlt3').textillate({
  		minDisplayTime: 3000,
  		initialDelay: 2000,
	    loop: false,
	    in:{ 
	        effect: 'fadeInLeft',
	        delayScale: 1.2,
		    delay: 10,
		    sync: false,
		    shuffle: false,
		    reverse: true,
	    },
	    out: { 
	        effect: 'fadeOutRight',
	        callback: function () 
	        {
	            
	        }
	    }
	});

  	/* text header on online entertainment page*/
  	
  	$('.line-3').hide();

  	 $('.tlt4').textillate({
  	 	minDisplayTime: 3000,
  	 	initialDelay: 0,
	    loop: false,
	    in:{ 
	        effect: 'fadeInLeft',
	        delayScale: 1.2,
		    delay: 10,
		    sync: false,
		    shuffle: false,
		    reverse: true,
		     callback: function () 
	        {
	            $('.line-3').show();
	        }
	    },
	    out: { 
	        effect: 'fadeOut',
	        delayScale: 1.2,
		    delay: 10,
		    sync: false,
		    shuffle: false,
		    reverse: true,
	        callback: function () 
	        {
	        }
	    }
	});

  	$('.tlt5').textillate({
  		minDisplayTime: 3000,
  		initialDelay: 1000,
	    loop: false,
	    in:{ 
	        effect: 'fadeInLeft',
	        delayScale: 1.2,
		    delay: 10,
		    sync: false,
		    shuffle: false,
		    reverse: true,
		    callback: function () 
	        {
	        }
	    },
	    out: { 
	        effect: 'fadeOutRight',
	        callback: function () 
	        {
	            
	        }
	    }
	});


  	/* text header on content production page*/
  	
  	$('.line-6').hide();

  	 $('.tlt6').textillate({
  	 	minDisplayTime: 3000,
  	 	initialDelay: 0,
	    loop: false,
	    in:{ 
	        effect: 'fadeInLeft',
	        delayScale: 1.2,
		    delay: 10,
		    sync: false,
		    shuffle: false,
		    reverse: true,
		     callback: function () 
	        {
	            $('.line-6').show();
	        }
	    },
	    out: { 
	        effect: 'fadeOut',
	        delayScale: 1.2,
		    delay: 10,
		    sync: false,
		    shuffle: false,
		    reverse: true,
	        callback: function () 
	        {
	        }
	    }
	});

  	$('.tlt7').textillate({
  		minDisplayTime: 3000,
  		initialDelay: 1000,
	    loop: false,
	    in:{ 
	        effect: 'fadeInLeft',
	        delayScale: 1.2,
		    delay: 10,
		    sync: false,
		    shuffle: false,
		    reverse: true,
		    callback: function () 
	        {
	        }
	    },
	    out: { 
	        effect: 'fadeOutRight',
	        callback: function () 
	        {
	            
	        }
	    }
	});



  	/* initialize carousel on online entertainment page */

  	if($('.online-entertainment-carousel').length){
  		$('.carousel').carousel({
            dist:0,
            shift:0,
            padding:0
	    });

	  	$('#carousel-next-icon').click(function(){
	  	 	$('.carousel').carousel('next');
	  	});

	  	$('#carousel-prev-icon').click(function(){
	  	 	$('.carousel').carousel('prev');
	  	});
  	}
  	 
  	/* initialize carousel on content production page */
  	if($('.video-production-carousel').length){
  		$('.carousel').carousel({
            dist:0,
            shift:0,
            padding:15

	    });

	  	$('#carousel-next-icon').click(function(){
	  	 	$('.carousel').carousel('next');
	  	});

	  	$('#carousel-prev-icon').click(function(){
	  	 	$('.carousel').carousel('prev');
	  	});
  	}


  	/* initialize modal */

  	  $('.modal-trigger').leanModal({
	      dismissible: true, // Modal can be dismissed by clicking outside of the modal
	      opacity: .5, // Opacity of modal background
	      in_duration: 300, // Transition in duration
	      out_duration: 200, // Transition out duration
	      starting_top: '4%', // Starting top style attribute
	      ending_top: '10%', // Ending top style attribute
	      ready: function() { }, // Callback for Modal open
	      complete: function() { } // Callback for Modal close
	    }
	  );


  	//Initiat WOW JS
	new WOW().init();
	

   	

	if( $('.swipebox').length){
		$( '.swipebox' ).swipebox();
	}

    // NOT WORK ON MOBILE
    if (!isMobile.matches) {
        //Conditional script here
        skrollr.init({
            forceHeight: false,
            smoothScrolling: true,
            smoothScrollingDuration: 1000
        });
    }

    if(!isMobile.matches){
        $('#crew-1').tooltipster({
            position: 'top'
        });

        $('#crew-2').tooltipster({
            position: 'left'
        });

        $('#crew-3').tooltipster({
            position: 'left'
        });

        $('#crew-4').tooltipster({
            position: 'right'
        });

    } else {
        $('#crew-1').tooltipster({
            position: 'top',
            trigger: 'click'
        });

        $('#crew-2').tooltipster({
            position: 'left',
            trigger: 'click'
        });

        $('#crew-3').tooltipster({
            position: 'left',
            trigger: 'click'
        });

        $('#crew-4').tooltipster({
            position: 'right',
            trigger: 'click'
        });

    }

   
    // Change image effect on Contac page
   	 if ($("a#fc1").length) {
   	     $("a#fc1").fancybox({
   	         'hideOnContentClick': true,
   	         'transitionIn': 'elastic',
   	         'transitionOut': 'elastic',
   	         'speedIn': 600,
   	         'speedOut': 200,
   	         'overlayShow': false,
   	         'autoScale': true
   	     });
   	 }
   	 if ($("a#fc2").length) {
   	     $("a#fc2").fancybox({
   	         'hideOnContentClick': true,
   	         'transitionIn': 'elastic',
   	         'transitionOut': 'elastic',
   	         'speedIn': 600,
   	         'speedOut': 200,
   	         'overlayShow': false,
   	         'autoScale': true
   	     });
   	 }
   	 if ($("a#fc3").length) {
   	     $("a#fc3").fancybox({
   	         'hideOnContentClick': true,
   	         'transitionIn': 'elastic',
   	         'transitionOut': 'elastic',
   	         'speedIn': 600,
   	         'speedOut': 200,
   	         'overlayShow': false,
   	         'autoScale': true
   	     });
   	 }
   	 if ($("a#fc4").length) {
   	     $("a#fc4").fancybox({
   	         'hideOnContentClick': true,
   	         'transitionIn': 'elastic',
   	         'transitionOut': 'elastic',
   	         'speedIn': 600,
   	         'speedOut': 200,
   	         'overlayShow': false,
   	         'autoScale': true
   	     });
   	 }
  
   	 if ($('#container').length) {

   	     $('#container').imagesLoaded(function () {
   	         if (isMobile.matches) {
   	             $("#hide-on-mobile").remove();
   	         }

   	         $('#container').masonry({
   	             // options
   	             itemSelector: '.m-item'
   	         });
   	     });

   	     //$('#container').masonry({
   	     //    // options
   	     //    itemSelector: '.m-item'
   	     //});
   	 }

   	 jQuery.scrollSpeed(50, 800);

});
