package com.baddie.fittrack.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.baddie.fittrack.model.Workout;

public interface WorkoutRepository extends JpaRepository<Workout, Long> {
    List<Workout> findByUserId(Long userId);
}
