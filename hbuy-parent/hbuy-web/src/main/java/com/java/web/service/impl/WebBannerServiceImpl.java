package com.java.web.service.impl;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.java.web.model.WebBannerEntity;
import com.java.web.service.WebBannerService;

/**
 * 
 * @author djin
 *    WebBanner业务层实现类
 * @date 2019-08-03 08:20:45
 */
@Service
@Transactional
public class WebBannerServiceImpl extends BaseServiceImpl<WebBannerEntity> implements WebBannerService {
	
}
