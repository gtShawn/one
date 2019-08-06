//AdminUserAuthorityjs文件
layui.use(['table','form','laydate'], function(){
  var table = layui.table
  ,form = layui.form
  ,laydate = layui.laydate;
  //监听表格复选框选择
  table.on('checkbox(list)', function(obj){
    console.log(obj)
  });
  
  
  var currentPage = 1;
  
  //初始化
  loadAdminUserAuthority();
  
function loadAdminUserAuthority(jsonEntity){
  //方法级渲染
  table.render({
   elem: '#listTable'
   ,url: '/adminuserauthority/listByPramas'
   ,width:1460
   ,height: 480
   ,page:true
   ,where:jsonEntity
   ,limit:5
   ,cols: [[
     {checkbox: true}
     ,{field:'userId', title: 'ID',align:'center', width:80, sort: true}
     ,{field:'menuid', title: '后台菜单主键',align:'center', width:130, sort: true}
	  ,{fixed: 'right',title: '操作', width:216, align:'center', toolbar: '#bar'}
    ]] 
    ,done: function(res, curr, count){
    	currentPage = curr; 
	  }
  });
  }
  
  //监听工具条
  table.on('tool(list)', function(obj){
    var data = obj.data;
    if(obj.event === 'show'){
    	layer.alert('查看行：<br>'+ JSON.stringify(data))
    } else if(obj.event === 'del'){
      layer.confirm('真的删除行么', function(index){
        var jsonEntity = {};
        jsonEntity['userId'] = data.userId;
        czAdminUserAuthority("/adminuserauthority/delete",jsonEntity);
        obj.del();
        layer.close(index);
      });
    } else if(obj.event === 'edit'){
      layer.open({
  		type:1,
  		title:"信息编辑",
  		area:['400px','500px'],
  		content:$("#updAdminUserAuthorityDiv"),
  		success:function(){
  $("#menuid").val(data.menuid);
  		          //监听提交
			  form.on('submit(submitUpdAdminUserAuthority)', function(){
			    var jsonEntity = {};
			    var entity = $("form").serializeArray()
			    $.each(entity,function(){
			    	  jsonEntity[this.name] = this.value;
               });
			    jsonEntity.userId = data.userId;
			    czAdminUserAuthority("/adminuserauthority/updT",jsonEntity,obj);
			    layer.closeAll();
			    return false;
			  });
  		}
  	});
    } 
  });
  
  var $ = layui.$, active = {
    getCheckData: function(){ //获取选中数据
      var checkStatus = table.checkStatus('listTable')
      ,data = checkStatus.data;
	   if(data.length<1){
	    	 layer.alert('请选择数据')
	   }else{
		  layer.confirm("你确定要删除所选中的数据吗？？？",{icon: 7, title:'提示'},function(index){
			   var params ="";
			   for(var i=0;i<data.length;i++){
				   params += data[i].userId+",";
			   } 
			   delManyAdminUserAuthority("/adminuserauthority/deletes",params);
			   flush(currentPage);
			   layer.close(index);
		   });
	   } 
    } 
  };
  
  $('.listTable .layui-btn').on('click', function(){
    var type = $(this).data('type');
    active[type] ? active[type].call(this) : '';
  });
  
  //刷新
  $("#flush").click(function(){
	  flush(currentPage);
  });
  
  //添加
  $("#saveUI").click(function(){
	  layer.open({
  		type:1,
  		title:"添加页面",
  		area:['600px','500px'],
  		content:$("#updAdminUserAuthorityDiv"),
  		success:function(){
  		   $(':input','form')
  	       .not(':button,:submit,:reset,:hidden')
  	       .val('')
  	       .removeAttr('checked')
  		  //监听提交
		  form.on('submit(submitUpdAdminUserAuthority)', function(){
		    var jsonEntity = {};
		    var entity = $("form").serializeArray()
		    $.each(entity,function(){
		    	jsonEntity[this.name] = this.value;
           });
		    czAdminUserAuthority("/adminuserauthority/saveT",jsonEntity);
		    layer.closeAll();
		    return false;
		  });
  		}
  	});
  });
  
  function flush(currentPage){
	  table.reload('listTable', {
	        page: {
	          curr: currentPage 
	        }
	     });
  }
  
  //普通增删改操作
  function czAdminUserAuthority(url,jsonEntity,obj){
	  $.ajax({
		   	type:"post",
		   	url:url,
		   	data:jsonEntity,
		   	success:function(data){
		   		if(data=="delSuccess"){
	   				layer.msg("删除单个成功。。。",{"icon":6,"time":2000});
		   		    obj.del();
		   		}else if(data=="updSuccess"){
	   				layer.msg("信息修改成功。。。",{"icon":6,"time":2000});
		   			 obj.update({
                                                                                                                menuid: jsonEntity.menuid,
                                           		   	      });
		   		}else if(data=="saveSuccess"){
		   		    layer.msg("数据添加改成功。。。",{"icon":6,"time":2000});
		   		    flush(1);
		   		}else{
		   			layer.msg("操作失败！！！",{"icon":2,"time":2000});
		   		}	
		   	},
		   	error:function(){
		   		layer.msg("操作异常！！！",{"icon":3,"time":2000});
		   	}
	   });
  }
  
  //批量删除
  function delManyAdminUserAuthority(url,ids){
	  $.ajax({
			type:"post",
			url:url,
			data:{'ids':ids},
			success:function(data){
				if(data=="delSuccess"){
					layer.msg("批量删除数据成功。。",{"icon":6,"time":2000});
					 flush(currentPage);
				}else{
					layer.msg("批量删除数据失败！！",{"icon":2,"time":2000});
				}
			},
			error:function(){
				layer.msg("对不起，服务器异常！！！",{"icon":3,"time":2000});
			}
		});
  }
});
 




