package com.java.admin.controller;

import com.java.admin.model.AdminUsersEntity;
import com.java.admin.util.QiniuUploadUtil;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

/**
 * 
 * @author djin
 *   AdminUsers控制器
 * @date 2019-07-29 10:11:48
 */
@Controller
@RequestMapping("/adminusers")
public class AdminUsersController extends BaseController<AdminUsersEntity> {

	//登录
	@RequestMapping("/login")
	public
	@ResponseBody
	String login(HttpSession session,AdminUsersEntity adminUsersEntity){
		try {
			//根据条件查询单个对象
			AdminUsersEntity loginUser = baseService.findObjectByPramas(adminUsersEntity);
			if (loginUser!=null){
				//将登录的对象装进session容器中
				session.setAttribute("loginUser",loginUser);
				return SUCCESS;
			}else {
				return FAIL;
			}
		} catch (Exception e) {
			e.printStackTrace();
			return ERROR;
		}
	}

	@RequestMapping("/exitUser")
	public
	@ResponseBody
	String exitUser(HttpSession session){
		//将session容器中的用户移除掉
		session.removeAttribute("loginUser");
		return SUCCESS;
	}

	@RequestMapping("/upload")
	public
	@ResponseBody
	Map<String,Object> upload(MultipartFile myFile){
		try {
			return QiniuUploadUtil.upload(myFile);
		} catch (IOException e) {
			e.printStackTrace();
		}
		return null;
	}
}
