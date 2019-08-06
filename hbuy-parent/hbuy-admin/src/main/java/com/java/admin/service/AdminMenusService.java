package com.java.admin.service;

import com.java.admin.model.AdminMenusEntity;

import java.util.List;

/**
 * 
 * @author djin
 *    AdminMenus业务层接口
 * @date 2019-07-29 10:11:48
 */
public interface AdminMenusService extends BaseService<AdminMenusEntity>{

    /**
     * 根据用用户id查询此用户下的权限
     * @param uId
     * @return
     * @throws Exception
     */
    List<AdminMenusEntity> findmenusByUid(Integer uId) throws Exception;
}
