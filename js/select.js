$(".chg-btn").on("click",function() {
	if ($(".chg-btn").text() == "<") {
		$(".chg-btn").text(">");
		$(".select").animate({width:"1%"},"fast");
		return;
	}
	if ($(".chg-btn").text() == ">" ) {
// 		$(".select").animate({width:"0%"},"fast");
		$(".chg-btn").text("<") ;
		$(".select").animate({width:"35%"},"fast");
		return;
	}
})
var l;

$(".slct input").on("click",function() {
	$(".man-login").show();
	$(".select").css("opacity",0.3);
	$(".rit").css("opacity",0.3);
	$(".select").click(function (event) {  
		event.preventDefault();  
	});
	var brName = $(".slct input").val();
	var departName = $(this).parent().parent().children("span").text();
	getData(brName,departName);
});

function getData(brName,departName) {
	$("#getdata").on("click",function () {
		var password = $("input[name='password']").val().trim();
		if (password == "") {
			alert("密码不能为空");
			return;
		}
		$.ajax({
			url: "http://120.78.51.133:8080/enroll/Login.enrollSystem",
			type: "POST",
			data: {
				brName: brName,
				departName: departName,
				pwd: password,
				size: 10,
				page: 1,
				interview: 1
			},
			success: function(data) {
				if (typeof data == 'string') {
					var data = JSON.parse(data); 
				}
				
				if (data.result != false) {
					alert("登陆成功");
					// window.location.href = '../pages/youke-front.html';
					$(".man-login").hide();
					$(".select").css("opacity",1);
					$(".rit").css("opacity",1);
					$(".select").click(function (event) {  
						event.preventDefault();  
					});
					$(".select").animate({width:"1%"},"fast");
					console.log(data.list);
					$.each(data.list,function(i) {
						var $div = $("<div/>");
						$(".content").append($div);
						$div.addClass("listthings").html("<div class="+"name "+"things"+">"+data.list[i].name+"</div><div class="+"sex "+"things"+">"+data.list[i].sex+"</div><div class="+"college "+"things"+">"+data.list[i].college+"</div><div class="+"phone "+"things"+">"+data.list[i].phoneNum+"</div><div class="+"stuNum "+"things"+">"+data.list[i].stuNum+"</div><input type="+"checkbox"+" name="+"checkbox"+">");
					});
				}
			}
		});
	})
};
var list = document.getElementsByClassName("select-tit");
console.log(list);
$.each(list,function(i) {
	list[i].index = i+1;
	console.log($(this).index);
})
$(".select-tit").on("click", function getStudents(brName,departName) {
	var a = $(this).index;
	console.log(a);
	$.ajax({
		url: "http://120.78.51.133:8080/enroll/getStudents.enrollSystem",
		type: "POST",
		data: {
			brName: brName,
			departName: departName,
			size: 10,
			page: 1,
			interview: a
		},
		success: function(data) {
			if (typeof data == 'string') {
				var data = JSON.parse(data); 
			}
			console.log(data.list);
			$.each(data.list,function(i) {
				var $div = $("<div/>");
				$(".content").append($div);
				$div.addClass("listthings").html("<div class="+"name "+"things"+">"+data.list[i].name+"</div><div class="+"sex "+"things"+">"+data.list[i].sex+"</div><div class="+"college "+"things"+">"+data.list[i].college+"</div><div class="+"phone "+"things"+">"+data.list[i].phoneNum+"</div><div class="+"stuNum "+"things"+">"+data.list[i].stuNum+"</div><input type="+"checkbox"+" name="+"checkbox"+">");
			});
		}
	});
});
