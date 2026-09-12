import React, { useEffect } from 'react';
import { 
  CheckCircle2, 
  Clock, 
  MessageCircle, 
  X, 
  ShieldCheck, 
  PhoneCall, 
  Sparkles,
  ExternalLink,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';
import { Language } from '../types';
import { OFFICIAL_PHONE, DISPLAY_PHONE, createWhatsAppUrl } from '../utils/whatsapp';

export interface LeadSubmissionDetails {
  fullName: string;
  phone: string;
  city?: string;
  employmentSector: string;
  serviceType: string;
  notes?: string;
  refNumber: string;
  whatsappUrl: string;
}

interface LeadSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  details: LeadSubmissionDetails | null;
  lang: Language;
}

export const LeadSuccessModal: React.FC<LeadSuccessModalProps> = ({
  isOpen,
  onClose,
  details,
  lang,
}) => {
  const isAr = lang === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !details) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="success-modal-title"
    >
      <div 
        className="bg-white dark:bg-neutral-900 rounded-3xl max-w-lg w-full max-h-[90vh] flex flex-col shadow-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Decorative Banner */}
        <div className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-700 p-6 text-white text-center relative overflow-hidden">
          {/* Subtle Glow circles */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-amber-400/20 rounded-full blur-xl pointer-events-none"></div>

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 end-4 p-2 rounded-full bg-black/20 hover:bg-black/30 text-white/90 hover:text-white transition-colors cursor-pointer"
            aria-label={isAr ? 'إغلاق' : 'Close'}
          >
            <X className="w-5 h-5" />
          </button>

          {/* Success Icon */}
          <div className="w-16 h-16 mx-auto rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center mb-3 shadow-inner">
            <CheckCircle2 className="w-10 h-10 text-white animate-bounce-short" />
          </div>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isAr ? 'تم استلام طلبك بنجاح' : 'Inquiry Received Successfully'}</span>
          </span>

          <h3 id="success-modal-title" className="text-xl sm:text-2xl font-black tracking-tight text-white">
            {isAr ? 'شكراً لثقتك، طلبك قيد المراجعة' : 'Thank You! Request In Review'}
          </h3>

          <p className="text-xs sm:text-sm text-emerald-100 mt-1 max-w-sm mx-auto">
            {isAr 
              ? 'تم تسجيل طلب الاستشارة التمويلية وسيقوم المستشار المالي بمراجعته فوراً.' 
              : 'Your consultation inquiry is registered and our financial advisor is reviewing it now.'}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4 text-neutral-800 dark:text-neutral-200">
          {/* Expected Response Time Card - PROMINENT REQUIREMENT */}
          <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800/80 flex items-start gap-3.5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
              <Clock className="w-5 h-5 animate-pulse" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300">
                  {isAr ? 'وقت الاستجابة المتوقع' : 'Expected Response Time'}
                </span>
                <span className="px-2 py-0.5 rounded-md bg-amber-400/30 text-amber-900 dark:text-amber-200 text-[10px] font-black">
                  {isAr ? 'فوري وسريع' : 'Fast Priority'}
                </span>
              </div>
              <p className="text-sm font-black text-neutral-900 dark:text-amber-100">
                {isAr 
                  ? 'خلال 10 إلى 15 دقيقة عبر واتساب أو اتصال هاتفي' 
                  : 'Within 10 to 15 minutes via WhatsApp or Phone Call'}
              </p>
              <p className="text-[11px] text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {isAr 
                  ? 'يعمل المستشار المالي المعتمد على مراجعة شروط الخدمة وتحديد أفضل عرض تمويلي مناسب لقطاع عملك.'
                  : 'Our certified advisor will evaluate your request to match you with optimal financing terms.'}
              </p>
            </div>
          </div>

          {/* Submission Details Summary Box */}
          <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700/80 space-y-2.5 text-xs">
            <div className="flex items-center justify-between pb-2 border-b border-neutral-200 dark:border-neutral-700">
              <span className="text-neutral-500 dark:text-neutral-400">
                {isAr ? 'رقم مرجع الطلب:' : 'Request Reference #:'}
              </span>
              <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/80 px-2 py-0.5 rounded-md border border-emerald-300/40">
                {details.refNumber}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-neutral-500 dark:text-neutral-400">{isAr ? 'مقدّم الطلب:' : 'Applicant:'}</span>
              <span className="font-bold text-neutral-900 dark:text-white">{details.fullName}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-neutral-500 dark:text-neutral-400">{isAr ? 'رقم التواصل:' : 'Phone Number:'}</span>
              <span className="font-bold text-neutral-900 dark:text-white dir-ltr text-start">{details.phone}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-neutral-500 dark:text-neutral-400">{isAr ? 'جهة العمل:' : 'Sector:'}</span>
              <span className="font-medium text-neutral-800 dark:text-neutral-300">{details.employmentSector}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-neutral-500 dark:text-neutral-400">{isAr ? 'نوع التمويل المطلوب:' : 'Service Requested:'}</span>
              <span className="font-bold text-emerald-700 dark:text-emerald-300 text-end max-w-[200px] truncate">
                {details.serviceType}
              </span>
            </div>
          </div>

          {/* Privacy & Zero-Fee Reminder */}
          <div className="flex items-center gap-2 p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-300 text-[11px]">
            <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-600" />
            <span>
              {isAr 
                ? 'خدمة الاستشارة مجانية 100% وبدون أي رسوم مسبقة وفق أنظمة البنك المركزي السعودي.'
                : '100% Free consultation with zero upfront fees pursuant to SAMA regulations.'}
            </span>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="p-5 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 flex flex-col sm:flex-row items-center gap-3">
          {/* Direct WhatsApp CTA Button */}
          <a
            href={details.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full sm:flex-1 min-h-[48px] py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/30 active:scale-98 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white text-emerald-600 shrink-0" />
            <span>{isAr ? 'فتح المحادثة الفورية في واتساب' : 'Open WhatsApp Chat Now'}</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>

          {/* Secondary Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto min-h-[48px] py-3 px-5 rounded-xl border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 text-xs font-bold transition-all active:scale-98 cursor-pointer"
          >
            {isAr ? 'حسناً، فهمت' : 'Dismiss'}
          </button>
        </div>
      </div>
    </div>
  );
};
