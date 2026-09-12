import React from 'react';
import { ClipboardCheck, UserCheck, FileCheck, Banknote, ShieldCheck, ArrowLeft, ArrowRight } from 'lucide-react';
import { Language, TranslationStrings } from '../types';

interface HowItWorksTimelineProps {
  lang: Language;
  t: TranslationStrings;
}

export const HowItWorksTimeline: React.FC<HowItWorksTimelineProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  const steps = [
    {
      num: '01',
      icon: ClipboardCheck,
      titleAr: 'تعبئة الطلب المبدئي',
      titleEn: 'Quick Initial Application',
      timeAr: 'دقيقة واحدة',
      timeEn: '1 Minute',
      descAr: 'حدّد مبلغ التمويل المطلوب وبياناتك الأساسية (الاسم، الجوال، جهة العمل) دون الحاجة لأي مستندات معقدة.',
      descEn: 'Select your financing amount and basic info (Name, Phone, Sector) with zero complicated paperwork.',
    },
    {
      num: '02',
      icon: UserCheck,
      titleAr: 'دراسة الأهلية والتوجيه',
      titleEn: 'Advisory & Eligibility Review',
      timeAr: 'خلال 10-15 دقيقة',
      timeEn: 'Within 10-15 Mins',
      descAr: 'يتواصل معك المستشار المالي ناصر أبو عبدالله لدراسة حالتك واختيار العرض التمويلي الأنسب بدون تحويل راتب وبأقل هامش ربح.',
      descEn: 'Advisor Nasser reviews your request to match you with top SAMA-licensed offers without salary transfer.',
    },
    {
      num: '03',
      icon: FileCheck,
      titleAr: 'الموافقة والعقد الرقمي',
      titleEn: 'Digital Approval & Contract',
      timeAr: 'نفس اليوم',
      timeEn: 'Same Day',
      descAr: 'إصدار الموافقة الائتمانية وتوقيع العقد التمويلي الموحد إلكترونياً بأمان تام وشفافية كاملة عبر الجهة المعتمدة.',
      descEn: 'Instant credit decision and secure electronic contract signing via the official licensed financier.',
    },
    {
      num: '04',
      icon: Banknote,
      titleAr: 'إيداع التمويل في حسابك',
      titleEn: 'Direct Fund Disbursement',
      timeAr: 'إيداع فوري',
      timeEn: 'Direct Deposit',
      descAr: 'تحويل مبلغ التمويل مباشرة إلى حسابك البنكي، مع التزامنا بميثاق صفر رسوم مسبقة أو مصاريف استشارية.',
      descEn: 'Funds deposited straight to your bank account with zero upfront advisory or administrative fees.',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 bg-neutral-100/70 dark:bg-neutral-900/40 border-t border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 text-xs font-bold">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>{isAr ? 'مسار تمويلي ميسر وسريع' : 'Simple 4-Step Process'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 dark:text-white tracking-tight">
            {isAr ? 'كيف تحصل على التمويل في 4 خطوات بسيطة؟' : 'How to Obtain Your Finance in 4 Easy Steps'}
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto">
            {isAr
              ? 'إجراءات رقمية واضحة ومباشرة دون الحاجة لزيارة الفروع أو الانتظار الطويل.'
              : 'Streamlined digital steps designed for maximum convenience and speed.'}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative rounded-3xl p-6 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 hover:border-emerald-500/50 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl font-black text-neutral-300 dark:text-neutral-700 group-hover:text-emerald-500 transition-colors">
                      {step.num}
                    </span>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                      {isAr ? step.timeAr : step.timeEn}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 flex items-center justify-center border border-emerald-300/40">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title & Desc */}
                  <div className="space-y-1.5">
                    <h3 className="text-base font-black text-neutral-900 dark:text-white">
                      {isAr ? step.titleAr : step.titleEn}
                    </h3>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {isAr ? step.descAr : step.descEn}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
