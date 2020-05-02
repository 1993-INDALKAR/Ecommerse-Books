package com.backend.springbootecommerce.service;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.springbootecommece.entity.Product;
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
		// TODO Auto-generated method stub

		List<Product> products = productDao.getAllProducts();
		
		return products;
		
	}

}
