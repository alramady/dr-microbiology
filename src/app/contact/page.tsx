'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setError('حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.');
      }
    } catch {
      setError('حدث خطأ في الاتصال. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsSubmitting(false);
    }
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
          <div className="section-subtitle text-white/50">نسعد بتواصلكم</div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">تواصل معنا</h1>
          <p className="text-white/40 text-lg max-w-2xl font-light leading-relaxed">
            نرحب باستفساراتكم ومقترحاتكم وفرص التعاون البحثي
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <div>
              <div className="section-subtitle">معلومات التواصل</div>
              <h2 className="text-2xl font-bold text-[#0c1b2a] mb-8 section-title">كيف تصل إلينا</h2>
              <div className="space-y-5 mt-10">
                {[
                  { icon: Mail, color: 'from-[#1b8a7a]/10 to-[#1b8a7a]/5', iconColor: 'text-[#1b8a7a]', title: 'البريد الإلكتروني', value: 'contact@drmicrobiology.com' },
                  { icon: Phone, color: 'from-[#0c1b2a]/10 to-[#0c1b2a]/5', iconColor: 'text-[#0c1b2a]', title: 'الهاتف', value: '+966 XX XXX XXXX', dir: 'ltr' },
                  { icon: MapPin, color: 'from-[#c8a45e]/10 to-[#c8a45e]/5', iconColor: 'text-[#c8a45e]', title: 'العنوان', value: 'قسم الأحياء الدقيقة، كلية العلوم' },
                ].map((item, i) => (
                  <div key={i} className="card-premium p-5 flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shrink-0`}>
                      <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0c1b2a] text-sm">{item.title}</h3>
                      <p className="text-[#8b93a7] text-sm mt-1 font-light" dir={item.dir || 'rtl'}>{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-gradient-to-br from-[#0c1b2a] via-[#132d46] to-[#1a3a5c] rounded-2xl p-7 text-white relative overflow-hidden noise-overlay">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#c8a45e]/10 rounded-full blur-[50px]"></div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-5 h-5 text-[#c8a45e]" />
                    <h3 className="font-bold text-sm">ساعات العمل</h3>
                  </div>
                  <div className="space-y-3 text-sm text-white/50 font-light">
                    <div className="flex justify-between">
                      <span>الأحد - الخميس</span>
                      <span className="text-white/70">8:00 ص - 4:00 م</span>
                    </div>
                    <div className="flex justify-between">
                      <span>الجمعة - السبت</span>
                      <span className="text-[#c8a45e]/70">مغلق</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="section-subtitle">نموذج التواصل</div>
              <h2 className="text-2xl font-bold text-[#0c1b2a] mb-8 section-title">أرسل رسالة</h2>

              {isSubmitted ? (
                <div className="text-center py-20 bg-[#faf8f5] rounded-2xl border border-[#0000000a] mt-10">
                  <div className="w-20 h-20 rounded-3xl bg-[#1b8a7a]/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-[#1b8a7a]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0c1b2a] mb-3">تم إرسال رسالتك بنجاح</h3>
                  <p className="text-[#8b93a7] font-light">سنقوم بالرد عليك في أقرب وقت ممكن</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 btn-primary"
                  >
                    <span>إرسال رسالة أخرى</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 mt-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="form-label">الاسم الكامل *</label>
                      <input
                        type="text"
                        required
                        className="form-input"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="أدخل اسمك الكامل"
                      />
                    </div>
                    <div>
                      <label className="form-label">البريد الإلكتروني *</label>
                      <input
                        type="email"
                        required
                        className="form-input"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="example@email.com"
                        dir="ltr"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="form-label">رقم الهاتف</label>
                      <input
                        type="tel"
                        className="form-input"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+966 XX XXX XXXX"
                        dir="ltr"
                      />
                    </div>
                    <div>
                      <label className="form-label">الموضوع *</label>
                      <input
                        type="text"
                        required
                        className="form-input"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="موضوع الرسالة"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="form-label">الرسالة *</label>
                    <textarea
                      required
                      rows={6}
                      className="form-input"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="اكتب رسالتك هنا..."
                    />
                  </div>
                  {error && (
                    <div className="p-4 bg-red-50 text-red-700 rounded-xl text-sm border border-red-100">{error}</div>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary text-base disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'جاري الإرسال...' : 'إرسال الرسالة'}</span>
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
