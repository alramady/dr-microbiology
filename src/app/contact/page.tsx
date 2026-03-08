'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

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

      <section className="pt-32 pb-16" style={{
        background: 'linear-gradient(135deg, #0a3554 0%, #0f4c75 50%, #1b6fa8 100%)'
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">تواصل معنا</h1>
          <p className="text-white/70 text-lg">نرحب باستفساراتكم ومقترحاتكم</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-[#0f4c75] mb-8">معلومات التواصل</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-[#0f4c75] rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0f4c75]">البريد الإلكتروني</h3>
                    <p className="text-gray-500 text-sm mt-1">contact@drmicrobiology.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-[#3282b8] rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0f4c75]">الهاتف</h3>
                    <p className="text-gray-500 text-sm mt-1" dir="ltr">+966 XX XXX XXXX</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-[#c9a84c] rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0f4c75]">العنوان</h3>
                    <p className="text-gray-500 text-sm mt-1">قسم الأحياء الدقيقة، كلية العلوم</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-[#0f4c75] to-[#3282b8] rounded-xl text-white">
                <h3 className="font-bold mb-3">ساعات العمل</h3>
                <div className="space-y-2 text-sm text-white/80">
                  <p>الأحد - الخميس: 8:00 ص - 4:00 م</p>
                  <p>الجمعة - السبت: مغلق</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-[#0f4c75] mb-8">أرسل رسالة</h2>

              {isSubmitted ? (
                <div className="text-center py-16 bg-green-50 rounded-2xl">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-green-700 mb-2">تم إرسال رسالتك بنجاح</h3>
                  <p className="text-green-600">سنقوم بالرد عليك في أقرب وقت ممكن</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 btn-primary"
                  >
                    إرسال رسالة أخرى
                  </button>
                </div>
              ) : (
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
                    <div className="p-4 bg-red-50 text-red-700 rounded-xl text-sm">{error}</div>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary text-base disabled:opacity-50"
                  >
                    {isSubmitting ? 'جاري الإرسال...' : 'إرسال الرسالة'}
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
