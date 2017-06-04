// $('.review-box').slick({
// 	nextArrow: '<div class="next"></div>',
// 	prevArrow: '<div class="prev"></div>',
// 	appendArrows: $('#reviews .nav'),
// 	dots: true,
// 	infinite: false,
// 	appendDots: $('#reviews .dots')
// });

function onConfirmAlert(e){
	$(e.currentTarget).trigger('reset');
	setTimeout(function(){
		$('body').removeClass('disabled');
		$('.popup-wrap').removeClass('active');
	}, 1000);
}

$('form').submit(function(e){
	e.preventDefault();

	swal({
		title: 'Ваша заявка отправлена!',
		text: 'С вами свяжутся в ближайшее время.',
		type: 'success',
		timer: 3000
	}).then(function(e){
		onConfirmAlert(e);
	}, function(e){
		onConfirmAlert(e);
	});
});


$('#expert-opinion .expert').slick({
	dots: true
});
$('.owl-carousel').owlCarousel({
	items: 1,
	dots: true
});

var mySlick = $('.items').slick({
	nextArrow: '<div class="next"><div></div></div>',
	prevArrow: '<div class="prev"><div></div></div>',
	dots: true
});

$('.items').on('afterChange', function(slick, currentSlide){
	var dots_list = $(currentSlide.$list).closest('.product-card').find('.product-list li');
	$(dots_list).removeClass('active');
	dots_list[currentSlide.currentSlide].classList.add('active');
});

$('.product-list li').click(function(e){
	var list = $(e.target).closest('.product-list').find('li');
	for(var i = 0; i < list.length; i++){
		if(list[i] == e.currentTarget){
			console.log(list[i]);
			$(e.currentTarget).closest('.product-card').find('.items').slick('slickGoTo', i);
		}
	}
});
//trigger dots

//END OF trigger dots

var sections = $('section'),
	nav = $('nav'),
	nav_height = nav.outerHeight();

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
			
			if($(this).attr('id') == 'technology' && $(this).hasClass('disable-count') == false){
				toCountNumbers('#technology');
			}
			
			$(this).addClass('active disable-count');
			nav.find('a[href="#'+$(this).attr('id')+'"]').closest('li').addClass('active');
		}

	});
});

function popup_show(e){
	var link = e.target.classList.value.match(/to-[a-z]*/);
	var popup = link[0].replace('to', '.popup');
	console.log(popup);
	$(popup).addClass('active');
	$('body').addClass('disabled');
}
function popup_close(e){
	$('body').removeClass('disabled');
	$(e.currentTarget).closest('.popup-wrap').removeClass('active');
}

$('.to-popup').click(popup_show);
$('.popup .close').click(popup_close);

function scroll2Sec(e){
	$('body').removeClass('disabled');
	$(e.target).closest('nav').removeClass('active');
	var link = $(e.currentTarget).attr('href');
	var section = $(link);

	var xtra_offset = 0;
	switch(link){
		case '#where-2-buy':
		case '#about':
		case '#products':
			if($(window).width() > 1024){
				xtra_offset = 80; break;
			}else{
				xtra_offset = -60; break;
			}
		case '#technology':
			if($(window).width() > 1024){
				xtra_offset = 80; break;
				toCountNumbers('#technology');
			}else{
				toCountNumbers('#technology');
				xtra_offset = -60; break;
			}
		break;
	}
	
	$('body,html').animate({
		scrollTop: $(section).offset().top + xtra_offset
	}, 1000);
	animateNav(e)
	e.preventDefault();
}
$('nav a').click(scroll2Sec);
$('#skidka form .caption').click(scroll2Sec);

//phone mask
input_phone = $('input[type="tel"]');
for(var i = 0; i < input_phone.length; i++){
	input_phone[i].addEventListener('keydown', function(){
		if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || 
			(event.keyCode == 65 && event.ctrlKey === true) || 
			(event.keyCode >= 35 && event.keyCode <= 39)) {
					return;
		}
		else {
			if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
				event.preventDefault(); 
			}   
		}
	});
}
//END OF phone mask
$('.btn').mousedown(function(){
	$(this).css({
		'transform': 'scale(.95)'
	});
});

$('#reviews .prev, #reviews .next').mousedown(function(){
	this.classList.add('active');
});
$('body').mouseup(function(){
	$('#reviews .prev, #reviews .next').removeClass('active');
	$('.btn').css({'transform': 'scale(1)'});
});

function animateNav(e){
	if($(e.target).closest('nav').hasClass('active') == true){
		$('.sn1').css({
			'transform': 'translateY(14px)'
		});
		setTimeout(function(){
			$('.sn-center').css({'opacity': '0'});
		},150);
		setTimeout(function(){
			$('.sn1').css({
				'transform': 'translateY(14px) rotateZ(55deg)'
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
				'transform': 'translateY(-14px) rotateZ(-55deg)'
			});
		}, 300);
		setTimeout(function(){
			$('.sn2').css({
				'transform': 'translateY(-14px) rotateZ(-45deg)'
			});
		}, 600);
	}else{
		$('.sn1').css({
			'transform': 'translateY(14px) rotateZ(55deg)'
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
			'transform': 'translateY(-14px) rotateZ(-55deg)'
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
}

//SMALL NAV

	$('.mobile-nav').click(function(e){
		$('body').toggleClass('disabled');
		$(e.target).closest('nav').toggleClass('active');
		animateNav(e);
	});
	//END of SMALL NAV

var step = 0;
setInterval(function(){
	var gallery_width = $('.gallery').width();
	var gallery_offset = $('.gallery').offset().left;
	var img = $('.gallery img');
	var img_width = $(img).width();
	var img_offset = $(img).offset().left;
	var img_left_translate = img_offset - gallery_offset;
	var right_reverse_point = gallery_width.toFixed() - img_width.toFixed();
	
	if(img_left_translate.toFixed() <= right_reverse_point){
		$(img).removeClass('to-left').addClass('to-right');
	}else if(img_left_translate >= 0){
		$(img).removeClass('to-right').addClass('to-left');
	}

	if($(img).hasClass('to-left') == true){
		step -= 1;
	}else{
		step += 1;
	}
	

	// console.log(gallery_width.toFixed() - img_width.toFixed());
	// console.log('img left translate: ' + img_left_translate.toFixed() + ' || gallery offset: ' + gallery_offset.toFixed() + ' || img offset: ' + img_offset.toFixed());
	$(img).css({
		'transform': 'translateX(' + step + 'px)'
	});
}, 100);

function toCountNumbers(section){
	$(section).find('.to-count').each(function () {
		$(this).prop('Counter',0).animate({
			Counter: $(this).text()
		}, {
			duration: 4000,
			easing: 'swing',
			step: function (now) {
				$(this).text(Math.ceil(now));
			}
		});
	});
}

$('.quality').waypoint(function(){
	$('.quality').addClass('active');
	if($('.quality').hasClass('disable-count') == false){
		toCountNumbers('.quality');
		$('.quality').addClass('disable-count');
	}
}, {
	offset: '20%'
});

$('#quality-tabs li').click(function(){
	$('#quality-tabs li').removeClass('active');
	$(this).addClass('active');
	if($(this).hasClass('sng-link') == true){
		$('.quality-pack .txc').removeClass('active');
		$('.quality-pack .sng').addClass('active');
	}else{
		$('.quality-pack .sng').removeClass('active');
		$('.quality-pack .txc').addClass('active');
	}
});