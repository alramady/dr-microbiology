import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { GraduationCap, Award, Briefcase, BookOpen, Users, Globe, Target, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden noise-overlay" style={{
        background: 'linear-gradient(160deg, #0c1b2a 0%, #132d46 50%, #1a3a5c 100%)'
      }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1b8a7a]/6 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#c8a45e]/5 rounded-full blur-[100px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="section-subtitle text-white/50">تعرف علينا</div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">السيرة الذاتية</h1>
          <p className="text-white/40 text-lg max-w-2xl font-light leading-relaxed">
            رحلة أكاديمية وبحثية ممتدة في عالم الأحياء الدقيقة
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Bio */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <div className="section-subtitle">نبذة شخصية</div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0c1b2a] mb-8 section-title">من أنا</h2>
              <div className="mt-10 space-y-6 text-[#5a6275] leading-[2] text-[0.95rem] font-light">
                <p>
                  أستاذ مشارك في قسم الأحياء الدقيقة بكلية العلوم، متخصصة في مجال الأحياء الدقيقة الطبية والتشخيصية. حاصلة على درجة الدكتوراه في الأحياء الدقيقة مع تركيز بحثي على مقاومة المضادات الحيوية والتشخيص الجزيئي للأمراض المعدية.
                </p>
                <p>
                  تمتد خبرتي لأكثر من 15 عامًا في مجال البحث العلمي والتدريس الأكاديمي، حيث أشرفت على العديد من رسائل الماجستير والدكتوراه، ونشرت أكثر من 50 بحثًا علميًا في مجلات محكمة دولية ومحلية.
                </p>
                <p>
                  أسعى من خلال عملي البحثي إلى تطوير حلول مبتكرة للتحديات الصحية المعاصرة، مع التركيز على فهم آليات مقاومة الميكروبات للمضادات الحيوية وتطوير تقنيات تشخيصية جزيئية سريعة ودقيقة.
                </p>
              </div>
            </div>
            <div>
              <div className="card-premium p-8 sticky top-28">
                <h3 className="text-lg font-bold text-[#0c1b2a] mb-6">معلومات سريعة</h3>
                <div className="space-y-5">
                  {[
                    { label: 'التخصص', value: 'الأحياء الدقيقة الطبية' },
                    { label: 'الرتبة الأكاديمية', value: 'أستاذ مشارك' },
                    { label: 'القسم', value: 'قسم الأحياء الدقيقة' },
                    { label: 'الكلية', value: 'كلية العلوم' },
                    { label: 'سنوات الخبرة', value: '+15 سنة' },
                  ].map((info, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-[#0000000a] last:border-0">
                      <span className="text-[#8b93a7] text-sm font-light">{info.label}</span>
                      <span className="text-[#0c1b2a] text-sm font-semibold">{info.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-24" style={{ background: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-subtitle justify-center">المسيرة الأكاديمية</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c1b2a] section-title mx-auto">المؤهلات العلمية</h2>
          </div>
          <div className="max-w-3xl mx-auto mt-12 space-y-8">
            {[
              { degree: 'دكتوراه في الأحياء الدقيقة', uni: 'جامعة [الاسم]', year: '20XX', details: 'تخصص مقاومة المضادات الحيوية - بتقدير ممتاز مع مرتبة الشرف' },
              { degree: 'ماجستير في الأحياء الدقيقة الطبية', uni: 'جامعة [الاسم]', year: '20XX', details: 'تخصص التشخيص الجزيئي - بتقدير ممتاز' },
              { degree: 'بكالوريوس علوم أحياء', uni: 'جامعة [الاسم]', year: '20XX', details: 'تخصص أحياء دقيقة - بتقدير ممتاز مع مرتبة الشرف الأولى' },
            ].map((edu, index) => (
              <div key={index} className="card-premium p-8 flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1b8a7a]/10 to-[#c8a45e]/10 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-6 h-6 text-[#1b8a7a]" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="text-lg font-bold text-[#0c1b2a]">{edu.degree}</h3>
                    <span className="text-xs text-[#c8a45e] font-semibold bg-[#c8a45e]/10 px-3 py-1 rounded-full">{edu.year}</span>
                  </div>
                  <p className="text-[#1b8a7a] text-sm font-medium mb-2">{edu.uni}</p>
                  <p className="text-[#8b93a7] text-sm font-light">{edu.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-subtitle justify-center">المسيرة المهنية</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c1b2a] section-title mx-auto">الخبرات المهنية</h2>
          </div>
          <div className="max-w-3xl mx-auto mt-12 space-y-8">
            {[
              { title: 'أستاذ مشارك', org: 'قسم الأحياء الدقيقة - كلية العلوم', period: '20XX - حتى الآن', duties: 'التدريس والبحث العلمي والإشراف على طلاب الدراسات العليا' },
              { title: 'أستاذ مساعد', org: 'قسم الأحياء الدقيقة - كلية العلوم', period: '20XX - 20XX', duties: 'التدريس والبحث العلمي وتطوير المناهج الدراسية' },
              { title: 'باحث ما بعد الدكتوراه', org: 'مركز الأبحاث الطبية', period: '20XX - 20XX', duties: 'البحث في مقاومة المضادات الحيوية وتطوير تقنيات التشخيص' },
            ].map((exp, index) => (
              <div key={index} className="card-premium p-8 flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-[#0c1b2a]/5 flex items-center justify-center shrink-0">
                  <Briefcase className="w-6 h-6 text-[#0c1b2a]" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="text-lg font-bold text-[#0c1b2a]">{exp.title}</h3>
                    <span className="text-xs text-[#1b8a7a] font-semibold bg-[#1b8a7a]/10 px-3 py-1 rounded-full">{exp.period}</span>
                  </div>
                  <p className="text-[#1b8a7a] text-sm font-medium mb-2">{exp.org}</p>
                  <p className="text-[#8b93a7] text-sm font-light">{exp.duties}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-24" style={{ background: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-subtitle justify-center">إنجازات</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c1b2a] section-title mx-auto">الجوائز والتكريمات</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              { title: 'جائزة التميز البحثي', org: 'الجامعة', year: '2024' },
              { title: 'جائزة أفضل ورقة بحثية', org: 'المؤتمر الدولي للأحياء الدقيقة', year: '2023' },
              { title: 'جائزة التدريس المتميز', org: 'كلية العلوم', year: '2022' },
              { title: 'منحة بحثية متميزة', org: 'صندوق البحث العلمي', year: '2021' },
              { title: 'جائزة الباحث الشاب', org: 'الجمعية السعودية للأحياء الدقيقة', year: '2020' },
              { title: 'شهادة تقدير في خدمة المجتمع', org: 'وزارة الصحة', year: '2019' },
            ].map((award, index) => (
              <div key={index} className="card-premium p-7 text-center group">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#c8a45e]/10 to-[#c8a45e]/5 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-500">
                  <Award className="w-6 h-6 text-[#c8a45e]" />
                </div>
                <h3 className="font-bold text-[#0c1b2a] mb-2">{award.title}</h3>
                <p className="text-[#8b93a7] text-sm font-light">{award.org}</p>
                <p className="text-[#c8a45e] text-sm font-semibold mt-3">{award.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-subtitle justify-center">الكفاءات</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c1b2a] section-title mx-auto">المهارات والخبرات التقنية</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              { icon: BookOpen, title: 'تقنيات التشخيص الجزيئي', items: ['PCR و RT-PCR', 'تحليل التسلسل الجيني', 'ELISA', 'التهجين الفلوري'] },
              { icon: Users, title: 'المهارات البحثية', items: ['تصميم التجارب', 'التحليل الإحصائي', 'كتابة المنح البحثية', 'المراجعة العلمية'] },
              { icon: Globe, title: 'العضويات المهنية', items: ['الجمعية الأمريكية للأحياء الدقيقة', 'الجمعية السعودية للأحياء الدقيقة', 'الاتحاد الدولي لعلوم الأحياء الدقيقة'] },
            ].map((skill, index) => (
              <div key={index} className="card-premium p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#0c1b2a]/5 flex items-center justify-center">
                    <skill.icon className="w-5 h-5 text-[#1b8a7a]" />
                  </div>
                  <h3 className="font-bold text-[#0c1b2a]">{skill.title}</h3>
                </div>
                <ul className="space-y-3">
                  {skill.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#5a6275] text-sm font-light">
                      <div className="w-1.5 h-1.5 bg-[#c8a45e] rounded-full"></div>
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
