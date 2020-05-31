package com.backend.springbootecommerce.dao;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.backend.springbootecommece.entity.Orders;
import com.backend.springbootecommece.entity.Orders1;
import com.backend.springbootecommece.entity.Product;
import com.backend.springbootecommece.entity.Product1;
import com.backend.springbootecommerce.service.ProductService;


@Repository
public class OrderRepository implements OrderDao {
	

private EntityManager entityManager;
private ProductService productServie;
	
	
	@Autowired
	public OrderRepository(EntityManager entityManager,ProductService productServie) {
		this.entityManager = entityManager;
		this.productServie = productServie;
	}

	@Override
	public List<Orders1> getOrder(String email) {
		
		System.out.println("sfvsf");
//		Query query = entityManager.createNativeQuery("Select * from `full-stack-ecommerce` .`order`");
//		Query query = entityManager.createNativeQuery("Select id,email,quantity,delivered,product_ids from `orders`");
//		Query query = entityManager.createQuery("from orders",Order.class); 
		Query query = entityManager.createQuery("from Orders where email = :eml and delivered = "+false);
		query.setParameter("eml", email);
//		System.out.println(query);
		List<Orders> orders = query.getResultList();
		List<Orders1> ordersUpdateList = new ArrayList<Orders1>();
		
		for (int i = 0; i < orders.size(); i++) {
			Orders order = orders.get(i);
			Orders1 orderUpdate = new Orders1();
			
			orderUpdate.setId(order.getId());
			orderUpdate.setEmail(order.getEmail());
			orderUpdate.setQuantity(order.getQuantity());
			orderUpdate.setDelivered(order.isDelivered());
			orderUpdate.setDateCreated(order.getDateCreated());
			String productIds = order.getProduct();
			List<String> elephantList = Arrays.asList(productIds.split(","));
			List<String> prodQuanList = Arrays.asList(order.getProdQuan().split(","));
			List<Product1> products = new ArrayList<>();
			for (int j = 0; j < elephantList.size(); j++){
				Product product = this.productServie.getProductDetails(Integer.parseInt(elephantList.get(j)));
				Product1 newProd = new Product1();
				newProd.setProduct(product);
				newProd.setQuantity(Integer.parseInt(prodQuanList.get(j)));
				products.add(newProd);
			}
			orderUpdate.setProduct(products);
			ordersUpdateList.add(orderUpdate);
			
		}
		
		return ordersUpdateList;
		
		
		
//		System.out.println(orders.toString());
//		
//		return orders;
	}

}
