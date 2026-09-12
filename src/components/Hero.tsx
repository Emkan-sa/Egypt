import React from 'react';
import { 
  ShieldCheck, 
  MessageCircle, 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  CreditCard, 
  Building2, 
  Phone,
  FileCheck2
} from 'lucide-react';
import { Language, TranslationStrings } from '../types';
import { OFFICIAL_PHONE, DISPLAY_PHONE, createWhatsAppUrl } from '../utils/whatsapp';
import { logWhatsAppClick } from '../utils/snapchatPixel';

interface HeroProps {
  lang: Language;
  t: TranslationStrings;
}

export const Hero: React.FC<HeroProps> = ({ lang, t }) => {
  const isRtl = lang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const defaultWhatsappMsg = lang === 'ar'
    ? "السلام عليكم أستاذ ناصر، اطلعت على خدمات التمويل الشخصي حتى 500 ألف ريال بدون تحويل راتب وأود الاستفسار عن الأهلية وإجراءات التقديم."
    : "Hello Mr. Nasser, I saw the personal financing services up to 500k SAR without salary transfer and would like to inquire about eligibility and process.";

  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-emerald-900 to-neutral-900 text-white pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Background Decorative Radial Glows & Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-1/4 w-[600px] height-[600px] bg-emerald-500 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-10 left-10 w-[500px] height-[500px] bg-amber-500 rounded-full blur-[160px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Trust Ribbon */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-8 border-b border-emerald-800/60 mb-10 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-emerald-200">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="font-bold text-amber-300">{t.heroOfficialBadge}</span>
            <span className="hidden md:inline">• {t.heroTrustText}</span>
          </div>
          <div className="flex items-center gap-3">
            <a 
              href={`tel:${OFFICIAL_PHONE}`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-200 hover:text-white transition-colors bg-emerald-800/60 hover:bg-emerald-800 px-3.5 py-1.5 rounded-full border border-emerald-700/50"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{DISPLAY_PHONE}</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Copy (Left on LTR, Right on RTL) */}
          <div className="lg:col-span-7 space-y-7">
            {/* Kicker Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-bold">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>{t.heroKicker}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black tracking-tight leading-tight sm:leading-none text-white">
              {t.heroHeadline}
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-emerald-300">
                {t.heroHeadlineSpan}
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed max-w-2xl font-normal">
              {t.heroDescription}
            </p>

            {/* 4 Pillars Grid Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-emerald-900/60 border border-emerald-700/40 backdrop-blur-xs">
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-300 shrink-0">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{t.heroFeature1}</h4>
                  <p className="text-xs text-emerald-300/80">{lang === 'ar' ? 'مرونة مادية عالية' : 'High liquidity'}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-emerald-900/60 border border-emerald-700/40 backdrop-blur-xs">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-300 shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{t.heroFeature2}</h4>
                  <p className="text-xs text-emerald-300/80">{lang === 'ar' ? 'ابق على بنكك الحالي' : 'Keep your current bank'}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-emerald-900/60 border border-emerald-700/40 backdrop-blur-xs">
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-300 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{t.heroFeature3}</h4>
                  <p className="text-xs text-emerald-300/80">{lang === 'ar' ? 'أقساط شهرية ميسرة' : 'Affordable schedule'}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-emerald-900/60 border border-emerald-700/40 backdrop-blur-xs">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-300 shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{t.heroFeature4}</h4>
                  <p className="text-xs text-emerald-300/80">{lang === 'ar' ? 'تسهيل كافة الشروط' : 'Simplified clearance'}</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <a
                id="hero-primary-whatsapp-cta"
                href={createWhatsAppUrl(defaultWhatsappMsg)}
                onClick={() => logWhatsAppClick('hero_primary_cta')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-black text-base shadow-lg shadow-emerald-950/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                <span>{t.whatsappNow}</span>
                <ArrowIcon className="w-5 h-5" />
              </a>

              <a
                href="#apply"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-bold text-base border border-white/20 hover:border-amber-400/50 transition-all backdrop-blur-xs cursor-pointer"
              >
                <FileCheck2 className="w-5 h-5 text-amber-300" />
                <span>{t.applyNow}</span>
              </a>
            </div>

            {/* Reassurance Badge */}
            <div className="pt-2 flex items-center gap-2 text-xs text-emerald-300/90 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{lang === 'ar' ? 'حلول تمويلية متوافقة ومرخصة عبر القنوات الرسمية المعتمدة' : 'Compliant financing via official licensed channels'}</span>
            </div>
          </div>

          {/* Right Hero Conversion Card: Integrated Poster Visual & Official Logo */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden bg-neutral-900/95 border-2 border-amber-400/40 shadow-2xl shadow-emerald-950/70 backdrop-blur-md group">
              {/* Top Visual Poster Header */}
              <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-emerald-950">
                <img 
                  src="/assets/poster.webp" 
                  alt="Nasser Abu Abdullah Financing Visual" 
                  width={600}
                  height={375}
                  decoding="async"
                  loading="eager"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                {/* Gradient Overlays for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/30 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/40 to-transparent"></div>

                {/* Floating Official Logo Badge */}
                <div className="absolute top-4 start-4 flex items-center gap-2.5 p-1.5 pe-3 rounded-2xl bg-neutral-900/90 border border-amber-400/50 backdrop-blur-md shadow-lg">
                  <div className="w-9 h-9 rounded-xl overflow-hidden bg-emerald-950 border border-amber-400/60 shrink-0">
                    <img 
                      src="/assets/logo.webp" 
                      alt="NA Logo" 
                      width={36}
                      height={36}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover" 
                      referrerPolicy="no-referrer" 
                    />
                  </div>
                  <div>
                    <span className="block text-xs font-black text-amber-300 tracking-tight leading-tight">
                      {lang === 'ar' ? 'ناصر أبو عبدالله' : 'Nasser Abu Abdullah'}
                    </span>
                    <span className="block text-[10px] text-neutral-300 font-medium leading-tight">
                      {lang === 'ar' ? 'وسيط تمويلي رقمي' : 'Digital Finance Broker'}
                    </span>
                  </div>
                </div>

                {/* Status Pill */}
                <div className="absolute top-4 end-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-extrabold bg-emerald-500/90 text-white shadow-md border border-emerald-400/40 backdrop-blur-xs flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                    <span>{lang === 'ar' ? 'متاح الآن' : 'Available Now'}</span>
                  </span>
                </div>

                {/* Poster Caption Headline */}
                <div className="absolute bottom-3 start-4 end-4">
                  <span className="inline-block px-2.5 py-0.5 rounded-md bg-amber-400/90 text-neutral-950 text-[11px] font-black uppercase tracking-wider mb-1">
                    {lang === 'ar' ? 'فرص أكبر لمستقبلك' : 'Greater Opportunities'}
                  </span>
                  <h3 className="text-lg font-black text-white drop-shadow-md">
                    {lang === 'ar' ? 'تمويلك الشخصي المباشر حتى 500 ألف ريال' : 'Personal Financing up to 500,000 SAR'}
                  </h3>
                </div>
              </div>

              {/* Card Body & Financing Parameters */}
              <div className="p-6 sm:p-7 space-y-5">
                {/* Highlighted Metric Grid */}
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="p-3 rounded-2xl bg-neutral-800/80 border border-neutral-700">
                    <p className="text-[11px] text-neutral-400">{lang === 'ar' ? 'مبلغ التمويل يصل إلى' : 'Financing Up To'}</p>
                    <p className="text-xl sm:text-2xl font-black text-amber-400 font-mono mt-0.5">
                      500,000 <span className="text-xs font-bold text-white">{lang === 'ar' ? 'ريال' : 'SAR'}</span>
                    </p>
                  </div>

                  <div className="p-3 rounded-2xl bg-neutral-800/80 border border-neutral-700">
                    <p className="text-[11px] text-neutral-400">{lang === 'ar' ? 'تحويل الراتب' : 'Salary Transfer'}</p>
                    <p className="text-base sm:text-lg font-black text-emerald-400 mt-1">
                      {lang === 'ar' ? 'بدون تحويل' : 'Not Required'}
                    </p>
                  </div>
                </div>

                {/* Quick Parameters List */}
                <div className="space-y-2 py-2 border-t border-b border-neutral-800 text-xs sm:text-sm">
                  <div className="flex items-center justify-between py-1 text-neutral-300">
                    <span>{lang === 'ar' ? 'فترة السداد المرنة:' : 'Repayment Tenure:'}</span>
                    <span className="font-bold text-white font-mono">3 – 60 {lang === 'ar' ? 'شهراً' : 'Months'}</span>
                  </div>
                  <div className="flex items-center justify-between py-1 text-neutral-300">
                    <span>{lang === 'ar' ? 'تمويل قائم مسبقاً:' : 'Existing Prior Loan:'}</span>
                    <span className="font-bold text-emerald-400">{lang === 'ar' ? 'لا يشترط وجوده' : 'Not Required'}</span>
                  </div>
                  <div className="flex items-center justify-between py-1 text-neutral-300">
                    <span>{lang === 'ar' ? 'القطاعات المشمولة:' : 'Eligible Sectors:'}</span>
                    <span className="font-bold text-white">{lang === 'ar' ? 'حكومي • شبه حكومي • خاص' : 'Gov • Semi-Gov • Private'}</span>
                  </div>
                </div>

                {/* Direct Actions */}
                <div className="space-y-2.5 pt-1">
                  <a
                    href="#apply"
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-neutral-950 font-black text-sm shadow-md transition-all text-center"
                  >
                    <FileCheck2 className="w-4 h-4 text-neutral-950" />
                    <span>{t.applyNow}</span>
                  </a>

                  <a
                    href={createWhatsAppUrl(defaultWhatsappMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 font-bold text-xs border border-emerald-500/30 transition-all text-center"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>{lang === 'ar' ? 'محادثة فورية مع المستشار عبر واتساب' : 'Direct Advisor WhatsApp Chat'}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

