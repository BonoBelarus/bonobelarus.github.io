$(document).ready(function(){

	//CALC SECOND NAV
	(function(){
		var sn_w = 0;
		var sn_li = $('.second-nav li');
		var sn_p = (sn_li.length) * 45;
		for(var i = 0; i < sn_li.length; i++){
			sn_w += $(sn_li[i]).outerWidth();
		}
		$('.second-nav ul').outerWidth(sn_w + sn_p);
		console.log(sn_w.toFixed());
	}());
	//END of CALC SECOND NAV

	$(".owl-carousel").owlCarousel({
		items: 1
	});
	//NAV CLICK
	$(document).mouseup(function(){
		$('.prev-wrap, .next-wrap').removeClass('anim');
	});

	$('.prev-wrap, .next-wrap').mousedown(function(){
		$(this).addClass('anim');
	});
	//END of NAV CLICK
	//FAQ LIST
	function animate_open(elem){
		if($(elem).is('.l1')){
			$('.to-open').find(elem).css({
				'transform': 'rotateZ(45deg) scale(1)',
				'marginLeft': '30px',
				'opacity': '0'
			});
			setTimeout(function() {
				$('.to-open').find(elem).css({
					'transform': 'rotateZ(45deg) scale(1)',
					'opacity': '1',
					'marginLeft': '-10px'
				});
			}, 200);
		}else if($(elem).is('.l2')){
			setTimeout(function(){
				$('.to-open').find(elem).css({
					'transform': 'rotateZ(45deg)',
					'marginLeft': '-30px',
					'opacity': '0'
				});
				setTimeout(function() {
					$('.to-open').find(elem).css({
						'opacity': '1',
						'marginLeft': '0px'
					});
				}, 200);
			}, 100);
		}
	}
	function animate_close(elem) {
		if($(elem).is('.l1')){
			$('.to-open').find(elem).css({
				'transform': 'none',
				'marginLeft': '30px',
				'opacity': '0'
			});
			setTimeout(function() {
				$('.to-open').find(elem).css({
					'opacity': '1',
					'marginLeft': '-10px'
				});
			}, 200);
		}else if($(elem).is('.l2')){
			setTimeout(function(){
				$('.to-open').find(elem).css({
					'transform': 'none',
					'marginLeft': '-30px',
					'opacity': '0'
				});
				setTimeout(function() {
					$('.to-open').find(elem).css({
						'opacity': '1',
						'marginLeft': '-1px'
					});
				}, 200);
			}, 100);
		}
	}
	$('.question').click(function(){
		
		var this_l1 = $(this).find('.l1')
		var this_l2 = $(this).find('.l2')

		if($(this).closest('li').hasClass('active') == true){
			animate_close(this_l1);
			animate_close(this_l2);
		}else{
			animate_open(this_l1);
			animate_open(this_l2);
		}
		$(this).next().slideToggle(650).closest('li').toggleClass('active');
	});
	$('.slide-up').click(function(){
		var this_l1 = $(this).closest('li').find('.l1')
		var this_l2 = $(this).closest('li').find('.l2')
		animate_close(this_l1);
		animate_close(this_l2);
		$(this).closest('li').removeClass('active').find('.faq-active').slideUp(650);
	});
	//END of FAQ LIST
});