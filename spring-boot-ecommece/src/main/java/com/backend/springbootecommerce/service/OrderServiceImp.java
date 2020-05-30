package com.backend.springbootecommerce.service;

import java.util.List;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.springbootecommece.entity.Order;
import com.backend.springbootecommerce.dao.OrderRepository;
import com.backend.springbootecommerce.dao.ProductRepository;

@Service
public class OrderServiceImp implements OrderService {


private OrderRepository orderDao;

	
	@Autowired
	public OrderServiceImp(OrderRepository orderDao) {
		this.orderDao = orderDao;
	}

	@Override
	@Transactional
	public List<Order> getOrder() {
		// TODO Auto-generated method stub
		System.out.println("order imp");
		return this.orderDao.getOrder();
	}

}
