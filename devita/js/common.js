document.addEventListener('DOMContentLoaded', function(){

	if($(window).width() > 1200){
		$('#video').tubular({videoId: 'wO6jaDmJLog'});
	}

	var card_gallery = $('#popup-card .gallery .slider');
	var card_preview = $('#popup-card .preview');

	$(card_gallery).slick({
		vertical: true,
		slidesToShow: 3,
		asNavFor: $(card_preview).find('.slider'),
		infinite: false,
		nextArrow: '<div class="next-gallery"><img src="img/arrow-down.png" alt=""></div>',
		prevArrow: '<div class="prev-gallery"><img src="img/arrow-down.png" alt=""></div>'
	});

	$(card_preview).find('.slider').slick({
		asNavFor: $(card_gallery),
		slidesToShow: 1,
		infinite: false,
		appendArrows: card_preview.find('.nav'),
		nextArrow: '<div class="next-preview"><img src="img/preview-arrow.png" alt=""></div>',
		prevArrow: '<div class="prev-preview"><img src="img/preview-arrow.png" alt=""></div>',
		// responsive: [
		// 	{
		// 		breakpoint: 1200,
		// 		asNavFor: null,
		// 		settings: {
		// 			nextArrow: '<div class="next-preview"></div>',
		// 			prevArrow: '<div class="prev-preview"></div>',
		// 		}
		// 	}
		// ]
	});

	var gallery = $('#product-card .gallery');
	var preview = $('#product-card .preview');
	
	$(gallery).slick({
		vertical: true,
		slidesToShow: 3,
		asNavFor: $(preview).find('.slider'),
		infinite: false,
		nextArrow: '<div class="next-gallery"><img src="img/arrow-down.png" alt=""></div>',
		prevArrow: '<div class="prev-gallery"><img src="img/arrow-down.png" alt=""></div>'
	})
	$(preview).find('.slider').slick({
		asNavFor: $(gallery),
		slidesToShow: 1,
		infinite: false,
		appendArrows: preview.find('.nav'),
		nextArrow: '<div class="next-preview"><img src="img/preview-arrow.png" alt=""></div>',
		prevArrow: '<div class="prev-preview"><img src="img/preview-arrow.png" alt=""></div>',
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					nextArrow: '<div class="next-preview"></div>',
					prevArrow: '<div class="prev-preview"></div>',
				}
			}
		]
	});

	var total_slides_product = $('#product-card .preview .item');
	$('#product-card .preview .total').text(total_slides_product.length);
	$(preview).find('.slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
		$('#product-card .preview .current').text(currentSlide+1);
	});
	var popup_total_slides_product = $('#popup-card .preview .item');
	$('#popup-card .preview .total').text(popup_total_slides_product.length);
	$(card_preview).find('.slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
		$('#popup-card .preview .current').text(currentSlide+1);
	});

	var descr_and_rev_Slider = $('#descr-and-rev .slider');
	descr_and_rev_Slider.slick({
		fade: true,
		adaptiveHeight: true
	});

	if($(window).width() > 767 ){
		//product card slider

		$('#descr-and-rev .tabs>ul>li:first-child').addClass('active');
		var descr_tabs = $('#descr-and-rev .tabs li');
		descr_tabs.click(function(e){
			var slide = $(e.currentTarget).index();
			$(descr_and_rev_Slider).slick('slickGoTo', slide);

			if($(e.currentTarget).hasClass('active')){
				return;
			}else{
				descr_tabs.removeClass('active')
				$(e.currentTarget).addClass('active');
			}
		});
	}else{
		$('#descr-and-rev .tabs .to-open').click(function(e){
			$(e.currentTarget).next().stop().slideToggle().closest('li').toggleClass('active');
		});
		$('#descr-and-rev .tabs>ul>li').first().find('.to-open').trigger('click');
		
	}

	var best_of_slider = $('#best-of .slider')
	best_of_slider.slick({
		slidesToShow: 1,
		appendArrows: $('#best-of .nav'),
		nextArrow: '<div class="next"><img src="img/best-of-arrow.png" alt=""></div>',
		prevArrow: '<div class="prev"><img src="img/best-of-arrow.png" alt=""></div>',
		dots: true
	});

	var size_list = $('.size li');
	size_list.click(function(e){
		if($(e.currentTarget).hasClass('active')){
			return;
		}else{
			size_list.removeClass('active');
			$(e.currentTarget).addClass('active');
		}
	});

	var base_price_popup = +$('#popup-card .price .num').text();
	$('#popup-card .count .minus, #popup-card .count .plus').click(function(e){
		var price = $('#popup-card .price .num');
		var price_num = +price.text();
		var current_count = $('#popup-card .count .current');
		var current_num = +current_count.text();
		var plus = $(e.currentTarget).hasClass('plus');
		var afterPrice = price_num;

		if(plus === false && current_num <= 1){
			return;
		}

		switch(plus){
			case true:
				current_count.text(current_num + 1);
				afterPrice += base_price_popup;
			break;
			case false:
				current_count.text(current_num - 1);
				afterPrice -= base_price_popup;
		}
		price.text(afterPrice)
	});

	var base_price = +$('#product-card .price .num').text();
	$('#product-card .count .minus, #product-card .count .plus').click(function(e){
		var price = $('#product-card .price .num');
		var price_num = +price.text();
		var current_count = $('#product-card .count .current');
		var current_num = +current_count.text()
		var plus = $(e.currentTarget).hasClass('plus');
		var afterPrice = price_num;

		if(plus === false && current_num <= 1){
			return;
		}

		switch(plus){
			case true:
				current_count.text(current_num + 1);
				afterPrice += base_price;
			break;
			case false:
				current_count.text(current_num - 1);
				afterPrice -= base_price;
		}
		price.text(afterPrice)
	});

	$('#cart li .plus').click(function(){
		var item_price = +$(this).closest('li').find('.price .num').text();
		var counter = +$(this).closest('li').find('.current').text().trim();
		var base_price = item_price/counter;
		
		item_price += base_price;
		
		$(this).closest('li').find('.price .num').text(item_price);
		$(this).closest('li').find('.current').text(counter+=1);
		
		var total = $('#cart .list .price .num');
		var total_num = 0;
		for(var i = 0; i < total.length; i++ ){
			total_num += +$(total[i]).text();
			console.log(total);
		}
		$('#cart .total .num').text(total_num);
		console.log(base_price);
	});
	
	$('#cart li .minus').click(function(){
		var item_price = +$(this).closest('li').find('.price .num').text();
		var counter = +$(this).closest('li').find('.current').text().trim();
		var base_price = item_price/counter;
		
		if(counter <= 1) return;

		item_price -= base_price;
		
		$(this).closest('li').find('.price .num').text(item_price);
		$(this).closest('li').find('.current').text(counter-=1);
		
		var total = $('#cart .list .price .num');
		var total_num = 0;
		for(var i = 0; i < total.length; i++ ){
			total_num += +$(total[i]).text();
			console.log(total);
		}
		$('#cart .total .num').text(total_num);
		console.log(base_price);
		
	});
	var about_slider = $('#about-slider .slider');
	about_slider.slick({
		slidesToShow: 1,
		nextArrow: '<div class="next"><img src="img/preview-arrow.png" alt=""></div>',
		prevArrow: '<div class="prev"><img src="img/preview-arrow.png" alt=""></div>'
	});
	
	setTimeout(function(){
		var famous_slider = $('#famous-devita .slider');
		var total_slides_product = $('#famous-devita .slider .item');
		$('#famous-devita .total').text(total_slides_product.length);
		famous_slider.slick({
			infinite: false,
			appendArrows: $('#famous-devita .nav'),
			nextArrow: '<div class="next"><img src="img/preview-arrow.png" alt=""></div>',
			prevArrow: '<div class="prev"><img src="img/preview-arrow.png" alt=""></div>',
			dots: true
		});
		famous_slider.on('afterChange', function(event, slick, currentSlide, nextSlide){
			$('#famous-devita .current').text(currentSlide+1);
		});
	}, 1000);

	var article_slider = $('#article .slider');
	article_slider.slick({
		infinite: false,
		dots: true,
		nextArrow: '<div class="next"><img src="img/preview-arrow.png" alt=""></div>',
		prevArrow: '<div class="prev"><img src="img/preview-arrow.png" alt=""></div>'
	});

	$('#faq .item .caption, #payment .tabs .header, #profile .mobile-history-box table').click(function(e){
		if($(e.currentTarget).closest('li').hasClass('active') == true){
			$(e.currentTarget).closest('li').removeClass('active').find('.hidden-content').slideUp();
		}else{
			$(e.currentTarget).closest('ul').find('li').removeClass('active').find('.hidden-content').slideUp();
			$(e.currentTarget).closest('li').addClass('active').find('.hidden-content').slideDown();
		}
	});

	var sections = $('#faq .item'),
		nav = $('aside nav'),
		nav_height = nav.outerHeight(),
		wh = $(window).height();
	$(window).on('scroll', function () {
		var cur_pos = $(this).scrollTop();
		var xtra_add = 0;
		if($(window).width() < 1024){
			xtra_add = -60
		}
		sections.each(function() {
			var top = $(this).offset().top - nav_height + xtra_add,
			bottom = top + $(this).outerHeight();

			if (cur_pos >= top && cur_pos <= bottom) {

				nav.find('li').removeClass('active');
				sections.removeClass('active');
				
				$(this).addClass('active');
				nav.find('a[href="#'+$(this).attr('id')+'"]').closest('li').addClass('active');
			}

		});
	});

	if($(window).width() > 1199 ){
		$('aside.faq').stick_in_parent({
			offset_top: -50
		});

		// $('aside.blog').stick_in_parent({
		// 	offset_top: 0
		// });
		$('#make-order .in-cart').stick_in_parent({
			offset_top: 50
		});

		$('aside.profile').stick_in_parent({
			offset_top: 50
		});
	}

	function scroll2Sec(e){
		$(e.target).closest('nav').removeClass('active');
		var link = $(e.currentTarget).attr('href');
		var section = $(link);

		var xtra_offset = -50;
		
		$('body,html').animate({
			scrollTop: $(section).offset().top + xtra_offset
		}, 1000);
		e.preventDefault();
	}

	$('aside nav a').click(scroll2Sec);

	$('.bottom-line .coupon').click(function(){
		$('.coupon .step-1').hide();
		$('.coupon .step-2').show();
	});

	$('#profile .item-show p').click(function(e){
		var item_show = $(e.currentTarget).closest('.item-show').find('p');
		
		$(e.currentTarget).closest('.item').find('.item-hidden').slideToggle();
		
		if($(e.currentTarget).hasClass('active') != true){
			item_show.removeClass('active');
			$(e.currentTarget).addClass('active')();
		}else{
			item_show.addClass('active');
			$(e.currentTarget).removeClass('active');
		}		
	});

	$('.like').click(function(e){
		$(e.currentTarget).toggleClass('active');
	});

	$('.pagination li').click(function(e){
		$(e.currentTarget).closest('ul').find('li').removeClass('active');
		$(e.currentTarget).addClass('active');
	});

	$('.dropdown>a').click(function(e){
		e.preventDefault();
		$(e.currentTarget).closest('.dropdown').toggleClass('active').find('ul').slideToggle();
	});

	$('.mobile-nav').click(function(e){

		var w = $('.major-menu .content').width();

		$('.major-menu').toggleClass('active');
		$(e.currentTarget).closest('header').toggleClass('active');
		$('.mobile-menu').toggleClass('active');
		
		if($(window).width() > 500){
			var ol;
			if($('.major-menu').hasClass('active') == true){
				ol = (w/2) - 100
			}else{
				ol = 0
			}

			var like = $('header .like').css({
				'transform': 'translateX(-' + ol + 'px)'
			});
		}

	});

	$(".dropdown-price #slider-price").ionRangeSlider({
		type: "double",
		min: 1,
		max: 2000,
		from: 100,
		to: 1000,
		hide_min_max: true,
		hide_from_to: true,
		grid: false,
		onChange: function (data) {
			var from = data.from;
			var to = data.to;

			$('#price-from').val(from);
			$('#price-to').val(to);
		}
	});

	var slider = $('.dropdown-price #slider-price').data('ionRangeSlider');;

	$('#price-from, #price-to').change(function(){
		var value = $(this).val();
		var id = $(this).attr('id');

		switch(id){
			case 'price-from':
				slider.update({
					from: value
				});
			break;
			case 'price-to':
				slider.update({
					to: value
				});
			break;
		}
	});

	if($(window).width() < 1200){
		$('#catalog .filter > p').click(function(){
			$(this).closest('.filter').toggleClass('active').find('.wrap').slideToggle();
		});
	}

	$('.popup .close').click(function(){
		$(this).closest('.popup-wrap').removeClass('active');
		$('body').removeClass('disabled');
	});

	var like_num = +$('.states .like .total').text();
	var num = 0;
	$('a[data-notion]').click(function(e){
		console.log('success');
		e.preventDefault();
		if($(this).hasClass('active') != true){
			num -= 1;
			$('.states .like .total').text(like_num + num);
			if($('.states .like .total').text().trim() == 0){
				console.log('true');
				$('.states .like .total').text(' ');
			}
			return;
		}else{
			var notion = $(this).data('notion');
			num += 1;
			$('.states .like .total').text(like_num + num);
			$('.'+notion).addClass('active');
			setTimeout(function(){
				$('.'+notion).removeClass('active');
			}, 3000);
		}
	});

	$('a[data-popup]').click(function(e){
		e.preventDefault();

		var popup = $(this).data('popup');

		switch(popup){
			case "popup-wrap-add":
				$('#popup-wrap-card').removeClass('active');
				$('body').removeClass('disabled');
				setTimeout(function(){
					var body = $("html, body");
					body.stop().animate({scrollTop:0}, 500, 'swing', function() { 
						$('.cart-preview').addClass('active');
						setTimeout(function(){
							$('.cart-preview').removeClass('active');
						}, 3000);
					});
				}, 400);
				break;
			case "popup-wrap-card":
				$('#' + popup).addClass('active');
				$('body').addClass('disabled');
				var item_price = +$('.item-card .price .num').text().trim();
				var count = +$('.current').last().text().trim();
				var base_price = item_price/count;
				$('.item-card .price .num').text(item_price / count);
				$('.item-card .current').text(1);
			break;
			case "popup-wrap-wish":
				if($(this).hasClass('active') != true) return;
				$('#' + popup).addClass('active');
				$('body').addClass('disabled');
			break;
			default:
				$('body').addClass('disabled');
				$('#' + popup).addClass('active');
		}
	});

	$('header .search').click(function(){
		$('header .search-bar').slideToggle().find('input');
		setTimeout(function(){
			$('header .search-bar').find('input').focus();
		}, 500)
	});
	$('header .search-bar .close').click(function(){
		$('.search-bar').slideUp();
	});

	$('.states .like a').click(function(e){
		e.preventDefault();
	});

	$('.add-to-cart').click(function(e){
		e.preventDefault();
		var caption_value = $('.product-title').text();
		var img_value = $('.item-card .gallery .item:first-child img').attr('src');
		var size_value = $('.item-card .size .active').text().trim();
		var counter_value = +$('.item-card .count .current').text().trim();
		var price_value = +$('.item-card .price .num').text() / counter_value;
		
		var img = '<div class="img"><img src="' + img_value + '", alt=""></div>';
		var caption = '<div class="caption">' + caption_value + '</div>';
		var size = '<div class="size"><p><span>Размер: </span>' + size_value + '</p></div>';
		var counter = '<div class="conter"><p><span>' + counter_value + ' x </span>' + price_value + ' BYN</p></div>'
		var info = '<div class="info">' + caption + size + counter + '</div>';
		var elem = '<div class="flex-wrap">' + img + info + '<div>';
		var delay = 0;

		$('header .cart-preview').prepend(elem);
		var body = $("html, body");

		if($(this).hasClass('popup-btn') == true){
			$(e.target).closest('.popup-wrap').removeClass('active');
			$('body').removeClass('disabled');
			delay = 400;
		}

		setTimeout(function(){
			body.stop().animate({scrollTop:0}, 500, 'swing', function() { 
				$('.cart-preview').addClass('active');
				setTimeout(function(){
					$('.cart-preview').removeClass('active');
				}, 3000);
			});
		}, delay);

		var items_in_cart = $('.cart-preview .flex-wrap').length;
		console.log(items_in_cart);
		$('.cart').addClass('full').find('.total').text(items_in_cart);
	});

	$('#cart .delete').click(function(){
		var tot_price = +$('form .total .num').text().trim();
		var item_price = +$(this).closest('li').find('.price .num').text().trim();
		
		$(this).closest('li').remove();
		$('form .total .num').text(tot_price - item_price);
	});

	$('#popup-testimonials .stars input').change(function(){
		var current = $(this).closest('li').index();
		$('#popup-testimonials .stars li').removeClass('active');
		$(this).closest('li').addClass('active').prevAll().addClass('active');
	});

	$('#popup-testimonials .stars li').hover(function(){
		$('#popup-testimonials .stars li').removeClass('active');
		console.log('success');
		$(this).addClass('active').prevAll().addClass('active');
	},function(){
		$('#popup-testimonials .stars li').removeClass('active');
		$(this).closest('ul').find('input:checked').closest('li').addClass('active').prevAll().addClass('active');
	});
	
	var cour_door_dpd = $('#make-order .delivery .item').first().clone();
	$(cour_door_dpd).find('.caption').text('Курьером DPD «до двери»');
	$(cour_door_dpd).find('.clarify').text('от 3 до 4 рабочих дней');
	$(cour_door_dpd).find('.price').text('450 руб.');
	
	var self_dpd = $('#make-order .delivery .item').first().clone();
	$(self_dpd).find('.caption').text('Самовывоз со склада DPD');
	$(self_dpd).find('.clarify').text('от 3 до 4 рабочих дней');
	$(self_dpd).find('.price').text('200 руб.');

	var cour_door_ems = $('#make-order .delivery .item').first().clone();
	$(cour_door_ems).find('.caption').text('Курьером EMS «до двери»');
	$(cour_door_ems).find('.clarify').text('от 1 до 3 рабочих дней');
	$(cour_door_ems).find('.price').text('5 бел.руб.');
	
	var belpost = $('#make-order .delivery .item').first().clone();
	$(belpost).find('.caption').text('В отделение Белпочты');
	$(belpost).find('.clarify').text('от 2 до 5 рабочих дней');
	$(belpost).find('.price').text('бесплатно');
	
	var personal = $('#make-order .delivery .item').first().clone();
	$(personal).find('.caption').text('Персональный способ доставки');
	$(personal).find('.clarify').text('Наши менеджеры свяжутся с вами и предложат оптимальный способ доставки для Вас.');
	$(personal).find('.price').text('');

	$('#make-order select[name="country"]').change(function(){
		var value = $(this).val();
		var payment;
		var items_wrap = $('#make-order .delivery .items');

		$(items_wrap).empty();
		switch(value){
			case 'Россия':
				payment = 'Карта Visa/Mastercard';
				$(items_wrap).append(cour_door_dpd);
				$(items_wrap).append(self_dpd);
				$('.pay-method input[value="Наложенный платеж"]').closest('.item').show();
			break;
			case 'Казахстан':
				payment = 'Карта Visa/Mastercard';
				$(items_wrap).append(cour_door_dpd);
				$(items_wrap).append(self_dpd);
				$('.pay-method input[value="Наложенный платеж"]').closest('.item').show();
			break;
			case 'Украина':
				payment = 'Карта Visa/Mastercard';
				$(items_wrap).append(belpost);
				$('.pay-method input[value="Наложенный платеж"]').closest('.item').hide();
			break;
			case 'Беларусь':
				payment = 'Карта Visa/Mastercard/Белкард';
				$(items_wrap).append(cour_door_ems);
				$(items_wrap).append(belpost);
				$('.pay-method input[value="Наложенный платеж"]').closest('.item').show();
				break;
			default:
				payment = 'Карта Visa/Mastercard';
				$(items_wrap).append(personal);
				$('.pay-method input[value="Наложенный платеж"]').closest('.item').hide();
			}
			
			$('#pay-method-1').val(payment);
			$('label[for="pay-method-1"] .caption').text(payment);
		});
});