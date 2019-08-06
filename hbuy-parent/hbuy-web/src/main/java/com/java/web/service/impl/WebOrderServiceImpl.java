package com.java.web.service.impl;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.java.web.model.WebOrderEntity;
import com.java.web.service.WebOrderService;

/**
 * 
 * @author djin
 *    WebOrder业务层实现类
 * @date 2019-08-03 08:20:45
 */
@Service
@Transactional
public class WebOrderServiceImpl extends BaseServiceImpl<WebOrderEntity> implements WebOrderService {
	
}
