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

      <section className="pt-32 pb-16" style={{
        background: 'linear-gradient(135deg, #0a3554 0%, #0f4c75 50%, #1b6fa8 100%)'
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">الأخبار والفعاليات</h1>
          <p className="text-white/70 text-lg">آخر الأخبار والمستجدات والفعاليات العلمية</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {news.length === 0 ? (
            <div className="text-center py-20">
              <Newspaper className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">لا توجد أخبار حالياً</p>
              <p className="text-gray-400 text-sm mt-2">يمكن إضافة الأخبار من لوحة التحكم</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {news.map((item) => (
                <div key={item.id} className="bg-gray-50 rounded-2xl overflow-hidden card-hover border border-gray-100">
                  {item.image && (
                    <div className="h-48 bg-gray-200 overflow-hidden">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      {item.category && <span className="badge badge-info">{item.category}</span>}
                      <span className="text-gray-400 text-xs flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(item.createdAt).toLocaleDateString('ar-SA')}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#0f4c75] mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
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
