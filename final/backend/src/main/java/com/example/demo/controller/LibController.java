package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.LibService;

@RestController
public class LibController {
	@Autowired  
	LibService booksService;   
//	@Autowired 
//	
//	@GetMapping("/books")  
//	private List<Ebook> getAllBooks()   
//	{  
//	return booksService.getAllBooks();  
//	}  
//	@GetMapping("/books/{bookid}")  
//	private Ebook getBooks(@PathVariable("bookid") int bookid)   
//	{  
//	return booksService.getBooksById(bookid);  
//	}  
//	@DeleteMapping("/books/{bookid}")  
//	private void deleteBook(@PathVariable("bookid") int bookid)   
//	{  
//	booksService.delete(bookid);  
//	}    
//	@PostMapping("/books/{ig}")  
//	private Ebook saveBook(@RequestBody Ebook books,@PathVariable int ig)   
//	{  
//	 Cart cart=;
//	 return booksService.saveOrUpdate(books);  
//	}  
//	@PutMapping("/books")  
//	private Ebook update(@RequestBody Ebook books)   
//	{  
//	return booksService.saveOrUpdate(books);  
//	}  
}
