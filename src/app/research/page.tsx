import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FlaskConical, Calendar, Users, Building } from 'lucide-react';
import { readCollection } from '@/lib/store';
import { seedResearch } from '@/lib/seed';
import type { Research } from '@/lib/types';

export const dynamic = 'force-dynamic';

export default function ResearchPage() {
  seedResearch();
  const allResearch = readCollection<Research>('research');
  const research = allResearch.filter(r => r.isPublished);

  const statusMap: Record<string, { label: string; color: string; bg: string }> = {
    ongoing: { label: 'جاري', color: 'text-teal-600', bg: 'bg-teal-500/10' },
    completed: { label: 'مكتمل', color: 'text-sky-600', bg: 'bg-sky-500/10' },
    planned: { label: 'مخطط', color: 'text-amber-600', bg: 'bg-amber-500/10' },
  };

  return (
    <>
      <Navbar />

      <section className="relative pt-36 pb-24 overflow-hidden noise-overlay bg-mesh-dark">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="ring-decoration w-[400px] h-[400px] top-[-100px] left-[-100px] border-white/5 animate-rotate-slow"></div>
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="section-subtitle text-white/40">البحث العلمي</div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">المشاريع البحثية</h1>
          <p className="text-white/35 text-xl max-w-2xl font-light leading-relaxed">
            مشاريع بحثية جارية ومكتملة في مجال الأحياء الدقيقة
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full"><path d="M0 80L48 68C96 56 192 32 288 24C384 16 480 24 576 32C672 40 768 48 864 48C960 48 1056 40 1152 36C1248 32 1344 32 1392 32L1440 32V80H0Z" fill="white"/></svg>
        </div>
      </section>

      <section className="py-24 bg-white bg-pattern-dots relative">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-teal-50 to-transparent rounded-bl-full opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-gradient-to-tr from-amber-50 to-transparent rounded-tr-full opacity-50"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {research.length === 0 ? (
            <div className="text-center py-24">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-teal-50 to-emerald-50 flex items-center justify-center mx-auto mb-6">
                <FlaskConical className="w-10 h-10 text-[#94a3b8]" />
              </div>
              <p className="text-[#94a3b8] text-lg">لا توجد مشاريع بحثية حالياً</p>
            </div>
          ) : (
            <div className="space-y-10">
              {research.map((item, index) => (
                <div key={item.id} className="card-elevated p-0 group">
                  <div className={`p-8 pb-6 ${index % 2 === 0 ? 'bg-gradient-to-br from-teal-50/80 to-emerald-50/50' : 'bg-gradient-to-br from-sky-50/80 to-indigo-50/50'}`}>
                    <div className="flex flex-wrap items-center gap-3 mb-5">
                      <span className={`px-4 py-1.5 rounded-full text-xs font-bold ${statusMap[item.status]?.bg || 'bg-sky-500/10'} ${statusMap[item.status]?.color || 'text-sky-600'}`}>
                        {statusMap[item.status]?.label || item.status}
                      </span>
                      {item.startDate && (
                        <span className="text-[#94a3b8] text-sm flex items-center gap-1.5 font-semibold">
                          <Calendar className="w-4 h-4" />
                          {item.startDate} - {item.endDate || 'مستمر'}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-[#0a1628] group-hover:text-teal-600 transition-colors duration-300 leading-relaxed">{item.title}</h3>
                    {item.titleEn && (
                      <p className="text-[#94a3b8] text-sm mt-2 italic" dir="ltr">{item.titleEn}</p>
                    )}
                  </div>
                  <div className="p-8 pt-6">
                    <p className="text-[#475569] leading-[1.9] mb-6 text-[0.92rem]">{item.description}</p>
                    <div className="flex flex-wrap gap-6 pt-5 border-t border-[#0000000a]">
                      {item.fundingSource && (
                        <div className="flex items-center gap-2 text-sm text-[#94a3b8]">
                          <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center">
                            <Building className="w-4 h-4 text-gold" />
                          </div>
                          <span className="font-medium">التمويل: {item.fundingSource}</span>
                        </div>
                      )}
                      {item.collaborators && (
                        <div className="flex items-center gap-2 text-sm text-[#94a3b8]">
                          <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center">
                            <Users className="w-4 h-4 text-teal-500" />
                          </div>
                          <span className="font-medium">المتعاونون: {item.collaborators}</span>
                        </div>
                      )}
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
