package com.backend.springbootecommerce.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.stereotype.Repository;

import com.backend.springbootecommece.entity.ProductCategory;

//@RepositoryRestResource(collectionResourceRel = "productCategory",path="product-category")
//public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Long> {
@Repository
public class ProductCategoryRepository implements ProductCategoryDao{
	
	private EntityManager entityManager;

	@Autowired
	public ProductCategoryRepository(EntityManager entityManager) {
		this.entityManager = entityManager;
	}

	@Override
	public List<ProductCategory> getProductCategories() {
		// TODO Auto-generated method stub
		
		Query query = entityManager.createQuery("from ProductCategory");
		
		List<ProductCategory> categories = query.getResultList();
//		System.out.println(categories.size());
				
		return categories;
	}

	@Override
	public ProductCategory getProductCategoryById(int id) {
		// TODO Auto-generated method stub
		System.out.println("query.getSingleResult()" );
		Query query = entityManager.createQuery("from ProductCategory where id = "+ id);
		ProductCategory category = (ProductCategory) query.getSingleResult();
//		System.out.println(query.getSingleResult() );
		return category;
	}

}


