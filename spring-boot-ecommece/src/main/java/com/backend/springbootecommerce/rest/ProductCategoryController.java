package com.backend.springbootecommerce.rest;

import java.util.List;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.backend.springbootecommece.entity.ProductCategory;
import com.backend.springbootecommerce.service.ProductCategoryService;

@RestController
@RequestMapping("/product-category")
public class ProductCategoryController {
	
	private ProductCategoryService prodCatService;

	@Autowired
	public ProductCategoryController(ProductCategoryService prodCatService) {
		this.prodCatService = prodCatService;
	}



	@GetMapping("/categories")
	@CrossOrigin("http://localhost:4200")
	public List<ProductCategory> getProductCategories(){
		
		return this.prodCatService.getProductCategories();
	}
	
	@GetMapping("/categories/{categoryId}")
	@CrossOrigin("http://localhost:4200")
	public ProductCategory getProductCategories(@PathVariable int categoryId){
		System.out.println("id");
		System.out.println(categoryId);
		
		return this.prodCatService.getProductCategoryById(categoryId);
	}
	
	
	
}
