'use client';

import { useState, useEffect } from 'react';
import { Mail, MailOpen, Trash2, Eye, X, Clock } from 'lucide-react';

interface Message {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  isRead: boolean;
  isReplied: boolean;
  createdAt: string;
}

export default function MessagesAdmin() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadMessages();
  }, []);

  const loadMessages = async () => {
    try {
      const res = await fetch('/api/admin/contact_messages');
      if (res.ok) {
        const data = await res.json();
        setMessages(data.data || []);
      }
    } catch (err) {
      console.error('Error loading messages:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const markAsRead = async (msg: Message) => {
    try {
      await fetch('/api/admin/contact_messages', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: msg.id, isRead: true }),
      });
      await loadMessages();
    } catch (err) {
      console.error('Error:', err);
    }
  };

  const deleteMessage = async (id: string) => {
    if (!confirm('هل أنت متأكد من حذف هذه الرسالة؟')) return;
    try {
      await fetch(`/api/admin/contact_messages?id=${id}`, { method: 'DELETE' });
      await loadMessages();
      if (selectedMessage?.id === id) setSelectedMessage(null);
    } catch (err) {
      console.error('Error:', err);
    }
  };

  const viewMessage = (msg: Message) => {
    setSelectedMessage(msg);
    if (!msg.isRead) markAsRead(msg);
  };

  const unreadCount = messages.filter(m => !m.isRead).length;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[#0f4c75]">الرسائل الواردة</h1>
          <p className="text-gray-500 text-sm mt-1">
            إجمالي: {messages.length} رسالة | غير مقروءة: {unreadCount}
          </p>
        </div>
      </div>

      {isLoading ? (
        <div className="text-center py-12">
          <div className="w-8 h-8 border-4 border-[#0f4c75] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        </div>
      ) : messages.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl shadow-sm">
          <Mail className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">لا توجد رسائل</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Messages List */}
          <div className="space-y-3">
            {messages.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).map((msg) => (
              <div
                key={msg.id}
                onClick={() => viewMessage(msg)}
                className={`bg-white rounded-xl p-4 shadow-sm cursor-pointer transition-all hover:shadow-md ${
                  !msg.isRead ? 'border-r-4 border-[#0f4c75]' : ''
                } ${selectedMessage?.id === msg.id ? 'ring-2 ring-[#0f4c75]' : ''}`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    {msg.isRead ? (
                      <MailOpen className="w-5 h-5 text-gray-400" />
                    ) : (
                      <Mail className="w-5 h-5 text-[#0f4c75]" />
                    )}
                    <div>
                      <h3 className={`text-sm ${!msg.isRead ? 'font-bold text-[#0f4c75]' : 'text-gray-700'}`}>
                        {msg.name}
                      </h3>
                      <p className="text-xs text-gray-400">{msg.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {new Date(msg.createdAt).toLocaleDateString('ar-SA')}
                    </span>
                    <button
                      onClick={(e) => { e.stopPropagation(); deleteMessage(msg.id); }}
                      className="p-1 text-red-400 hover:text-red-600 hover:bg-red-50 rounded"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <p className="text-sm font-medium text-gray-600 mt-2">{msg.subject}</p>
                <p className="text-xs text-gray-400 mt-1 line-clamp-1">{msg.message}</p>
              </div>
            ))}
          </div>

          {/* Message Detail */}
          <div>
            {selectedMessage ? (
              <div className="bg-white rounded-xl p-6 shadow-sm sticky top-20">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-bold text-[#0f4c75]">تفاصيل الرسالة</h2>
                  <button
                    onClick={() => setSelectedMessage(null)}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-gray-400">الاسم</label>
                      <p className="font-medium text-sm">{selectedMessage.name}</p>
                    </div>
                    <div>
                      <label className="text-xs text-gray-400">البريد الإلكتروني</label>
                      <p className="font-medium text-sm" dir="ltr">{selectedMessage.email}</p>
                    </div>
                    <div>
                      <label className="text-xs text-gray-400">الهاتف</label>
                      <p className="font-medium text-sm" dir="ltr">{selectedMessage.phone || '-'}</p>
                    </div>
                    <div>
                      <label className="text-xs text-gray-400">التاريخ</label>
                      <p className="font-medium text-sm">
                        {new Date(selectedMessage.createdAt).toLocaleString('ar-SA')}
                      </p>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-gray-400">الموضوع</label>
                    <p className="font-bold text-[#0f4c75]">{selectedMessage.subject}</p>
                  </div>
                  <div>
                    <label className="text-xs text-gray-400">الرسالة</label>
                    <div className="mt-2 p-4 bg-gray-50 rounded-xl">
                      <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
                        {selectedMessage.message}
                      </p>
                    </div>
                  </div>
                  <a
                    href={`mailto:${selectedMessage.email}?subject=Re: ${selectedMessage.subject}`}
                    className="btn-primary text-sm w-full justify-center"
                  >
                    الرد عبر البريد الإلكتروني
                  </a>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl p-12 shadow-sm text-center">
                <Eye className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">اختر رسالة لعرض تفاصيلها</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
