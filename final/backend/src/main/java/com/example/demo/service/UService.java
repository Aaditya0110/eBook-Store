package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Ebook;
import com.example.demo.repository.Erepo;

@Service
public class UService {

    @Autowired
    Erepo ebookRepository;
    public List<Ebook> getAllBooks()   
    {  
    return ebookRepository.findAll();    }  
    //getting a specific record by using the method findById() of CrudRepository  
    public Ebook getBooksById(long id)   
    {  
    return ebookRepository.findById(id).get();  
    }  
    //saving a specific record by using the method save() of CrudRepository  
    public Ebook saveOrUpdate(Ebook books)
    {
    	return ebookRepository.save(books);  
    }  
    //deleting a specific record by using the method deleteById() of CrudRepository  
    public void delete(long id)   
    {  
    	ebookRepository.deleteById(id);  
    }  
    //updating a record  
    public void update(Ebook books, int bookid)   
    {  
    	ebookRepository.save(books);  
    }  
}
