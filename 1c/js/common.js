$(document).ready(function(){

	$('.owl-carousel').owlCarousel({
		items: 1,
		nav: true,
		dots: true,
		dotData: true,
		dotsContainer: '#oppo-links',
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
	});

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
	
});