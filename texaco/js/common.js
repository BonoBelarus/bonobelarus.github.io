// $('.review-box').slick({
// 	nextArrow: '<div class="next"></div>',
// 	prevArrow: '<div class="prev"></div>',
// 	appendArrows: $('#reviews .nav'),
// 	dots: true,
// 	infinite: false,
// 	appendDots: $('#reviews .dots')
// });

$('#expert-opinion .expert').slick({
	asNavFor: '.expert-txt',
	dots: true
});
$('#expert-opinion .expert-txt').slick({
	asNavFor: '.expert',
	arrows: false
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
  
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
    
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('li').removeClass('active');
      sections.removeClass('active');
      
      $(this).addClass('active');
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
	var link = $(e.currentTarget).attr('href');
	var section = $(link);
	console.log(section);
	$('body,html').animate({
		scrollTop: $(section).offset().top
	}, 1000);
	e.preventDefault();
}
$('nav a').click(scroll2Sec);

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
$(document).scroll(function(e){
	return;
	e.returnFalse();
});

//SMALL NAV
	$('.mobile-nav').click(function(){
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
	});
	//END of SMALL NAV