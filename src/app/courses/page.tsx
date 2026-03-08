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

      <section className="relative pt-32 pb-20 overflow-hidden noise-overlay" style={{
        background: 'linear-gradient(160deg, #0c1b2a 0%, #132d46 50%, #1a3a5c 100%)'
      }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1b8a7a]/6 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#c8a45e]/5 rounded-full blur-[100px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="section-subtitle text-white/50">التعليم الأكاديمي</div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">المقررات الدراسية</h1>
          <p className="text-white/40 text-lg max-w-2xl font-light leading-relaxed">
            المقررات التي أقوم بتدريسها في مرحلتي البكالوريوس والدراسات العليا
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {courses.length === 0 ? (
            <div className="text-center py-24">
              <div className="w-20 h-20 rounded-3xl bg-[#0c1b2a]/5 flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-10 h-10 text-[#8b93a7]" />
              </div>
              <p className="text-[#8b93a7] text-lg font-light">لا توجد مقررات حالياً</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course) => (
                <div key={course.id} className="card-premium p-8 group">
                  <div className="flex items-center justify-between mb-5">
                    <span className="badge badge-info">{course.level}</span>
                    <span className="text-[#0c1b2a] font-mono text-sm font-bold tracking-wider">{course.code}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0c1b2a] mb-2 group-hover:text-[#1b8a7a] transition-colors duration-300">{course.title}</h3>
                  {course.titleEn && (
                    <p className="text-[#8b93a7] text-sm mb-4 italic font-light" dir="ltr">{course.titleEn}</p>
                  )}
                  <p className="text-[#5a6275] text-sm leading-[1.8] mb-5 font-light">{course.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-[#8b93a7] pt-5 border-t border-[#0000000a]">
                    <span className="flex items-center gap-1.5 font-light">
                      <Calendar className="w-4 h-4 text-[#c8a45e]" />
                      الفصل {course.semester} - {course.year}
                    </span>
                    <span className="flex items-center gap-1.5 font-light">
                      <BookOpen className="w-4 h-4 text-[#1b8a7a]" />
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
