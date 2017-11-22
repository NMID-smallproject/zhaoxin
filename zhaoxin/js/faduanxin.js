var greet = $(".greet").text();
var time = $(".time").text();
var palce = $(".palce").text();
var activity = $(".activity").text();
var sign = $(".sign").text();
$("#send").click = function() {
	$.ajax({
		url: "http://120.78.51.133:8080/enroll/SendInformSms.enrollSystem",
		type: "POST",
		data: {
			phoneNumbers: "15730038986",
			greet: greet,
			time: time,
			palce: palce,
			activity: activity,
			sign: sign
		},
		success: function(data) {
			if (typeof data == 'string') {
				var data = JSON.parse(data); 
			}

			if (data.result != false) {
				alert("发送成功");
			}
		}
	});
}
