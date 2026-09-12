import React from 'react';
import { 
  ShieldCheck, 
  ArrowLeft, 
  ArrowRight, 
  Sparkles, 
  Building, 
  Briefcase, 
  CreditCard, 
  FileCheck2, 
  RefreshCw,
  Coins,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import { Language, TranslationStrings } from '../types';

interface ServicesTeaserCardProps {
  lang: Language;
  t: TranslationStrings;
  onViewAllServices: () => void;
}

export const ServicesTeaserCard: React.FC<ServicesTeaserCardProps> = ({
  lang,
  t,
  onViewAllServices
}) => {
  const isAr = lang === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const quickServices = [
    {
      icon: CreditCard,
      titleAr: 'تمويل شخصي مباشر',
      titleEn: 'Direct Personal Finance',
      tagAr: 'حتى 500 ألف ريال بدون تحويل راتب',
      tagEn: 'Up to 500k without transfer',
    },
    {
      icon: Building,
      titleAr: 'القطاع الحكومي والمدني',
      titleEn: 'Government & Civil Sector',
      tagAr: 'أعلى مبالغ وسداد حتى 60 شهراً',
      tagEn: 'Top amounts & 60-month tenure',
    },
    {
      icon: Briefcase,
      titleAr: 'القطاع الخاص والشركات',
      titleEn: 'Private Sector & Corporates',
      tagAr: 'للشركات المعتمدة وغير المعتمدة',
      tagEn: 'Approved & non-approved firms',
    },
    {
      icon: RefreshCw,
      titleAr: 'سداد المتعثرات وتحديث سمة',
      titleEn: 'SIMAH Settlement Guidance',
      tagAr: 'توجيه لتحسين السجل الائتماني',
      tagEn: 'Credit score recovery advice',
    },
    {
      icon: Coins,
      titleAr: 'التمويل الإضافي والتكميلي',
      titleEn: 'Additional Supplementary Loan',
      tagAr: 'سيولة إضافية فوق التمويل القائم',
      tagEn: 'Extra liquidity on existing loan',
    },
    {
      icon: ShieldCheck,
      titleAr: 'توحيد الالتزامات والأقساط',
      titleEn: 'Debt Consolidation',
      tagAr: 'قسط شهري موحد وميسر',
      tagEn: 'Single unified monthly installment',
    },
  ];

  return (
    <section className="py-12 bg-neutral-50 dark:bg-neutral-900/40 border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-6 sm:p-10 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Text & Header */}
          <div className="space-y-4 max-w-xl text-center lg:text-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold border border-emerald-300/40">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>{isAr ? 'برامج التمويل المتكاملة' : 'Integrated Financing Programs'}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 dark:text-white tracking-tight">
              {isAr ? 'حلول وخدمات الوساطة المالية الشاملة' : 'Comprehensive Financial Brokerage Solutions'}
            </h2>

            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {isAr
                ? 'تم عزل وفصل كافة تفاصيل البرامج التمويلية في قسم مستقل تماماً لتسهيل التصفح وتقليل الإطالة. يمكنك استعراض كافة الشروط والمزايا والبرامج بضغطة زر واحدة.'
                : 'All detailed financing programs have been isolated into a dedicated standalone section for a seamless, fast browsing experience. Explore all criteria and options with one click.'}
            </p>

            {/* Quick Action Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={onViewAllServices}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-700 hover:bg-emerald-600 text-white font-black text-xs sm:text-sm shadow-md transition-all active:scale-[0.98] cursor-pointer"
              >
                <span>{isAr ? 'استعراض كافة حلول وخدمات الوساطة في صفحة مستقلة' : 'Explore All Brokerage Services in Dedicated Page'}</span>
                <ArrowIcon className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Compact 6-Pill Grid */}
          <div className="w-full lg:max-w-lg grid grid-cols-1 sm:grid-cols-2 gap-3">
            {quickServices.map((service, idx) => {
              const ServiceIcon = service.icon;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={onViewAllServices}
                  className="p-3.5 rounded-2xl bg-neutral-50 dark:bg-neutral-800/70 border border-neutral-200/80 dark:border-neutral-700/80 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:bg-emerald-50/50 dark:hover:bg-neutral-800 transition-all text-start group cursor-pointer flex items-center gap-3"
                >
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-950 border border-emerald-300/60 dark:border-emerald-800 flex items-center justify-center text-emerald-700 dark:text-emerald-400 group-hover:scale-105 transition-transform shrink-0">
                    <ServiceIcon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xs font-bold text-neutral-900 dark:text-white truncate group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors">
                      {isAr ? service.titleAr : service.titleEn}
                    </h3>
                    <p className="text-[10px] text-neutral-500 dark:text-neutral-400 truncate">
                      {isAr ? service.tagAr : service.tagEn}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
