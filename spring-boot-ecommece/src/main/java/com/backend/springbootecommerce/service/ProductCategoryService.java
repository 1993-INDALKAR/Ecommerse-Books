package com.backend.springbootecommerce.service;

import java.util.List;

import com.backend.springbootecommece.entity.ProductCategory;

public interface ProductCategoryService {
	
	public List<ProductCategory> getProductCategories();
	
	public ProductCategory getProductCategoryById(int id);

}
