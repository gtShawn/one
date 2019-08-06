package com.java.admin.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;

/**
 * 页面跳转的控制器
 */
@Controller
@RequestMapping("/model")
public class ModelController {

    //跳转到登录页面
    @RequestMapping("/toIndex")
    public String toIndex(){
        return "index";
    }

    //去用户管理的页面
    @RequestMapping("/toAdminUsers")
    public String toAdminUsers(){
        return "adminusers/adminusers";
    }

    //去到文件上传页面
    @RequestMapping("/toUpload")
    public String toUpload(){
        return "upload/upload";
    }


}
