package com.java.eureka;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

/**
 *   注册中心3
 */
@SpringBootApplication
@EnableEurekaServer  //开启注册中心的服务
public class EurekaStart1 {

    public static void main(String[] args) {
        SpringApplication.run(EurekaStart1.class);
    }
}
