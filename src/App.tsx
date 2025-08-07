import React, { useState } from 'react';
import { GraduationCap } from 'lucide-react';
import { CourseCard } from './components/CourseCard';
import { EnrollmentForm } from './components/EnrollmentForm';
import { QuizInterface } from './components/QuizInterface';
import { QuizResult } from './components/QuizResult';
import { courses } from './data/courses';
import { questions } from './data/questions';
import { Course, StudentInfo, QuizResult as QuizResultType, QuizLevel } from './types/quiz';

type AppState = 'courses' | 'enrollment' | 'quiz' | 'result';

function App() {
  const [currentState, setCurrentState] = useState<AppState>('courses');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [studentInfo, setStudentInfo] = useState<StudentInfo | null>(null);
  const [quizResult, setQuizResult] = useState<QuizResultType | null>(null);

  const handleEnroll = (courseId: string) => {
    const course = courses.find(c => c.id === courseId);
    if (course) {
      setSelectedCourse(course);
      setCurrentState('enrollment');
    }
  };

  const handleStartQuiz = (info: StudentInfo) => {
    setStudentInfo(info);
    setCurrentState('quiz');
  };

  const handleQuizComplete = (result: QuizResultType) => {
    setQuizResult(result);
    setCurrentState('result');
  };

  const handleRetake = () => {
    setCurrentState('enrollment');
    setQuizResult(null);
  };

  const handleBackToHome = () => {
    setCurrentState('courses');
    setSelectedCourse(null);
    setStudentInfo(null);
    setQuizResult(null);
  };

  const getQuestionsForLevel = (courseId: string, level: QuizLevel) => {
    const courseQuestions = questions.filter(q => q.course === courseId);
    
    switch (level) {
      case 'beginner':
        return courseQuestions.filter(q => q.level === 'beginner');
      case 'level1':
        return courseQuestions.filter(q => q.level === 'beginner' || q.level === 'level1');
      case 'level2':
        return courseQuestions.filter(q => q.level === 'beginner' || q.level === 'level1' || q.level === 'level2');
      default:
        return courseQuestions.filter(q => q.level === 'beginner');
    }
  };

  if (currentState === 'courses') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <GraduationCap className="w-12 h-12 text-indigo-600 mr-3" />
              <h1 className="text-4xl font-bold text-gray-800">TechQuiz Academy</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Master technology skills with our comprehensive quiz platform. Choose your course and test your knowledge across multiple levels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onEnroll={handleEnroll}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (currentState === 'enrollment' && selectedCourse) {
    return (
      <EnrollmentForm
        course={selectedCourse}
        onBack={handleBackToHome}
        onStartQuiz={handleStartQuiz}
      />
    );
  }

  if (currentState === 'quiz' && selectedCourse && studentInfo) {
    const quizQuestions = getQuestionsForLevel(selectedCourse.id, studentInfo.level);
    
    return (
      <QuizInterface
        course={selectedCourse}
        questions={quizQuestions}
        studentInfo={studentInfo}
        onBack={() => setCurrentState('enrollment')}
        onComplete={handleQuizComplete}
      />
    );
  }

  if (currentState === 'result' && selectedCourse && quizResult) {
    return (
      <QuizResult
        course={selectedCourse}
        result={quizResult}
        onRetake={handleRetake}
        onBackToHome={handleBackToHome}
      />
    );
  }

  return null;
}

export default App;