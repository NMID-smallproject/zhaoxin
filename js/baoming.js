var yanzhengma = 0;
$(document).ready(function($) {
    $("#yanzheng").click(function() {
        var phone = $("#phone").val();
        console.log(phone);
        $.ajax({
        type:'get',
        url:'http://120.78.51.133:8080/enroll/SendSms.enrollSystem',
        data: {
            phoneNumber:phone
            },
        success:function(data){
                if (data != false){
                    //var yzma = $("#yzma").val();
                            //alert("恭喜你验证成功！");

                           // console.log("恭喜你验证成功！");
                            //console.log("恭喜你验证成功！")
                            //$("#yanzheng").css("color","#e8645a");
                            //$("#baoming-button").css("background-color","#e8645a");
                    console.log(typeof data);
                    yanzhengma = data.result;
                    console.log(yanzhengma);
                        // else {
                        //     alert("验证错误，请重新输入！");
                        //     //alert("验证错误，请重新输入！");
                        //     console.log("验证错误，请重新输入！")
                        // }

                }       
            },
        error: function(data){
            console.log("访问失败！");
            console.log(data);
        }
        });
    })

    $("#baoming-button a").click(function() {
        var baomColor = parseInt($("#yzma").val());
        var phoneNumber = /^1[34578]\d{9}$/;
        var studentNumber = /^\d{10}$/; 
       //yanzhengma = parseInt(yanzhengma);
        console.log(typeof yanzhengma);
        console.log(typeof baomColor);
        var brName1 = new Array();
        brName1 = $("input[type='checkbox']:checked");
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
        var stuNumber = parseInt(student.stuNum);
        var NumPhone = parseInt(student.phoneNum);
        if(student.name == "") {
            alert("请输入名字！");
            event.preventDefault();
        } else if(student.stuNum == "") {
            alert("请输入学号！");
            event.preventDefault();
        } else if(studentNumber.test(stuNumber)==0) {
            alert("请输入正确学号！");
            event.preventDefault();
        }
        else if(student.QQ == "") {
            alert("请输入QQ！");
            event.preventDefault();
        }else if(student.intro == "") {
            alert("请介绍一下你自己！");
            event.preventDefault();
        }else if(student.phoneNum == "") {
            alert("请输入手机号！");
            event.preventDefault();            
        }
        else if(phoneNumber.test(NumPhone) == false) {
            alert("请输入正确的手机号！");
            event.preventDefault();
        }
        else if(!baomColor) { 
            alert("请输入验证码！");
            //alert("请先通过手机验证！");
            console.log("请输入验证码！");
            console.log(yanzhengma);
            event.preventDefault();
        }
        else if(yanzhengma != baomColor) { 
            alert("验证码错误！");
            //alert("请先通过手机验证！");
            console.log("验证码错误！");
            console.log(yanzhengma);
            event.preventDefault();

        }
        else if(brName1.length == 0) {
            alert("请填选要报的部门！");
            console.log("请填选要报的部门！");
            event.preventDefault();
        }
        else {
            var dename = new Array();
            var brName1 = new Array(); //处理前的小部门
            var brName2 = new Array(); //处理后小部门
            var clicSection = 0;
            var num1 = 0; //大部门
            var num2 = 0; //小部门
            var secSection = "";

            brName1 = $("input[type='checkbox']:checked");
            console.log(brName1);
            var brName1Name = brName1[clicSection].name;
            dename.push(brName1Name);  
            for (clicSection = 0; clicSection < brName1.length; clicSection++) {

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
                    brName2.push(secSection);            
                }

            }
            console.log(dename);
            console.log(brName2);
            student.deNames = dename;
            student.brNames = brName2;
            console.log(typeof dename);
            console.log(typeof brName2);
            console.log(student);
            $.ajax({
                type: "post",
                url: "http://120.78.51.133:8080/enroll/insertStudentWithBranches.enrollSystem",
                data: student,
                success: function(data){
                    console.log("请求成功了");
                    //succObject = eval("('+data+')");
                    console.log(data);
                    if (data.resultFlag == true){
                        alert("恭喜你已报名成功！");

                    }else {
                        var fnum = 0;
                        var falses = "未成功的部门有：\n";
                        for (fnum = 0; fnum < data.result.brNames.length; fnum++){
                            falses = falses + data.result.deNames[fnum];
                            falses = falses + data.result.brNames[fnum] + "\n";
                        }
                        falses += "可能的原因是：已报名";
                        alert(falses);
                        console.log(falses);
                    }
                },
                error: function(data){
                    console.log("请求失败！");
                    console.log(data);
                }
            })
        }    
    })

})