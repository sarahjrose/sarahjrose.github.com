$(function() {
		$(".sarah").hover(function(){
			$('.image > img').hide();
			$("#sarah").show().animate({'opacity': 1});
		});
		$(".dog").hover(function(){	
			$('.image > img').hide();
			$("#bella").show().animate({'opacity': 1});
		});
		$(".newyork").hover(function(){	
			$('.image > img').hide();
			$("#newyork").show().animate({'opacity': 1});
		});
		$(".food").hover(function(){
			$('.image > img').hide();
			$('#food').show().animate({'opacity': 1})
		})
		$(".mainh1 > span").each(function(idx) {
		$(this).delay( idx * 700).fadeIn(700);
	});
	});
	