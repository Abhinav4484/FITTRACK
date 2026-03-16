-- Migration script to add missing columns to workouts table
-- Run this if your workouts table doesn't have userId, date, and durationMinutes columns

-- Add userId column
ALTER TABLE workouts ADD COLUMN IF NOT EXISTS user_id BIGINT;

-- Add date column  
ALTER TABLE workouts ADD COLUMN IF NOT EXISTS date DATE;

-- Add duration_minutes column
ALTER TABLE workouts ADD COLUMN IF NOT EXISTS duration_minutes INT;

-- Optional: Add foreign key constraint if needed
-- ALTER TABLE workouts ADD CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id);





