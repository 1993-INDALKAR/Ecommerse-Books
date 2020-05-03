package com.backend.springbootecommerce.dao;

import java.util.List;

import com.backend.springbootecommece.entity.ProductCategory;

public interface ProductCategoryDao {
	
	public List<ProductCategory> getProductCategories();
	
	public ProductCategory getProductCategoryById(int id);

}
