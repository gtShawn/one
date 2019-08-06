package com.java.eureka;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

/**
 *   注册中心2
 */
@SpringBootApplication
@EnableEurekaServer
public class EurekaStart2 {

    public static void main(String[] args) {
        SpringApplication.run(EurekaStart2.class);
    }
}
