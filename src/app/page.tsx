import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Microscope, BookOpen, FlaskConical, GraduationCap, Award, Users, ArrowLeft, Beaker, Dna, Bug, Sparkles, ChevronLeft, Star, Target, Zap } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* ============ HERO ============ */}
      <section className="relative min-h-screen flex items-center overflow-hidden noise-overlay bg-mesh-dark">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating rings */}
          <div className="ring-decoration w-[500px] h-[500px] top-[-100px] right-[-100px] animate-rotate-slow opacity-30"></div>
          <div className="ring-decoration w-[300px] h-[300px] bottom-[10%] left-[5%] animate-rotate-slow opacity-20" style={{animationDirection:'reverse'}}></div>
          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }}></div>
          {/* Glowing orbs */}
          <div className="absolute top-[20%] right-[10%] w-4 h-4 bg-teal-400/30 rounded-full blur-sm animate-float"></div>
          <div className="absolute top-[60%] left-[15%] w-3 h-3 bg-gold/30 rounded-full blur-sm animate-float" style={{animationDelay:'2s'}}></div>
          <div className="absolute top-[40%] left-[40%] w-2 h-2 bg-white/20 rounded-full animate-float" style={{animationDelay:'4s'}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            {/* Text */}
            <div className="lg:col-span-7 animate-fadeInUp">
              <div className="inline-flex items-center gap-3 glass rounded-full px-6 py-3 mb-10">
                <div className="relative">
                  <div className="w-2.5 h-2.5 bg-teal-400 rounded-full"></div>
                  <div className="absolute inset-0 w-2.5 h-2.5 bg-teal-400 rounded-full animate-ping"></div>
                </div>
                <span className="text-white/70 text-sm font-semibold tracking-wider">أخصائية الأحياء الدقيقة</span>
                <Dna className="w-4 h-4 text-gold" />
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] mb-10">
                البحث العلمي
                <br />
                <span className="text-gradient">في خدمة</span>
                <br />
                <span className="text-white/80">صحة المجتمع</span>
              </h1>
              
              <p className="text-xl text-white/40 leading-relaxed mb-12 max-w-xl font-light">
                متخصصة في الأحياء الدقيقة مع خبرة تمتد لأكثر من 15 عامًا في البحث العلمي والتدريس الأكاديمي. نسعى لتطوير حلول مبتكرة في مجال التشخيص الجزيئي ومكافحة مقاومة المضادات الحيوية.
              </p>
              
              <div className="flex flex-wrap gap-5">
                <Link href="/about" className="btn-gold text-base">
                  <span>تعرف على المزيد</span>
                  <ArrowLeft className="w-5 h-5" />
                </Link>
                <Link href="/contact" className="btn-outline text-base">
                  <span>تواصل معنا</span>
                </Link>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: FlaskConical, label: 'مشروع بحثي', value: '+20', color: 'from-teal-500/20 to-teal-500/5' },
                  { icon: BookOpen, label: 'منشور علمي', value: '+50', color: 'from-gold/20 to-gold/5' },
                  { icon: GraduationCap, label: 'مقرر دراسي', value: '+10', color: 'from-sky-500/20 to-sky-500/5' },
                  { icon: Award, label: 'جائزة وتكريم', value: '+15', color: 'from-purple-500/20 to-purple-500/5' },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="card-glass-dark p-8 text-center group"
                  >
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-500`}>
                      <stat.icon className="w-7 h-7 text-white/80" />
                    </div>
                    <div className="text-4xl font-black text-white mb-2 tracking-tight">{stat.value}</div>
                    <div className="text-white/35 text-sm font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave transition */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* ============ RESEARCH AREAS ============ */}
      <section className="py-32 bg-white bg-pattern-dots relative">
        {/* Decorative corner elements */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-teal-50 to-transparent rounded-bl-full opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-gradient-to-tr from-amber-50 to-transparent rounded-tr-full opacity-60"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <div className="section-subtitle justify-center">مجالات التخصص</div>
            <h2 className="text-4xl md:text-5xl font-black text-[#0a1628] mb-6 section-title mx-auto">
              محاور البحث العلمي
            </h2>
            <p className="text-[#475569] max-w-2xl mx-auto mt-10 text-lg font-light leading-relaxed">
              نركز في أبحاثنا على عدة محاور رئيسية تساهم في تطوير المعرفة العلمية وخدمة المجتمع
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Bug, title: 'مقاومة المضادات الحيوية', description: 'دراسة آليات مقاومة البكتيريا للمضادات الحيوية وتطوير استراتيجيات جديدة لمكافحتها.', bg: 'bg-gradient-to-br from-rose-50 to-orange-50', iconBg: 'bg-gradient-to-br from-rose-500 to-orange-500', iconColor: 'text-white' },
              { icon: Dna, title: 'التشخيص الجزيئي', description: 'تطوير تقنيات تشخيصية جزيئية سريعة ودقيقة للكشف عن الأمراض المعدية.', bg: 'bg-gradient-to-br from-sky-50 to-indigo-50', iconBg: 'bg-gradient-to-br from-sky-500 to-indigo-500', iconColor: 'text-white' },
              { icon: Beaker, title: 'التنوع الميكروبي', description: 'استكشاف التنوع البيولوجي للكائنات الدقيقة في البيئات المختلفة واكتشاف أنواع جديدة.', bg: 'bg-gradient-to-br from-emerald-50 to-teal-50', iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-500', iconColor: 'text-white' },
              { icon: FlaskConical, title: 'علم الفيروسات', description: 'دراسة الفيروسات المسببة للأمراض وتطوير طرق الوقاية والعلاج.', bg: 'bg-gradient-to-br from-violet-50 to-purple-50', iconBg: 'bg-gradient-to-br from-violet-500 to-purple-500', iconColor: 'text-white' },
              { icon: Microscope, title: 'علم الفطريات الطبية', description: 'البحث في الفطريات المسببة للأمراض وتطوير أساليب التشخيص والعلاج.', bg: 'bg-gradient-to-br from-amber-50 to-yellow-50', iconBg: 'bg-gradient-to-br from-amber-500 to-yellow-500', iconColor: 'text-white' },
              { icon: Users, title: 'الصحة العامة', description: 'المساهمة في برامج الصحة العامة ومكافحة الأوبئة والأمراض المعدية.', bg: 'bg-gradient-to-br from-teal-50 to-cyan-50', iconBg: 'bg-gradient-to-br from-teal-500 to-cyan-500', iconColor: 'text-white' },
            ].map((area, index) => (
              <div key={index} className={`card-elevated p-0 group`}>
                <div className={`${area.bg} p-8 pb-6`}>
                  <div className={`w-16 h-16 rounded-2xl ${area.iconBg} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <area.icon className={`w-8 h-8 ${area.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-[#0a1628]">{area.title}</h3>
                </div>
                <div className="p-8 pt-5">
                  <p className="text-[#475569] leading-relaxed text-[0.92rem]">{area.description}</p>
                  <div className="mt-6 flex items-center gap-2 text-teal-600 text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                    <span>اقرأ المزيد</span>
                    <ChevronLeft className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ABOUT PREVIEW ============ */}
      <section className="py-32 relative overflow-hidden bg-mesh-2 bg-pattern-diagonal">
        {/* Decorative shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-teal-200/30 rounded-3xl rotate-12 pointer-events-none"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-gold/20 rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="section-subtitle">نبذة تعريفية</div>
              <h2 className="text-4xl md:text-5xl font-black text-[#0a1628] mb-8 section-title leading-tight">
                السيرة الذاتية
              </h2>
              <div className="mt-12 space-y-6">
                <p className="text-[#475569] leading-[2] text-[0.95rem]">
                  أستاذ مشارك في قسم الأحياء الدقيقة بكلية العلوم، متخصصة في مجال الأحياء الدقيقة الطبية والتشخيصية. حاصلة على درجة الدكتوراه في الأحياء الدقيقة مع تركيز على مقاومة المضادات الحيوية.
                </p>
                <p className="text-[#475569] leading-[2] text-[0.95rem]">
                  أسعى من خلال أبحاثي إلى تطوير حلول مبتكرة للتحديات الصحية المعاصرة، مع التركيز على التشخيص المبكر للأمراض المعدية وفهم آليات مقاومة الميكروبات للمضادات الحيوية.
                </p>
              </div>
              
              {/* Stats Row */}
              <div className="card-elevated p-2 mt-10 flex">
                {[
                  { label: 'سنوات الخبرة', value: '+15' },
                  { label: 'طلاب دراسات عليا', value: '+30' },
                  { label: 'مشاريع بحثية', value: '+20' },
                  { label: 'منشورات علمية', value: '+50' },
                ].map((stat, index) => (
                  <div key={index} className="stat-counter flex-1">
                    <div className="text-2xl font-black text-[#0a1628] mb-1">{stat.value}</div>
                    <div className="text-[#94a3b8] text-xs font-semibold">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10">
                <Link href="/about" className="btn-primary text-base">
                  <span>المزيد عن السيرة الذاتية</span>
                  <ArrowLeft className="w-5 h-5" />
                </Link>
              </div>
            </div>
            
            {/* Qualifications Card */}
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -top-8 -right-8 w-full h-full rounded-[32px] bg-gradient-to-br from-teal-100/50 to-gold/10 -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-full h-full rounded-[32px] border-2 border-teal-200/20 -z-10"></div>
              
              <div className="relative bg-mesh-dark rounded-[32px] p-12 text-white overflow-hidden noise-overlay shadow-2xl">
                {/* Inner glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gold/10 rounded-full blur-[80px]"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-teal-500/10 rounded-full blur-[60px]"></div>
                
                <div className="relative">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center border border-gold/20">
                      <GraduationCap className="w-6 h-6 text-gold" />
                    </div>
                    <h3 className="text-2xl font-black">المؤهلات العلمية</h3>
                  </div>
                  
                  <div className="space-y-10">
                    {[
                      { degree: 'دكتوراه في الأحياء الدقيقة', uni: 'جامعة [الاسم]', year: '20XX' },
                      { degree: 'ماجستير في الأحياء الدقيقة الطبية', uni: 'جامعة [الاسم]', year: '20XX' },
                      { degree: 'بكالوريوس علوم أحياء', uni: 'جامعة [الاسم]', year: '20XX' },
                    ].map((edu, index) => (
                      <div key={index} className="flex gap-6 group">
                        <div className="flex flex-col items-center">
                          <div className="relative">
                            <div className="w-4 h-4 bg-gold rounded-full ring-4 ring-gold/20 group-hover:ring-gold/40 transition-all duration-500"></div>
                          </div>
                          {index < 2 && <div className="w-px h-full bg-gradient-to-b from-gold/30 to-transparent mt-3"></div>}
                        </div>
                        <div className="pb-2">
                          <h4 className="font-bold text-white text-lg mb-1">{edu.degree}</h4>
                          <p className="text-white/35 text-sm">{edu.uni} - {edu.year}</p>
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

      {/* ============ WHY SECTION ============ */}
      <section className="py-32 bg-white bg-pattern-grid relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-200 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <div className="section-subtitle justify-center">لماذا نتميز</div>
            <h2 className="text-4xl md:text-5xl font-black text-[#0a1628] mb-6 section-title mx-auto">
              ما يميز أبحاثنا
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: Target, title: 'أبحاث موجهة', desc: 'نركز على أبحاث ذات أثر مباشر على صحة المجتمع والتحديات الصحية المعاصرة.', gradient: 'from-teal-500 to-emerald-500' },
              { icon: Zap, title: 'تقنيات متقدمة', desc: 'نستخدم أحدث التقنيات الجزيئية والبيولوجية في التشخيص والبحث العلمي.', gradient: 'from-gold to-amber-500' },
              { icon: Star, title: 'تعاون دولي', desc: 'شراكات بحثية مع مؤسسات أكاديمية وبحثية رائدة على المستوى الدولي.', gradient: 'from-violet-500 to-purple-500' },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative inline-block mb-8">
                  <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <item.icon className="w-12 h-12 text-white" />
                  </div>
                  {/* Decorative ring */}
                  <div className={`absolute -inset-3 rounded-[28px] border-2 border-dashed opacity-20 group-hover:opacity-40 transition-opacity duration-500`} style={{borderColor: index === 0 ? '#0d9488' : index === 1 ? '#d4a853' : '#8b5cf6'}}></div>
                </div>
                <h3 className="text-xl font-bold text-[#0a1628] mb-4">{item.title}</h3>
                <p className="text-[#475569] leading-relaxed max-w-sm mx-auto">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="py-32 relative overflow-hidden noise-overlay bg-mesh-dark">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="ring-decoration w-[600px] h-[600px] top-[-200px] left-[-200px] border-white/5 animate-rotate-slow"></div>
          <div className="ring-decoration w-[400px] h-[400px] bottom-[-100px] right-[-100px] border-gold/10 animate-rotate-slow" style={{animationDirection:'reverse'}}></div>
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center gap-3 glass rounded-full px-6 py-3 mb-10">
            <Sparkles className="w-5 h-5 text-gold" />
            <span className="text-white/60 text-sm font-semibold tracking-wider">تعاون بحثي</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
            هل لديك استفسار أو ترغب
            <br />
            <span className="text-gradient">في التعاون البحثي؟</span>
          </h2>
          <p className="text-white/35 text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            أرحب بالتواصل مع الباحثين والطلاب والمهتمين بمجال الأحياء الدقيقة
          </p>
          <Link href="/contact" className="btn-gold text-lg px-12 py-5">
            <span>تواصل الآن</span>
            <ArrowLeft className="w-6 h-6" />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
