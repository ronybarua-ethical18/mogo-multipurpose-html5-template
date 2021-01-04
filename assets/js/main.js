(function ($) {
	"use strict";
	
    jQuery(document).ready(function($){
		/* full screen image */
		$(window).on('resizeEnd', function(){
			$('.home-slider, .single-slide').height($(window).height());
		});
		
		$(window).on('resize',function(){
			if(this.resizeTo) clearTimeout(this.resizeTo);
			this.resizeTo=setTimeout(function(){
				$(this).trigger('resizeEnd');
			},300);
		}).trigger('resize');
		
 		
		
		
		var owl = $('.slider');
		owl.owlCarousel({
			items:1,
			autoplay:true,
			autoplayHoverPause:false,
			autoplayTimeout:4000,
			dots:true,
			nav:true,
			animateIn:'fadeIn',
			loop:true,
			navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
			margin:0
		});	
		
		var owl = $('.slider2');
		owl.owlCarousel({
			items:1,
			autoplay:true,
			autoplayHoverPause:false,
			autoplayTimeout:4000,
			dots:true,
			nav:true,
			animateIn:'fadeIn',
			loop:true,
			navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
			margin:0
		});	
		
		
		var owl = $('.Client-logo-view');
		owl.owlCarousel({
			items:5,
			autoplay:true,
			autoplayHoverPause:false,
			autoplayTimeout:4000,
			dots:true,
			nav:true,
			animateIn:'',
			loop:true,
			navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
			margin:0
		});
		
		
		
		$('.').venobox({
			framewidth: '400px',        // default: ''
			frameheight: '300px',       // default: ''
			border: '10px',             // default: '0'
			bgcolor: '#5dff5e',         // default: '#fff'
			titleattr: 'data-title',    // default: 'title'
			numeratio: true,            // default: false
			infinigall: true            // default: false
		});	
		
		
		
	});
	
	
    jQuery(window).load(function(){
		
        
	});
	
	
}(jQuery));	