package com.backend.springbootecommece.entity;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Product1 {
	

//	private Long id;
//	private String sku;
//	
//	private String name;
//	
//	private String description;
//	
//	private BigDecimal unitPrice;
//	
//	private String imageUrl;
//	
//	private boolean active;
//	
//	private int unitsInStock;
	
	private int quantity;
	
//	@CreationTimestamp
//	private Date dateCreated;
//	
//	@UpdateTimestamp
//	private Date lastUpdated;

    private Product product;
    

    
	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

//	public Long getId() {
//		return id;
//	}
//
//	public void setId(Long id) {
//		this.id = id;
//	}
//
//	public String getSku() {
//		return sku;
//	}
//
//	public void setSku(String sku) {
//		this.sku = sku;
//	}
//
//	public String getName() {
//		return name;
//	}
//
//	public void setName(String name) {
//		this.name = name;
//	}
//
//	public String getDescription() {
//		return description;
//	}
//
//	public void setDescription(String description) {
//		this.description = description;
//	}
//
//	public BigDecimal getUnitPrice() {
//		return unitPrice;
//	}
//
//	public void setUnitPrice(BigDecimal unitPrice) {
//		this.unitPrice = unitPrice;
//	}
//
//	public String getImageUrl() {
//		return imageUrl;
//	}
//
//	public void setImageUrl(String imageUrl) {
//		this.imageUrl = imageUrl;
//	}
//
//	public boolean isActive() {
//		return active;
//	}
//
//	public void setActive(boolean active) {
//		this.active = active;
//	}
//
//	public int getUnitsInStock() {
//		return unitsInStock;
//	}
//
//	public void setUnitsInStock(int unitsInStock) {
//		this.unitsInStock = unitsInStock;
//	}
//
//	public Date getDateCreated() {
//		return dateCreated;
//	}
//
//	public void setDateCreated(Date dateCreated) {
//		this.dateCreated = dateCreated;
//	}
//
//	public Date getLastUpdated() {
//		return lastUpdated;
//	}
//
//	public void setLastUpdated(Date lastUpdated) {
//		this.lastUpdated = lastUpdated;
//	}
//
////	public ProductCategory getCategory() {
////		return category;
////	}
////
////	public void setCategory(ProductCategory category) {
////		this.category = category;
////	}
//	
//	
//
//	@Override
//	public String toString() {
//		return "Product [id=" + id + ", sku=" + sku + ", name=" + name + ", description=" + description + ", unitPrice="
//				+ unitPrice + ", imageUrl=" + imageUrl + ", active=" + active + ", unitsInStock=" + unitsInStock
//				+ ", dateCreated=" + dateCreated + ", lastUpdated=" + lastUpdated + "]";
//	}
	
	
	
	
	
	
	
}
