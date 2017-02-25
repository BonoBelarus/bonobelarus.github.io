$(document).ready(function(){

	$('textarea').autoResize()
	
	var parallax = function(item){
		if($(item).length>0) {
			var off, st, t;
			t = $(item).offset().top;
			switch(item){
				case "#we-do":
				$(item).find(".layout-txt").css({
					"top": "-80%"
				});
				$(window).scroll(function(){
					st = $(this).scrollTop();
					$(item).find(".layout-txt").css({
						"transform": "translateY("+st/3+"%)"
					});
				});
				break;
				case "#cases":
				$(item).find(".layout-txt").css({
					"top": "-50px",
					"left": -t-200
				});
				$(window).scroll(function(){
					st = $(this).scrollTop();
					$(item).find(".layout-txt").css({
						"transform": "translateX("+st*1.2+"px)"
					});
				});
				break;
				case "#treatment":
					$(item).find(".layout-txt").css({
					"top": "-260%",
					"fontSize": "236px"
					});
					$(window).scroll(function(){
						st = $(this).scrollTop();
						$(item).find(".layout-txt").css({
							"transform": "translateY("+st/6.4+"%)"
						});
					});
				break;
				case "#contacts":
					$(item).find(".layout-txt").css({
					"top": "-400%",
					"fontSize": "236px"
					});
					$(window).scroll(function(){
						st = $(this).scrollTop();
						$(item).find(".layout-txt").css({
							"transform": "translateY("+st/7.5+"%)"
						});
					});
			}
		}
	}
	///// END of PARALLAX
	///// HOVER
	var hoverFunc = function(item){
		if($(item).length>0){
			if(item == "#port-cases"){
				$(item).find(".items-bg").css({
					"background": "#1b6ced",
					"borderTopRightRadius": "16px",
					"borderTopLeftRadius": "16px",
					"borderBottomRightRadius": "16px",
					"borderBottomLeftRadius": "16px"
				});
				$(item).find(".items ul li:first-child").addClass("active");
				var leftI = $(item).find(".items ul>li:first-child").position().left;
				var topI = $(item).find(".items ul>li:first-child").position().top;
				var widthI = $(item).find(".items ul>li:first-child").outerWidth();
				var heightI = $(item).find(".items ul>li:first-child").outerHeight();
				$(item).find(".items-bg").css({
					"transform": "translate(" + leftI +"px, " + topI +  "px)",
					"height": heightI,
					"width": widthI
				});
			}else{
				var leftI = $(item).find(".items ul>li:first-child").position().left;
				var topI = $(item).find(".items ul>li:first-child").position().top;
				var widthI = $(item).find(".items ul>li:first-child").outerWidth();
				var heightI = $(item).find(".items ul>li:first-child").outerHeight();
				$(item).find(".items-bg").css({
					"transform": "translate(" + leftI +"px, " + topI +  "px)",
					"height": heightI,
					"width": widthI
				});
			}
			$(item).find(".items>ul>li").hover(function(){
				if($(this).hasClass("all-services") == true){
					$(item).find(".items li").removeClass("active");
					$(item).find(".items-bg").css({
						"opacity": "0"
					});
					return;
				}
				$(item).find(".items>ul>li").removeClass("active");
				var height, width, left, top;
				if(item == "#share-exp"){
					$(this).css({
						"transform": "translateY(-10px)"
					});
					height = $(this).find("a").outerHeight();
					width = $(this).find("a").outerWidth();
					left = $(this).find("a").position().left;
					top = $(this).find("a").position().top;
				}else if(item == "#port-cases"){
					$(this).removeClass("active");
					height = $(this).outerHeight();
					width = $(this).outerWidth();
					left = $(this).position().left;
					top = $(this).position().top;
					$(this).closest(".items").find(".items-bg").css({
						"background": "#1b6ced",
						"borderTopRightRadius": "16px",
						"borderTopLeftRadius": "16px",
						"borderBottomRightRadius": "16px",
						"borderBottomLeftRadius": "16px"
					});
					$(this).addClass("active");
				}else{
					height = $(this).outerHeight();
					width = $(this).outerWidth();
					left = $(this).position().left;
					top = $(this).position().top;
				}
				$(this).addClass("active");
				// $(item).find(".items-bg").css({
				// });
				$(item).find(".items-bg").css({
					"opacity": "1",
					"height": height,
					"width": width,
					"transform": "translate(" + left +"px, " + top +  "px)",
				});
			},function(){
				if(item == "#share-exp"){
					$(this).css({
						"transform": "translateY(10px)"
					});
				}
			});
			hoverLeave(item);
		}
	}
	var hoverLeave = function(item){
		$(item).find(".items").mouseleave(function(){
			if(item == "#port-cases"){
				$(item).find(".items li").removeClass("active");
				$(item).find(".items-bg").css({
					"opacity": "0"
				});
			}else{
				$(item).find(".items-bg").css({
					"opacity": "0"
				});
			}

		});
	}
	///// END of HOVER
	///// FOCUS
	$('.form').find('textarea').focus(function(){
		
	});
	$('.form').find('textarea').blur(function(){
		
	});
	var focusFunc = function(){
		$(".form").find("input, textarea").focus(function(e){
			if($(e.target).is('textarea')){
				$(this).closest('div').find('label').css({
					'fontSize': '12px',
					'transform': 'translateY(30px)'
				});
				$(this).closest("div").addClass("active");
				return;
			}
			$(this).closest("div").addClass("active");
			$(this).closest("div").find("label").css({
				"fontSize": "12px",
				"transform": "translateY(-95%)"
			});
		});
		$(".form").find("input, textarea").blur(function(e){
			if($(e.target).is('textarea')){
				$(this).closest('div').find('label').css({
					'fontSize': '16px',
					'transform': 'translateY(0px)'
				});
				$(this).closest("div").removeClass("active");
				return;
			}
			if($(this).val() == ""){
				$(this).closest("div").find("label").css({
					"fontSize": "14px",
					"transform": "translateY(0px)"
				});
				$(this).closest("div").removeClass("active");
			}
		});
	}
	///// END of FOCUS
	///// OPEN POP-UP
	function openPopUp(link, target){
		$(link).click(function(e){
			if($(this).closest('nav').length != 0){
				$('nav').removeClass('active');
				$("header .top-line").removeClass("active");
				$(".overlay-menu").fadeOut();
			}
			$(target).addClass("active");
			e.preventDefault();
			//$("section, footer, header").addClass("disabled");
		});
	}

	function closePopUp(){
		$(".pop-up .close a").click(function(e){
			e.preventDefault();
			var thisPopUp = $(this).closest(".pop-up");
			if($(window).width() < 1250){
				setTimeout(function(){
					//$("section, footer, header").removeClass("disabled");
					$(thisPopUp).removeClass("active");
				}, 500);
			}else{
				$("section, footer, header").removeClass("disabled");
				$(this).closest(".pop-up").removeClass("active");
			}
		});
	};
	//// END of POP-UP
	//// CALC BLOG CARDS
		function calcCards(elem){
			if($(elem).length > 0){
				var elemHeight = $(elem).height();
				var elemWidth = $(elem).width();
				var ol = $(elem).offset().left;
				console.log(ol);
				$(elem).parent().css({
					"height": elemHeight,
					"width": $(document).width(),
					"marginLeft": -ol,
				});
				$(elem).css({
					"paddingLeft": ol,
					"paddingRight": ol,
					"width": 1360
				});
			}
		}
	/////END of CALC BLOG CARDS
	/////SHOW SMALL MENU
	$(".small-nav").click(function(e){
		e.preventDefault();
		$("header nav").toggleClass("active");
		$("header .top-line").toggleClass("active");
		$(".overlay-menu").fadeToggle();
	});
	
	
	focusFunc();
	openPopUp(".link-pop-up-q", "#pop-up-question");
	openPopUp(".link-pop-up-c", "#pop-up-call");
	closePopUp();
	
	if($(window).width() > 1250){
		hoverFunc("#share-exp");
		hoverFunc("#we-do");
		hoverFunc("#contacts");
		hoverFunc("#port-cases");
	}
	if($(window).width() < 1250 && $(window).width() > 750){
		//calcCards(".mini-articles");
	}

	// $(".top-line").sticky({
	// 	topSpacing:0,
	// 	zIndex: 999,
	// 	widthFromWrapper: false,
	// 	getWidthFrom: "body"
	// });

	function stickyHeader(){
		var st = $(window).scrollTop();
		if(st > 0){
			$(".top-line").addClass("is-sticky");
		}else{
			$(".top-line").removeClass("is-sticky")
		}
	}
	stickyHeader();
	$(window).scroll(function(){
		stickyHeader();
	});

	(function(){
		if($(".layout-bg").length > 0){
			var elemArr = $(".layout-bg")
			for(var i = 0; i<elemArr.length; i++){
				var color = $(elemArr[i]).find(".layout-bg-color").text().trim();
				$(elemArr[i]).css({
					"background": color
				});
			}
		}
	})();

	(function(){
		if($(".ad-rev-logo img").length < 1){
			$(".ad-rev-logo").detach();
		}
	})();

	(function(){
		var navArr = $("header nav li");
		var delay = 0;
		for(var i = 0; i < navArr.length; i++){
			delay += 0.1;
			$(navArr[i]).css({
				"transition-delay": delay + "s"
			});
		}
	})();
/////////VALIDATION
	var invalid;
	$('form button').click(function(e){
		invalid = $(this).closest('form').find(':invalid');
		$(invalid).focus().closest('div').addClass('error');
	});
	$('form input').blur(function(){
		if($(this).is(':invalid') == true){
			$(this).closest('div').removeClass('error');
		}
	});

	$("form").submit(function(e) {
		var input = $(e.target).find('input');
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			if($(e.target).closest('.pop-up').length > 0){
				$("section, footer, header").removeClass("disabled");
				$(e.target).closest(".pop-up").removeClass("active");
			}
			swal({
				title: 'Спасибо за заявку',
				type: 'success',
				timer: 2000
			});
			$(input).val('').blur();
		});
		return false;
	});
///////END of VALIDATION
/////ALERT
	
/////END of ALERT
	$(".fancybox").fancybox();
});