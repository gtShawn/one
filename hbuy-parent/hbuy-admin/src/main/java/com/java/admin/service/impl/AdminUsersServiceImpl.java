package com.java.admin.service.impl;

import com.java.admin.model.AdminUsersEntity;
import com.java.admin.service.AdminUsersService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * 
 * @author djin
 *    AdminUsers业务层实现类
 * @date 2019-07-29 10:11:48
 */
@Service
@Transactional
public class AdminUsersServiceImpl extends BaseServiceImpl<AdminUsersEntity> implements AdminUsersService {
	
}
