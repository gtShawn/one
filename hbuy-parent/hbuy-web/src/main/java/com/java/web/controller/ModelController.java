package com.java.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 页面跳转的控制
 */
@Controller
@RequestMapping("/model")
public class ModelController {

    //去测试页面
    @RequestMapping("/toIndexHtml")
    public String toIndexHtml(){
        return "redirect:/html/Index.html";
    }
}
