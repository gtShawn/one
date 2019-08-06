package com.java.admin.util;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * @ClassName: WebAppConfig
 * @Description: 配置虚拟路径
 * @author djin
 * @date 2018年10月11日
 */
@Configuration
public class WebAppConfigResource extends WebMvcConfigurerAdapter {
    //获取配置文件中图片的路径
    @Value("${djin.imagesPath}")
    private String mImagesPath;
    //访问图片方法
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        if(mImagesPath.equals("") || mImagesPath.equals("${cbs.imagesPath}")){
            String imagesPath = WebAppConfigResource.class.getClassLoader().getResource("").getPath();
            if(imagesPath.indexOf(".jar")>0){
                imagesPath = imagesPath.substring(0, imagesPath.indexOf(".jar"));
            }else if(imagesPath.indexOf("classes")>0){
                imagesPath = "file:"+imagesPath.substring(0, imagesPath.indexOf("classes"));
            }
            imagesPath = imagesPath.substring(0, imagesPath.lastIndexOf("/"))+"/img/";
            mImagesPath = imagesPath;
        }
        LoggerFactory.getLogger(WebAppConfigResource.class).info("imagesPath="+mImagesPath);
        registry.addResourceHandler("/img/**").addResourceLocations(mImagesPath);
        super.addResourceHandlers(registry);
        
    }
}
