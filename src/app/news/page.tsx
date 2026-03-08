import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Newspaper, Calendar } from 'lucide-react';
import { readCollection } from '@/lib/store';
import type { NewsItem } from '@/lib/types';

export const dynamic = 'force-dynamic';

export default function NewsPage() {
  const allNews = readCollection<NewsItem>('news');
  const news = allNews.filter(n => n.isPublished);

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
          <div className="section-subtitle text-white/50">آخر المستجدات</div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">الأخبار والفعاليات</h1>
          <p className="text-white/40 text-lg max-w-2xl font-light leading-relaxed">
            آخر الأخبار والمستجدات والفعاليات العلمية
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {news.length === 0 ? (
            <div className="text-center py-24">
              <div className="w-20 h-20 rounded-3xl bg-[#0c1b2a]/5 flex items-center justify-center mx-auto mb-6">
                <Newspaper className="w-10 h-10 text-[#8b93a7]" />
              </div>
              <p className="text-[#8b93a7] text-lg font-light">لا توجد أخبار حالياً</p>
              <p className="text-[#8b93a7]/60 text-sm mt-3 font-light">يمكن إضافة الأخبار من لوحة التحكم</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {news.map((item) => (
                <div key={item.id} className="card-premium overflow-hidden group">
                  {item.image && (
                    <div className="h-52 bg-[#faf8f5] overflow-hidden">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                  )}
                  <div className="p-7">
                    <div className="flex items-center gap-3 mb-4">
                      {item.category && <span className="badge badge-info">{item.category}</span>}
                      <span className="text-[#8b93a7] text-xs flex items-center gap-1.5 font-light">
                        <Calendar className="w-3 h-3" />
                        {new Date(item.createdAt).toLocaleDateString('ar-SA')}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#0c1b2a] mb-3 group-hover:text-[#1b8a7a] transition-colors duration-300">{item.title}</h3>
                    <p className="text-[#5a6275] text-sm leading-[1.8] font-light">
                      {item.excerpt || item.content?.substring(0, 150) + '...'}
                    </p>
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
