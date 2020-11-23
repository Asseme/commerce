package org.sid.commerce.web;

import java.util.List;

import org.sid.commerce.entities.Category;
import org.sid.commerce.entities.Product;
import org.sid.commerce.entities.dao.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class CategoryRestController {
	
	@Autowired
	private CategoryRepository categoryRepository;
	
	//constructor
	public CategoryRestController(CategoryRepository categoryRepository) {
		
		this.categoryRepository = categoryRepository;
		
	}
	
	@GetMapping(path="/category")
	public List<Category> getAllCategory(){
		return categoryRepository.findAll();
	}
	
	@GetMapping(path="/category/{id}")
	public Category getCategory(@PathVariable Long id) {
		return categoryRepository.findById(id).get();
	}
	
	@PostMapping(path="/category")
	public Category createCategory(@RequestBody Category category) {
		return categoryRepository.save(category);
	}
	
	@PutMapping(path="/category")
	public Category updateCategory(@RequestBody Category newCategory, @PathVariable Long id){
		return categoryRepository.findById(id).
			map(
			category -> {
				category = newCategory;
				return categoryRepository.save(category);
				
			}
		).orElseGet(()->{
			return categoryRepository.save(newCategory);
		});
	}
	
	@DeleteMapping(path="deleteCategory")
	public void deleteCategory(@RequestBody Category category) {
		categoryRepository.delete(category);
	}
	
}
