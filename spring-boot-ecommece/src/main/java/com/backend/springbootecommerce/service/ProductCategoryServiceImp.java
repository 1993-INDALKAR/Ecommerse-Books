package com.backend.springbootecommerce.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.springbootecommece.entity.ProductCategory;
import com.backend.springbootecommerce.dao.ProductCategoryDao;

@Service
public class ProductCategoryServiceImp implements ProductCategoryService {
	
	private ProductCategoryDao productCategoryDao;
	
	@Autowired
	public ProductCategoryServiceImp(ProductCategoryDao productCategoryDao) {
		this.productCategoryDao = productCategoryDao;
	}



	@Override
	@Transactional
	public List<ProductCategory> getProductCategories() {
		// TODO Auto-generated method stub
		return this.productCategoryDao.getProductCategories();
	}



	@Override
	@Transactional
	public ProductCategory getProductCategoryById(int id) {
		// TODO Auto-generated method stub
		return this.productCategoryDao.getProductCategoryById(id);
	}

}
