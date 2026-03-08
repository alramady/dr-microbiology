'use client';

import { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, X, Save, Search } from 'lucide-react';

export interface FieldConfig {
  name: string;
  label: string;
  type: 'text' | 'textarea' | 'select' | 'checkbox' | 'date' | 'url';
  required?: boolean;
  options?: { value: string; label: string }[];
  placeholder?: string;
  dir?: string;
}

interface AdminCRUDProps {
  collection: string;
  title: string;
  fields: FieldConfig[];
  displayFields: string[];
}

export default function AdminCRUD({ collection, title, fields, displayFields }: AdminCRUDProps) {
  const [items, setItems] = useState<Record<string, unknown>[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Record<string, unknown> | null>(null);
  const [formData, setFormData] = useState<Record<string, unknown>>({});
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    loadItems();
  }, [collection]);

  const loadItems = async () => {
    try {
      const res = await fetch(`/api/admin/${collection}`);
      if (res.ok) {
        const data = await res.json();
        setItems(data.data || []);
      }
    } catch (err) {
      console.error('Error loading items:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const openCreateForm = () => {
    const defaultData: Record<string, unknown> = {};
    fields.forEach(f => {
      if (f.type === 'checkbox') defaultData[f.name] = false;
      else defaultData[f.name] = '';
    });
    setFormData(defaultData);
    setEditingItem(null);
    setIsFormOpen(true);
  };

  const openEditForm = (item: Record<string, unknown>) => {
    setFormData({ ...item });
    setEditingItem(item);
    setIsFormOpen(true);
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      if (editingItem) {
        const res = await fetch(`/api/admin/${collection}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...formData, id: editingItem.id }),
        });
        if (res.ok) {
          await loadItems();
          setIsFormOpen(false);
        }
      } else {
        const res = await fetch(`/api/admin/${collection}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        if (res.ok) {
          await loadItems();
          setIsFormOpen(false);
        }
      }
    } catch (err) {
      console.error('Error saving:', err);
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('هل أنت متأكد من حذف هذا العنصر؟')) return;
    try {
      const res = await fetch(`/api/admin/${collection}?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        await loadItems();
      }
    } catch (err) {
      console.error('Error deleting:', err);
    }
  };

  const filteredItems = items.filter(item => {
    if (!searchQuery) return true;
    return displayFields.some(field => {
      const value = item[field];
      return typeof value === 'string' && value.toLowerCase().includes(searchQuery.toLowerCase());
    });
  });

  return (
    <div>
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[#0f4c75]">{title}</h1>
          <p className="text-gray-500 text-sm mt-1">إجمالي: {items.length} عنصر</p>
        </div>
        <button onClick={openCreateForm} className="btn-primary text-sm">
          <Plus className="w-5 h-5" />
          إضافة جديد
        </button>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
        <div className="relative">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            className="form-input pr-10"
            placeholder="بحث..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Items List */}
      {isLoading ? (
        <div className="text-center py-12">
          <div className="w-8 h-8 border-4 border-[#0f4c75] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-500">جاري التحميل...</p>
        </div>
      ) : filteredItems.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl shadow-sm">
          <p className="text-gray-500">لا توجد عناصر</p>
          <button onClick={openCreateForm} className="btn-primary text-sm mt-4">
            <Plus className="w-5 h-5" />
            إضافة أول عنصر
          </button>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>#</th>
                  {displayFields.map(field => {
                    const fieldConfig = fields.find(f => f.name === field);
                    return <th key={field}>{fieldConfig?.label || field}</th>;
                  })}
                  <th>الإجراءات</th>
                </tr>
              </thead>
              <tbody>
                {filteredItems.map((item, index) => (
                  <tr key={item.id as string}>
                    <td className="text-gray-400 text-sm">{index + 1}</td>
                    {displayFields.map(field => (
                      <td key={field} className="text-sm">
                        {typeof item[field] === 'boolean' ? (
                          <span className={`badge ${item[field] ? 'badge-success' : 'badge-warning'}`}>
                            {item[field] ? 'نعم' : 'لا'}
                          </span>
                        ) : (
                          <span className="line-clamp-2">{String(item[field] || '-')}</span>
                        )}
                      </td>
                    ))}
                    <td>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => openEditForm(item)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="تعديل"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(item.id as string)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="حذف"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-10 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4 mb-10">
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-lg font-bold text-[#0f4c75]">
                {editingItem ? 'تعديل' : 'إضافة جديد'}
              </h2>
              <button onClick={() => setIsFormOpen(false)} className="p-2 hover:bg-gray-100 rounded-lg">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
              {fields.map((field) => (
                <div key={field.name}>
                  <label className="form-label">
                    {field.label}
                    {field.required && <span className="text-red-500 mr-1">*</span>}
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea
                      rows={4}
                      className="form-input"
                      value={String(formData[field.name] || '')}
                      onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                      placeholder={field.placeholder}
                      dir={field.dir}
                      required={field.required}
                    />
                  ) : field.type === 'select' ? (
                    <select
                      className="form-input"
                      value={String(formData[field.name] || '')}
                      onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                      required={field.required}
                    >
                      <option value="">اختر...</option>
                      {field.options?.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  ) : field.type === 'checkbox' ? (
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={Boolean(formData[field.name])}
                        onChange={(e) => setFormData({ ...formData, [field.name]: e.target.checked })}
                        className="w-5 h-5 rounded border-gray-300 text-[#0f4c75] focus:ring-[#0f4c75]"
                      />
                      <span className="text-sm text-gray-600">{field.placeholder || 'تفعيل'}</span>
                    </label>
                  ) : (
                    <input
                      type={field.type === 'date' ? 'date' : field.type === 'url' ? 'url' : 'text'}
                      className="form-input"
                      value={String(formData[field.name] || '')}
                      onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                      placeholder={field.placeholder}
                      dir={field.dir}
                      required={field.required}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex items-center justify-end gap-3 p-6 border-t">
              <button onClick={() => setIsFormOpen(false)} className="btn-outline text-sm">
                إلغاء
              </button>
              <button onClick={handleSave} disabled={isSaving} className="btn-primary text-sm disabled:opacity-50">
                <Save className="w-4 h-4" />
                {isSaving ? 'جاري الحفظ...' : 'حفظ'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
