package com.java.web.test;

import com.java.web.model.WebMenuEntity;
import com.java.web.service.WebMenuService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import java.util.List;
import java.util.Map;

/**
 * 
 * @author djin
 *   员工业务层测试类
 */
@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class WebMenuServiceTest {

	@Autowired
	private WebMenuService webMenuService;

	@Test
	public void test01(){
		WebMenuEntity pramasMenu = new WebMenuEntity();
		try {
			Map<String,Object> map = webMenuService.findListByPramas(1,3,pramasMenu);
			System.out.println("总的数据条数："+map.get("count"));
			List<WebMenuEntity> menus = (List<WebMenuEntity>) map.get("data");
			for (WebMenuEntity menu:menus){
				System.out.println(menu);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

}
