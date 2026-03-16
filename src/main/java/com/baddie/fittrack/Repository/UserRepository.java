package com.baddie.fittrack.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.baddie.fittrack.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}
