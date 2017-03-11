$(document).ready(function(){

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
				console.log($(contentArr[i]).offset().top);
				setTimeout(function(){
					$('html, body').animate({
						scrollTop: $(contentArr[i]).offset().top - 30
					}, 500);
				}, 350);
			}
		});
	});

	$('#range-slider').ionRangeSlider({
		values: [0, 1, 5, 10, 15, 20, 30, 50, 100],
		grid: true
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
		//slider
	(function(){
		$('#range-slider').change(function(){
			val = $('#range-slider').val();
			xtra = 1000;
			xtraUsersPrice = val * xtra;
			$('.xtra-users .product-notion').text(val);
			$('.xtra-users .product-price').text(xtraUsersPrice);
			console.log(xtraUsersPrice);

		});
	}());
		//slider
		//checkbox
	$('.server-options li:first-child input').prop('checked', true);
	(function(){
		var inputArr = $('.server-options input');
		$('.server-options input').change(function(e){
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
				$('.server .product-price').text(' ');
			}else{
				$(inputArr).prop('checked', false).addClass('disabled').removeClass('active');
				$(this).prop('checked', true).addClass('active').removeClass('disabled');

				var price = $('.form-check .server .product-price');
				$(price).text('');
				var value = $(this).closest('li').find('.price').text().trim();
				$(price).append(value);
				console.log(+value + ' | ' + value);

			}

		});
	}());
		//end of checkbox
		//count total
	(function(){

	}())
		//end of count total
	//END of FORM
	
});