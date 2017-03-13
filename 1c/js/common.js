$(document).ready(function(){

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

	if($(window).width() > 1023){
		$('.owl-carousel').owlCarousel({
			items: 1,
			nav: true,
			dots: true,
			dotData: true,
			dotsContainer: '#oppo-links',
			navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
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
			$('.clouds .forward-cloud img').css({
				'transform': 'translate(-' + x/700 + '%,-' + y/100 + '%)'
			});
		});
	}());
	//END of PARALLAX CLOUDS
	//FORM
	$('#range-slider').ionRangeSlider({
		values: [0, 1, 5, 10, 15, 20, 30, 50, 100],
		grid: true
	});
		//slider
	(function(){
		$('#range-slider').change(function(){
			val = $('#range-slider').val();
			$(this).attr('data-count-users', val);
			xtra = 1000;
			xtraUsersPrice = val * xtra;
			$('.xtra-users .product-notion').attr('data-xtra-users-qnt', val).text(val);
			$('.xtra-users .product-price').attr('data-xtra-users-price', xtraUsersPrice).text(xtraUsersPrice);
			console.log(xtraUsersPrice);

		});
	}());
		//slider
		//checkbox
	$('.server-options li:first-child input').prop('checked', true);
	(function(){
		var inputArr = $('.server-options input');
		$(inputArr).change(function(e){
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
				$('.server .product-price').attr('data-server-price', '').text(' ');
			}else{
				$(inputArr).prop('checked', false).addClass('disabled').removeClass('active');
				$(this).prop('checked', true).addClass('active').removeClass('disabled');

				var price = $('.form-check .server .product-price');
				$(price).text('');
				var value = $(this).closest('li').find('.price').text().trim();
				$(price).attr('data-server-price', value).append(value);
				console.log(+value + ' | ' + value);
			}
		});

	}());
		//end of checkbox
		//count total
	(function(){
		$('form input').change(function(){
			countTotal();
		});
		function countTotal(){
			var priceLicense = $('.price').attr('data-license-price').trim().replace(/[^-0-9]/gim,'');
			var productPrice = $('.server .product-price').attr('data-server-price').replace(/[^-0-9]/gim,'');
			var xtraUsersPrice = $('.xtra-users .product-price').attr('data-xtra-users-price').replace(/[^-0-9]/gim,'');
			console.log(priceLicense + " | " + productPrice + " | " + xtraUsersPrice);
		}
	}())
		//end of count total
	//END of FORM
	//DROPDOWN SLIDER
	$('.caption').click(function(){
		thisLi = $(this).closest('li');
		$(thisLi).toggleClass('active').find('.drop-content').slideToggle();
	});
	//END of DROPBOWN SLIDER

	//FADE IN POP-UP
	$('#myList .btn').click(function(e){
		$('.pop-up-case, .pop-up-case-wrap').addClass('active');
		$('body').addClass('disabled');
		e.preventDefault();
	});
	$('.pop-up-case .close').click(function(){
		$('.pop-up-case, .pop-up-case-wrap').removeClass('active');
		$('body').removeClass('disabled');
	});
	//END of FADE IN POP-UP
	//MOBILE-MENU
	$('.mobile-menu').click(function(){
		$(this).toggleClass('active');
		$('nav ul').slideToggle();
	});
	//END of MOBILE-MENU
	
});