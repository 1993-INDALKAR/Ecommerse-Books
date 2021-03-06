package com.backend.springbootecommece;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan(basePackages = {"com.backend.springbootecommerce.service","com.backend.springbootecommerce.rest","com.backend.springbootecommerce.dao"})
@EntityScan("com.backend.springbootecommece.entity")
@EnableJpaRepositories(basePackages = {"com.backend.springbootecommerce.dao"})
public class SpringBootEcommeceApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootEcommeceApplication.class, args);
	}

}
