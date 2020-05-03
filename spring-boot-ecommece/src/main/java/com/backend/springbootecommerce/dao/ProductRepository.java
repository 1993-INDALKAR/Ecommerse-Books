package com.backend.springbootecommerce.dao;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.backend.springbootecommece.entity.Product;
import com.backend.springbootecommece.entity.Product1;

//@CrossOrigin("http://localhost:4200")
@Repository
//public interface ProductRepository extends JpaRepository<Product, Long> {
public class ProductRepository implements ProductDao {
	
	private EntityManager entityManager;
	
	
	@Autowired
	public ProductRepository(EntityManager entityManager) {
		this.entityManager = entityManager;
	}


	@Override
	public List<Product> getAllProducts() {
	
		Query query = entityManager.createQuery("from Product");
	
	List<Product> products = query.getResultList();
	List<Product> newProducts = new ArrayList<Product>();
	for(int i =0;i<products.size();i++) {
		Product product = new Product();
		long id = products.get(i).getId();
		product.setId(id);
		String sku = products.get(i).getSku();
		product.setSku(products.get(i).getSku());
		product.setName((String)products.get(i).getName());
		product.setImageUrl("../../"+(String)products.get(i).getImageUrl());
		product.setDateCreated((Date)products.get(i).getDateCreated());
		product.setLastUpdated((Date)products.get(i).getLastUpdated());
		product.setUnitPrice((BigDecimal)products.get(i).getUnitPrice());
		product.setUnitsInStock((int)products.get(i).getUnitsInStock());
		product.setDescription((String)products.get(i).getDescription());
		product.setActive((boolean)products.get(i).isActive());
	
		
		newProducts.add(i,product);
	}

	return newProducts;
		
	}

}
