import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { GraduationCap, BookOpen, Calendar } from 'lucide-react';
import { readCollection } from '@/lib/store';
import { seedCourses } from '@/lib/seed';
import type { Course } from '@/lib/types';

export const dynamic = 'force-dynamic';

export default function CoursesPage() {
  seedCourses();
  const allCourses = readCollection<Course>('courses');
  const courses = allCourses.filter(c => c.isPublished);

  return (
    <>
      <Navbar />

      <section className="pt-32 pb-16" style={{
        background: 'linear-gradient(135deg, #0a3554 0%, #0f4c75 50%, #1b6fa8 100%)'
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">المقررات الدراسية</h1>
          <p className="text-white/70 text-lg">المقررات التي أقوم بتدريسها في مرحلتي البكالوريوس والدراسات العليا</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {courses.length === 0 ? (
            <div className="text-center py-20">
              <GraduationCap className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">لا توجد مقررات حالياً</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course) => (
                <div key={course.id} className="bg-gray-50 rounded-2xl p-8 card-hover border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <span className="badge badge-info">{course.level}</span>
                    <span className="text-[#0f4c75] font-mono text-sm font-bold">{course.code}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0f4c75] mb-2">{course.title}</h3>
                  {course.titleEn && (
                    <p className="text-gray-400 text-sm mb-3 italic" dir="ltr">{course.titleEn}</p>
                  )}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{course.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      الفصل {course.semester} - {course.year}
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      {course.level}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
