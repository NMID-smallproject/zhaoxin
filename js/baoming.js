var yanzhengma = 0;
$(document).ready(function($) {
    $("#yanzheng").click(function() {
        var phone = $("#phone").val();
        $.ajax({
        type:'get',
        url:'http://120.78.51.133:8080/enroll/SendSms.enrollSystem',
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
                            //alert("恭喜你验证成功！");
                           // console.log("恭喜你验证成功！");
                            $("#yanzheng").css("color","#e8645a");
                            $("#baoming-button").css("background-color","#e8645a");
                            yanzhengma = 1;
                        }
                        else {
                            alert("验证错误，请重新输入！");
                            console.log("验证错误，请重新输入！")
                        }

                    })
                }       
            }
        });
    })

    $("#baoming-button a").click(function() {
        var baomColor = $("#yzma").val();
        var brName1 = $("input[type='checkbox']:checked");
        if (baomColor == "" || yanzhengma == 0) {
            alert("请先通过手机验证！");
            console.log("请先通过手机验证！");
            event.preventDefault();
        } else if (brName1.length == 0){
            
            
            //console.log(brName1[clicSection].name);
                alert("请填选要报的部门！");
                console.log("请填选要报的部门！");
                event.preventDefault();
            }
        
            else{
            var student = new Object();
            student.name = $("input[name='stuname']").val();
            student.sex = $("input[type='radio']:checked").val();
            student.college = $("#academic option:checked").val();
            student.stuNum = $("input[name='stuNum']").val();
            student.QQ = $("input[name='QQ']").val();
            student.phoneNum = $("input[name='phoneNum']").val();
            student.intro = $("textarea[name='intro']").val();
            // student.departmentName = $("input[type='checkbox']:checked").attr("name");
            // student.brName = $("input[type='checkbox']:checked").val();
            var dename = new Array();
            var brName1 = new Array(); //处理前的小部门
            var brName2 = new Array(); //处理后小部门
            var clicSection = 0;
            var num1 = 0; //大部门
            var num2 = 0; //小部门
            var secSection = "";
            brName1 = $("input[type='checkbox']:checked").val();
            
            
            for (clicSection = 0; clicSection < brName1.length; clicSection++) {
                var brName1Name = brName1[clicSection].name;
                dename.push(brName1Name);
                if(clicSection < brName1.length-1) {
                    if(brName1[clicSection].name == brName1[clicSection+1].name){
                       // console.log("1");
                        secSection = secSection + brName1[clicSection].value + ",";
                        //console.log(secSection);
                    }
                    else{
                        secSection = secSection + brName1[clicSection].value;
                        brName2.push(secSection);
                        dename.push(brName1[clicSection+1].name);
                        num2++;
                        //console.log(brName2[num2-1].value);
                        secSection = "";
                    }
                }
                else {
                    secSection = secSection + brName1[clicSection].value;
                    brName2.push(secSection);            }

            }
            console.log(dename);
            console.log(brName2);
            student.deNames = dename;
            student.brNames = brName2;
            // student.deNames = ["学生会","团委直属部"];
            // student.brNames = ["综合部，宣传部","办公室，组织部"];
            // var student = {
            //         "name":"张某",
            //         "sex":"女",
            //         "college":"国际",
            //         "stuNum":'2016210932',
            //         "QQ":'11234',
            //         "phoneNum":'1235566',
            //         "intro":'介绍',
            //         "departmentName":'学生会',
            //         "brName":'综合部'
            //     }
                
            // var student = new Object();
            // student.name = "王二";
            // student.sex = "女";
            // student.college = "国际学院";
            // student.stuNum = "2016211930";
            // student.QQ = "123";
            // student.phoneNUM = "123";
            // student.intro = "介绍";
            // student.departmentName = "学生会";
            // student.brName = "综合部";
            console.log(student);
            $.ajax({
                type: "post",
                url: "http://120.78.51.133:8080/enroll/insertStudent.enrollSystem",
                data: student,
                success: function(data){
                    console.log(data);
                    console.log("恭喜你报名成功！");
                    alert("恭喜你报名成功！");
                }
            })
        }
    })

})
