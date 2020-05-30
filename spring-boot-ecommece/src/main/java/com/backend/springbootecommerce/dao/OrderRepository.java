package com.backend.springbootecommerce.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.backend.springbootecommece.entity.Orders;


@Repository
public class OrderRepository implements OrderDao {
	

private EntityManager entityManager;
	
	
	@Autowired
	public OrderRepository(EntityManager entityManager) {
		this.entityManager = entityManager;
	}

	@Override
	public List<Orders> getOrder(String email) {
		
		System.out.println("sfvsf");
//		Query query = entityManager.createNativeQuery("Select * from `full-stack-ecommerce` .`order`");
//		Query query = entityManager.createNativeQuery("Select id,email,quantity,delivered,product_ids from `orders`");
//		Query query = entityManager.createQuery("from orders",Order.class); 
		Query query = entityManager.createQuery("from Orders where email = :eml and delivered = "+false);
		query.setParameter("eml", email);
//		System.out.println(query);
		List<Orders> orders = query.getResultList();
		System.out.println(orders.toString());
		
		return orders;
	}

}
