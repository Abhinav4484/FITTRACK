package com.baddie.fittrack.controller;

import java.util.Optional;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.baddie.fittrack.Repository.HealthDetailsRepository;
import com.baddie.fittrack.model.HealthDetails;

@RestController
@RequestMapping("/api/details")
public class HealthDetailsController {

    private final HealthDetailsRepository repository;

    public HealthDetailsController(HealthDetailsRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/{userId}")
    public Optional<HealthDetails> getByUserId(@PathVariable Long userId) {
        return repository.findByUserId(userId);
    }

    @PostMapping
    public HealthDetails createDetails(@RequestBody HealthDetails details) {
        return repository.save(details);
    }

    @PutMapping("/{id}")
    public HealthDetails updateDetails(@PathVariable Long id, @RequestBody HealthDetails details) {
        return repository.findById(id).map(existing -> {
            existing.setHeight(details.getHeight());
            existing.setWeight(details.getWeight());
            existing.setAge(details.getAge());
            existing.setGender(details.getGender());
            return repository.save(existing);
        }).orElseThrow(() -> new RuntimeException("Not found"));
    }
}
