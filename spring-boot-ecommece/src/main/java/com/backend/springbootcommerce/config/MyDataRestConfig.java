package com.backend.springbootcommerce.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;

import com.backend.springbootecommece.entity.Product;
import com.backend.springbootecommece.entity.ProductCategory;

@Configuration
public class MyDataRestConfig implements RepositoryRestConfigurer {

	@Override
	public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
		// TODO Auto-generated method stub
		
		
		HttpMethod[] theUnsupportedAction = {HttpMethod.PUT,HttpMethod.POST,HttpMethod.DELETE};
		
		config.getExposureConfiguration().forDomainType(Product.class)
		.withItemExposure((metdata,httpMethod) -> httpMethod.disable(theUnsupportedAction))
		.withCollectionExposure((metdata,httpMethod) -> httpMethod.disable(theUnsupportedAction));
		
		config.getExposureConfiguration().forDomainType(ProductCategory.class)
		.withItemExposure((metdata,httpMethod) -> httpMethod.disable(theUnsupportedAction))
		.withCollectionExposure((metdata,httpMethod) -> httpMethod.disable(theUnsupportedAction));
		
		
		
		RepositoryRestConfigurer.super.configureRepositoryRestConfiguration(config);
	}

	
	
	
}
