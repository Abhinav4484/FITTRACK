package com.baddie.fittrack.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.baddie.fittrack.model.Progress;

public interface ProgressRepository extends JpaRepository<Progress, Long> {
}