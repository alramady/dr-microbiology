import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { GraduationCap, Award, Briefcase, BookOpen, Users, Globe, Calendar, MapPin } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden noise-overlay bg-mesh-dark">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="ring-decoration w-[400px] h-[400px] top-[-100px] right-[-100px] border-white/5 animate-rotate-slow"></div>
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="section-subtitle text-white/40">تعرف علينا</div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">السيرة الذاتية</h1>
          <p className="text-white/35 text-xl max-w-2xl font-light leading-relaxed">
            مسيرة أكاديمية وبحثية حافلة في مجال الأحياء الدقيقة
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full"><path d="M0 80L48 68C96 56 192 32 288 24C384 16 480 24 576 32C672 40 768 48 864 48C960 48 1056 40 1152 36C1248 32 1344 32 1392 32L1440 32V80H0Z" fill="white"/></svg>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-24 bg-white bg-pattern-dots relative">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-teal-50 to-transparent rounded-bl-full opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <div className="section-subtitle">نبذة شخصية</div>
              <h2 className="text-3xl font-black text-[#0a1628] mb-8 section-title">من أنا</h2>
              <div className="mt-12 space-y-6 text-[#475569] leading-[2] text-[0.95rem]">
                <p>أستاذ مشارك في قسم الأحياء الدقيقة بكلية العلوم، متخصصة في مجال الأحياء الدقيقة الطبية والتشخيصية. حاصلة على درجة الدكتوراه في الأحياء الدقيقة مع تركيز على مقاومة المضادات الحيوية.</p>
                <p>تمتد خبرتي لأكثر من 15 عامًا في مجال البحث العلمي والتدريس الأكاديمي، حيث أشرفت على العديد من رسائل الماجستير والدكتوراه، ونشرت أكثر من 50 بحثًا علميًا في مجلات محكمة دولية.</p>
                <p>أسعى من خلال أبحاثي إلى تطوير حلول مبتكرة للتحديات الصحية المعاصرة، مع التركيز على التشخيص المبكر للأمراض المعدية وفهم آليات مقاومة الميكروبات للمضادات الحيوية.</p>
              </div>
            </div>
            <div>
              <div className="card-elevated p-8 space-y-6">
                {[
                  { icon: Briefcase, label: 'المنصب', value: 'أستاذ مشارك' },
                  { icon: MapPin, label: 'القسم', value: 'قسم الأحياء الدقيقة' },
                  { icon: Calendar, label: 'سنوات الخبرة', value: '+15 سنة' },
                  { icon: BookOpen, label: 'المنشورات', value: '+50 بحث' },
                ].map((info, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-gradient-to-l from-cream to-white rounded-2xl">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-md shrink-0">
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-[#94a3b8] text-xs font-bold uppercase tracking-wider">{info.label}</div>
                      <div className="text-[#0a1628] font-bold text-sm mt-0.5">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-24 bg-mesh-2 bg-pattern-diagonal relative">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-teal-200/30 rounded-3xl rotate-12 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="section-subtitle justify-center">المسيرة الأكاديمية</div>
            <h2 className="text-3xl font-black text-[#0a1628] section-title mx-auto">المؤهلات العلمية</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
            {[
              { degree: 'دكتوراه', field: 'الأحياء الدقيقة', uni: 'جامعة [الاسم]', year: '20XX', details: 'تخصص مقاومة المضادات الحيوية - بتقدير ممتاز مع مرتبة الشرف', gradient: 'from-teal-500 to-emerald-500' },
              { degree: 'ماجستير', field: 'الأحياء الدقيقة الطبية', uni: 'جامعة [الاسم]', year: '20XX', details: 'تخصص التشخيص الجزيئي - بتقدير ممتاز', gradient: 'from-gold to-amber-500' },
              { degree: 'بكالوريوس', field: 'علوم أحياء', uni: 'جامعة [الاسم]', year: '20XX', details: 'تخصص أحياء دقيقة - بتقدير ممتاز مع مرتبة الشرف الأولى', gradient: 'from-violet-500 to-purple-500' },
            ].map((edu, i) => (
              <div key={i} className="card-elevated p-0 group">
                <div className={`bg-gradient-to-br ${edu.gradient} p-8 text-white`}>
                  <GraduationCap className="w-10 h-10 mb-4 opacity-80" />
                  <h3 className="text-2xl font-black">{edu.degree}</h3>
                  <p className="text-white/70 mt-1">{edu.field}</p>
                </div>
                <div className="p-8">
                  <p className="text-[#0a1628] font-bold">{edu.uni}</p>
                  <p className="text-[#94a3b8] text-sm mt-1 font-semibold">{edu.year}</p>
                  <p className="text-[#475569] text-sm mt-3 leading-relaxed">{edu.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-24 bg-white bg-pattern-grid relative">
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-gradient-to-tr from-amber-50 to-transparent rounded-tr-full opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="section-subtitle justify-center">الخبرات</div>
            <h2 className="text-3xl font-black text-[#0a1628] section-title mx-auto">الخبرة المهنية</h2>
          </div>
          
          <div className="max-w-3xl mx-auto mt-14 space-y-8">
            {[
              { title: 'أستاذ مشارك', org: 'قسم الأحياء الدقيقة - كلية العلوم', period: '20XX - حتى الآن', desc: 'التدريس والبحث العلمي والإشراف على طلاب الدراسات العليا' },
              { title: 'أستاذ مساعد', org: 'قسم الأحياء الدقيقة - كلية العلوم', period: '20XX - 20XX', desc: 'التدريس والبحث العلمي في مجال مقاومة المضادات الحيوية' },
              { title: 'باحث ما بعد الدكتوراه', org: 'جامعة [الاسم]', period: '20XX - 20XX', desc: 'بحث متقدم في التشخيص الجزيئي للأمراض المعدية' },
            ].map((exp, i) => (
              <div key={i} className="card-elevated p-8 flex gap-6 group">
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-navy to-navy-mid flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0a1628]">{exp.title}</h3>
                  <p className="text-teal-600 text-sm font-semibold mt-1">{exp.org}</p>
                  <p className="text-[#94a3b8] text-xs mt-1 font-bold tracking-wider">{exp.period}</p>
                  <p className="text-[#475569] text-sm mt-3 leading-relaxed">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-24 bg-mesh-2 bg-pattern-dots relative">
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-gold/20 rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="section-subtitle justify-center">إنجازات</div>
            <h2 className="text-3xl font-black text-[#0a1628] section-title mx-auto">الجوائز والتكريمات</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
            {[
              { title: 'جائزة التميز البحثي', org: 'الجامعة', year: '2024' },
              { title: 'جائزة أفضل ورقة بحثية', org: 'المؤتمر الدولي للأحياء الدقيقة', year: '2023' },
              { title: 'جائزة التدريس المتميز', org: 'كلية العلوم', year: '2022' },
              { title: 'منحة بحثية متميزة', org: 'صندوق البحث العلمي', year: '2021' },
              { title: 'جائزة الباحث الشاب', org: 'الجمعية السعودية للأحياء الدقيقة', year: '2020' },
              { title: 'شهادة تقدير في خدمة المجتمع', org: 'وزارة الصحة', year: '2019' },
            ].map((award, i) => (
              <div key={i} className="card-elevated p-8 text-center group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/20 to-amber-500/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Award className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-bold text-[#0a1628] mb-2">{award.title}</h3>
                <p className="text-[#94a3b8] text-sm">{award.org}</p>
                <div className="mt-4 inline-block px-4 py-1.5 bg-gradient-to-r from-gold/10 to-amber-500/10 rounded-full">
                  <span className="text-gold text-sm font-bold">{award.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-24 bg-white bg-pattern-grid relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-200 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="section-subtitle justify-center">الكفاءات</div>
            <h2 className="text-3xl font-black text-[#0a1628] section-title mx-auto">المهارات والخبرات التقنية</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
            {[
              { icon: BookOpen, title: 'تقنيات التشخيص الجزيئي', items: ['PCR و RT-PCR', 'تحليل التسلسل الجيني', 'ELISA', 'التهجين الفلوري'], gradient: 'from-teal-500 to-emerald-500' },
              { icon: Users, title: 'المهارات البحثية', items: ['تصميم التجارب', 'التحليل الإحصائي', 'كتابة المنح البحثية', 'المراجعة العلمية'], gradient: 'from-gold to-amber-500' },
              { icon: Globe, title: 'العضويات المهنية', items: ['الجمعية الأمريكية للأحياء الدقيقة', 'الجمعية السعودية للأحياء الدقيقة', 'الاتحاد الدولي لعلوم الأحياء الدقيقة'], gradient: 'from-violet-500 to-purple-500' },
            ].map((skill, i) => (
              <div key={i} className="card-elevated p-8 group">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${skill.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  <skill.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-[#0a1628] text-lg mb-5">{skill.title}</h3>
                <ul className="space-y-3">
                  {skill.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-[#475569] text-sm">
                      <div className="w-2 h-2 bg-gradient-to-r from-gold to-teal-500 rounded-full shrink-0"></div>
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
