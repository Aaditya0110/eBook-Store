package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Ebook;

public interface Erepo extends JpaRepository<Ebook, Long> {	

	List<Ebook> findByGenre(String genre);

	List<Ebook> findAllByOrderByPages();

	List<Ebook> findByTitleContainingIgnoreCase(String title);
//	List<Ebook> findByfK_L_id(Long FK_L_id);

	List<Ebook> findAllByOrderByTitleAsc();

}
