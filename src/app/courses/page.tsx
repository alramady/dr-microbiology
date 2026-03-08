import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { GraduationCap, BookOpen, Calendar } from 'lucide-react';
import { readCollection } from '@/lib/store';
import { seedCourses } from '@/lib/seed';
import type { Course } from '@/lib/types';

export const dynamic = 'force-dynamic';

const gradients = [
  'from-teal-500 to-emerald-500',
  'from-sky-500 to-indigo-500',
  'from-violet-500 to-purple-500',
  'from-gold to-amber-500',
  'from-rose-500 to-pink-500',
  'from-cyan-500 to-blue-500',
];

export default function CoursesPage() {
  seedCourses();
  const allCourses = readCollection<Course>('courses');
  const courses = allCourses.filter(c => c.isPublished);

  return (
    <>
      <Navbar />

      <section className="relative pt-36 pb-24 overflow-hidden noise-overlay bg-mesh-dark">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="ring-decoration w-[400px] h-[400px] bottom-[-100px] right-[-100px] border-white/5 animate-rotate-slow"></div>
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="section-subtitle text-white/40">التعليم الأكاديمي</div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">المقررات الدراسية</h1>
          <p className="text-white/35 text-xl max-w-2xl font-light leading-relaxed">
            المقررات التي أقوم بتدريسها في مرحلتي البكالوريوس والدراسات العليا
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full"><path d="M0 80L48 68C96 56 192 32 288 24C384 16 480 24 576 32C672 40 768 48 864 48C960 48 1056 40 1152 36C1248 32 1344 32 1392 32L1440 32V80H0Z" fill="white"/></svg>
        </div>
      </section>

      <section className="py-24 bg-white bg-pattern-dots relative">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-violet-50 to-transparent rounded-bl-full opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-gradient-to-tr from-teal-50 to-transparent rounded-tr-full opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {courses.length === 0 ? (
            <div className="text-center py-24">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-violet-50 to-purple-50 flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-10 h-10 text-[#94a3b8]" />
              </div>
              <p className="text-[#94a3b8] text-lg">لا توجد مقررات حالياً</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <div key={course.id} className="card-elevated p-0 group">
                  <div className={`bg-gradient-to-br ${gradients[index % gradients.length]} p-6 text-white`}>
                    <div className="flex items-center justify-between mb-4">
                      <GraduationCap className="w-8 h-8 opacity-80" />
                      <span className="text-white/80 font-mono text-sm font-bold tracking-wider bg-white/20 px-3 py-1 rounded-lg">{course.code}</span>
                    </div>
                    <h3 className="text-lg font-bold leading-relaxed">{course.title}</h3>
                    {course.titleEn && (
                      <p className="text-white/60 text-sm mt-1 italic" dir="ltr">{course.titleEn}</p>
                    )}
                  </div>
                  <div className="p-7">
                    <p className="text-[#475569] text-sm leading-[1.8] mb-5">{course.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-[#94a3b8] pt-5 border-t border-[#0000000a]">
                      <span className="flex items-center gap-2 font-semibold">
                        <div className="w-7 h-7 rounded-lg bg-gold/10 flex items-center justify-center">
                          <Calendar className="w-3.5 h-3.5 text-gold" />
                        </div>
                        الفصل {course.semester} - {course.year}
                      </span>
                      <span className="flex items-center gap-2 font-semibold">
                        <div className="w-7 h-7 rounded-lg bg-teal-500/10 flex items-center justify-center">
                          <BookOpen className="w-3.5 h-3.5 text-teal-500" />
                        </div>
                        {course.level}
                      </span>
                    </div>
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
