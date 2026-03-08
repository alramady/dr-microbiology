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

      <section className="pt-32 pb-16" style={{
        background: 'linear-gradient(135deg, #0a3554 0%, #0f4c75 50%, #1b6fa8 100%)'
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">المنشورات العلمية</h1>
          <p className="text-white/70 text-lg">الأبحاث والأوراق العلمية المنشورة في مجلات محكمة</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {publications.length === 0 ? (
            <div className="text-center py-20">
              <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">لا توجد منشورات حالياً</p>
            </div>
          ) : (
            <div className="space-y-6">
              {publications.map((pub) => (
                <div key={pub.id} className="bg-gray-50 rounded-2xl p-8 card-hover border border-gray-100">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="badge badge-info">{pub.category || 'بحث'}</span>
                    <span className="text-gray-400 text-sm">{pub.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0f4c75] mb-2 leading-relaxed">{pub.title}</h3>
                  {pub.titleEn && (
                    <p className="text-gray-400 text-sm mb-3 italic" dir="ltr">{pub.titleEn}</p>
                  )}
                  <p className="text-gray-500 text-sm mb-3">
                    <span className="font-medium">المؤلفون:</span> {pub.authors}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <FileText className="w-4 h-4 text-[#3282b8]" />
                      {pub.journal}
                    </span>
                    {pub.volume && <span>المجلد: {pub.volume}</span>}
                    {pub.pages && <span>الصفحات: {pub.pages}</span>}
                  </div>
                  {pub.abstract && (
                    <div className="mt-4 p-4 bg-white rounded-xl">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        <span className="font-bold text-[#0f4c75]">الملخص: </span>
                        {pub.abstract}
                      </p>
                    </div>
                  )}
                  <div className="flex gap-3 mt-4">
                    {pub.doi && (
                      <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer"
                        className="text-[#3282b8] text-sm flex items-center gap-1 hover:underline">
                        <ExternalLink className="w-4 h-4" /> DOI
                      </a>
                    )}
                    {pub.pdfUrl && (
                      <a href={pub.pdfUrl} target="_blank" rel="noopener noreferrer"
                        className="text-[#c9a84c] text-sm flex items-center gap-1 hover:underline">
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
