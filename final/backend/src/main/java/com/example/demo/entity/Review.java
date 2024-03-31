package com.example.demo.entity;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Data
@Getter
@Setter
//@NoArgsConstructor
@AllArgsConstructor
public class Review {
	@Id
	private Long Review_id;
	private int Rating;
    private String Review;
    private Long Cust_id;
    public Review() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Long getReview_id() {
		return Review_id;
	}
	public void setReview_id(Long review_id) {
		Review_id = review_id;
	}
	public int getRating() {
		return Rating;
	}
	public void setRating(int rating) {
		Rating = rating;
	}
	public String getReview() {
		return Review;
	}
	public void setReview(String review) {
		Review = review;
	}
	public Long getCust_id() {
		return Cust_id;
	}
	public void setCust_id(Long cust_id) {
		Cust_id = cust_id;
	}
	public Long getBook_id() {
		return Book_id;
	}
	public void setBook_id(Long book_id) {
		Book_id = book_id;
	}
	private Long Book_id;
}
