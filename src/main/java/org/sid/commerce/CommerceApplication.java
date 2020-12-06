package org.sid.commerce;



import java.util.Random;

import org.sid.commerce.entities.Category;
import org.sid.commerce.entities.Product;
import org.sid.commerce.entities.dao.CategoryRepository;
import org.sid.commerce.entities.dao.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

import net.bytebuddy.utility.RandomString;

@SpringBootApplication
public class CommerceApplication implements CommandLineRunner{

	@Autowired
	CategoryRepository categoryRepository;
	
	@Autowired
	ProductRepository productRepository;
	
	@Autowired
	RepositoryRestConfiguration configuration;
	
	public static void main(String[] args) {
		SpringApplication.run(CommerceApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		configuration.exposeIdsFor(Product.class,Category.class);
		Random rnd = new Random();
		categoryRepository.save(new Category(null,"Shampoing",null,null)) ;
		categoryRepository.save(new Category(null,"parfum",null,null));
		categoryRepository.findAll().forEach(category->{
			for(int i=0; i<10; i++) {
				
				Product product = new Product(null,RandomString.make(10),RandomString.make(30),100.0+rnd.nextDouble(),10+rnd.nextInt(),category,"catalogue_bases-neutres_huile-soin-cheveux-7-huiles_250ml_3.jpg");
						
				productRepository.save(product);
				
				
			}
		});
		
		
	}

}
