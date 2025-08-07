import React from 'react';
import { Course } from '../types/quiz';

interface CourseCardProps {
  course: Course;
  onEnroll: (courseId: string) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, onEnroll }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={course.image} 
          alt={course.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${course.color} opacity-80`}></div>
        <div className="absolute top-4 left-4 text-3xl">{course.icon}</div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{course.name}</h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{course.description}</p>
        
        <button
          onClick={() => onEnroll(course.id)}
          className={`w-full py-3 px-4 rounded-lg bg-gradient-to-r ${course.color} text-white font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
};