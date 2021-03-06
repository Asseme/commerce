package org.sid.commerce.web;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;


import org.sid.commerce.entities.Product;
import org.sid.commerce.entities.dao.ProductRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/")
public class ProductRestController {
	
	ProductRepository productRepository;
	
	//constructor
	public ProductRestController(ProductRepository productRepository) {
		this.productRepository = productRepository;
		
	}
	
	//Get Requests
	@GetMapping(path="products")
	public List<Product> getAllProduct(){
		return productRepository.findAll();
	}
	
	@GetMapping(path="product/{id}")
	public Product getProduct(@PathVariable Long id) {
		return productRepository.findById(id).get();
	}
	
	//Post Requests
	@PostMapping(path="createProduct")
	public Product saveProduct(@RequestBody Product newProduct) {
		return productRepository.save(newProduct);
	}
	
	//Put requests
	@PutMapping(path="updateProduct/{id}")
	public Product updateProduct(@RequestBody Product newProduct, @PathVariable Long id) {
		return productRepository.findById(id).map(product -> {
			product = newProduct;
			return productRepository.save(product);
		}).orElseGet(() ->{
			return productRepository.save(newProduct);
		});
	}
	
	@PutMapping(path="uploadPhoto/{id}")
	public Product uploadPhoto(MultipartFile file, @PathVariable Long id){
		return productRepository.findById(id).map(
				product -> {
					product.setPhoto(id + file.getName() + "jpg");
					try {
						Files.write(Paths.get(System.getProperty("user.home")),file.getBytes());
					} catch (IOException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
					return productRepository.save(product);
				}
		).orElseGet(()->{
			return productRepository.save(null);
		});
		
	}
	
	
	
	
	
}
