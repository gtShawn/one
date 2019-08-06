<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
%>
<head>
    <base href="<%=basePath%>"/>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>upload</title>
    <!--引入layui的样式文件-->
    <link rel="stylesheet" href="lib/layui/css/layui.css">
    <!--引入layui的js文件-->
    <script src="lib/layui/layui.js"></script>
</head>
<body>
    <div align="center" style="margin-top: 50px;">
        <h1>文件上传的页面</h1>
        <fieldset class="layui-elem-field layui-field-title" style="margin-top: 30px;">
            <legend>常规使用：普通图片上传</legend>
        </fieldset>

        <div class="layui-upload">
            <button type="button" class="layui-btn" id="test1">上传图片</button>
            <div class="layui-upload-list">
                <img src="/img/b.jpg" width="150px;" height="150px;" class="layui-upload-img" id="demo1">
                <p id="demoText"></p>
            </div>
        </div>
    </div>
</body>
<script>
    layui.use(['jquery','layer','upload'], function(){
        var $ = layui.jquery
            ,layer = layui.layer
            ,upload = layui.upload;

        //普通图片上传
        var uploadInst = upload.render({
            elem: '#test1'
            ,url: '/adminusers/upload/'   //服务器端的文件上传的地址
            ,field:'myFile'  //传送到服务器端的文件的名字
            ,before: function(obj){
                //预读本地文件示例，不支持ie8
                obj.preview(function(index, file, result){
                    $('#demo1').attr('src', result); //图片链接（base64）
                });
            }
            ,done: function(res){
                //如果上传失败
                if(res.code > 0){
                    layer.msg("上传失败",{icon:2,time:2000,anim:4,shade:0.6});
                }else{
                    //上传成功
                    layer.msg("上传成功",{icon:1,time:2000,anim:4,shade:0.6});
                }
            }
            ,error: function(){
                //演示失败状态，并实现重传
                var demoText = $('#demoText');
                demoText.html('<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-xs demo-reload">重试</a>');
                demoText.find('.demo-reload').on('click', function(){
                    uploadInst.upload();
                });
            }
        });
    });
</script>
</html>