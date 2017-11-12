$(".slct input").on("click",function() {
	$(".man-login").show();
	$(".select").css("opacity",0.3);
	$(".select").click(function (event) {  
		event.preventDefault();  
	});
});