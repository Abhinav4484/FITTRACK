package com.baddie.fittrack.controller;

import com.baddie.fittrack.model.Progress;
import com.baddie.fittrack.Repository.ProgressRepository;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/progress")
public class ProgressController {
    private final ProgressRepository progressRepository;

    public ProgressController(ProgressRepository progressRepository) {
        this.progressRepository = progressRepository;
    }

    @GetMapping
    public List<Progress> getAllProgress() {
        return progressRepository.findAll();
    }

    @PostMapping
    public Progress createProgress(@RequestBody Progress progress) {
        return progressRepository.save(progress);
    }
}