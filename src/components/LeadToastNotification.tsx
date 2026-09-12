import React, { useEffect } from 'react';
import { CheckCircle2, Clock, X, MessageCircle } from 'lucide-react';
import { Language } from '../types';

interface LeadToastNotificationProps {
  isVisible: boolean;
  onClose: () => void;
  lang: Language;
  onOpenModal?: () => void;
}

export const LeadToastNotification: React.FC<LeadToastNotificationProps> = ({
  isVisible,
  onClose,
  lang,
  onOpenModal,
}) => {
  const isAr = lang === 'ar';

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 9000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed top-20 inset-x-4 sm:inset-x-auto sm:end-6 z-50 max-w-md w-full animate-in slide-in-from-top-4 fade-in duration-300 pointer-events-auto"
      role="status"
      aria-live="polite"
    >
      <div className="bg-neutral-900/95 dark:bg-neutral-900/98 backdrop-blur-md text-white p-4 rounded-2xl shadow-2xl border border-emerald-500/40 flex items-start gap-3.5">
        <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-500/30">
          <CheckCircle2 className="w-5 h-5" />
        </div>

        <div className="flex-1 min-w-0 space-y-1">
          <div className="flex items-center gap-2">
            <h4 className="text-xs sm:text-sm font-black text-white">
              {isAr ? 'تم استلام طلب التمويل بنجاح!' : 'Inquiry Successfully Received!'}
            </h4>
          </div>

          <p className="text-[11px] sm:text-xs text-emerald-200 flex items-center gap-1.5 font-medium">
            <Clock className="w-3.5 h-3.5 text-amber-300 shrink-0" />
            <span>
              {isAr 
                ? 'وقت الاستجابة المتوقع: خلال 10 إلى 15 دقيقة' 
                : 'Expected response time: within 10-15 minutes'}
            </span>
          </p>

          {onOpenModal && (
            <button
              type="button"
              onClick={onOpenModal}
              className="text-[11px] font-bold text-amber-300 hover:text-amber-200 underline pt-0.5 cursor-pointer block"
            >
              {isAr ? 'عرض ملخص وتفاصيل الطلب' : 'View request details'}
            </button>
          )}
        </div>

        <button
          type="button"
          onClick={onClose}
          className="text-neutral-400 hover:text-white p-1 rounded-lg hover:bg-neutral-800 transition-colors shrink-0"
          aria-label={isAr ? 'إغلاق الإشعار' : 'Close notification'}
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
