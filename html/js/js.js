$(document).ready(function(){
						   
	//$('#header .lang a.lang_act').click(function () {$(".lang_list").to("act");$("#bg__").removeClass("act__");});
	
	$("#header .lang a.lang_act").click(function(){
		if ($(".lang_list").is(":hidden")) {
		$(".lang_list").slideDown("slow");
		} else {
		$(".lang_list").slideUp("slow");
		}
	});
	$('.lang_list ul').click(function () {$(".lang_list").hide();});
						   
	$('.foot_slider').slick({
		dots: false,
		slidesToShow: 4,
		infinite: true,
		slidesToScroll: 1,
		responsive: [
		{
		  breakpoint: 1240,
		  settings: {
			slidesToShow: 3
		  }
		},
		{
		  breakpoint: 760,
		  settings: {
			slidesToShow: 1,
			dots: true
		  }
		}
		]
	});
	
	$('.slider_reviews').slick({
		dots: false,
		slidesToShow: 3,
		infinite: true,
		slidesToScroll: 1,
		responsive: [
		{
		  breakpoint: 1240,
		  settings: {
			slidesToShow: 2
		  }
		},
		{
		  breakpoint: 760,
		  settings: {
			slidesToShow: 1,
			dots: true
		  }
		}
		]
	});
	
	$("select").select2({
		width: "100%",
		minimumResultsForSearch: Infinity 
	});
	
	flatpickr(".flatpickr", {
		inline: true, // show the calendar inline
		weekNumbers: true // show week numbers
	});

	$('#mob_header .bar .open_mob').click(function () {$("#mob_header").addClass("act");$("#bg__").addClass("act__");});
	$('#mob_header .bar .close_mob').click(function () {$("#mob_header").removeClass("act");$("#bg__").removeClass("act__");});
	$('#bg__').click(function () {$("#mob_header").removeClass("act");$("#bg__").removeClass("act__");});
	
    var w = $(window).width();
    if (w <= 767) {
		
		var mh = 0;
		$(".our_services li").each(function () {
		   var h_block = parseInt($(this).width());
		   if(h_block > mh) {
			  mh = h_block;
		   };
		});
		$(".our_services li").height(mh);
	   
		$('.slider_pic').slick({
			slidesToShow: 1,
			infinite: true,
			slidesToScroll: 1,				
			dots: true
		});
		
		$('.slider_nw-ev').slick({
			slidesToShow: 1,
			infinite: true,
			slidesToScroll: 1,				
			dots: false
		});
	
    }
});