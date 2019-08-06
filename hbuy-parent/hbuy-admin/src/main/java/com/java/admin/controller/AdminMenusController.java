package com.java.admin.controller;

import com.java.admin.model.AdminMenusEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * 
 * @author djin
 *   AdminMenus控制器
 * @date 2019-07-29 10:11:48
 */
@Controller
@RequestMapping("/adminmenus")
public class AdminMenusController extends BaseController<AdminMenusEntity> {

    /**
     * 根据用户id查询此用户下的权限
     * @param uId
     * @return
     */
    @RequestMapping("/loadmenusByUId")
    public
    @ResponseBody
    List<AdminMenusEntity> loadmenusByUId(Integer uId){
        try {
            return adminMenusService.findmenusByUid(uId);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

}
