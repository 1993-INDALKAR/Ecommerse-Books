package com.backend.springbootecommece.entity;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.CreationTimestamp;

public class Orders1 {
	
	
	private Long id;
	
	
	private String email;
	
	private int quantity;
	
	private boolean delivered;
	
	private List<Product1> product;

	private Date dateCreated;

	public Long getId() {
		return id;
	}
	
	public Orders1(){
		
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public boolean isDelivered() {
		return delivered;
	}

	public void setDelivered(boolean delivered) {
		this.delivered = delivered;
	}

	public List<Product1> getProduct() {
		return product;
	}

	public void setProduct(List<Product1> product) {
		this.product = product;
	}

	public Date getDateCreated() {
		return dateCreated;
	}

	public void setDateCreated(Date dateCreated) {
		this.dateCreated = dateCreated;
	}

	@Override
	public String toString() {
		return "Orders1 [id=" + id + ", email=" + email + ", quantity=" + quantity + ", delivered=" + delivered
				+ ", product=" + product + ", dateCreated=" + dateCreated + "]";
	}
	
	

}
