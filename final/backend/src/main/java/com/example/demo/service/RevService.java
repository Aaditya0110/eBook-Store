package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Ebook;
import com.example.demo.entity.Review;
import com.example.demo.repository.RevRepo;
@Service
public class RevService {

    @Autowired
    RevRepo Rrepo;
    public List<Review> getAllReview()   
    {  
       return   Rrepo.findAll();
    }
}
