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

      <section className="relative pt-36 pb-24 overflow-hidden noise-overlay bg-mesh-dark">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="ring-decoration w-[400px] h-[400px] bottom-[-100px] left-[-100px] border-white/5 animate-rotate-slow"></div>
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="section-subtitle text-white/40">نسعد بتواصلكم</div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">تواصل معنا</h1>
          <p className="text-white/35 text-xl max-w-2xl font-light leading-relaxed">
            نرحب باستفساراتكم ومقترحاتكم وفرص التعاون البحثي
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full"><path d="M0 80L48 68C96 56 192 32 288 24C384 16 480 24 576 32C672 40 768 48 864 48C960 48 1056 40 1152 36C1248 32 1344 32 1392 32L1440 32V80H0Z" fill="white"/></svg>
        </div>
      </section>

      <section className="py-24 bg-white bg-pattern-dots relative">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-teal-50 to-transparent rounded-bl-full opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-gradient-to-tr from-amber-50 to-transparent rounded-tr-full opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <div>
              <div className="section-subtitle">معلومات التواصل</div>
              <h2 className="text-2xl font-black text-[#0a1628] mb-8 section-title">كيف تصل إلينا</h2>
              <div className="space-y-5 mt-10">
                {[
                  { icon: Mail, gradient: 'from-teal-500 to-emerald-500', title: 'البريد الإلكتروني', value: 'contact@drmicrobiology.com' },
                  { icon: Phone, gradient: 'from-navy to-navy-mid', title: 'الهاتف', value: '+966 XX XXX XXXX', dir: 'ltr' as const },
                  { icon: MapPin, gradient: 'from-gold to-amber-500', title: 'العنوان', value: 'قسم الأحياء الدقيقة، كلية العلوم' },
                ].map((item, i) => (
                  <div key={i} className="card-elevated p-5 flex items-start gap-4 group">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0a1628] text-sm">{item.title}</h3>
                      <p className="text-[#94a3b8] text-sm mt-1 font-medium" dir={item.dir || 'rtl'}>{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-mesh-dark rounded-2xl p-8 text-white relative overflow-hidden noise-overlay shadow-xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-[50px]"></div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-gold" />
                    </div>
                    <h3 className="font-bold">ساعات العمل</h3>
                  </div>
                  <div className="space-y-4 text-sm">
                    <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl">
                      <span className="text-white/50">الأحد - الخميس</span>
                      <span className="text-white/80 font-semibold">8:00 ص - 4:00 م</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl">
                      <span className="text-white/50">الجمعة - السبت</span>
                      <span className="text-gold/70 font-semibold">مغلق</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="section-subtitle">نموذج التواصل</div>
              <h2 className="text-2xl font-black text-[#0a1628] mb-8 section-title">أرسل رسالة</h2>

              {isSubmitted ? (
                <div className="text-center py-20 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-3xl border border-teal-100 mt-10">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-black text-[#0a1628] mb-3">تم إرسال رسالتك بنجاح</h3>
                  <p className="text-[#94a3b8]">سنقوم بالرد عليك في أقرب وقت ممكن</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 btn-primary"
                  >
                    <span>إرسال رسالة أخرى</span>
                  </button>
                </div>
              ) : (
                <div className="card-elevated p-10 mt-10">
                  <form onSubmit={handleSubmit} className="space-y-6">
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
                      <div className="p-4 bg-red-50 text-red-700 rounded-xl text-sm border border-red-100 font-semibold">{error}</div>
                    )}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-gold text-base disabled:opacity-50 w-full justify-center"
                    >
                      <span>{isSubmitting ? 'جاري الإرسال...' : 'إرسال الرسالة'}</span>
                      <Send className="w-5 h-5" />
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
