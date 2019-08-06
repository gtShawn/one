package com.java.admin.mapper;

import com.java.admin.model.AdminMenusEntity;

import java.util.List;

/**
 * 
 * @author djin
 *    AdminMenusMapper层
 * @date 2019-07-29 10:11:48
 */
public interface AdminMenusMapper extends BaseMapper<AdminMenusEntity> {

    //根据用户id查询其权限
    List<AdminMenusEntity> selectMenusByUid(Integer id) throws Exception;
}
