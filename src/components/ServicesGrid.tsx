import React from 'react';
import { 
  CreditCard, 
  Building2, 
  ShieldCheck, 
  PlusCircle, 
  Layers, 
  ArrowRight, 
  ArrowLeft,
  MessageCircle,
  Sparkles
} from 'lucide-react';
import { Language, TranslationStrings } from '../types';
import { createWhatsAppUrl } from '../utils/whatsapp';
import { logWhatsAppClick } from '../utils/snapchatPixel';

interface ServicesGridProps {
  lang: Language;
  t: TranslationStrings;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ lang, t }) => {
  const isRtl = lang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const services = [
    {
      id: 'personal',
      title: t.service1Title,
      desc: t.service1Desc,
      icon: CreditCard,
      tagAr: 'الأكثر طلباً',
      tagEn: 'Most Popular',
      color: 'emerald',
      features: [
        lang === 'ar' ? 'مبالغ من 20,000 إلى 500,000 ريال' : '20,000 - 500,000 SAR',
        lang === 'ar' ? 'بدون تحويل راتب' : 'No Salary Transfer Required',
        lang === 'ar' ? 'أقساط ميسرة من 3 إلى 60 شهراً' : 'Flexible 3 - 60 Months Tenure',
      ],
      whatsappMsg: lang === 'ar'
        ? "السلام عليكم أستاذ ناصر، أود التقديم على خدمة التمويل الشخصي المباشر بدون تحويل راتب."
        : "Hello Mr. Nasser, I would like to apply for Direct Personal Finance without salary transfer."
    },
    {
      id: 'employee',
      title: t.service2Title,
      desc: t.service2Desc,
      icon: Building2,
      tagAr: 'هامش تنافسي',
      tagEn: 'Competitive Margin',
      color: 'amber',
      features: [
        lang === 'ar' ? 'القطاع الحكومي والمدني والعسكري' : 'Government, Civil & Military',
        lang === 'ar' ? 'الشركات الخاصة المعتمدة وغير المعتمدة' : 'Accredited & Private Firms',
        lang === 'ar' ? 'سرعة في استكمال الإجراءات والموافقة' : 'Swift Processing & Approvals',
      ],
      whatsappMsg: lang === 'ar'
        ? "السلام عليكم أستاذ ناصر، أود الاستفسار عن تمويل الموظفين (حكومي/خاص) والمزايا المتاحة لجهتي."
        : "Hello Mr. Nasser, I would like to inquire about Employee Financing options."
    },
    {
      id: 'settlement',
      title: t.service3Title,
      desc: t.service3Desc,
      icon: ShieldCheck,
      tagAr: 'حلول التزامات',
      tagEn: 'Obligation Solutions',
      color: 'emerald',
      features: [
        lang === 'ar' ? 'تسوية وسداد التعثرات البنكية' : 'Settling Bank Defaults',
        lang === 'ar' ? 'تحديث وتعديل سجل سمة الائتماني' : 'SIMAH Credit Score Adjustment',
        lang === 'ar' ? 'معالجة إيقاف الخدمات وفق الضوابط' : 'Lifting Service Suspensions',
      ],
      whatsappMsg: lang === 'ar'
        ? "السلام عليكم أستاذ ناصر، لدي التزامات أو تعثرات في سمة وأرغب في استشارة لسدادها وتأهيلي للتمويل."
        : "Hello Mr. Nasser, I need consultation regarding SIMAH debt settlement and clearance."
    },
    {
      id: 'topup',
      title: t.service4Title,
      desc: t.service4Desc,
      icon: PlusCircle,
      tagAr: 'تمويل إضافي',
      tagEn: 'Top-Up Loan',
      color: 'amber',
      features: [
        lang === 'ar' ? 'لا يشترط خلو السجل من تمويل قائم' : 'Active Prior Loans Allowed',
        lang === 'ar' ? 'استغلال هامش الاستقطاع المتبقي' : 'Max Out Permissible DBR',
        lang === 'ar' ? 'سيولة نقدية فورية سريعة' : 'Instant Extra Liquidity',
      ],
      whatsappMsg: lang === 'ar'
        ? "السلام عليكم أستاذ ناصر، لدي تمويل قائم وأرغب في استخراج تمويل إضافي أو تكميلي."
        : "Hello Mr. Nasser, I have an existing loan and would like to apply for an additional top-up loan."
    },
    {
      id: 'consolidation',
      title: t.service5Title,
      desc: t.service5Desc,
      icon: Layers,
      tagAr: 'تخفيض الأقساط',
      tagEn: 'Lower Installments',
      color: 'emerald',
      features: [
        lang === 'ar' ? 'دمج القروض والبطاقات في قسط واحد' : 'Merge Loans & Cards in 1 Payment',
        lang === 'ar' ? 'تخفيض عبء الديون الشهرية' : 'Substantial Monthly Relief',
        lang === 'ar' ? 'إعادة جدولة بأرباح أوفر وأطول مدة' : 'Restructure Over Up to 5 Years',
      ],
      whatsappMsg: lang === 'ar'
        ? "السلام عليكم أستاذ ناصر، أود الاستفسار عن توحيد الالتزامات والأقساط في قسط واحد مخفض."
        : "Hello Mr. Nasser, I would like to inquire about debt consolidation into a single installment."
    }
  ];

  return (
    <section id="services" className="py-20 bg-neutral-50 dark:bg-neutral-900/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold border border-emerald-300/40">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.navServices}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 dark:text-white tracking-tight">
            {t.servicesTitle}
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
            {t.servicesSubtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.id}
                className={`bg-white dark:bg-neutral-950 rounded-3xl p-7 border border-neutral-200 dark:border-neutral-800 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group ${
                  idx === 0 ? 'md:col-span-2 lg:col-span-1 ring-2 ring-emerald-500/20' : ''
                }`}
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60">
                      {lang === 'ar' ? srv.tagAr : srv.tagEn}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-neutral-900 dark:text-white">
                      {srv.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-neutral-100 dark:border-neutral-800/60">
                    {srv.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-neutral-700 dark:text-neutral-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-100 dark:border-neutral-800/60">
                  <a
                    href={createWhatsAppUrl(srv.whatsappMsg)}
                    onClick={() => {
                      logWhatsAppClick(`service_card_${srv.id}`);
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-neutral-100 dark:bg-neutral-900 hover:bg-emerald-600 dark:hover:bg-emerald-600 hover:text-white dark:hover:text-white text-neutral-800 dark:text-neutral-200 text-xs font-black transition-all group-hover:bg-emerald-600 group-hover:text-white shadow-xs cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{lang === 'ar' ? 'طلب الخدمة عبر واتساب' : 'Request via WhatsApp'}</span>
                    <ArrowIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
