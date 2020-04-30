package com.backend.springbootecommerce.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.springbootecommece.entity.Product;
import com.backend.springbootecommerce.dao.ProductRepository;

@Service
public class ProductServiceImp implements ProductService {
	
	private ProductRepository productDao;
	
	
	@Autowired
	public ProductServiceImp(ProductRepository productDao) {
		this.productDao = productDao;
	}



	@Override
	public List<Product> getAllProducts() {
		// TODO Auto-generated method stub
//		System.out.println("")
		List<Product> products = this.productDao.findAll();
		
//		return products.subList(0, );
		return products;
	}

}
