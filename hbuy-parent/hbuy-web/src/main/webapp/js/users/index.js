//AdminUsersjs文件
layui.use(['layer'], function() {
    var layer = layui.layer;
        layer.msg("进入到index.jsp页面");

     loadAllWebMenu();

    //查询所有导航菜单
    function loadAllWebMenu() {
        $.ajax({
            type:'post',
            url:'/webmenu/loadAll',
            dataType:'JSON',
            success:function(data){
                console.log(data);
            },
            error:function(){
                layer.msg("对不起，服务器异常！！！",{"icon":3,"time":2000});
            }
        })
    }
});