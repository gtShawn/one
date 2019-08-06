package com.java.admin;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

/**
 *   模块的启动类
 */
@SpringBootApplication(scanBasePackages = "com.java.admin")
@EnableEurekaClient
@MapperScan("com.java.admin.mapper")
public class AdminStart {

    public static void main(String[] args) {
        SpringApplication.run(AdminStart.class);
    }

}
