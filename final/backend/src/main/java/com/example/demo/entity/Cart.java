package com.example.demo.entity;

import java.util.List;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Cart {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long Cart_id;
    @OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "FK_C_id",referencedColumnName="Cart_id")
    List<Ebook> books;
	public Long getCart_id() {
		return Cart_id;
	}
	public void setCart_id(Long cart_id) {
		Cart_id = cart_id;
	}
	public List<Ebook> getBooks() {
		return books;
	}
	public void setBooks(List<Ebook> books) {
		this.books = books;
	}
}