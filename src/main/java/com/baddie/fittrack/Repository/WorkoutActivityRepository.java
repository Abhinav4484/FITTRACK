package com.baddie.fittrack.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.baddie.fittrack.model.WorkoutActivity;

public interface WorkoutActivityRepository extends JpaRepository<WorkoutActivity, Long> {
}