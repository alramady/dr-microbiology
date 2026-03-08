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

      <section className="relative pt-36 pb-24 overflow-hidden noise-overlay bg-mesh-dark">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="ring-decoration w-[400px] h-[400px] top-[-100px] right-[10%] border-white/5 animate-rotate-slow"></div>
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="section-subtitle text-white/40">آخر المستجدات</div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">الأخبار والفعاليات</h1>
          <p className="text-white/35 text-xl max-w-2xl font-light leading-relaxed">
            آخر الأخبار والمستجدات والفعاليات العلمية
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full"><path d="M0 80L48 68C96 56 192 32 288 24C384 16 480 24 576 32C672 40 768 48 864 48C960 48 1056 40 1152 36C1248 32 1344 32 1392 32L1440 32V80H0Z" fill="white"/></svg>
        </div>
      </section>

      <section className="py-24 bg-white bg-pattern-dots relative">
        <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-emerald-50 to-transparent rounded-br-full opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {news.length === 0 ? (
            <div className="text-center py-24">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center mx-auto mb-6">
                <Newspaper className="w-10 h-10 text-[#94a3b8]" />
              </div>
              <p className="text-[#94a3b8] text-lg">لا توجد أخبار حالياً</p>
              <p className="text-[#94a3b8]/60 text-sm mt-3">يمكن إضافة الأخبار من لوحة التحكم</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {news.map((item) => (
                <div key={item.id} className="card-elevated overflow-hidden group">
                  {item.image ? (
                    <div className="h-56 bg-gradient-to-br from-teal-50 to-emerald-50 overflow-hidden">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                  ) : (
                    <div className="h-40 bg-gradient-to-br from-teal-50 to-emerald-50 flex items-center justify-center">
                      <Newspaper className="w-12 h-12 text-teal-300" />
                    </div>
                  )}
                  <div className="p-7">
                    <div className="flex items-center gap-3 mb-4">
                      {item.category && <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-500/10 text-teal-600">{item.category}</span>}
                      <span className="text-[#94a3b8] text-xs flex items-center gap-1.5 font-semibold">
                        <Calendar className="w-3 h-3" />
                        {new Date(item.createdAt).toLocaleDateString('ar-SA')}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#0a1628] mb-3 group-hover:text-teal-600 transition-colors duration-300">{item.title}</h3>
                    <p className="text-[#475569] text-sm leading-[1.8]">
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
