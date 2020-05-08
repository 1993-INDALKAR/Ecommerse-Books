package com.backend.springbootecommerce.dao;

import java.util.List;

import com.backend.springbootecommece.entity.Product;

public interface ProductDao {
	
	public List<Product> getAllProducts();
//	public Product[] getAllProducts();
	
	public List<Product> searchProducts(String prodName);

}
