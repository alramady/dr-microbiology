import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BookOpen, ExternalLink, FileText } from 'lucide-react';
import { readCollection } from '@/lib/store';
import { seedPublications } from '@/lib/seed';
import type { Publication } from '@/lib/types';

export const dynamic = 'force-dynamic';

export default function PublicationsPage() {
  seedPublications();
  const allPubs = readCollection<Publication>('publications');
  const publications = allPubs.filter(p => p.isPublished);

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
          <div className="section-subtitle text-white/50">الإنتاج العلمي</div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">المنشورات العلمية</h1>
          <p className="text-white/40 text-lg max-w-2xl font-light leading-relaxed">
            الأبحاث والأوراق العلمية المنشورة في مجلات محكمة
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {publications.length === 0 ? (
            <div className="text-center py-24">
              <div className="w-20 h-20 rounded-3xl bg-[#0c1b2a]/5 flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-10 h-10 text-[#8b93a7]" />
              </div>
              <p className="text-[#8b93a7] text-lg font-light">لا توجد منشورات حالياً</p>
            </div>
          ) : (
            <div className="space-y-8">
              {publications.map((pub) => (
                <div key={pub.id} className="card-premium p-9 group">
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <span className="badge badge-info">{pub.category || 'بحث'}</span>
                    <span className="text-[#c8a45e] text-sm font-semibold">{pub.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0c1b2a] mb-3 leading-relaxed group-hover:text-[#1b8a7a] transition-colors duration-300">{pub.title}</h3>
                  {pub.titleEn && (
                    <p className="text-[#8b93a7] text-sm mb-4 italic font-light" dir="ltr">{pub.titleEn}</p>
                  )}
                  <p className="text-[#5a6275] text-sm mb-4 font-light">
                    <span className="font-semibold text-[#0c1b2a]">المؤلفون:</span> {pub.authors}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-[#8b93a7]">
                    <span className="flex items-center gap-1.5">
                      <FileText className="w-4 h-4 text-[#1b8a7a]" />
                      <span className="font-light">{pub.journal}</span>
                    </span>
                    {pub.volume && <span className="font-light">المجلد: {pub.volume}</span>}
                    {pub.pages && <span className="font-light">الصفحات: {pub.pages}</span>}
                  </div>
                  {pub.abstract && (
                    <div className="mt-5 p-5 bg-[#faf8f5] rounded-xl border border-[#0000000a]">
                      <p className="text-[#5a6275] text-sm leading-[1.9] font-light">
                        <span className="font-bold text-[#0c1b2a]">الملخص: </span>
                        {pub.abstract}
                      </p>
                    </div>
                  )}
                  <div className="flex gap-4 mt-5 pt-5 border-t border-[#0000000a]">
                    {pub.doi && (
                      <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer"
                        className="text-[#1b8a7a] text-sm flex items-center gap-1.5 hover:underline font-medium">
                        <ExternalLink className="w-4 h-4" /> DOI
                      </a>
                    )}
                    {pub.pdfUrl && (
                      <a href={pub.pdfUrl} target="_blank" rel="noopener noreferrer"
                        className="text-[#c8a45e] text-sm flex items-center gap-1.5 hover:underline font-medium">
                        <FileText className="w-4 h-4" /> PDF
                      </a>
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
