package com.java.web;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

/**
 *   模块的启动类
 */
@SpringBootApplication(scanBasePackages = "com.java.web.*")
@EnableEurekaClient
@MapperScan("com.java.web.mapper")
public class WebStart {

    public static void main(String[] args) {
        SpringApplication.run(WebStart.class);
    }

}
