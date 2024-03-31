package com.example.demo.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Library;

public interface LibRepo extends JpaRepository<Library, Long>{

}
