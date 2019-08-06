layui.use(['jquery','layer'], function(){
    var $ = layui.jquery,
        layer = layui.layer;

    var userNameIf = false;  //判断用户名输入是否正确

    var pwdIf = false;  //判断密码输入是否正确

    if ($("#interceptotIf").val()=='200'){
        layer.msg("你还未登录，请先登录", {icon: 2,time: 2000,anim:6,shade:0.6})
    }

    //验证用户名
    $("#userName").blur(function () {
       if($(this).val()==''){
           layer.tips('用户名不能为空!!','#userName',{tips: [2, '#f90d4c'],time:2000});
           userNameIf = false;
       }else if($(this).val().length<3||$(this).val().length>9){
           layer.tips('用户名长度为3-9位!!','#userName',{tips: [2, '#f90d4c'],time:2000});
           userNameIf = false;
       }else {
           layer.tips('用户名格式输入正确。。','#userName',{tips: [2, '#24ad44'],time:2000});
           userNameIf = true;
       }
    });

    //验证密码
    $("#pwd").blur(function () {
        if($(this).val()==''){
            layer.tips('密码不能为空!!','#pwd',{tips: [2, '#f90d4c'],time:2000});
            pwdIf = false;
        }else if($(this).val().length<6||$(this).val().length>12){
            layer.tips('密码长度为6-12位!!','#pwd',{tips: [2, '#f90d4c'],time:2000});
            pwdIf = false;
        }else {
            layer.tips('密码格式输入正确。。','#pwd',{tips: [2, '#24ad44'],time:2000});
            pwdIf = true;
        }
    });

    $("#butLogin").click(function () {
       if(userNameIf&&pwdIf){
           //做登录
           login($("#userName").val(),$("#pwd").val());

       }else {
           if(!userNameIf&&pwdIf){
               layer.tips('用户名输入有误!!','#userName',{tips: [2, '#f90d4c'],time:2000});
           }
           if(userNameIf&&!pwdIf){
               layer.tips('密码输入有误!!','#pwd',{tips: [2, '#f90d4c'],time:2000});
           }
           if(!userNameIf&&!pwdIf){
               layer.tips('用户名输入有误!!','#userName',{tips: [2, '#f90d4c',],time:2000,tipsMore: true});
               layer.tips('密码输入有误!!','#pwd',{tips: [2, '#f90d4c'],time:2000,tipsMore: true});
           }
           layer.msg("你的输入有误！！",{icon: 3,time: 2000,anim:6,shade:0.6});
       }
    });



    function login(userName,pwd) {
        $.ajax({
            type:'post',
            url:"adminusers/login",
            data:{"username":userName,"pwd":pwd},
            success:function (data) {
                if (data == 'success') {
                    //跳转到首页
                    setTimeout("window.location='model/toIndex'",2000);
                    layer.msg("登录成功。。", {icon: 1, time: 2000, anim: 4, shade: 0.6});
                } else {
                    layer.msg("登录失败！！", {icon: 2,time: 2000,anim:4,shade:0.6});
                }
            },
            error:function () {
                layer.msg("服务器异常！！")
            }
        })
    }

});