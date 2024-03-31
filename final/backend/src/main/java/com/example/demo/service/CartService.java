package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Cart;
import com.example.demo.repository.CartRepo;
@Service
public class CartService {

    @Autowired
    CartRepo ebookRepository;
    public List<Cart> getAllBooks()   
    {  
    return ebookRepository.findAll();    }  
    //getting a specific record by using the method findById() of CrudRepository  
    public Cart getBooksById(long id)   
    {  
    return ebookRepository.findById(id).get();  
    }  
    //saving a specific record by using the method save() of CrudRepository  
    public Cart saveOrUpdate(Cart books)
    {
    	return ebookRepository.save(books);  
    }  
    //deleting a specific record by using the method deleteById() of CrudRepository  
    public void delete(long id)   
    {  
    	ebookRepository.deleteById(id);  
    }  
    //updating a record  
    public void update(Cart books, int bookid)   
    {  
    	ebookRepository.save(books);  
    }  
}
