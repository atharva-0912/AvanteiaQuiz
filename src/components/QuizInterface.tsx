import React, { useState, useEffect } from 'react';
import { ArrowLeft, Clock, CheckCircle, XCircle } from 'lucide-react';
import { Course, Question, StudentInfo, QuizResult } from '../types/quiz';
import { supabase } from '../lib/supabase';

interface QuizInterfaceProps {
  course: Course;
  questions: Question[];
  studentInfo: StudentInfo;
  onBack: () => void;
  onComplete: (result: QuizResult) => void;
}

export const QuizInterface: React.FC<QuizInterfaceProps> = ({
  course,
  questions,
  studentInfo,
  onBack,
  onComplete
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    if (selectedAnswer !== null) {
      const newAnswers = [...answers, selectedAnswer];
      setAnswers(newAnswers);
      setSelectedAnswer(null);

      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        // Quiz completed
        handleQuizComplete(newAnswers);
      }
    }
  };

  const handleQuizComplete = async (finalAnswers: number[]) => {
    setIsSubmitting(true);
    
    const correctAnswers = finalAnswers.reduce((count, answer, index) => {
      return count + (answer === questions[index].correct ? 1 : 0);
    }, 0);

    const scorePercentage = Math.round((correctAnswers / questions.length) * 100);

    const result: QuizResult = {
      student_name: studentInfo.name,
      course_id: course.id,
      selected_level: studentInfo.level,
      total_questions: questions.length,
      correct_answers: correctAnswers,
      score_percentage: scorePercentage,
      completed_at: new Date().toISOString()
    };

    try {
      // Try to save to database, but continue even if it fails
      try {
        if (supabase) {
          const { error } = await supabase
            .from('quiz_results')
            .insert([result]);

          if (error) {
            console.warn('Database not connected, continuing without saving:', error);
          }
        } else {
          console.warn('Supabase not configured, continuing without saving');
        }
      } catch (dbError) {
        console.warn('Database operation failed, continuing without saving:', dbError);
      }
    } catch (error) {
      console.warn('Database connection issue, continuing without saving:', error);
    }

    setIsSubmitting(false);
    onComplete(result);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={onBack}
            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </button>
          
          <div className="flex items-center text-gray-600">
            <Clock className="w-5 h-5 mr-2" />
            Question {currentQuestionIndex + 1} of {questions.length}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Progress Bar */}
          <div className="h-2 bg-gray-200">
            <div 
              className={`h-full bg-gradient-to-r ${course.color} transition-all duration-300`}
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Course Header */}
          <div className={`p-6 bg-gradient-to-r ${course.color} text-white`}>
            <div className="flex items-center">
              <span className="text-3xl mr-3">{course.icon}</span>
              <div>
                <h1 className="text-xl font-bold">{course.name}</h1>
                <p className="opacity-90">
                  {studentInfo.name} • Level: {studentInfo.level === 'level1' ? 'Level 1' : studentInfo.level === 'level2' ? 'Level 2' : 'Beginner'}
                </p>
              </div>
            </div>
          </div>

          {/* Question */}
          <div className="p-8">
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  currentQuestion.level === 'beginner' ? 'bg-green-100 text-green-800' :
                  currentQuestion.level === 'level1' ? 'bg-blue-100 text-blue-800' :
                  'bg-purple-100 text-purple-800'
                }`}>
                  {currentQuestion.level === 'level1' ? 'Level 1' : currentQuestion.level === 'level2' ? 'Level 2' : 'Beginner'}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                {currentQuestion.question}
              </h2>
            </div>

            {/* Answer Options */}
            <div className="space-y-4 mb-8">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full p-4 text-left border-2 rounded-lg transition-all duration-200 ${
                    selectedAnswer === index
                      ? `border-indigo-500 bg-indigo-50`
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center">
                    <span className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center ${
                      selectedAnswer === index
                        ? 'border-indigo-500 bg-indigo-500'
                        : 'border-gray-300'
                    }`}>
                      {selectedAnswer === index && (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </span>
                    <span className="text-gray-800">{option}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Next Button */}
            <div className="flex justify-end">
              <button
                onClick={handleNext}
                disabled={selectedAnswer === null || isSubmitting}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedAnswer !== null && !isSubmitting
                    ? `bg-gradient-to-r ${course.color} text-white hover:shadow-lg transform hover:scale-105`
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {isSubmitting ? 'Submitting...' : currentQuestionIndex === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};