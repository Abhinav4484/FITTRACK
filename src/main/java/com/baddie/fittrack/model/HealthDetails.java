package com.baddie.fittrack.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "health_details")
public class HealthDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long userId;
    private Double height; // in cm
    private Double weight; // in kg
    private Integer age;
    private String gender;

    public HealthDetails() {}
    public HealthDetails(Long userId, Double height, Double weight, Integer age, String gender) {
        this.userId = userId;
        this.height = height;
        this.weight = weight;
        this.age = age;
        this.gender = gender;
    }
    // Getters and Setters...
    public Long getId() { return id; }
    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }
    public Double getHeight() { return height; }
    public void setHeight(Double height) { this.height = height; }
    public Double getWeight() { return weight; }
    public void setWeight(Double weight) { this.weight = weight; }
    public Integer getAge() { return age; }
    public void setAge(Integer age) { this.age = age; }
    public String getGender() { return gender; }
    public void setGender(String gender) { this.gender = gender; }
}
