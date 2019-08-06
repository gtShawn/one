package com.java.admin.service.impl;

import com.java.admin.model.AdminMenusEntity;
import com.java.admin.service.AdminMenusService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * 
 * @author djin
 *    AdminMenus业务层实现类
 * @date 2019-07-29 10:11:48
 */
@Service
@Transactional
public class AdminMenusServiceImpl extends BaseServiceImpl<AdminMenusEntity> implements AdminMenusService {

    //根据用户id查询此用户下的权限
    @Override
    public List<AdminMenusEntity> findmenusByUid(Integer uId) throws Exception {
        return adminMenusMapper.selectMenusByUid(uId);
    }
}
