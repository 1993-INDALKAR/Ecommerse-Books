package com.backend.springbootecommerce.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.backend.springbootecommece.entity.Product;

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
		
		System.out.println("Getting size of products");
		Query query = entityManager.createQuery("from Product");
//	 
		System.out.println(query.getResultList());
	System.out.println("Getting size of products");
	
//	List<Product> products = query.getResultList();
//	System.out.println(products.size());
	
	return null;
		
	}

}
