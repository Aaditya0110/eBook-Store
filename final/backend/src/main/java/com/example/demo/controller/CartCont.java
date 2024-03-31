package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.entity.Cart;
import com.example.demo.entity.Ebook;
import com.example.demo.repository.CartRepo;

@RestController
public class CartCont {
	@Autowired
	CartRepo crepo;
	
	@GetMapping("/cart/{cid}")
	public List<Ebook> getCartBooks(@PathVariable Long cid)
	{
		Cart c=crepo.findById(cid).orElseThrow();
		return c.getBooks();
	}
	@PostMapping("/postcart")
	public Cart createCart(@RequestBody Cart c)
	{
		return crepo.save(c);
	}
}
