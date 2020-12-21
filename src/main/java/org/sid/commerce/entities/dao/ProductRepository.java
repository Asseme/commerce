package org.sid.commerce.entities.dao;

import java.util.List;

import org.sid.commerce.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
@CrossOrigin("*")
public interface ProductRepository extends JpaRepository<Product,Long>{
	
	/*
	 * @Query(value = "SELECT * FROM USERS WHERE LASTNAME = ?1", countQuery =
	 * "SELECT count(*) FROM USERS WHERE LASTNAME = ?1", nativeQuery = true)
	 * Page<User> findByLastname(String lastname, Pageable pageable);
	 */
	/* @Query("select u from User u where u.lastname like ?1%") */
	@CrossOrigin("*")
	@Query(value = "SELECT p FROM Product p WHERE p.category.id = ?1")
	public List<Product> findAllByCategoryById(Long id);
	
	//@Query(value = "SELECT p FROM Product p WHERE p.name like ?1%")
	@RestResource(path = "/productByKeyword")
	public List<Product> findAllByNameContains(String mc);
}
