package com.tunpu.tunmall.mall;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;

@EnableFeignClients(basePackages = "com.tunpu.tunmall.mall.feign")
@EnableDiscoveryClient
@SpringBootApplication
public class TunmallMallApplication {

    public static void main(String[] args) {
        SpringApplication.run(TunmallMallApplication.class, args);
    }

}
