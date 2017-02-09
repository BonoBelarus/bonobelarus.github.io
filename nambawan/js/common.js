$(document).ready(function(){

	
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
	var focusFunc = function(){
		$(".form").find("input").focus(function(){
			if($(this).closest(".form").is(".delivery-form")){
			}
			$(this).closest("div").addClass("active");
			$(this).closest("div").find("label").css({
				"fontSize": "12px",
				"transform": "translateY(-105%)"
			});
		});
		$(".form").find("input").blur(function(){
			if($(this).val() == ""){
				$(this).closest("div").removeClass("active");
				$(this).closest("div").find("label").css({
					"fontSize": "14px",
					"transform": "translateY(0px)"
				});
			}
		});
	}
	///// END of FOCUS	

	
	parallax("#we-do");
	parallax("#cases");
	parallax("#treatment");
	parallax("#contacts");
	hoverFunc("#share-exp");
	hoverFunc("#we-do");
	hoverFunc("#contacts");
	hoverFunc("#port-cases");
	focusFunc();

	$(".top-line").sticky({
		topSpacing:0,
		zIndex: 10,
		widthFromWrapper: false,
		getWidthFrom: "body"
	});
});