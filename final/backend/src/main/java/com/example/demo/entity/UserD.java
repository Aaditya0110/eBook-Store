package com.example.demo.entity;

import java.sql.Date;
import java.util.List;

import org.hibernate.annotations.Index;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
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
public class UserD {
	public UserD() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long Cust_id;
	private String Cust_Name;
    private String Email;
    private String Username;
    private String Password;
    private String Address;
    @OneToOne(cascade=CascadeType.ALL)
    @JoinColumn(name="fklibid")
    private Library library;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="fk_cartId")
    private Cart cart;
	public Long getCust_id() {
		return Cust_id;
	}
	public void setCustt_id(Long cust_id) {
		Cust_id = cust_id;
	}
	public String getCust_Name() {
		return Cust_Name;
	}
	public void setCust_Name(String cust_Name) {
		Cust_Name = cust_Name;
	}
	public String getEmail() {
		return Email;
	}
	public void setEmail(String email) {
		Email = email;
	}
	public String getUsername() {
		return Username;
	}
	public void setUsername(String username) {
		Username = username;
	}
	public String getPassword() {
		return Password;
	}
	public void setPassword(String password) {
		Password = password;
	}
	public String getAddress() {
		return Address;
	}
	public void setAddress(String address) {
		Address = address;
	}
}
