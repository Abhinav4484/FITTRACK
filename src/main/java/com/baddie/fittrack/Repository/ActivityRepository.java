package com.baddie.fittrack.Repository; // (Or lowercase 'repository', if your folder is lowercase)

import org.springframework.data.jpa.repository.JpaRepository;

import com.baddie.fittrack.model.Activity;

public interface ActivityRepository extends JpaRepository<Activity, Long> {
}