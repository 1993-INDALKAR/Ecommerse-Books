package com.backend.springbootecommerce.rest;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.springbootecommece.entity.Product;
import com.backend.springbootecommece.entity.Product1;
import com.backend.springbootecommerce.service.ProductService;

@RestController
@RequestMapping("/api")
public class ProductRestController {
	
	private ProductService productServie;
		
	@Autowired
	public ProductRestController(ProductService productServie) {
		this.productServie = productServie;
	}
	
	@GetMapping("/products/search/{prodName}")
	@CrossOrigin("http://localhost:4200")
	public List<Product> searchProducts(@PathVariable String prodName){
		
		return this.productServie.searchProducts(prodName);
	}

	@GetMapping("/products")
	@CrossOrigin("http://localhost:4200")
	public List<Product> getAllProducts(){
//		public Product[] getAllProducts(){
//		System.out.println("products");
		return this.productServie.getAllProducts();
	}
	
	@GetMapping("/products/{id}")
	@CrossOrigin("http://localhost:4200")
	public Product getProductDetail(@PathVariable int id) {
		System.out.println("hello giyss");
		return this.productServie.getProductDetails(id);
	}
	
	@PostMapping("/products/update")
	@CrossOrigin("http://localhost:4200")
	public boolean updateProducts(@RequestBody List<Product> products) {
		System.out.println("update products");
		System.out.println(products.toString());
		return true;
	}
	
	
	
}
