package com.baddie.fittrack.model;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "goals")
public class Goal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    private String goalType; // e.g., "weight loss", "strength", "endurance"
    private Double targetValue;
    private LocalDate startDate;
    private LocalDate endDate;
    private Boolean achieved = false;

    @OneToMany(mappedBy = "goal", cascade = CascadeType.ALL)
    private List<Progress> progressList;

    // Getters and setters
}