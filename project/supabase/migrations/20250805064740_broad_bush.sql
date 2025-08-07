/*
  # Create quiz results table

  1. New Tables
    - `quiz_results`
      - `id` (integer, primary key, auto-increment)
      - `student_name` (text, not null)
      - `course_id` (text, not null)
      - `selected_level` (text, not null)
      - `total_questions` (integer, not null)
      - `correct_answers` (integer, not null)
      - `score_percentage` (integer, not null)
      - `completed_at` (timestamptz, not null)
      - `created_at` (timestamptz, default now())

  2. Security
    - Enable RLS on `quiz_results` table
    - Add policy for public read access (for displaying results)
    - Add policy for public insert access (for saving quiz results)
*/

CREATE TABLE IF NOT EXISTS quiz_results (
  id SERIAL PRIMARY KEY,
  student_name TEXT NOT NULL,
  course_id TEXT NOT NULL,
  selected_level TEXT NOT NULL,
  total_questions INTEGER NOT NULL,
  correct_answers INTEGER NOT NULL,
  score_percentage INTEGER NOT NULL,
  completed_at TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE quiz_results ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read quiz results"
  ON quiz_results
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can insert quiz results"
  ON quiz_results
  FOR INSERT
  TO public
  WITH CHECK (true);