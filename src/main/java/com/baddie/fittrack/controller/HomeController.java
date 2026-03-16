package com.baddie.fittrack.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    // NO @GetMapping("/") here - static/index.html handles it

    @GetMapping("/dashboard")
    public String getDashboard() {
        return "dashboard";
    }

    @GetMapping("/workouts")
    public String getWorkouts() {
        return "workouts";
    }

    @GetMapping("/nutrition")
    public String getNutrition() {
        return "nutrition";
    }

    @GetMapping("/progress")
    public String getProgress() {
        return "progress";
    }

    @GetMapping("/settings")
    public String getSettings() {
        return "settings";
    }
}
