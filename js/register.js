$(function(){
//    失去焦点
    $("#phone_number").blur(phoneCheck);
    $("#pwd1Phone").blur(upWdlCheck);
    $("#pwd2Phone").blur(upWd2Check);
    $("#ucheckbox").click(function(){
        $("#register").prop("disabled",!$(this).prop('checked')).toggleClass("disabled")
    })
    var uphone,upwdl,upwd2,nickname;
    //提交注册
    $("#register").click(function(){
        var rphone=phoneCheck();
        var rupwd1=upWdlCheck();
        var rupwd2=upWd2Check();
       if(rphone&&rupwd1&&rupwd2){
           nickname=$.trim($("#nickname").val());
           $.ajax({
               type:"post",
               url:"data/user_register.php",
               data:{phone:uphone,upwd:upwd1,nickname:nickname},
               success:function(d){
                   if(d.code==1){
                       sessionStorage.uid= d.userId;
                       sessionStorage.phone= d.phone;
                       sessionStorage.nickname= d.nickname;
                       history.go(-1);
                   }
               }
           })
       }
    })
//手机号的验证
    function phoneCheck(){
    //   是否为空，格式，存在
         uphone=$.trim($("#phone_number").val());
         var regPhone=/^1[3578]\d{9}$/;
         /*/^(\+86|0086)?\s*1[34578]\d{9}$/;*/
        if(!uphone){
            $("#phone_number").siblings("span").hide();
            $("#phone_number").siblings("i").show().text("手机号不能为空");
            return false;
        }else if(!regPhone.test(uphone))
        {   $("#phone_number").siblings("span").hide();
            $("#phone_number").siblings("i").show().text("请输入正确的手机号")
            return false
        }else if(phoneExist(uphone)){
            $("#phone_number").siblings("span").hide();
            $("#phone_number").siblings("i").show().text("该手机号已被注册")
            return false
        }else{
            $("#phone_number").siblings("span").show();
            $("#phone_number").siblings("i").hide();
            return true
        }
    }
    //手机号是否存在
    function phoneExist(uphone){
        var back;
        $.ajax({
            type:"post",
            url:"data/user_check_phone.php",
            data:{phone:uphone},
            async:false,
            success:function(d){
                if(d.code==1){
                    back=true;
                }else{
                    back=false;
                }
            }
        });
        return back;
    }
    //验证密码
    function upWdlCheck(){
         upwdl=$.trim($("#pwd1Phone").val());
        var upwdlSize=upwdl.length;
        if(!upwdlSize){
            $("#pwd1Phone").siblings("span").hide();
            $("#pwd1Phone").siblings("i").show().text("密码不能为空");
            return false
        }else if(upwdlSize<6||upwdlSize>16){
            $("#pwd1Phone").siblings("span").hide();
            $("#pwd1Phone").siblings("i").show().text("密码长度为6~16");
            return false
        }else{
            $("#pwd1Phone").siblings("span").show();
            $("#pwd1Phone").siblings("i").hide();
            return true
        }
    }
    // 再验证密码
    function upWd2Check(){
        upwd2=$.trim($("#pwd2Phone").val());
        if(upWdlCheck()) {
            if (upwdl != upwd2) {
                $("#pwd2Phone").siblings("span").hide();
                $("#pwd2Phone").siblings("i").show().text("两密码不一致");
                return false
            } else {
                $("#pwd2Phone").siblings("span").show();
                $("#pwd2Phone").siblings("i").hide();
                return true
            }
        }
    }


});
