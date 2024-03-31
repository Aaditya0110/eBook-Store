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
@Data
@Getter
@Setter
//@NoArgsConstructor
@AllArgsConstructor
public class Library {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long Library_id;
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "FK_L_id",referencedColumnName="Library_id")
    List<Ebook> books;
	public Library() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Long getLibray_id() {
		return Library_id;
	}
	public void setLibray_id(Long libray_id) {
		Library_id = libray_id;
	}
}
