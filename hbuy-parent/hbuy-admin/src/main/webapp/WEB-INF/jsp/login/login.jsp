<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<%
String path = request.getContextPath();
String basePath=request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<head>
<base href="<%=basePath%>"/>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>登录</title>
<link rel="stylesheet" href="lib/layui/css/layui.css">
<link rel="stylesheet" type="text/css" href="css/back/login.css" />
</head>

<body >
	<input type="hidden" id="interceptotIf" value="${interceptorMsg}">
	<div class="qiqiu1 qiqiu">
		<img src="http://pv1a82rk7.bkt.clouddn.com/q2.png" />
		<div class="text">韦氏集团</div>
	</div>
	<div class="qiqiu2 qiqiu">
		<img src="http://pv1a82rk7.bkt.clouddn.com/q3.png" />
		<div class="text">韦氏集团</div>
	</div>
	<div class="qiqiu3 qiqiu">
		<img src="http://pv1a82rk7.bkt.clouddn.com/q4.png" />
		<div class="text">韦氏集团</div>
	</div>
	<div class="qiqiu4 qiqiu">
		<img src="http://pv1a82rk7.bkt.clouddn.com/q5.png" />
		<div class="text">韦氏集团</div>
	</div>
	<div class="qiqiu5 qiqiu">
		<img src="http://pv1a82rk7.bkt.clouddn.com/q6.png" />
		<div class="text">韦氏集团</div>
	</div>
	
	<div class="qiqiu6 qiqiu">
		<img src="http://pv1a82rk7.bkt.clouddn.com/q2.png" />
		<div class="text">韦氏集团</div>
	</div>


	<div class="login" style="height: 200px;">
		<h1>用户后台登录</h1>
		<!--拦截后的提示-->
		<input type="hidden" id="MyInterLogin" value="${MyInterLogin }">
		<form class="layui-form">
			<div class="layui-form-item">
				<input id="userName" class="layui-input" name="username" placeholder="用户名" type="text" autocomplete="off">
			</div>
			<div class="layui-form-item">
				<input id="pwd" class="layui-input" name="pwd" placeholder="密码" type="password" autocomplete="off">
			</div>
			<button type="button" class="layui-btn login_btn" id="butLogin">登录</button>
		</form>
	</div>

<script src="lib/layui/layui.js"></script>
<script src="js/login.js"></script>
</body>
</html>
