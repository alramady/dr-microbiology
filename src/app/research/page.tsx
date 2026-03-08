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

  const statusMap: Record<string, { label: string; color: string }> = {
    ongoing: { label: 'جاري', color: 'badge-success' },
    completed: { label: 'مكتمل', color: 'badge-info' },
    planned: { label: 'مخطط', color: 'badge-warning' },
  };

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
          <div className="section-subtitle text-white/50">البحث العلمي</div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">المشاريع البحثية</h1>
          <p className="text-white/40 text-lg max-w-2xl font-light leading-relaxed">
            مشاريع بحثية جارية ومكتملة في مجال الأحياء الدقيقة
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {research.length === 0 ? (
            <div className="text-center py-24">
              <div className="w-20 h-20 rounded-3xl bg-[#0c1b2a]/5 flex items-center justify-center mx-auto mb-6">
                <FlaskConical className="w-10 h-10 text-[#8b93a7]" />
              </div>
              <p className="text-[#8b93a7] text-lg font-light">لا توجد مشاريع بحثية حالياً</p>
            </div>
          ) : (
            <div className="space-y-8">
              {research.map((item) => (
                <div key={item.id} className="card-premium p-9 group">
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <span className={`badge ${statusMap[item.status]?.color || 'badge-info'}`}>
                      {statusMap[item.status]?.label || item.status}
                    </span>
                    {item.startDate && (
                      <span className="text-[#8b93a7] text-sm flex items-center gap-1.5 font-light">
                        <Calendar className="w-4 h-4" />
                        {item.startDate} - {item.endDate || 'مستمر'}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-[#0c1b2a] mb-3 group-hover:text-[#1b8a7a] transition-colors duration-300">{item.title}</h3>
                  {item.titleEn && (
                    <p className="text-[#8b93a7] text-sm mb-4 italic font-light" dir="ltr">{item.titleEn}</p>
                  )}
                  <p className="text-[#5a6275] leading-[1.9] mb-6 font-light text-[0.92rem]">{item.description}</p>
                  <div className="flex flex-wrap gap-6 pt-5 border-t border-[#0000000a]">
                    {item.fundingSource && (
                      <div className="flex items-center gap-2 text-sm text-[#8b93a7]">
                        <Building className="w-4 h-4 text-[#c8a45e]" />
                        <span className="font-light">التمويل: {item.fundingSource}</span>
                      </div>
                    )}
                    {item.collaborators && (
                      <div className="flex items-center gap-2 text-sm text-[#8b93a7]">
                        <Users className="w-4 h-4 text-[#1b8a7a]" />
                        <span className="font-light">المتعاونون: {item.collaborators}</span>
                      </div>
                    )}
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
