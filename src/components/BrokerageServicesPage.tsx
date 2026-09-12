import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  FileCheck2, 
  MessageCircle,
  Home,
  CheckCircle2,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import { Language, TranslationStrings } from '../types';
import { ServicesGrid } from './ServicesGrid';
import { DigitalBrokerageSection } from './DigitalBrokerageSection';
import { createWhatsAppUrl, OFFICIAL_PHONE } from '../utils/whatsapp';
import { trackViewContent } from '../utils/snapchatPixel';

interface BrokerageServicesPageProps {
  lang: Language;
  t: TranslationStrings;
  onNavigateHome: () => void;
  onNavigateApply: () => void;
}

export const BrokerageServicesPage: React.FC<BrokerageServicesPageProps> = ({
  lang,
  t,
  onNavigateHome,
  onNavigateApply
}) => {
  const isAr = lang === 'ar';
  const ArrowBackIcon = isAr ? ArrowRight : ArrowLeft;
  const ChevronIcon = isAr ? ChevronLeft : ChevronRight;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    trackViewContent();
  }, []);

  const whatsappMsg = isAr
    ? "السلام عليكم أستاذ ناصر، اطلعت على صفحة خدمات الوساطة التمويلية الشاملة وأود استشارة تفصيلية حول أفضل حل يناسبني."
    : "Hello Mr. Nasser, I viewed your comprehensive financial brokerage services page and would like detailed guidance on the best option for me.";

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white transition-colors pb-16">
      {/* Page Header / Breadcrumb Bar */}
      <div className="bg-emerald-950 text-white border-b border-emerald-800/40 relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-amber-400 rounded-full blur-[100px]"></div>
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-emerald-500 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300 mb-6">
            <button 
              onClick={onNavigateHome}
              className="hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Home className="w-3.5 h-3.5" />
              <span>{isAr ? 'الرئيسية' : 'Home'}</span>
            </button>
            <ChevronIcon className="w-3 h-3 text-emerald-400/60" />
            <span className="text-amber-300">
              {isAr ? 'حلول وخدمات الوساطة المالية الشاملة' : 'Comprehensive Financial Brokerage Services'}
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/90 text-emerald-300 text-xs font-bold border border-emerald-700/50">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>{isAr ? 'قسم مستقل ومعتمد للوساطة الرقمية' : 'Dedicated Independent Brokerage Section'}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                {isAr ? 'حلول وخدمات الوساطة التمويلية الشاملة' : 'Comprehensive Financial Brokerage Solutions'}
              </h1>

              <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed max-w-2xl">
                {isAr
                  ? 'ملف متكامل يستعرض كافة برامج وحلول التمويل الشخصي والوساطة المالية المعتمدة عبر الجهات المرخصة من البنك المركزي السعودي (ساما) بمبالغ تصل حتى 500,000 ريال وبدون تحويل راتب.'
                  : 'A dedicated directory detailing all personal financing and digital brokerage packages via SAMA-licensed creditors up to 500,000 SAR without salary transfer.'}
              </p>
            </div>

            {/* Quick Action to return or consult */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 shrink-0">
              <button
                onClick={onNavigateHome}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-neutral-900/80 hover:bg-neutral-800 text-white font-bold text-xs border border-emerald-700/40 transition-all cursor-pointer shadow-xs"
              >
                <ArrowBackIcon className="w-4 h-4 text-amber-400" />
                <span>{isAr ? 'العودة للصفحة الرئيسية' : 'Back to Home'}</span>
              </button>

              <button
                onClick={onNavigateApply}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-neutral-950 font-black text-xs shadow-md transition-all cursor-pointer"
              >
                <FileCheck2 className="w-4 h-4 text-neutral-950" />
                <span>{isAr ? 'طلب استشارة فورية' : 'Request Instant Consultation'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Services Grid */}
      <div className="relative">
        <ServicesGrid lang={lang} t={t} />
      </div>

      {/* Detailed Digital Brokerage Pillars */}
      <div className="relative border-t border-neutral-200 dark:border-neutral-800">
        <DigitalBrokerageSection lang={lang} t={t} />
      </div>

      {/* Bottom Conversion Bar */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-emerald-900 to-neutral-950 border-2 border-amber-400/40 text-white text-center sm:text-start flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 max-w-xl">
            <span className="inline-block px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold">
              {isAr ? 'استشارة مجانية بدون رسوم مسبقة' : 'Free Advisory • Zero Upfront Fees'}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              {isAr ? 'هل تبحث عن أفضل عرض تمويلي مناسب لوضعك؟' : 'Looking for the best financing solution for your profile?'}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300">
              {isAr 
                ? 'تواصل مباشرة مع المستشار ناصر أبو عبدالله لبدء مراجعة خياراتك التمويلية وربطك بالجهة المعتمدة فوراً.'
                : 'Connect directly with advisor Nasser Abu Abdullah to review your financing options and link with certified creditors.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={onNavigateApply}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-neutral-950 font-black text-xs sm:text-sm shadow-md transition-all cursor-pointer text-center"
            >
              {isAr ? 'تعبئة طلب الاستشارة' : 'Fill Consultation Form'}
            </button>
            <a
              href={createWhatsAppUrl(whatsappMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all text-center"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>{isAr ? 'محادثة واتساب' : 'WhatsApp'}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
