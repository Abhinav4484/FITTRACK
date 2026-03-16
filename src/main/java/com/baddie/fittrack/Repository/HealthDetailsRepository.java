package com.baddie.fittrack.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.baddie.fittrack.model.HealthDetails;

public interface HealthDetailsRepository extends JpaRepository<HealthDetails, Long> {
    Optional<HealthDetails> findByUserId(Long userId);
}
