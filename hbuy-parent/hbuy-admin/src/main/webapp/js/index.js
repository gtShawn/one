// 配置
layui.config({
	base: './hpModules/' // 扩展模块目录(自定义模块的引入)
}).extend({ // 模块别名
	hpTab: 'hpTab/hpTab',
	hpRightMenu: 'hpRightMenu/hpRightMenu',
	hpFormAll: 'hpFormAll/hpFormAll',
});

//JavaScript代码区域
layui.use(['element', 'carousel','hpTheme', 'hpTab', 'hpLayedit', 'hpRightMenu'], function() {
	
	var element = layui.element;
	var carousel = layui.carousel; //轮播
	var hpTab = layui.hpTab;
	var hpRightMenu = layui.hpRightMenu;
	var hpTheme=layui.hpTheme;
	$ = layui.$;
	
    // 初始化主题
	hpTheme.init();
	 //初始化轮播
	carousel.render({
		elem: '#test1',
		width: '100%', //设置容器宽度
		interval: 1500,
		height: '500px',
		arrow: 'none', //不显示箭头
		anim: 'fade', //切换动画方式
	});

    // 初始化 动态tab
    hpTab.init();
    // 右键tab菜单
    hpRightMenu.init();
    
	//退出
	$("#exit").click(function(){
		 layer.confirm('您确定要退出吗？', function(index){
		 	exitUser();
	        layer.close(index);
	      });
	});

	//用户退出
	function exitUser(){
        $.ajax({
            type:"post",
            url:"adminusers/exitUser",
            success:function(data){
                if(data=="success"){
                	//跳转到登录页面
					setTimeout("window.location='/'",2000);
                    layer.msg("退出成功。。",{"icon":6,"time":2000});
                }else{
                    layer.msg("退出失败。。",{"icon":2,"time":2000});
                }
            },
            error:function(){
                layer.msg("对不起，服务器异常！！！",{"icon":3,"time":2000});
            }
        });
	}
});