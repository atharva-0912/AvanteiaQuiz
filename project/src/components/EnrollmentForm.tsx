import React, { useState } from 'react';
import { ArrowLeft, User, BookOpen } from 'lucide-react';
import { Course, QuizLevel, StudentInfo } from '../types/quiz';

interface EnrollmentFormProps {
  course: Course;
  onBack: () => void;
  onStartQuiz: (studentInfo: StudentInfo) => void;
}

export const EnrollmentForm: React.FC<EnrollmentFormProps> = ({ course, onBack, onStartQuiz }) => {
  const [name, setName] = useState('');
  const [level, setLevel] = useState<QuizLevel>('beginner');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onStartQuiz({ name: name.trim(), level });
    }
  };

  const levelDescriptions = {
    beginner: 'Start with basics (10 questions)',
    level1: 'Beginner + Intermediate (20 questions)',
    level2: 'All levels - Complete course (30 questions)'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-gray-800 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Courses
        </button>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className={`h-32 bg-gradient-to-r ${course.color} flex items-center justify-center`}>
            <div className="text-center text-white">
              <div className="text-4xl mb-2">{course.icon}</div>
              <h1 className="text-2xl font-bold">{course.name}</h1>
            </div>
          </div>

          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="flex items-center text-lg font-semibold text-gray-700 mb-3">
                  <User className="w-5 h-5 mr-2" />
                  Your Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  required
                />
              </div>

              <div>
                <label className="flex items-center text-lg font-semibold text-gray-700 mb-3">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Select Quiz Level
                </label>
                <div className="space-y-3">
                  {Object.entries(levelDescriptions).map(([levelKey, description]) => (
                    <label
                      key={levelKey}
                      className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        level === levelKey
                          ? 'border-indigo-500 bg-indigo-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="level"
                        value={levelKey}
                        checked={level === levelKey}
                        onChange={(e) => setLevel(e.target.value as QuizLevel)}
                        className="w-4 h-4 text-indigo-600 mr-3"
                      />
                      <div>
                        <div className="font-semibold text-gray-800 capitalize">
                          {levelKey === 'level1' ? 'Level 1' : levelKey === 'level2' ? 'Level 2' : 'Beginner'}
                        </div>
                        <div className="text-sm text-gray-600">{description}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={!name.trim()}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 ${
                  name.trim()
                    ? `bg-gradient-to-r ${course.color} hover:shadow-lg transform hover:scale-105`
                    : 'bg-gray-400 cursor-not-allowed'
                }`}
              >
                Start Quiz
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};