package com.backend.springbootecommerce.dao;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;

import com.backend.springbootecommece.entity.Order;
import com.backend.springbootecommece.entity.Product;

public interface ProductDao {
	
	public List<Product> getAllProducts();
//	public Product[] getAllProducts();
	
	public List<Product> searchProducts(String prodName);
	
	public Product getProductDetails(long id);
	
	public boolean updateProductDetails(List<Product> products,String email, int quantity);
	
	
	public List<Order> getOrder();

}
