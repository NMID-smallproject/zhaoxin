$(document).ready(function() {
	
	$(".big-section a").click(function(){
		var name = parseInt($(this).attr("index"));
		if (name<3){
			var nodiv = 0;
		}
		console.log(name);
		if ($(".second-section:eq("+name+")").css("display")=="none"){
			//$(".no-div").slideUp("slow");
			var secnum;
			var res = 5; //判断是否已有二级部门显示的标志
			for (secnum = 0; secnum < $(".second-section").length; secnum++){
				if($(".second-section:eq("+secnum+")").css("display")!="none"){
					res = secnum;
				}
			}//若已有 二级部门显示，则将res等于已显示的二级部门
			//若目前无二级部门显示，则执行以下函数
			if (res == 5) {
				$(".no-div:eq("+nodiv+")").slideDown("slow");
				$(".adiv:eq("+name+")").css("display","block");
				$(".second-section:eq("+name+")").css("left","2%")
				$(".second-section:eq("+name+")").slideDown("slow");
				console.log(0);
			}
			else {
				//在切换时，将无关的二级部门隐藏
				for (secnum = 0; secnum < $(".second-section").length; secnum++){
					if ((secnum != res) && (secnum != name)){
						$(".second-section:eq("+secnum+")").css("display","none");
						$(".adiv:eq("+name+")").css("display","none");

					}
				}
				//console.log(1);
				//$(".no-div:eq("+nodiv+")").animate({width:'hide'},3000);
				
				//若点击的二级部门在以显示的二级部门的左边，则执行以下函数
				if (res < name) {
					$(".second-section:eq("+res+")").animate({left:'100%'},"slow").fadeOut("fast");
					$(".adiv:eq("+res+")").fadeOut("slow");
					$(".second-section:eq("+name+")").css("display","block");
					$(".second-section:eq("+name+")").css("left","-100%");
					$(".second-section:eq("+name+")").animate({left:'2%'},"slow");
					$(".adiv:eq("+name+")").css("display","block");

				}
				//若点击的二级部门已显示的二级部门的右边，则执行以下函数
				else {
					$(".second-section:eq("+res+")").animate({left:'-100%'},"slow").fadeOut("fast");
					$(".adiv:eq("+res+")").fadeOut("slow");
					$(".second-section:eq("+name+")").css("display","block");
					$(".second-section:eq("+name+")").css("left","100%");
					$(".second-section:eq("+name+")").animate({left:'2%'},"slow");
					$(".adiv:eq("+name+")").css("display","block");
				}
				//$(".no-div:eq("+nodiv+")").slideDown("slow");
				
			}
			
		}
		//若是点击已显示的二级部门，则将其隐藏执行以下函数
		else {
			console.log(3);
			$(".no-div:eq("+nodiv+")").slideUp("slow");
			$(".adiv:eq("+name+")").slideUp("slow");
			// $(".adiv:eq("+name+")").css("display","none");
			$(".second-section:eq("+name+")").slideUp("slow");
		}
		// $(".no-div:eq("+nodiv+")").slideToggle();
		// $(".second-section:eq("+name+")").slideToggle();		
	})
})
