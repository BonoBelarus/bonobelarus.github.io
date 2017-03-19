$(document).ready(function(){

	$(window).scroll(function(){
		if($('header').offset().top > 5){
			$('header').addClass('is-sticky');
		}else{
			$('header').removeClass('is-sticky');
		}
	});

	String.prototype.allReplace = function(obj) {
		var retStr = this;
		for (var x in obj) {
			retStr = retStr.replace(new RegExp(x, 'g'), obj[x]);
		}
		return retStr;
	};

	function toNumber(string){
		return parseFloat( string.allReplace({',': '.', ' ': ''}) );
	};

	function countTotal(){
		var priceLicense = $('.price').attr('data-license-price');
		var productPrice = $('.server .product-price').attr('data-server-price');
		var xtraUsersPrice = $('.xtra-users .product-price').attr('data-xtra-users-price');
		var prices = [priceLicense, productPrice, xtraUsersPrice];
		var total = 0;
		for(var i = 0; i<prices.length; i++){
			total += toNumber(prices[i]);
		}
		console.log(xtraUsersPrice);
		$('#total-price').text(total.toFixed(2));
	}

	function countCases(){
		var word;
		var hidden = $("#myList li:hidden");
		var visible = $("#myList li:visible");
		$('#quant-case').text(hidden.length);
		switch(visible.length){
			case 12:
				$('#loadMore').show();
				$('#showLess').hide();
		}
		switch(hidden.length){
			case 0:
				$('#loadMore').hide();
				$('#showLess').css({
					'display': 'inline-block'
				});
				break;
			case 1: console.log('1');
			word = 'кейс'
				break;
			case 2:
			case 3:
			case 4:
				console.log('2');
				word = 'кейса';
				break;
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
				word = 'кейсов';
			
		}
		$('#case-word').text(word);
	}

	//SHOW MORE
	size_li = $("#myList li").size();
	x=6;
	var quant = $('#quant-case');
	$('#myList li:lt('+x+')').fadeIn();
	countCases();
	$('#loadMore').click(function (e) {
		x= (x+6 <= size_li) ? x+6 : size_li;
		$('#myList li:lt('+x+')').fadeIn();
		countCases();
		e.preventDefault();
	});
	$('#showLess').click(function (e) {
		x=(x-6<0) ? 6 : x-6;
		countCases();
		$('#myList li').not(':lt('+x+')').hide();
		var top = $(e.target).offset().top;
		$('html, body').animate({
			scrollTop: top - 650
		});
		e.preventDefault();
	});
	//END of SHOW MORE

	var del = 150;
	$('.anim').each(function(i){
		del += 150;
		var iElem = $(this);
		setTimeout(function(){
			$(iElem).addClass('active');
		}, del);
	});


	$('.faq-txt .owl-carousel').owlCarousel({
		items: 1,
		nav: true,
		navText: ['','<img src="img/svg/calc_tip.svg"><p>Ещё совет</p>'],
		loop: true
	});

	if($(window).width() > 1023){
		$('.carousel-wrap .owl-carousel').owlCarousel({
			items: 1,
			nav: true,
			loop: true,
			dots: true,
			dotData: true,
			dotsContainer: '#oppo-links',
			navText: ['<img src="img/svg/arrow-left.svg">','<img src="img/svg/arrow_right.svg">']
		});
	}


	var linksArr = $('#for-whom .tab-links li');
	var contentArr = $('#for-whom .tab-content');
	$('.tab-links li').click(function(e){
		$('.tab-links li').removeClass('active');
		$('.tab-content').removeClass('active');
		$(this).addClass('active');
		$(linksArr).each(function(i){
			if($(linksArr[i]).hasClass('active') == true){
				$(contentArr[i]).addClass('active');
			}
		});
	});


	//PARALLAX CLOUDS
	(function(){
		$('body').mousemove(function(e){
			var x = e.clientX;
			var y = e.clientY;
			$('.clouds .back-cloud img').css({
				'transform': 'translate(' + x/700 + '%,' + y/150 + '%)'
			});
			$('.plus').css({
				'transform': 'translate(' + x/10 + '%,' + y/10 + '%)'
			});
			$('.clouds .forward-cloud img').css({
				'transform': 'translate(-' + x/700 + '%,-' + y/100 + '%)'
			});
			$('.circle_small').css({
				'transform': 'translate(-' + x/10 + '%,-' + y/10 + '%)'
			});
		});
	}());
	//END of PARALLAX CLOUDS
	//FORM
	$('#range-slider').ionRangeSlider({
		values: [0, 1, 5, 10, 15, 20, 30, 50, 100],
		grid: true,
		from: 2
	});
		//slider
	function checkSlider(){
		val = $('#range-slider').val();
		$(this).attr('data-count-users', val);
		var xtraUsersPrice;
		switch(val){
			case '0': xtraUsersPrice = '0'; break;
			case '1': xtraUsersPrice = '254,10'; break;
			case '5': xtraUsersPrice = '870,90'; break;
			case '10': xtraUsersPrice = '1 669,20'; break;
			case '15': xtraUsersPrice = '2 540,10'; break;
			case '20': xtraUsersPrice = '3 145,20'; break;
			case '30': xtraUsersPrice = '4 814,40'; break;
			case '50': xtraUsersPrice = '7 548,00'; break;
			case '100': xtraUsersPrice = '14515,20';
		}

		
		//console.log( toNumber(xtraUsersPrice) );


		$('.xtra-users .product-notion').attr('data-xtra-users-qnt', val).text(val);
		$('.xtra-users .product-price').attr('data-xtra-users-price', xtraUsersPrice).text(xtraUsersPrice);
		//console.log(xtraUsersPrice);
	}
	$('#range-slider').change(function(){
		checkSlider();
	});
		//slider
		//checkbox
	$('.server-options li:first-child input').prop('checked', true);
	(function(){
		var inputArr = $('.server-options input');
		$(inputArr).change(function(e){
			var thisLi = $(this).closest('li');
			$('.server-options li').removeClass('active');
			var nonCheckedArr = [];
			$(inputArr).each(function(i){

				if($(this).prop('checked') == false){
					nonCheckedArr.push($(this));
				}

			});

			if(nonCheckedArr.length == inputArr.length){
				$('.form-check .server').addClass('disabled');
			}else{
				$('.form-check .server').removeClass('disabled');
			}

			if($(this).hasClass('active') == true){
				$(this).removeClass('active').addClass('disabled');
				$('.server .product-price').attr('data-server-price', '0').text(' ');
				$(thisLi).removeClass('active');
			}else{
				$(inputArr).prop('checked', false).addClass('disabled').removeClass('active');
				$(this).prop('checked', true).addClass('active').removeClass('disabled');
				$(thisLi).addClass('active')

				var price = $('.form-check .server .product-price');
				$(price).text('');
				var value = $(this).closest('li').find('.price').text().trim();
				$(price).attr('data-server-price', value).append(value);
				//console.log(+value + ' | ' + value);
			}
		});

	}());
		//end of checkbox
	//count total
		$('form input').change(function(){
			countTotal();
		});
	//end of count total
	//END of FORM
	//DROPDOWN SLIDER
	$('#for-whom .mobile-links ul>li:first-child').addClass('active').find('.drop-content').slideDown();
	$('.caption').click(function(){
		thisLi = $(this).closest('li');
		$(thisLi).toggleClass('active').find('.drop-content').slideToggle();
	});
	//END of DROPBOWN SLIDER

	//FADE IN POP-UP
	$('body').click(function(e){
		console.log(e.target);
		if($(e.target).closest('.pop-up').length < 1 && $(e.target).hasClass('link') != true){
			$('.pop-up, .pop-up-wrap').removeClass('active');
			$('body').removeClass('disabled');
		}
	});
	
	$('#myList .btn').click(function(e){
		$('.pop-up-case, .pop-up-case-wrap').addClass('active');
		$('body').addClass('disabled');
		e.preventDefault();
	});
	$('.to-consult').click(function(e){
		$('.pop-up-consult-wrap, #pop-up-consult').addClass('active');
		$('body').addClass('disabled');
		e.preventDefault();
	});
	$('.to-order').click(function(e){
		$('.pop-up-order-wrap, #pop-up-order').addClass('active');
		$('body').addClass('disabled');
		e.preventDefault();
	});
	$('.server-faq-link').click(function(e){
		$('.pop-up-server-wrap, #pop-up-server').addClass('active');
		$('body').addClass('disabled');
		e.preventDefault();
	});

	$('.pop-up .close').click(function(){
		$('.pop-up, .pop-up-wrap').removeClass('active');
		$('body').removeClass('disabled');
	});
	//END of FADE IN POP-UP
	//MOBILE-MENU
	$('.mobile-menu').click(function(){
		$(this).toggleClass('active');
		$('body').toggleClass('disabled');
		$('nav ul').slideToggle();
	});
	//END of MOBILE-MENU
	countTotal();
	checkSlider();

(function() {
	var t = $(window).scrollTop();
	t > 0 ? $(".top-line").addClass("is-sticky") : $(".top-line").removeClass("is-sticky")
}());

});