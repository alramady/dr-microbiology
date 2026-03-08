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

      <section className="pt-32 pb-16" style={{
        background: 'linear-gradient(135deg, #0a3554 0%, #0f4c75 50%, #1b6fa8 100%)'
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">المشاريع البحثية</h1>
          <p className="text-white/70 text-lg">مشاريع بحثية جارية ومكتملة في مجال الأحياء الدقيقة</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {research.length === 0 ? (
            <div className="text-center py-20">
              <FlaskConical className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">لا توجد مشاريع بحثية حالياً</p>
            </div>
          ) : (
            <div className="space-y-8">
              {research.map((item) => (
                <div key={item.id} className="bg-gray-50 rounded-2xl p-8 card-hover border border-gray-100">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className={`badge ${statusMap[item.status]?.color || 'badge-info'}`}>
                      {statusMap[item.status]?.label || item.status}
                    </span>
                    {item.startDate && (
                      <span className="text-gray-400 text-sm flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {item.startDate} - {item.endDate || 'مستمر'}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-[#0f4c75] mb-3">{item.title}</h3>
                  {item.titleEn && (
                    <p className="text-gray-400 text-sm mb-3 italic" dir="ltr">{item.titleEn}</p>
                  )}
                  <p className="text-gray-600 leading-relaxed mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-6">
                    {item.fundingSource && (
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Building className="w-4 h-4 text-[#c9a84c]" />
                        <span>التمويل: {item.fundingSource}</span>
                      </div>
                    )}
                    {item.collaborators && (
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Users className="w-4 h-4 text-[#3282b8]" />
                        <span>المتعاونون: {item.collaborators}</span>
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
