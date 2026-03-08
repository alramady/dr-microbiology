import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Microscope, BookOpen, FlaskConical, GraduationCap, Award, Users, ArrowLeft, Beaker, Dna, Bug } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{
        background: 'linear-gradient(135deg, #0a3554 0%, #0f4c75 30%, #1b6fa8 60%, #3282b8 100%)'
      }}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#c9a84c]/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
          <div className="absolute top-10 left-10 opacity-5">
            <Microscope className="w-96 h-96 text-white" />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fadeInUp">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Dna className="w-4 h-4 text-[#c9a84c]" />
                <span className="text-white/80 text-sm">أخصائية الأحياء الدقيقة</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                البحث العلمي
                <br />
                <span className="text-[#bbe1fa]">في خدمة صحة المجتمع</span>
              </h1>
              <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-lg">
                متخصصة في الأحياء الدقيقة مع خبرة تمتد لأكثر من 15 عامًا في البحث العلمي والتدريس الأكاديمي. نسعى لتطوير حلول مبتكرة في مجال التشخيص الجزيئي ومكافحة مقاومة المضادات الحيوية.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/about" className="btn-primary text-base">
                  تعرف على المزيد
                  <ArrowLeft className="w-5 h-5" />
                </Link>
                <Link href="/contact" className="btn-outline text-white border-white/30 hover:bg-white/10 hover:text-white text-base">
                  تواصل معنا
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: FlaskConical, label: 'مشروع بحثي', value: '+20', color: 'from-blue-500/20 to-blue-600/20' },
                { icon: BookOpen, label: 'منشور علمي', value: '+50', color: 'from-emerald-500/20 to-emerald-600/20' },
                { icon: GraduationCap, label: 'مقرر دراسي', value: '+10', color: 'from-purple-500/20 to-purple-600/20' },
                { icon: Award, label: 'جائزة وتكريم', value: '+15', color: 'from-amber-500/20 to-amber-600/20' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${stat.color} backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center card-hover`}
                >
                  <stat.icon className="w-8 h-8 text-[#bbe1fa] mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f4c75] mb-4 section-title mx-auto">
              مجالات البحث
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-6">
              نركز في أبحاثنا على عدة محاور رئيسية تساهم في تطوير المعرفة العلمية وخدمة المجتمع
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Bug, title: 'مقاومة المضادات الحيوية', description: 'دراسة آليات مقاومة البكتيريا للمضادات الحيوية وتطوير استراتيجيات جديدة لمكافحتها.', color: 'bg-red-50', iconColor: 'text-red-500' },
              { icon: Dna, title: 'التشخيص الجزيئي', description: 'تطوير تقنيات تشخيصية جزيئية سريعة ودقيقة للكشف عن الأمراض المعدية.', color: 'bg-blue-50', iconColor: 'text-blue-500' },
              { icon: Beaker, title: 'التنوع الميكروبي', description: 'استكشاف التنوع البيولوجي للكائنات الدقيقة في البيئات المختلفة واكتشاف أنواع جديدة.', color: 'bg-green-50', iconColor: 'text-green-500' },
              { icon: FlaskConical, title: 'علم الفيروسات', description: 'دراسة الفيروسات المسببة للأمراض وتطوير طرق الوقاية والعلاج.', color: 'bg-purple-50', iconColor: 'text-purple-500' },
              { icon: Microscope, title: 'علم الفطريات الطبية', description: 'البحث في الفطريات المسببة للأمراض وتطوير أساليب التشخيص والعلاج.', color: 'bg-amber-50', iconColor: 'text-amber-500' },
              { icon: Users, title: 'الصحة العامة', description: 'المساهمة في برامج الصحة العامة ومكافحة الأوبئة والأمراض المعدية.', color: 'bg-teal-50', iconColor: 'text-teal-500' },
            ].map((area, index) => (
              <div key={index} className={`${area.color} rounded-2xl p-8 card-hover border border-transparent hover:border-gray-200`}>
                <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center mb-5">
                  <area.icon className={`w-7 h-7 ${area.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-[#0f4c75] mb-3">{area.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0f4c75] mb-6 section-title">نبذة عني</h2>
              <p className="text-gray-600 leading-relaxed mb-6 mt-8">
                أستاذ مشارك في قسم الأحياء الدقيقة بكلية العلوم، متخصصة في مجال الأحياء الدقيقة الطبية والتشخيصية. حاصلة على درجة الدكتوراه في الأحياء الدقيقة مع تركيز على مقاومة المضادات الحيوية.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                أسعى من خلال أبحاثي إلى تطوير حلول مبتكرة للتحديات الصحية المعاصرة، مع التركيز على التشخيص المبكر للأمراض المعدية وفهم آليات مقاومة الميكروبات للمضادات الحيوية.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: 'سنوات الخبرة', value: '+15' },
                  { label: 'طلاب دراسات عليا', value: '+30' },
                  { label: 'مشاريع بحثية', value: '+20' },
                  { label: 'منشورات علمية', value: '+50' },
                ].map((stat, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 text-center shadow-sm">
                    <div className="text-2xl font-bold text-[#0f4c75]">{stat.value}</div>
                    <div className="text-gray-500 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
              <Link href="/about" className="btn-primary">
                المزيد عن السيرة الذاتية
                <ArrowLeft className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#0f4c75] to-[#3282b8] rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-6">المؤهلات العلمية</h3>
                <div className="space-y-6">
                  {[
                    { degree: 'دكتوراه في الأحياء الدقيقة', uni: 'جامعة [الاسم]', year: '20XX' },
                    { degree: 'ماجستير في الأحياء الدقيقة الطبية', uni: 'جامعة [الاسم]', year: '20XX' },
                    { degree: 'بكالوريوس علوم أحياء', uni: 'جامعة [الاسم]', year: '20XX' },
                  ].map((edu, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-3 h-3 bg-[#c9a84c] rounded-full mt-2 shrink-0"></div>
                      <div>
                        <h4 className="font-bold">{edu.degree}</h4>
                        <p className="text-white/70 text-sm">{edu.uni} - {edu.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{
        background: 'linear-gradient(135deg, #0a3554 0%, #0f4c75 50%, #1b6fa8 100%)'
      }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            هل لديك استفسار أو ترغب في التعاون البحثي؟
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            أرحب بالتواصل مع الباحثين والطلاب والمهتمين بمجال الأحياء الدقيقة
          </p>
          <Link href="/contact" className="bg-white text-[#0f4c75] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all inline-flex items-center gap-2">
            تواصل الآن
            <ArrowLeft className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
