package com.backend.springbootecommerce.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.backend.springbootecommece.entity.Orders;
import com.backend.springbootecommece.entity.Orders1;


public interface OrderService {
	
	public List<Orders1> getOrder(String email);

}
