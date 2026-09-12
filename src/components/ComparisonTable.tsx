import React from 'react';
import { Check, X, ShieldCheck, Sparkles, Building2 } from 'lucide-react';
import { Language, TranslationStrings } from '../types';

interface ComparisonTableProps {
  lang: Language;
  t: TranslationStrings;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  const rows = [
    {
      featureAr: 'اشتراط تحويل الراتب وتثبيته',
      featureEn: 'Mandatory Salary Transfer',
      traditionalAr: 'شرط إلزامي في أغلب البنوك',
      traditionalEn: 'Mandatory in most banks',
      brokerageAr: 'متاح بالكامل بدون تحويل راتب',
      brokerageEn: 'Available without salary transfer',
      brokeragePositive: true,
    },
    {
      featureAr: 'سرعة الاستجابة والتوجيه المبدئي',
      featureEn: 'Response & Assessment Speed',
      traditionalAr: 'من 3 إلى 7 أيام عمل',
      traditionalEn: '3 to 7 working days',
      brokerageAr: 'خلال 10 إلى 15 دقيقة مباشرة',
      brokerageEn: 'Within 10 to 15 minutes',
      brokeragePositive: true,
    },
    {
      featureAr: 'التعامل مع الالتزامات والتعثرات القائمة',
      featureEn: 'Handling Active SIMAH Dues',
      traditionalAr: 'رفض فوري وصارم عند وجود تعثر',
      traditionalEn: 'Immediate rejection if listed in SIMAH',
      brokerageAr: 'حلول متخصصة لسداد المتعثرات وتوحيد الأقساط',
      brokerageEn: 'Custom debt settlement & consolidation',
      brokeragePositive: true,
    },
    {
      featureAr: 'خيارات جهات التمويل المتاحة',
      featureEn: 'Financing Options & Lenders',
      traditionalAr: 'بنك واحد فقط بعرض وحيد',
      traditionalEn: 'Single bank with fixed terms',
      brokerageAr: 'مقارنة عروض متعددة من جهات مرخصة من ساما',
      brokerageEn: 'Comparison of multiple SAMA-licensed firms',
      brokeragePositive: true,
    },
    {
      featureAr: 'رسوم الاستشارة والدراسة المسبقة',
      featureEn: 'Upfront Advisory Fees',
      traditionalAr: 'رسوم إدارية مقتطعة مقدماً',
      traditionalEn: 'Upfront administrative charges',
      brokerageAr: 'صفر رسوم مسبقة (استشارة مجانية 100%)',
      brokerageEn: 'Zero advance fees (100% Free Consultation)',
      brokeragePositive: true,
    },
  ];

  return (
    <section id="comparison" className="py-14 bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 text-xs font-bold">
            <Building2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>{isAr ? 'مقارنة الحلول التمويلية' : 'Financing Solutions Comparison'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 dark:text-white tracking-tight">
            {isAr ? 'لماذا يفضل العملاء حلول وساطتنا التمويلية؟' : 'Why Clients Prefer Our Financing Brokerage Solutions?'}
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto">
            {isAr
              ? 'مقارنة شفافة توضح الفروقات الجوهرية بين التمويل التقليدي والوساطة الرقمية المباشرة.'
              : 'A transparent comparison showing the core advantages of direct digital brokerage.'}
          </p>
        </div>

        {/* Comparison Table Container */}
        <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 overflow-hidden shadow-md">
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-white font-black text-xs sm:text-sm py-4 px-4 sm:px-6 border-b border-neutral-200 dark:border-neutral-800">
            <div className="col-span-5 sm:col-span-4 flex items-center">
              {isAr ? 'المعيار / الميزة' : 'Feature / Criterion'}
            </div>
            <div className="col-span-3 sm:col-span-4 text-center text-neutral-500 dark:text-neutral-400 font-bold">
              {isAr ? 'التمويل البنكي التقليدي' : 'Traditional Bank Finance'}
            </div>
            <div className="col-span-4 sm:col-span-4 text-center text-emerald-700 dark:text-emerald-400 font-black flex items-center justify-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isAr ? 'وساطة ناصر أبو عبدالله' : 'Nasser Brokerage'}</span>
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-neutral-200 dark:divide-neutral-800 bg-white dark:bg-neutral-950 text-xs sm:text-sm">
            {rows.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 py-4 px-4 sm:px-6 items-center hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-colors"
              >
                {/* Feature Name */}
                <div className="col-span-5 sm:col-span-4 font-bold text-neutral-900 dark:text-white pe-2">
                  {isAr ? row.featureAr : row.featureEn}
                </div>

                {/* Traditional Bank */}
                <div className="col-span-3 sm:col-span-4 text-center text-neutral-500 dark:text-neutral-400 text-xs px-1">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-1">
                    <X className="w-3.5 h-3.5 text-neutral-400 shrink-0 hidden sm:inline" />
                    <span>{isAr ? row.traditionalAr : row.traditionalEn}</span>
                  </div>
                </div>

                {/* Our Brokerage */}
                <div className="col-span-4 sm:col-span-4 text-center text-emerald-800 dark:text-emerald-300 font-bold text-xs px-1">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/60 dark:border-emerald-800/40">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 hidden sm:inline" />
                    <span>{isAr ? row.brokerageAr : row.brokerageEn}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
