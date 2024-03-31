package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Review;


public interface URepo extends JpaRepository<Review, Long>{

}
