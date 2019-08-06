package com.java.web.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.ValueOperations;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.java.web.model.WebMenuEntity;
import com.java.web.service.WebMenuService;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;

/**
 * 
 * @author djin
 *    WebMenu业务层实现类
 * @date 2019-08-03 08:20:45
 */
@Service
@Transactional
public class WebMenuServiceImpl extends BaseServiceImpl<WebMenuEntity> implements WebMenuService {

    //依赖redis的操作模版对象
    @Autowired
    private RedisTemplate redisTemplate;

    //重写业务层查询所有导航菜单的方法
    @Override
    public List<WebMenuEntity> findAll() throws Exception {
        //new出空的list菜单集合
        List<WebMenuEntity> menus = new ArrayList<WebMenuEntity>();
        //1.先得到redis中数据对象
        ValueOperations vop = redisTemplate.opsForValue();
        //2.获取redis中取数据
        menus = (List<WebMenuEntity>)vop.get("redisMenus");
        //3.判断数据是否存在
        if(menus==null){
            //4.判断不存在，则取数据库查询
            menus = baseMapper.queryAll();
            System.out.println("此时查询菜单走的是数据库查询！！！！");
            //5.将查询的数据加入到redis缓存中
            vop.set("redisMenus",menus);
            //设置过期时间（60秒）
            redisTemplate.expire("redisMenus",10, TimeUnit.SECONDS);
        }else {
            System.out.println("此时查询菜单走的是redis缓存。。。。");
        }
        //6.将数据返回
        return menus;
    }
}
