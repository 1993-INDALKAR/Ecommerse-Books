package com.backend.springbootecommerce.service;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.springbootecommece.entity.Orders;
import com.backend.springbootecommece.entity.Product;
import com.backend.springbootecommece.entity.ProductCategory;
import com.backend.springbootecommerce.dao.ProductRepository;

@Service
public class ProductServiceImp implements ProductService {
	
	private ProductRepository productDao;
	
	private EntityManager entityManager;
	
	@Autowired
	public ProductServiceImp(ProductRepository productDao) {
		this.productDao = productDao;
	}



	@Override
	@Transactional
	public List<Product> getAllProducts() {
//		public Product[] getAllProducts() {
		// TODO Auto-generated method stub

		List<Product> products = productDao.getAllProducts();
//		Product[] products = productDao.getAllProducts();
//		System.out.println("products");
//		System.out.println(products);
		return products;
		
	}



	@Override
	@Transactional
	public List<Product> searchProducts(String prodName) {
		// TODO Auto-generated method stub
		return productDao.searchProducts(prodName);
	}



	@Override
	public Product getProductDetails(long id) {
		// TODO Auto-generated method stub
		return productDao.getProductDetails(id);
	}



	@Override
	@Transactional
	public boolean updateProductDetails(List<Product> products,String email, int quantity) {
		// TODO Auto-generated method stub
		return productDao.updateProductDetails(products,email,quantity);
	}



	@Override
	@Transactional
	public List<Orders> getOrder() {
		// TODO Auto-generated method stub
		return this.productDao.getOrder();
	}





}
