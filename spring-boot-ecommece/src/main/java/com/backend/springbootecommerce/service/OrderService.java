package com.backend.springbootecommerce.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.backend.springbootecommece.entity.Orders;


public interface OrderService {
	
	public List<Orders> getOrder(String email);

}
