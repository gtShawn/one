package com.java.admin.util;

import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 *   设置访问首页index.jsp
 *   @Configuration 实例化此类，读取此类中的配置
 */
@Configuration
public class ToIndexView extends WebMvcConfigurerAdapter {

    @Override
    public void addViewControllers( ViewControllerRegistry registry ) {//
        System.out.println("通过此配置的工具类跳转到login.jsp页面");
        //   /为访问的路径    /WEB-INF/jsp/index.jsp为文件的实际路径
        registry.addViewController( "/" ).setViewName( "login/login" );
        registry.setOrder( Ordered.HIGHEST_PRECEDENCE );
        super.addViewControllers( registry );
    }
}
