package com.backend.springbootecommerce.service;

import java.util.List;

import com.backend.springbootecommece.entity.Orders;
import com.backend.springbootecommece.entity.Product;
import com.backend.springbootecommece.entity.ProductCategory;

public interface ProductService {
	
	public List<Product> getAllProducts();
//	public Product[] getAllProducts();
	
	public List<Product> searchProducts(String prodName);
	
	public Product getProductDetails(long id);
	
	public boolean updateProductDetails(List<Product> products,String email, int quantity);
	
	public List<Orders> getOrder();

}
