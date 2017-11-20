$(document).ready(function() {
	
	$(".big-section a").click(function(){
		//var sectionName = this.value;
		var name = parseInt($(this).attr("index"));
		var fSection = $(".section-name:eq("+name+")").text();
		var bigSection = new Object();
		var aname = [0,8,11,17,21,25,30];
		bigSection.departmentName = fSection;
		$.ajax({
		    type:'get',
		    url:'http://120.78.51.133:8080/enroll/getBranches.enrollSystem',
		    data: bigSection,
		    success:function(data){
	                console.log(data); 
	                //var bigindex = $(".")
	                var secName=0;
	                for(secName=0; secName<data.length; secName++)
	                {
	                	var theName = aname[name] + secName;
	                	console.log(theName);
	                	$("span[name='bName']:eq("+theName+")").text(data[secName].brName);
	                	$("span[name='sName1']:eq("+theName+")").text(data[secName].brIntro);
	          
	                	$("span[name='sName2']:eq("+theName+")").text(data[secName].brDemand);
	                	$("span[name='sName3']:eq("+theName+")").text(data[secName].brTime);
	                	console.log(data[secName].brName);
	                }  
	                 console.log(data);  
		        }
		    });
		var nodiv = 0;
		if (name<3){
			nodiv = 0;
		}
		else if(name>=3 && name<6){
			nodiv = 1;
		}
		else {
			nodiv = 2;
		}
		//console.log(name);
		if ($(".second-section:eq("+name+")").css("display")=="none"){
			//$(".no-div").slideUp("slow");
			var secnum;
			var res = 15; //判断是否已有二级部门显示的标志
			for (secnum = 0; secnum < $(".second-section").length; secnum++){
				if($(".second-section:eq("+secnum+")").css("display")!="none"){
					res = secnum;
				}
			}//若已有 二级部门显示，则将res等于已显示的二级部门
			//若目前无二级部门显示，则执行以下函数
			if (res == 15) {
				$(".no-div:eq("+nodiv+")").slideDown("slow");
				$(".adiv:eq("+name+")").css("display","block");
				$(".second-section:eq("+name+")").css("left","2%");
				$(".second-section:eq("+name+")").slideDown("slow");
				//console.log(0);
			}
			else {
				//在切换时，将无关的二级部门隐藏
				if ((res<3&&name<3)||((res>=3)&&(res<6)&&(name>=3)&&(name<6))||(res>=6)&&(res>=6)){
					for (secnum = 0; secnum < $(".second-section").length; secnum++){
						if ((secnum != res) && (secnum != name)){
							$(".second-section:eq("+secnum+")").css("display","none");
							$(".adiv:eq("+name+")").css("display","none");

						}
					}
				}
				else {
					for(secnum = 0; secnum < $(".second-section").length; secnum++){
						if(secnum != name){
							$(".second-section:eq("+secnum+")").css("display","none");
							$(".adiv:eq("+name+")").css("display","none");
						}
					}
					
					for(secnum = 0; secnum < $(".no-div").length; secnum++){
						if(secnum != nodiv){
							$(".no-div:eq("+secnum+")").slideUp("slow");
						}
						else {
							$(".no-div:eq("+secnum+")").slideDown("slow");
						}

					}
				}
				//console.log(1);
				//$(".no-div:eq("+nodiv+")").animate({width:'hide'},3000);
				
				//若点击的二级部门在以显示的二级部门的左边，则执行以下函数
				// if ($(".no-div:eq("+nodiv+")").css("display")=="none"){
				// 	$(".no-div:eq("+nodiv+")").slideDown("slow");
				// 	$(".adiv:eq("+name+")").css("display","block");
				// 	$(".second-section:eq("+name+")").css("left","2%")
				// 	$(".second-section:eq("+name+")").slideDown("slow");
				// 	console.log("1");
				// }
				// else 
					if (res < name) {
					$(".second-section:eq("+res+")").animate({left:'100%'},"slow").fadeOut("fast");
					$(".adiv:eq("+res+")").fadeOut("slow");
					$(".second-section:eq("+name+")").css("display","block");
					$(".second-section:eq("+name+")").css("left","-100%");
					$(".second-section:eq("+name+")").animate({left:'2%'},"slow");
					$(".adiv:eq("+name+")").css("display","block");
					console.log("2");

				}
				//若点击的二级部门已显示的二级部门的右边，则执行以下函数
				else {
					$(".second-section:eq("+res+")").animate({left:'-100%'},"slow").fadeOut("fast");
					$(".adiv:eq("+res+")").fadeOut("slow");
					$(".second-section:eq("+name+")").css("display","block");
					$(".second-section:eq("+name+")").css("left","100%");
					$(".second-section:eq("+name+")").animate({left:'2%'},"slow");
					$(".adiv:eq("+name+")").css("display","block");
					console.log("3");
				}
				//$(".no-div:eq("+nodiv+")").slideDown("slow");
				
			}
			
		}
		//若是点击已显示的二级部门，则将其隐藏执行以下函数
		else {
			//console.log(3);
			$(".no-div:eq("+nodiv+")").slideUp("slow");
			$(".adiv:eq("+name+")").slideUp("slow");
			// $(".adiv:eq("+name+")").css("display","none");
			$(".second-section:eq("+name+")").slideUp("slow");
		}
		// $(".no-div:eq("+nodiv+")").slideToggle();
		// $(".second-section:eq("+name+")").slideToggle();		
	})
})
