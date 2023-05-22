$(document).ready(function(){
	if( $('.slide').length > 0){
		if( $('.slide').length > 1){
			$('.slide').wrap( '<li class="slideElement"></li>' );
			$('li.slideElement').wrapAll('<ul class="bxslider"></ul>');
			//erase annoying auto p...
			if ( $( 'ul.bxslider' ).parent().is( 'p' ) ) {
				$( 'ul.bxslider' ).unwrap();
			}
			//go...
			$('.bxslider').bxSlider({
				auto: true,
				mode: 'fade',
				speed: 800,
				pause: 6000,
				pager:true,
				captions: true,
				controls:false
			});
		}	
	}
	if (("ontouchstart" in document.documentElement)) {
		$('#nav').addClass('js');
		$('#nav.js li.menu-item-has-children > a').attr('href', 'javascript:void(0)');
		$('#nav.js li.menu-item-has-children').on('click',function(){
		
			$(this).toggleClass('sfhover close');
		
			if($('li.sfhover').length > 1){
				$('#nav.js li.menu-item-has-children').removeClass('sfhover close');
				$(this).toggleClass('sfhover close');
			}
			
		});
		
	}
	
});