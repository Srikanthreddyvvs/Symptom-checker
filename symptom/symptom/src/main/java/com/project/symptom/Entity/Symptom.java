package com.project.symptom.Entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Symptom {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String symptoms;

    @Column(length = 2000)
    private String result;

    private LocalDateTime createdAt;

    public Symptom() {}

    public Symptom(String symptoms, String result, LocalDateTime createdAt) {
        this.symptoms = symptoms;
        this.result = result;
        this.createdAt = createdAt;
    }

    public Long getId() { return id; }
    public String getSymptoms() { return symptoms; }
    public String getResult() { return result; }
    public LocalDateTime getCreatedAt() { return createdAt; }

    public void setId(Long id) { this.id = id; }
    public void setSymptoms(String symptoms) { this.symptoms = symptoms; }
    public void setResult(String result) { this.result = result; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
