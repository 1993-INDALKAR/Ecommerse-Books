package com.backend.springbootecommerce.dao;

import java.util.List;

import com.backend.springbootecommece.entity.Orders;
import com.backend.springbootecommece.entity.Orders1;

public interface OrderDao {
	
	public List<Orders1> getOrder(String email);

}
