<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/page/public/taglib.jsp"%>
<!doctype html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>AdminUserAuthority显示页面</title>
<%@ include file="/WEB-INF/page/public/meta.jsp"%>
</head>
<body>
 <h1 align="center">AdminUserAuthority显示页面</h1>
 
 <div style="display: none;margin-top: 20px;" id="updAdminUserAuthorityDiv">
  <form class="layui-form" action="">
                  <div class="layui-form-item">
	    <div class="layui-inline">
	      <label class="layui-form-label">后台菜单主键</label>
	      <div class="layui-input-inline">
	        <input type="text" name="menuid" lay-verify="required" autocomplete="off" placeholder="请输入后台菜单主键"  class="layui-input" id="menuid">
	      </div>
	    </div>
	   </div>
		       <div class="layui-form-item">
	    <div class="layui-input-block">
	      <button class="layui-btn" lay-submit="" lay-filter="submitUpdAdminUserAuthority">立即提交</button>
	      <button type="reset" class="layui-btn layui-btn-primary">重置</button>
	    </div>
      </div>
    </form>
   </div>
   
 <div style="margin: 20px;margin-left: 240px;">     
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
	<script type="text/html" id="bar">
 	  <a class="layui-btn layui-btn-primary layui-btn-xs" lay-event="show" ><i class="layui-icon">&#xe609;</i>查看</a>
 	  <a class="layui-btn layui-btn-xs" lay-event="edit" ><i class="layui-icon">&#xe642;</i>修改</a>
 	  <a class="layui-btn layui-btn-danger layui-btn-xs" lay-event="del" ><i class="layui-icon">&#xe640;</i>删除</a>
	</script>
</div>
	 
 <script src="/js/generator/adminuserauthority.js?<%=System.currentTimeMillis()%>"></script>  
</body>
</html>

 