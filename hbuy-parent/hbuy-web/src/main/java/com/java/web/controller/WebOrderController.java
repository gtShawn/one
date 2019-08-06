package com.java.web.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.stereotype.Controller;
import com.java.web.model.WebOrderEntity;
 
/**
 * 
 * @author djin
 *   WebOrder控制器
 * @date 2019-08-03 08:20:45
 */
@Controller
@RequestMapping("/weborder")
public class WebOrderController extends BaseController<WebOrderEntity>{
	
	/**
	 * 页面jsp
	 */
	@RequestMapping("/page")
	public String page(){
		return "weborder";
	}

    /**
     * 页面html
     */
    @RequestMapping("/html")
    public String html(){
        return "redirect:/html/weborder.html";
    }
}
