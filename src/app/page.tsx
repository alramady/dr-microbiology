import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Microscope, BookOpen, FlaskConical, GraduationCap, Award, Users, ArrowLeft, Beaker, Dna, Bug, Sparkles, ChevronLeft } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* Hero Section - Ultra Premium */}
      <section className="relative min-h-screen flex items-center overflow-hidden noise-overlay" style={{
        background: 'linear-gradient(160deg, #050d18 0%, #0c1b2a 25%, #132d46 50%, #1a3a5c 75%, #0c1b2a 100%)'
      }}>
        {/* Ambient Light Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#1b8a7a]/8 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#c8a45e]/6 rounded-full blur-[120px]"></div>
          <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#1b8a7a]/5 rounded-full blur-[100px] animate-float"></div>
          {/* Decorative Grid */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}></div>
          {/* Decorative Circles */}
          <div className="absolute top-20 left-20 w-2 h-2 bg-[#c8a45e]/40 rounded-full"></div>
          <div className="absolute top-40 left-40 w-1.5 h-1.5 bg-[#1b8a7a]/40 rounded-full"></div>
          <div className="absolute bottom-40 right-40 w-2 h-2 bg-[#c8a45e]/30 rounded-full"></div>
          <div className="absolute bottom-60 right-60 w-1 h-1 bg-white/20 rounded-full"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Text Content */}
            <div className="lg:col-span-7 animate-fadeInUp">
              <div className="inline-flex items-center gap-3 glass rounded-full px-5 py-2.5 mb-8">
                <div className="w-2 h-2 bg-[#1b8a7a] rounded-full animate-pulse"></div>
                <span className="text-white/70 text-sm font-medium tracking-wide">أخصائية الأحياء الدقيقة</span>
                <Dna className="w-4 h-4 text-[#c8a45e]" />
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.15] mb-8">
                البحث العلمي
                <br />
                <span className="text-gradient">في خدمة</span>
                <br />
                <span className="text-white/90">صحة المجتمع</span>
              </h1>
              
              <p className="text-lg text-white/50 leading-relaxed mb-10 max-w-xl font-light">
                متخصصة في الأحياء الدقيقة مع خبرة تمتد لأكثر من 15 عامًا في البحث العلمي والتدريس الأكاديمي. نسعى لتطوير حلول مبتكرة في مجال التشخيص الجزيئي ومكافحة مقاومة المضادات الحيوية.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/about" className="btn-gold text-base">
                  <span>تعرف على المزيد</span>
                  <ArrowLeft className="w-5 h-5" />
                </Link>
                <Link href="/contact" className="btn-outline text-base">
                  <span>تواصل معنا</span>
                </Link>
              </div>
            </div>

            {/* Stats Cards - Premium Glass */}
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-5">
                {[
                  { icon: FlaskConical, label: 'مشروع بحثي', value: '+20', delay: '0s' },
                  { icon: BookOpen, label: 'منشور علمي', value: '+50', delay: '0.1s' },
                  { icon: GraduationCap, label: 'مقرر دراسي', value: '+10', delay: '0.2s' },
                  { icon: Award, label: 'جائزة وتكريم', value: '+15', delay: '0.3s' },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="glass rounded-2xl p-7 text-center group hover:bg-white/12 transition-all duration-500 cursor-default"
                    style={{ animationDelay: stat.delay }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#c8a45e]/20 to-[#1b8a7a]/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
                      <stat.icon className="w-6 h-6 text-[#c8a45e]" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1 tracking-tight">{stat.value}</div>
                    <div className="text-white/40 text-sm font-light">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Research Areas - Premium */}
      <section className="py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="section-subtitle justify-center">مجالات التخصص</div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0c1b2a] mb-5 section-title mx-auto">
              محاور البحث العلمي
            </h2>
            <p className="text-[#5a6275] max-w-2xl mx-auto mt-8 text-lg font-light leading-relaxed">
              نركز في أبحاثنا على عدة محاور رئيسية تساهم في تطوير المعرفة العلمية وخدمة المجتمع
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Bug, title: 'مقاومة المضادات الحيوية', description: 'دراسة آليات مقاومة البكتيريا للمضادات الحيوية وتطوير استراتيجيات جديدة لمكافحتها.', gradient: 'from-rose-50 to-orange-50', iconBg: 'bg-rose-100', iconColor: 'text-rose-600' },
              { icon: Dna, title: 'التشخيص الجزيئي', description: 'تطوير تقنيات تشخيصية جزيئية سريعة ودقيقة للكشف عن الأمراض المعدية.', gradient: 'from-sky-50 to-indigo-50', iconBg: 'bg-sky-100', iconColor: 'text-sky-600' },
              { icon: Beaker, title: 'التنوع الميكروبي', description: 'استكشاف التنوع البيولوجي للكائنات الدقيقة في البيئات المختلفة واكتشاف أنواع جديدة.', gradient: 'from-emerald-50 to-teal-50', iconBg: 'bg-emerald-100', iconColor: 'text-emerald-600' },
              { icon: FlaskConical, title: 'علم الفيروسات', description: 'دراسة الفيروسات المسببة للأمراض وتطوير طرق الوقاية والعلاج.', gradient: 'from-violet-50 to-purple-50', iconBg: 'bg-violet-100', iconColor: 'text-violet-600' },
              { icon: Microscope, title: 'علم الفطريات الطبية', description: 'البحث في الفطريات المسببة للأمراض وتطوير أساليب التشخيص والعلاج.', gradient: 'from-amber-50 to-yellow-50', iconBg: 'bg-amber-100', iconColor: 'text-amber-600' },
              { icon: Users, title: 'الصحة العامة', description: 'المساهمة في برامج الصحة العامة ومكافحة الأوبئة والأمراض المعدية.', gradient: 'from-teal-50 to-cyan-50', iconBg: 'bg-teal-100', iconColor: 'text-teal-600' },
            ].map((area, index) => (
              <div key={index} className="card-premium p-8 group">
                <div className={`w-16 h-16 rounded-2xl ${area.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <area.icon className={`w-8 h-8 ${area.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-[#0c1b2a] mb-3">{area.title}</h3>
                <p className="text-[#5a6275] leading-relaxed text-[0.92rem] font-light">{area.description}</p>
                <div className="mt-6 flex items-center gap-2 text-[#1b8a7a] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span>اقرأ المزيد</span>
                  <ChevronLeft className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview - Premium */}
      <section className="py-28 relative overflow-hidden" style={{ background: 'var(--cream)' }}>
        {/* Decorative */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#1b8a7a]/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#c8a45e]/5 rounded-full blur-[100px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="section-subtitle">نبذة تعريفية</div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0c1b2a] mb-8 section-title leading-tight">
                السيرة الذاتية
              </h2>
              <p className="text-[#5a6275] leading-[1.9] mb-6 mt-10 text-[0.95rem] font-light">
                أستاذ مشارك في قسم الأحياء الدقيقة بكلية العلوم، متخصصة في مجال الأحياء الدقيقة الطبية والتشخيصية. حاصلة على درجة الدكتوراه في الأحياء الدقيقة مع تركيز على مقاومة المضادات الحيوية.
              </p>
              <p className="text-[#5a6275] leading-[1.9] mb-10 text-[0.95rem] font-light">
                أسعى من خلال أبحاثي إلى تطوير حلول مبتكرة للتحديات الصحية المعاصرة، مع التركيز على التشخيص المبكر للأمراض المعدية وفهم آليات مقاومة الميكروبات للمضادات الحيوية.
              </p>
              
              {/* Stats Row */}
              <div className="bg-white rounded-2xl shadow-sm border border-[#0000000a] p-2 mb-10 flex">
                {[
                  { label: 'سنوات الخبرة', value: '+15' },
                  { label: 'طلاب دراسات عليا', value: '+30' },
                  { label: 'مشاريع بحثية', value: '+20' },
                  { label: 'منشورات علمية', value: '+50' },
                ].map((stat, index) => (
                  <div key={index} className="stat-counter flex-1">
                    <div className="text-2xl font-bold text-[#0c1b2a] mb-1">{stat.value}</div>
                    <div className="text-[#8b93a7] text-xs font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <Link href="/about" className="btn-primary text-base">
                <span>المزيد عن السيرة الذاتية</span>
                <ArrowLeft className="w-5 h-5" />
              </Link>
            </div>
            
            {/* Qualifications Card */}
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-full h-full rounded-3xl bg-gradient-to-br from-[#1b8a7a]/10 to-[#c8a45e]/10"></div>
              <div className="relative bg-gradient-to-br from-[#0c1b2a] via-[#132d46] to-[#1a3a5c] rounded-3xl p-10 text-white overflow-hidden noise-overlay">
                {/* Decorative */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#c8a45e]/10 rounded-full blur-[60px]"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#1b8a7a]/10 rounded-full blur-[50px]"></div>
                
                <div className="relative">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-[#c8a45e]/20 flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-[#c8a45e]" />
                    </div>
                    <h3 className="text-xl font-bold">المؤهلات العلمية</h3>
                  </div>
                  
                  <div className="space-y-8">
                    {[
                      { degree: 'دكتوراه في الأحياء الدقيقة', uni: 'جامعة [الاسم]', year: '20XX' },
                      { degree: 'ماجستير في الأحياء الدقيقة الطبية', uni: 'جامعة [الاسم]', year: '20XX' },
                      { degree: 'بكالوريوس علوم أحياء', uni: 'جامعة [الاسم]', year: '20XX' },
                    ].map((edu, index) => (
                      <div key={index} className="flex gap-5 group">
                        <div className="flex flex-col items-center">
                          <div className="w-3 h-3 bg-[#c8a45e] rounded-full ring-4 ring-[#c8a45e]/20 group-hover:ring-[#c8a45e]/40 transition-all"></div>
                          {index < 2 && <div className="w-px h-full bg-gradient-to-b from-[#c8a45e]/30 to-transparent mt-2"></div>}
                        </div>
                        <div className="pb-2">
                          <h4 className="font-bold text-white/95 mb-1">{edu.degree}</h4>
                          <p className="text-white/40 text-sm font-light">{edu.uni} - {edu.year}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Premium */}
      <section className="py-28 relative overflow-hidden noise-overlay" style={{
        background: 'linear-gradient(160deg, #0c1b2a 0%, #132d46 40%, #1a3a5c 100%)'
      }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1b8a7a]/8 rounded-full blur-[120px]"></div>
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#c8a45e]/5 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-[#c8a45e]" />
            <span className="text-white/60 text-sm">تعاون بحثي</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            هل لديك استفسار أو ترغب
            <br />
            <span className="text-gradient">في التعاون البحثي؟</span>
          </h2>
          <p className="text-white/40 text-lg mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            أرحب بالتواصل مع الباحثين والطلاب والمهتمين بمجال الأحياء الدقيقة
          </p>
          <Link href="/contact" className="btn-gold text-lg px-10 py-4">
            <span>تواصل الآن</span>
            <ArrowLeft className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
