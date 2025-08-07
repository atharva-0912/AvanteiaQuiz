import React from 'react';
import { Trophy, RotateCcw, Home, CheckCircle, XCircle } from 'lucide-react';
import { Course, QuizResult as QuizResultType } from '../types/quiz';

interface QuizResultProps {
  course: Course;
  result: QuizResultType;
  onRetake: () => void;
  onBackToHome: () => void;
}

export const QuizResult: React.FC<QuizResultProps> = ({
  course,
  result,
  onRetake,
  onBackToHome
}) => {
  const getScoreColor = (percentage: number) => {
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreMessage = (percentage: number) => {
    if (percentage >= 90) return 'Outstanding! 🎉';
    if (percentage >= 80) return 'Excellent work! 👏';
    if (percentage >= 70) return 'Good job! 👍';
    if (percentage >= 60) return 'Not bad! Keep practicing! 💪';
    return 'Keep learning and try again! 📚';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className={`p-8 bg-gradient-to-r ${course.color} text-white text-center`}>
            <div className="text-4xl mb-4">{course.icon}</div>
            <h1 className="text-2xl font-bold mb-2">{course.name}</h1>
            <p className="opacity-90">Quiz Completed!</p>
          </div>

          {/* Results */}
          <div className="p-8">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <Trophy className={`w-16 h-16 ${getScoreColor(result.score_percentage)}`} />
              </div>
              
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                {result.student_name}
              </h2>
              
              <p className="text-lg text-gray-600 mb-4">
                {getScoreMessage(result.score_percentage)}
              </p>

              <div className={`text-6xl font-bold mb-4 ${getScoreColor(result.score_percentage)}`}>
                {result.score_percentage}%
              </div>
            </div>

            {/* Score Details */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
                  <div>
                    <div className="text-2xl font-bold text-green-600">
                      {result.correct_answers}
                    </div>
                    <div className="text-sm text-gray-600">Correct</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-red-600 mr-2" />
                  <div>
                    <div className="text-2xl font-bold text-red-600">
                      {result.total_questions - result.correct_answers}
                    </div>
                    <div className="text-sm text-gray-600">Incorrect</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200 text-center">
                <div className="text-sm text-gray-600">
                  Level: <span className="font-semibold capitalize">
                    {result.selected_level === 'level1' ? 'Level 1' : result.selected_level === 'level2' ? 'Level 2' : 'Beginner'}
                  </span>
                </div>
                <div className="text-sm text-gray-600">
                  Total Questions: <span className="font-semibold">{result.total_questions}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onRetake}
                className={`flex-1 flex items-center justify-center py-3 px-6 rounded-lg bg-gradient-to-r ${course.color} text-white font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Retake Quiz
              </button>
              
              <button
                onClick={onBackToHome}
                className="flex-1 flex items-center justify-center py-3 px-6 rounded-lg border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-all duration-300"
              >
                <Home className="w-5 h-5 mr-2" />
                Back to Courses
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};