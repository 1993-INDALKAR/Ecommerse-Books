package com.backend.springbootecommerce.dao;

import java.util.List;

import com.backend.springbootecommece.entity.Orders;

public interface OrderDao {
	
	public List<Orders> getOrder(String email);

}
