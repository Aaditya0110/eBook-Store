package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.entity.Ebook;
import com.example.demo.entity.Library;
import com.example.demo.repository.CartRepo;
import com.example.demo.repository.Erepo;
import com.example.demo.service.EService;
import com.example.demo.service.LibService;

@RestController
@CrossOrigin(origins = "*")
//@RequestMapping("/ebooks")
public class EController {
	@Autowired
	Erepo erepo;
	@Autowired  
	EService booksService;  
	@Autowired  
	LibService lib;  
	@Autowired 
	CartRepo crepo;
	@GetMapping("/books")  
	private List<Ebook> getAllBooks()   
	{  
	return booksService.getAllBooks();  
	}  

    @GetMapping("/books/genre/{genre}")
    public List<Ebook> getStudentsByAge(@PathVariable String genre) {
        return booksService.findBookByGenre(genre);
    }
//    @GetMapping("/books/lib/{FK_L_id}")
//    public List<Ebook> getBoookByLib(@PathVariable Long FK_L_id) {
//        return booksService.findBookByLib(FK_L_id);
//    }
	@GetMapping("/books/{bookid}")  
	private Ebook getBooks(@PathVariable("bookid") int bookid)   
	{  
	return booksService.getBooksById(bookid);  
	}  
	@GetMapping("/api/books/search-by-title")
    public List<Ebook> searchBooksByTitle(@RequestParam("title") String title) {
        return booksService.searchBooksByTitle(title);
    }
	@GetMapping("/books/order/pages")
    public List<Ebook> getAllBooksOrderByPages() {
        return booksService.getAllBooksOrderByPages();
    }
	@GetMapping("/books/order/title")
	 public List<Ebook> getAllBooksOrderedByTitle() {
        return booksService.getAllBooksOrderedByTitle();
    }
	@DeleteMapping("/books/{bookid}")  
	private void deleteBook(@PathVariable("bookid") int bookid)   
	{  
	booksService.delete(bookid);  
	} 
	@PostMapping("/books/{igg}")  
	private Library saveBook1(@RequestBody Ebook books,@PathVariable Long igg)   
	{  
	 Library libr=lib.getBooksById(igg);
	 List<Ebook> e1 =libr.getBooks();
	 e1.add(books);
	 libr.setBooks(e1);
	 return crepo.save(libr);  
	}  
	@PostMapping("/books/{ig}")  
	private Cart saveBook(@RequestBody Ebook books,@PathVariable Long ig)   
	{  
	 Cart cart=crepo.findById(ig);
	 List<Ebook> e =cart.getBooks();
	 e.add(books);
	 cart.setBooks(e);
	 return crepo.save(cart);  
	}  
	@PutMapping("/books")  
	private Ebook update(@RequestBody Ebook books)   
	{  
	return booksService.saveOrUpdate(books);  
	} 
	@PostMapping("/postebook")
	public Ebook createEbook(@RequestBody Ebook b)
	{
		return erepo.save(b);
	}
}