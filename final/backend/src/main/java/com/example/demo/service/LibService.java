package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Ebook;
import com.example.demo.repository.Erepo;
@Service
public class LibService {

    @Autowired
    Erepo ebookRepository;
    
}
