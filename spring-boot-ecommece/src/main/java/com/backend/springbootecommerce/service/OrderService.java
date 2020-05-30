package com.backend.springbootecommerce.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.backend.springbootecommece.entity.Order;


public interface OrderService {
	
	public List<Order> getOrder();

}
