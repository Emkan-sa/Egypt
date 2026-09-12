import React from 'react';
import { 
  ShieldCheck, 
  Handshake, 
  Banknote, 
  CheckCircle2, 
  Clock, 
  Lock, 
  ArrowLeft, 
  ArrowRight,
  MessageCircle,
  FileCheck2,
  Sparkles
} from 'lucide-react';
import { Language, TranslationStrings } from '../types';
import { OFFICIAL_PHONE, DISPLAY_PHONE, createWhatsAppUrl } from '../utils/whatsapp';

interface DigitalBrokerageSectionProps {
  lang: Language;
  t: TranslationStrings;
}

export const DigitalBrokerageSection: React.FC<DigitalBrokerageSectionProps> = ({ lang, t }) => {
  const isRtl = lang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const features = [
    {
      icon: Handshake,
      titleAr: "وساطة رقمية مستقلة ومعتمدة",
      titleEn: "Certified Independent Brokerage",
      descAr: "نعمل كحلقة وصل وتوجيه استشاري مباشر لربطك بالجهات التمويلية والشركات المرخصة رسمياً من البنك المركزي السعودي (ساما) لاختيار أفضل حلول التمويل المناسبة لوضعك.",
      descEn: "We act as an independent digital liaison connecting you directly with SAMA-licensed financing companies to pinpoint optimal, compliant credit solutions tailored to your profile.",
      highlightAr: "ربط رقمي مباشر",
      highlightEn: "Direct Digital Link",
    },
    {
      icon: Banknote,
      titleAr: "صفر رسوم أو أتعاب مسبقة",
      titleEn: "Strictly Zero Upfront Fees",
      descAr: "لا نتقاضى أو نطلب أي مبالغ نقدية، أو أتعاب استشارة، أو رسوم مسبقة من العملاء نهائياً تحت أي مسمى. الرسوم الإدارية الرسمية تخصم فقط من جهة التمويل المعتمدة وفق الأنظمة.",
      descEn: "We strictly never charge upfront advisory fees or advance retainer payments under any circumstance. Official fees are handled exclusively by licensed creditors at contract execution.",
      highlightAr: "شفافية مطلقة 100%",
      highlightEn: "100% Transparency",
    },
    {
      icon: Clock,
      titleAr: "إجراءات سريعة وسداد مرن",
      titleEn: "Swift Processing & Flexible Tenure",
      descAr: "متابعة مستمرة لطلبك واستشارات استرشادية لتحديد فترة السداد الملائمة (من 3 إلى 60 شهراً) بمبالغ تصل حتى 500,000 ريال بدون اشتراط تحويل الراتب.",
      descEn: "Continuous tracking and expert guidance to secure flexible repayment schedules (3 to 60 months) with financing amounts up to 500,000 SAR without requiring salary transfer.",
      highlightAr: "من 3 إلى 60 شهراً",
      highlightEn: "3 to 60 Months",
    },
    {
      icon: Lock,
      titleAr: "حماية البيانات والسرية التامة",
      titleEn: "Data Privacy & Absolute Security",
      descAr: "معلوماتك الشخصية تُعامل بأعلى درجات السرية والأمان الرقمي بما يمتثل لنظام حماية البيانات الشخصية السعودي (PDPL) ولا يتم استخدامها إلا لغرض دراسة الأهلية التمويلية فقط.",
      descEn: "Your personal information is handled with uncompromising confidentiality in accordance with the Saudi Personal Data Protection Law (PDPL), solely for financing assessment.",
      highlightAr: "امتثال لنظام PDPL",
      highlightEn: "PDPL Compliant",
    }
  ];

  const whatsappMsg = lang === 'ar'
    ? "السلام عليكم أستاذ ناصر، أود استشارة ووساطة تمويلية للتقديم على تمويل شخصي بدون تحويل راتب."
    : "Hello Mr. Nasser, I would like financial brokerage consultation for personal financing without salary transfer.";

  return (
    <section id="brokerage" className="py-20 bg-white dark:bg-neutral-950 transition-colors border-t border-neutral-200/80 dark:border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold border border-emerald-300/40">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'الوساطة التمويلية الرقمية' : 'Digital Financial Brokerage'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 dark:text-white tracking-tight">
            {lang === 'ar' ? 'وساطة مالية رقمية موثوقة وميسّرة' : 'Trusted & Seamless Digital Brokerage'}
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {lang === 'ar' 
              ? 'نضع خبرتنا بين يديك لإرشادك نحو الحلول التمويلية الأنسب من الجهات التمويلية المرخصة والمعتمدة في المملكة العربية السعودية بكل وضوح وسرعة.'
              : 'Empowering you with guidance toward the most suitable financing packages from SAMA-licensed institutions across Saudi Arabia.'}
          </p>
        </div>

        {/* 4 Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-neutral-50 dark:bg-neutral-900/60 rounded-3xl p-8 border border-neutral-200 dark:border-neutral-800 hover:border-emerald-500/40 dark:hover:border-emerald-500/40 transition-all hover:shadow-md flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center text-emerald-700 dark:text-emerald-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-950/50 text-amber-800 dark:text-amber-300 border border-amber-300/40">
                      {lang === 'ar' ? feat.highlightAr : feat.highlightEn}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-neutral-900 dark:text-white">
                    {lang === 'ar' ? feat.titleAr : feat.titleEn}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {lang === 'ar' ? feat.descAr : feat.descEn}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-200/70 dark:border-neutral-800/70 flex items-center gap-2 text-xs font-bold text-emerald-700 dark:text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>{lang === 'ar' ? 'خدمة معتمدة ومتوافقة نظامياً' : 'Compliant and certified service'}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Banner with Direct Action */}
        <div className="mt-12 rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-emerald-900 via-emerald-950 to-neutral-950 text-white border-2 border-amber-400/40 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-start max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold border border-amber-400/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'ar' ? 'استشارة فورية ومجانية' : 'Instant & Free Advisory'}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              {lang === 'ar' 
                ? 'جاهز لبدء طلبك واختيار العرض التمويلي الأنسب؟'
                : 'Ready to submit your inquiry and select the optimal offer?'}
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed">
              {lang === 'ar'
                ? 'تواصل مباشرة مع المستشار المالي ناصر أبو عبدالله لمناقشة خياراتك وبدء الإجراءات بكل يسر وسهولة.'
                : 'Connect directly with financial advisor Nasser Abu Abdullah to evaluate your options and initiate the process.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href="#apply"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-neutral-950 font-black text-xs sm:text-sm shadow-md transition-all active:scale-[0.98]"
            >
              <FileCheck2 className="w-4 h-4" />
              <span>{lang === 'ar' ? 'تعبئة طلب الاستشارة' : 'Fill Consultation Form'}</span>
              <ArrowIcon className="w-4 h-4" />
            </a>

            <a
              href={createWhatsAppUrl(whatsappMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs sm:text-sm shadow-md transition-all active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
              <span>{lang === 'ar' ? 'محادثة واتساب مباشرة' : 'Direct WhatsApp Chat'}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
