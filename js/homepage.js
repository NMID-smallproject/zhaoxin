$(document).ready(function() {
	$(".big-section a").click(function(){
		var name=$(this).attr("index");
		if (name<3){
			var nodiv = 0;
		}
		// if ($(".second-section:eq("+name+")").attr("display")=="none"){
		// 	// $(".no-div").slideUp("slow");
		// 	// $(".second-section").slideUp("slow");
		// 	$(".no-div:eq("+nodiv+")").slideDown("slow");
		// 	$(".second-section:eq("+name+")").slideDown("slow");
		// }
		// else {
		// 	$(".no-div:eq("+nodiv+")").slideUp();
		// 	$(".second-section:eq("+name+")").slideUp();
		// }
		$(".no-div:eq("+nodiv+")").slideToggle();
		$(".second-section:eq("+name+")").slideToggle();
		
		
	})
})