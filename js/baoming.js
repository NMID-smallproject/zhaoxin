$(document).ready(function($) {
    $("#yanzheng").click(function() {
    var phone = $("#phone").val();
    $.ajax({
    type:'get',
    url:'http://192.168.43.226:8080/enroll/SendSms.enrollSystem',
    data: {
        phoneNumber:phone
        },
    success:function(data){
            if (data != false){
                console.log(data);
                dxma = data;
                $("#baoming-button").click(function(dxma){
                    console.log(data);
                    var yzma = $("#yzma").val();
                    if (data.result == yzma){
                        alert("恭喜你验证成功！");
                        $("#yanzheng").css("color","#e8645a");
                        $("#baoming-button").css("background-color","#e8645a");
                    }
                    else {
                        alert("验证错误，请重新输入！");
                    }

                })  
            }       
        }
    });
})})
