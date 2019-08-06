//AdminUsersjs文件
layui.use(['table','form','laydate','upload'], function(){
  var table = layui.table
      ,form = layui.form
	  ,laydate = layui.laydate
      ,upload = layui.upload;
	//  ,$ = layui.jquery;
  //监听表格复选框选择
  table.on('checkbox(list)', function(obj){
    console.log(obj)
  });
  
//日期，账号最新变动时间
laydate.render({
    elem: '#updatetime',
    format:'yyyy/MM/dd HH:mm:ss',
	type:'datetime'
});
  
  var currentPage = 1;
  
  //初始化
  loadAdminUsers();
  
	function loadAdminUsers(jsonEntity){
	  //方法级渲染
	  table.render({
	   elem: '#listTable'
	   ,url: '/adminusers/listByPramas'
	   ,width:1460
	   ,height: 380
	   ,page:true
	   ,where:jsonEntity
	   ,limit:5
	   ,cols: [[
		 {checkbox: true}
		 ,{field:'id', title: 'ID',align:'center', width:80, sort: true}
		 ,{field:'username', title: '用户名',align:'center', width:130, sort: true}
		 ,{field:'userHeader', title: '用户头像',align:'center', width:160, templet:'<div><img src="{{d.userHeader}}"></div>'}
		 ,{field:'pwd', title: '密码',align:'center', width:360, sort: true}
		 ,{field:'isroot', title: '用户类型',align:'center', width:180, sort: true, templet: '#isrootTpl'}
		 ,{field:'updatetime', title: '账号最新变动时间',align:'center', width:260, sort: true}
		  ,{fixed: 'right',title: '操作', width:256, align:'center', toolbar: '#bar'}
		]]
		  ,done: function(res, curr, count){
			  currentPage = curr;
              hoverOpenImg();//显示大图
		  }
	  });
	  }

	//普通图片上传
	var uploadInst = upload.render({
		elem: '#test01'
		,url: 'adminusers/upload'   //服务器端的文件上传的地址
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
				layer.msg("上传失败！！", {icon: 2, time: 2000, anim: 4, shade: 0.6});
			}else{
				//上传成功
				$("#userHeader").val(res.newFilePath);  //将新上传的文件的访问路径设置到form表单中
				layer.msg("上传成功。。", {icon: 1, time: 2000, anim: 4, shade: 0.6});

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

  //监听工具条
  table.on('tool(list)', function(obj){
    var data = obj.data;
    if(obj.event === 'show'){
    	//1.进行数据查询
		loadmenusByUId(data.id);
		//3.将容器显示出来
        layer.open({
            type: 1,
            title: "树形权限显示界面",
            area: ['400px', '500px'],
            anim: 4,
            shade: 0.6,
            content: $("#ztreeDiv"),
            cancel: function(index, layero){
                $("#ztreeDiv").hide();   //将权限容器重新隐藏
            	layer.close(index);  //关闭当前的弹框
            }
        });
    } else if(obj.event === 'del'){
      layer.confirm('真的删除行么', function(index){
        var jsonEntity = {};
        jsonEntity['id'] = data.id;
        czAdminUsers("/adminusers/delete",jsonEntity);
        obj.del();
        layer.close(index);
      });
    } else if(obj.event === 'edit'){
      layer.open({
  		type:1,
  		title:"信息编辑",
  		area:['400px','500px'],
  		content:$("#updAdminUsersDiv"),
  		success:function(){
  			$("#username").val(data.username);
  			$("#pwd").val(data.pwd);
  			$('#demo1').attr('src', data.userHeader);
            if(data.isroot=='1'){
                  	  $("#sedOpt").replaceWith('<option value="1" selected id="sedOpt">超级管理员</option>');
				  }else {
                      $("#sedOpt").replaceWith('<option value="0" selected id="sedOpt">普通管理员</option>');
				  }
				  form.render('select'); //渲染下拉框
				  $("#updatetime").val(data.updatetime);
  		          //监听提交
			  form.on('submit(submitUpdAdminUsers)', function(){
			    var jsonEntity = {};
			    var entity = $("form").serializeArray()
			    $.each(entity,function(){
			    	  jsonEntity[this.name] = this.value;
               });
			    jsonEntity.id = data.id;
			    czAdminUsers("/adminusers/updT",jsonEntity,obj);
			    $("#updAdminUsersDiv").hide();   //将修改弹框重新隐藏
			    layer.closeAll();
			    return false;
			  });
  		},
		  cancel: function(index, layero){
			  $("#updAdminUsersDiv").hide();   //将修改弹框重新隐藏
			  layer.close(index);  //关闭当前的弹框
		  }
  	});
    } 
  });

 /* var $ = layui.$*/var active = {
    getCheckData: function(){ //获取选中数据
      var checkStatus = table.checkStatus('listTable')
      ,data = checkStatus.data;
	   if(data.length<1){
	    	 layer.alert('请选择数据')
	   }else{
		  layer.confirm("你确定要删除所选中的数据吗？？？",{icon: 7, title:'提示'},function(index){
			   var params ="";
			   for(var i=0;i<data.length;i++){
				   params += data[i].id+",";
			   } 
			   delManyAdminUsers("/adminusers/deletes",params);
			   flush(currentPage);
			   layer.close(index);
		   });
	   } 
    } 
  };
  
 /* $('.listTable .layui-btn').on('click', function(){
    var type = $(this).data('type');
    active[type] ? active[type].call(this) : '';
  });*/
  
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
  		content:$("#updAdminUsersDiv"),
  		success:function(){
  		   $(':input','form')
  	       .not(':button,:submit,:reset,:hidden')
  	       .val('')
  	       .removeAttr('checked')
  		  //监听提交
		  form.on('submit(submitUpdAdminUsers)', function(){
		    var jsonEntity = {};
		    var entity = $("form").serializeArray()
		    $.each(entity,function(){
		    	jsonEntity[this.name] = this.value;
           });
		    czAdminUsers("/adminusers/saveT",jsonEntity);
		    $("#updAdminUsersDiv").hide();   //将修改弹框重新隐藏
		    layer.closeAll();
		    return false;
		  });
  		},
          cancel: function(index, layero){
              $("#updAdminUsersDiv").hide();   //将修改弹框重新隐藏
              layer.close(index);  //关闭当前的弹框
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
  function czAdminUsers(url,jsonEntity,obj){
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
						 username: jsonEntity.username,
						 pwd: jsonEntity.pwd,
						 isroot: jsonEntity.isroot,
						 updatetime: jsonEntity.updatetime,
						 userHeader: jsonEntity.userHeader,
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
  function delManyAdminUsers(url,ids){
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

  //根据用户id查询此用户的权限
	function loadmenusByUId(uId) {
       var setting = {  //设置树形结构图的显示样式
           data : {  //设置数据
               simpleData : {
                   enable : true,   //使用格式化后的数据
                   idKey : "id",       // 结点的id,对应到Json中的id
                   pIdKey : "parentid",     // 结点的pId,对应到Json中的pid
                   rootPId : 0         // 根节点设置为0
               },
               key : {
                   name : "text" // 结点显示的name属性，对应到Json中的rName
               }
           },
           check: {
               enable: true  //开启复选框
           },
           async : {  //异步数据的配置
               enable : true,  //使用异步数据：从服务器端获取数据
               url:'adminmenus/loadmenusByUId?uId='+uId,    //服务器端访问路径
               autoParam:["id", "name=n", "level=lv"],
               otherParam:{"otherParam":"zTreeAsyncTest"}
           }
       };
       //2.将查询的数据初始化到容器中
       $.fn.zTree.init($("#test1"), setting);  //树形结构的数据初始化
	}

    //放大头像
    function hoverOpenImg(){
        var img_show = null; // tips提示
        $('td img').hover(function(){
            var img = "<img class='img_msg' src='"+$(this).attr('src')+"' style='width:230px;' />";
            img_show = layer.tips(img, this,{
                tips:[2, 'rgba(41,41,41,.5)']
                ,area: ['260px']
            });
        },function(){
            layer.close(img_show);
        });
        $('td img').attr('style','max-width:70px');
    }
});
 




