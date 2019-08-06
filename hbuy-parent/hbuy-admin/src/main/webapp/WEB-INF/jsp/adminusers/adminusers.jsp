<%@ page language="java" contentType="text/html; charset=UTF-8"
		 pageEncoding="UTF-8"%>
<!doctype html>
<html>
<%
	String path = request.getContextPath();
	String basePath=request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<head>
	<base href="<%=basePath%>"/>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>AdminUsers显示页面</title>
</head>
<style type="text/css">
	.layui-table td{
		height: 60px;
	}
	.layui-table td img{
		width:60px;
		height: 60px;
	}
</style>
<!--引入layui的css和js文件-->
<link rel="stylesheet" href="lib/layui/css/layui.css">
<script src="lib/layui/layui.js"></script>
<!--引入ztree的相关css和js文件-->
<link rel="stylesheet" href="lib/zTree/css/icomoon_styles.css" type="text/css">
<link rel="stylesheet" href="lib/zTree/css/metroStyle.css" type="text/css">
<script type="text/javascript" src="lib/zTree//js/jquery-1.4.4.min.js"></script>
<script type="text/javascript" src="lib/zTree//js/jquery.ztree.core.js"></script>
<script type="text/javascript" src="lib/zTree//js/jquery.ztree.excheck.js"></script>
<script type="text/javascript" src="lib/zTree//js/jquery.ztree.exedit.js"></script>
<body>
<h1 align="center">AdminUsers显示页面</h1>

<div style="display: none;margin-top: 20px;" id="updAdminUsersDiv">

	<div align="center" class="layui-upload">
		<div class="layui-upload-list">
			<img src="/img/b.jpg" width="150px;" height="150px;" class="layui-upload-img" id="demo1">
			<p id="demoText"></p>
		</div>
		<button type="button" class="layui-btn" id="test01">上传图片</button>
	</div>

	<form class="layui-form" action="">
		<input type="hidden" name="userHeader" id="userHeader" value="/img/moren.jpg"/>
		<div class="layui-form-item">
			<div class="layui-inline">
				<label class="layui-form-label">用户名</label>
				<div class="layui-input-inline">
					<input type="text" name="username" lay-verify="required" autocomplete="off" placeholder="请输入用户名"  class="layui-input" id="username">
				</div>
			</div>
		</div>
		<div class="layui-form-item">
			<div class="layui-inline">
				<label class="layui-form-label">密码</label>
				<div class="layui-input-inline">
					<input type="password" name="pwd" lay-verify="required" autocomplete="off" placeholder="请输入密码"  class="layui-input" id="pwd">
				</div>
			</div>
		</div>
		<div class="layui-form-item" align="center">
			<label class="layui-form-label">用户类型</label>
			<div class="layui-input-inline">
				<select id="isroot" name="isroot" lay-verify="required">
					<option value="" selected id="sedOpt">--选则用户类型--</option>
					<option value="0">普通管理员</option>
					<option value="1">超级管理员</option>
				</select>
			</div>
		</div>

		<div class="layui-form-item">
			<div class="layui-inline">
				<label class="layui-form-label">账号最新变动时间</label>
				<div class="layui-input-inline">
					<input type="text" name="updatetime" id="updatetime" lay-verify="required" placeholder="yyyy/MM/dd" autocomplete="off" class="layui-input">
				</div>
			</div>
		</div>
		<div class="layui-form-item">
			<div class="layui-input-block">
				<button class="layui-btn" lay-submit="" lay-filter="submitUpdAdminUsers">立即提交</button>
				<button type="reset" class="layui-btn layui-btn-primary">重置</button>
			</div>
		</div>
	</form>
</div>

<div style="margin: 20px;">
	<div class="layui-btn-group listTable">
		<button class="layui-btn" id="flush"><i class="layui-icon">&#x1002;</i>刷新</button>
	</div>
	<div class="layui-btn-group listTable">
		<button class="layui-btn layui-btn-danger" data-type="getCheckData"><i class="layui-icon">&#xe640;</i>批量删除</button>
	</div>
	<div class="layui-btn-group listTable">
		<button class="layui-btn layui-btn-small layui-btn-normal" id="saveUI"><i class="layui-icon">&#xe608;</i>增加</button>
	</div>
	<table class="layui-table" id="listTable" lay-filter="list"></table>
	<!--存放用户权限的容器-->
	<!--权限树形容器-->
	<div id="ztreeDiv" class="content_wrap" style="display: none;">
		<div class="zTreeDemoBackground left">
			<ul id="test1" class="ztree"></ul>
		</div>
	</div>
	<script type="text/html" id="bar">
		<a class="layui-btn layui-btn-primary layui-btn-xs" lay-event="show" ><i class="layui-icon">&#xe609;</i>查看</a>
		<a class="layui-btn layui-btn-xs" lay-event="edit" ><i class="layui-icon">&#xe642;</i>修改</a>
		<a class="layui-btn layui-btn-danger layui-btn-xs" lay-event="del" ><i class="layui-icon">&#xe640;</i>删除</a>
	</script>
</div>

<script src="/js/adminusers.js"></script>
<script type="text/html" id="isrootTpl">
	{{#  if(d.isroot == 1){ }}
	<font color="red">超级管理员</font>
	{{#  } else { }}
	<font color="purple">普通管理员</font>
	{{#  } }}
</script>
</body>
</html>

 