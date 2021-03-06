$(document).ready(function(){
	// var nt_ot = $('.second-nav').offset().top
	// $(window).scroll(function(e){
	// 	var nt = $('.second-nav').offset().top;
	// 	var wt = $(window).scrollTop();
	// 	console.log('wt: ' + wt + ' || nt: ' + nt);
	// 	if(wt > nt_ot){
	// 		$('.second-nav').addClass('is-sticky');
	// 	}else{
	// 		$('.second-nav').removeClass('is-sticky');
	// 	}
	// 	if($('body').hasClass('disabled') == true){
	// 		return;
	// 	}
	// });
	//CALC SECOND NAV
	(function(){
		setTimeout(function(){
			var sn_w = 0;
			var sn_li = $('.second-nav li');
			var sn_p = (sn_li.length) * 45;
			for(var i = 0; i < sn_li.length; i++){
				sn_w += $(sn_li[i]).outerWidth();
			}
			//$('.second-nav ul').outerWidth(sn_w + sn_p + 500);
			$('.second-nav ul').outerWidth(1200);
		}, 1000);
	}());
	//END of CALC SECOND NAV
	if($(window).width() > 992){

		$(".owl-carousel").owlCarousel({
			items: 1,
			nav: true,
			navContainer: '.carousel-nav',
			navText: ['<div class="prev-wrap"><div class="prev"></div>','</div><div class="next-wrap"><div class="next"></div></div>']
		});
	}
	//NAV CLICK
	$(document).mouseup(function(){
		$('.prev-wrap, .next-wrap').removeClass('anim');
	});

	(function(){
		var tot_items = $('.carousel .item').length;
		$('.items-count .total').text(tot_items);
		$('.prev-wrap, .next-wrap').mousedown(function(){
			$(this).addClass('anim');
		}).mouseup(function(){
			setTimeout(function(){
				var active_item = $('.carousel .owl-item.active').index();
				$('.items-count .current').text(active_item + 1);
			})
		});
		$('.owl-stage').mouseup(function(){
			setTimeout(function(){
				var active_item = $('.carousel .owl-item.active').index();
				$('.items-count .current').text(active_item + 1);
			})
		});
	}());



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
	$('.question, .item-caption').click(function(){

		if($(this).hasClass('item-caption') && $(window).width() > 1200){
			return;
		}
		
		var this_l1 = $(this).find('.l1')
		var this_l2 = $(this).find('.l2')

		if($(this).closest('li').hasClass('active') == true || $(this).closest('.item').hasClass('active') == true){
			animate_close(this_l1);
			animate_close(this_l2);
		}else{
			animate_open(this_l1);
			animate_open(this_l2);
		}
		$(this).next().slideToggle(650).closest('li, .item').toggleClass('active');
	});
	$('.slide-up').click(function(){
		var this_l1 = $(this).closest('li').find('.l1')
		var this_l2 = $(this).closest('li').find('.l2')
		animate_close(this_l1);
		animate_close(this_l2);
		$(this).closest('li').removeClass('active').find('.faq-active').slideUp(650);
	});
	//END of FAQ LIST
	//FOCUS
	(function(){
		var this_active;
		$('form input, form textarea').focus(function(){
				this_active = $(this).closest('div').addClass('active');
			
		});
		$('form input, form textarea').blur(function(){
			if($(this_active).find('input').val().length == 0){
				$(this_active).removeClass('active');
			}
		});
	}());
	//END of FOCUS
	//FORM
	$("input[type='tel']").keydown(function(event) {
		// Разрешаем: backspace, delete, tab и escape
		if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || 
			// Разрешаем: Ctrl+A
			(event.keyCode == 65 && event.ctrlKey === true) || 
			// Разрешаем: home, end, влево, вправо
			(event.keyCode >= 35 && event.keyCode <= 39)) {
				// Ничего не делаем
				return;
		}
		else {
			// Обеждаемся, что это цифра, и останавливаем событие keypress
			if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
				event.preventDefault(); 
			}   
		}
	});
	//END of FORM
	//POP-UP
	$('.pop-up-call').click(function(e){
		$('body').addClass('disabled');
		$('.pop-up-wrap_call').addClass('active');
		e.preventDefault();
	});
	$('.pop-up-order').click(function(e){
		$('body').addClass('disabled');
		$('.pop-up-wrap_order').addClass('active');
		e.preventDefault();
	});
	$('.pop-up-consult').click(function(e){
		$('body').addClass('disabled');
		$('.pop-up-wrap_consult').addClass('active');
		e.preventDefault();
	});
	$('.pop-up-calc').click(function(e){
		$('body').addClass('disabled');
		$('.pop-up-wrap_calc').addClass('active');
		e.preventDefault();
	});
	$('.pop-up_order_item').click(function(e){

		$('body').addClass('disabled');

		var item_tarif = $(this).closest('.price-title').find('.caption').text().trim();
		var item_price = $(this).closest('.tarif').find('.tarif-price>p').text().trim();
		var item_notion = $(this).closest('.price-title').find('.notion').text().trim();
		$('.item-tarif').text(item_tarif);
		$('.item-price').text(item_price);
		$('.item-price-notion').text(item_notion);

		$('.pop-up-wrap_order-item').addClass('active');
		e.preventDefault();
	});
	
	$('.pop-up-wrap .close').click(function(){
		if($('header nav').hasClass('active') != true){
			$('body').removeClass('disabled');
		}
		this_close = $(this);
		if($(window).width() < 1200){
			setTimeout(function(){
				$(this).closest('.pop-up-wrap').removeClass('active');		
			}, 300);
		}else{
			$(this).closest('.pop-up-wrap').removeClass('active');
		}
		setTimeout(function(){
			$(this_close).closest('.pop-up-wrap').removeClass('active');
		}, 400)
	});
	//END of POP-UP
	//SMALL NAV
	$('.small-nav').click(function(){
		$('body').toggleClass('disabled');
		$(this).closest('nav').toggleClass('active');
		if($(this).closest('nav').hasClass('active') == true){
			$('.sn1').css({
				'transform': 'translateY(14px)'
			});
			setTimeout(function(){
				$('.sn-center').css({'opacity': '0'});
			},150);
			setTimeout(function(){
				$('.sn1').css({
					'transform': 'translateY(14px) rotateZ(50deg)'
				});
			}, 300);
			setTimeout(function(){
				$('.sn1').css({
					'transform': 'translateY(14px) rotateZ(45deg)'
				});
			}, 600);
			$('.sn2').css({
				'transform': 'translateY(-14px)'
			});
			setTimeout(function(){
				$('.sn2').css({
					'transform': 'translateY(-14px) rotateZ(-50deg)'
				});
			}, 300);
			setTimeout(function(){
				$('.sn2').css({
					'transform': 'translateY(-14px) rotateZ(-45deg)'
				});
			}, 600);
		}else{
			$('.sn1').css({
				'transform': 'translateY(14px) rotateZ(50deg)'
			});
			setTimeout(function(){
				$('.sn-center').css({'opacity':'1'});
			}, 290);
			setTimeout(function(){
				$('.sn1').css({
					'transform': 'translateY(14px) rotateZ(0deg)'
				});
			}, 200);
			setTimeout(function(){
				$('.sn1').css({
					'transform': 'translateY(0px)'
				});
			}, 450);
			$('.sn2').css({
				'transform': 'translateY(-14px) rotateZ(-50deg)'
			});
			setTimeout(function(){
				$('.sn2').css({
					'transform': 'translateY(-14px) rotateZ(0deg)'
				});
			}, 200);
			setTimeout(function(){
				$('.sn2').css({
					'transform': 'translateY(0px)'
				});
			}, 450);
		}
	});
	//END of SMALL NAV
	//ANIMATIONS
	$('.result-cards').waypoint(function(direction){
		var li = $('.result-cards>ul>li');
		for(var i = 0; i < li.length; i++){
			$(li[i]).addClass('active');
		}
	}, {
		offset: '90%'
	});

	$('.step').waypoint(function(){
		var this_step = '#' + this.element.id;
		console.log(this_step);
		$(this_step).addClass('active');
	}, {
		offset: '80%'
	});
	//END of ANIMATIONS
	//2 UP
	$('.arr-2-top').click(function(){
         $('body,html').animate({
            scrollTop: 0
        }, 400);
	});
	//END of 2 UP
	//HOVER SOCIAL
	$('.social li').mouseenter(function(){
		var this_width = $(this).outerWidth()
		var items_bg = $('.social .items-bg');
		var ol = $(this).position().left;
		$(items_bg).css({
			'width': this_width,
			'opacity': '1',
			'transform': 'translateX(' + ol + 'px)'
		});
	}).mouseleave(function(){
		$('.social .items-bg').css({
			'opacity': '0'
		});
	});
	//END of HOVER SOCIAL
	$('#cases').waypoint(function(){
		$('#cases').addClass('active');
	}, {
		offset: '20%'
	});

	$('#steps li').waypoint(function(){
		this.element.classList.add('active');
	}, {
		offset: '70%'
	});

	$('#cases .tabs li').click(function(){
		if($(this).hasClass('active') == true){
			return;
		}
		var this_tabs = $(this).closest('.tabs');
		var this_tab_li = $(this_tabs).find('li');
		var this_content_li = $(this).closest('.item-right').find('.tab-content>li');

		$(this_content_li).hide().removeClass('active');
		$(this_tabs).find('li').removeClass('active');
		$(this).addClass('active');

		for(var i = 0; i < $(this_tab_li).length; i++){
			if($(this_tab_li[i]).hasClass('active') == true){
				$(this_content_li[i]).fadeIn().addClass('active')
			}
		}
	});
});