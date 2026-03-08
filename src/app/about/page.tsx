import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { GraduationCap, Award, Briefcase, BookOpen, Users, Globe } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16" style={{
        background: 'linear-gradient(135deg, #0a3554 0%, #0f4c75 50%, #1b6fa8 100%)'
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">السيرة الذاتية</h1>
          <p className="text-white/70 text-lg">نبذة شاملة عن المسيرة الأكاديمية والبحثية</p>
        </div>
      </section>

      {/* Bio */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-[#0f4c75] mb-6 section-title">نبذة شخصية</h2>
              <div className="prose prose-lg max-w-none mt-8">
                <p className="text-gray-600 leading-relaxed mb-4">
                  أستاذ مشارك في قسم الأحياء الدقيقة بكلية العلوم، متخصصة في مجال الأحياء الدقيقة الطبية والتشخيصية. حاصلة على درجة الدكتوراه في الأحياء الدقيقة مع تركيز بحثي على مقاومة المضادات الحيوية والتشخيص الجزيئي للأمراض المعدية.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  تمتد خبرتي لأكثر من 15 عامًا في مجال البحث العلمي والتدريس الأكاديمي، حيث أشرفت على العديد من رسائل الماجستير والدكتوراه، ونشرت أكثر من 50 بحثًا علميًا في مجلات محكمة دولية ومحلية.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  أسعى من خلال عملي البحثي إلى تطوير حلول مبتكرة للتحديات الصحية المعاصرة، مع التركيز على فهم آليات مقاومة الميكروبات للمضادات الحيوية وتطوير تقنيات تشخيصية جزيئية سريعة ودقيقة.
                </p>
              </div>
            </div>
            <div>
              <div className="bg-gray-50 rounded-2xl p-6 sticky top-24">
                <h3 className="text-lg font-bold text-[#0f4c75] mb-4">معلومات سريعة</h3>
                <div className="space-y-4">
                  {[
                    { label: 'التخصص', value: 'الأحياء الدقيقة الطبية' },
                    { label: 'الرتبة الأكاديمية', value: 'أستاذ مشارك' },
                    { label: 'القسم', value: 'قسم الأحياء الدقيقة' },
                    { label: 'الكلية', value: 'كلية العلوم' },
                    { label: 'سنوات الخبرة', value: '+15 سنة' },
                  ].map((info, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0">
                      <span className="text-gray-500 text-sm">{info.label}</span>
                      <span className="font-medium text-[#0f4c75] text-sm">{info.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0f4c75] mb-12 section-title">
            <GraduationCap className="w-8 h-8 inline-block ml-2" />
            المؤهلات العلمية
          </h2>
          <div className="space-y-6 mt-8">
            {[
              { degree: 'دكتوراه في الأحياء الدقيقة', uni: 'جامعة [الاسم]', year: '20XX', details: 'تخصص مقاومة المضادات الحيوية - بتقدير ممتاز مع مرتبة الشرف' },
              { degree: 'ماجستير في الأحياء الدقيقة الطبية', uni: 'جامعة [الاسم]', year: '20XX', details: 'تخصص التشخيص الجزيئي - بتقدير ممتاز' },
              { degree: 'بكالوريوس علوم أحياء', uni: 'جامعة [الاسم]', year: '20XX', details: 'تخصص أحياء دقيقة - بتقدير ممتاز مع مرتبة الشرف الأولى' },
            ].map((edu, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm flex gap-6 items-start card-hover">
                <div className="w-12 h-12 bg-[#0f4c75] rounded-xl flex items-center justify-center shrink-0">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0f4c75]">{edu.degree}</h3>
                  <p className="text-gray-500 text-sm mt-1">{edu.uni} | {edu.year}</p>
                  <p className="text-gray-600 text-sm mt-2">{edu.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0f4c75] mb-12 section-title">
            <Briefcase className="w-8 h-8 inline-block ml-2" />
            الخبرات المهنية
          </h2>
          <div className="space-y-6 mt-8">
            {[
              { title: 'أستاذ مشارك', org: 'قسم الأحياء الدقيقة - كلية العلوم', period: '20XX - حتى الآن', duties: 'التدريس والبحث العلمي والإشراف على طلاب الدراسات العليا' },
              { title: 'أستاذ مساعد', org: 'قسم الأحياء الدقيقة - كلية العلوم', period: '20XX - 20XX', duties: 'التدريس والبحث العلمي وتطوير المناهج الدراسية' },
              { title: 'باحث ما بعد الدكتوراه', org: 'مركز الأبحاث الطبية', period: '20XX - 20XX', duties: 'البحث في مقاومة المضادات الحيوية وتطوير تقنيات التشخيص' },
            ].map((exp, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 flex gap-6 items-start card-hover">
                <div className="w-12 h-12 bg-[#3282b8] rounded-xl flex items-center justify-center shrink-0">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0f4c75]">{exp.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">{exp.org} | {exp.period}</p>
                  <p className="text-gray-600 text-sm mt-2">{exp.duties}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0f4c75] mb-12 section-title">
            <Award className="w-8 h-8 inline-block ml-2" />
            الجوائز والتكريمات
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[
              { title: 'جائزة التميز البحثي', org: 'الجامعة', year: '2024' },
              { title: 'جائزة أفضل ورقة بحثية', org: 'المؤتمر الدولي للأحياء الدقيقة', year: '2023' },
              { title: 'جائزة التدريس المتميز', org: 'كلية العلوم', year: '2022' },
              { title: 'منحة بحثية متميزة', org: 'صندوق البحث العلمي', year: '2021' },
              { title: 'جائزة الباحث الشاب', org: 'الجمعية السعودية للأحياء الدقيقة', year: '2020' },
              { title: 'شهادة تقدير في خدمة المجتمع', org: 'وزارة الصحة', year: '2019' },
            ].map((award, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm card-hover text-center">
                <div className="w-12 h-12 bg-[#c9a84c]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-[#c9a84c]" />
                </div>
                <h3 className="font-bold text-[#0f4c75] mb-1">{award.title}</h3>
                <p className="text-gray-500 text-sm">{award.org}</p>
                <p className="text-[#c9a84c] text-sm font-medium mt-2">{award.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0f4c75] mb-12 section-title">المهارات والخبرات التقنية</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[
              { icon: BookOpen, title: 'تقنيات التشخيص الجزيئي', items: ['PCR و RT-PCR', 'تحليل التسلسل الجيني', 'ELISA', 'التهجين الفلوري'] },
              { icon: Users, title: 'المهارات البحثية', items: ['تصميم التجارب', 'التحليل الإحصائي', 'كتابة المنح البحثية', 'المراجعة العلمية'] },
              { icon: Globe, title: 'العضويات المهنية', items: ['الجمعية الأمريكية للأحياء الدقيقة', 'الجمعية السعودية للأحياء الدقيقة', 'الاتحاد الدولي لعلوم الأحياء الدقيقة'] },
            ].map((skill, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <skill.icon className="w-6 h-6 text-[#0f4c75]" />
                  <h3 className="font-bold text-[#0f4c75]">{skill.title}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                      <div className="w-2 h-2 bg-[#c9a84c] rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
