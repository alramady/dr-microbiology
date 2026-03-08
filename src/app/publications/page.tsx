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

      <section className="relative pt-36 pb-24 overflow-hidden noise-overlay bg-mesh-dark">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="ring-decoration w-[400px] h-[400px] top-[-100px] right-[-100px] border-white/5 animate-rotate-slow"></div>
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="section-subtitle text-white/40">الإنتاج العلمي</div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">المنشورات العلمية</h1>
          <p className="text-white/35 text-xl max-w-2xl font-light leading-relaxed">
            الأبحاث والأوراق العلمية المنشورة في مجلات محكمة
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full"><path d="M0 80L48 68C96 56 192 32 288 24C384 16 480 24 576 32C672 40 768 48 864 48C960 48 1056 40 1152 36C1248 32 1344 32 1392 32L1440 32V80H0Z" fill="white"/></svg>
        </div>
      </section>

      <section className="py-24 bg-white bg-pattern-dots relative">
        <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-sky-50 to-transparent rounded-br-full opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-gradient-to-tl from-amber-50 to-transparent rounded-tl-full opacity-50"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {publications.length === 0 ? (
            <div className="text-center py-24">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-sky-50 to-indigo-50 flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-10 h-10 text-[#94a3b8]" />
              </div>
              <p className="text-[#94a3b8] text-lg">لا توجد منشورات حالياً</p>
            </div>
          ) : (
            <div className="space-y-10">
              {publications.map((pub, index) => (
                <div key={pub.id} className="card-elevated p-0 group">
                  <div className={`p-8 pb-6 ${index % 2 === 0 ? 'bg-gradient-to-br from-sky-50/80 to-indigo-50/50' : 'bg-gradient-to-br from-amber-50/80 to-orange-50/50'}`}>
                    <div className="flex flex-wrap items-center gap-3 mb-5">
                      <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-white/80 text-[#0a1628] shadow-sm">{pub.category || 'بحث'}</span>
                      <span className="text-gold text-sm font-bold">{pub.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#0a1628] leading-relaxed group-hover:text-teal-600 transition-colors duration-300">{pub.title}</h3>
                    {pub.titleEn && (
                      <p className="text-[#94a3b8] text-sm mt-2 italic" dir="ltr">{pub.titleEn}</p>
                    )}
                  </div>
                  <div className="p-8 pt-6">
                    <p className="text-[#475569] text-sm mb-4">
                      <span className="font-bold text-[#0a1628]">المؤلفون:</span> {pub.authors}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-[#94a3b8]">
                      <span className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-teal-500/10 flex items-center justify-center">
                          <FileText className="w-3.5 h-3.5 text-teal-500" />
                        </div>
                        <span className="font-medium">{pub.journal}</span>
                      </span>
                      {pub.volume && <span className="font-medium">المجلد: {pub.volume}</span>}
                      {pub.pages && <span className="font-medium">الصفحات: {pub.pages}</span>}
                    </div>
                    {pub.abstract && (
                      <div className="mt-6 p-6 bg-gradient-to-br from-cream to-warm-gray rounded-2xl border border-[#0000000a]">
                        <p className="text-[#475569] text-sm leading-[1.9]">
                          <span className="font-bold text-[#0a1628]">الملخص: </span>
                          {pub.abstract}
                        </p>
                      </div>
                    )}
                    <div className="flex gap-4 mt-6 pt-6 border-t border-[#0000000a]">
                      {pub.doi && (
                        <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 text-teal-600 rounded-xl text-sm font-bold hover:bg-teal-500/20 transition-colors">
                          <ExternalLink className="w-4 h-4" /> DOI
                        </a>
                      )}
                      {pub.pdfUrl && (
                        <a href={pub.pdfUrl} target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 text-gold rounded-xl text-sm font-bold hover:bg-gold/20 transition-colors">
                          <FileText className="w-4 h-4" /> PDF
                        </a>
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
