import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp, ChevronUp, CheckCircle, ShieldCheck } from 'lucide-react';
import { Language, TranslationStrings } from '../types';
import { OFFICIAL_PHONE, DISPLAY_PHONE, createWhatsAppUrl } from '../utils/whatsapp';
import { logWhatsAppClick, logPhoneClick } from '../utils/snapchatPixel';

interface FloatingActionsProps {
  lang: Language;
  t: TranslationStrings;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ lang, t }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const isAr = lang === 'ar';

  const defaultWhatsappMsg = isAr
    ? "السلام عليكم أستاذ ناصر، أود استشارة سريعة بخصوص التمويل الشخصي المباشر بدون تحويل راتب."
    : "Hello Mr. Nasser, I would like a quick consultation regarding personal finance without salary transfer.";

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToApply = () => {
    const applyEl = document.getElementById('apply');
    if (applyEl) {
      applyEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = '#apply';
    }
  };

  return (
    <>
      {/* 1. Desktop & Tablet Floating Actions (Hidden on Mobile sm:flex) */}
      <div className="fixed bottom-6 start-6 z-40 hidden sm:flex flex-col items-start gap-3">
        {/* Advisor Online Status Pill */}
        <div className="bg-neutral-900/95 backdrop-blur-md text-white text-xs font-bold py-2 px-3.5 rounded-2xl shadow-xl border border-emerald-500/30 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
          <span>{isAr ? 'المستشار متاح الآن للرد' : 'Advisor Online'}</span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5">
          {/* WhatsApp Primary Button */}
          <a
            id="floating-whatsapp-btn"
            href={createWhatsAppUrl(defaultWhatsappMsg)}
            onClick={() => logWhatsAppClick('floating_desktop_button')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-2xl shadow-emerald-950/60 hover:scale-110 active:scale-95 transition-all relative group"
            title="WhatsApp Chat"
            aria-label="WhatsApp Chat"
          >
            <MessageCircle className="w-7 h-7 fill-white text-emerald-600" />
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-400 border-2 border-white dark:border-neutral-900"></span>
          </a>

          {/* Quick Phone Call Button */}
          <a
            id="floating-phone-btn"
            href={`tel:${OFFICIAL_PHONE}`}
            onClick={() => logPhoneClick('floating_desktop_phone')}
            className="w-12 h-12 rounded-full bg-neutral-900/95 hover:bg-neutral-800 text-white flex items-center justify-center shadow-lg border border-neutral-700 hover:scale-105 active:scale-95 transition-all"
            title={`Call ${DISPLAY_PHONE}`}
            aria-label="Direct Phone Call"
          >
            <Phone className="w-5 h-5 text-emerald-400" />
          </a>
        </div>
      </div>

      {/* 2. Mobile-First Sticky Bottom Conversion Bar (Visible only on mobile < 640px) */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-50 bg-neutral-950/95 backdrop-blur-lg border-t border-neutral-800 p-2.5 px-3 shadow-2xl pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <div className="flex items-center gap-2">
          {/* Quick Call Button */}
          <a
            id="mobile-sticky-call"
            href={`tel:${OFFICIAL_PHONE}`}
            onClick={() => logPhoneClick('mobile_sticky_call')}
            className="w-12 h-12 shrink-0 rounded-xl bg-neutral-800 border border-neutral-700 text-emerald-400 flex items-center justify-center active:scale-95 transition-transform"
            aria-label="Call Advisor"
            title="Call"
          >
            <Phone className="w-5 h-5" />
          </a>

          {/* Form Scroll Quick CTA */}
          <button
            type="button"
            onClick={scrollToApply}
            className="flex-1 min-h-[48px] px-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-black border border-neutral-700 flex items-center justify-center gap-1.5 active:scale-95 transition-all cursor-pointer"
          >
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>{isAr ? 'طلب التمويل' : 'Apply'}</span>
          </button>

          {/* Primary Mobile WhatsApp Conversion Button */}
          <a
            id="mobile-sticky-whatsapp"
            href={createWhatsAppUrl(defaultWhatsappMsg)}
            onClick={() => logWhatsAppClick('mobile_sticky_whatsapp')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-[1.4] min-h-[48px] px-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white text-xs font-black shadow-lg shadow-emerald-950/40 flex items-center justify-center gap-2 active:scale-95 transition-all"
            aria-label="Direct WhatsApp Consultation"
          >
            <MessageCircle className="w-4 h-4 fill-white text-emerald-600 shrink-0" />
            <span className="truncate">{isAr ? 'استشارة واتساب' : 'WhatsApp'}</span>
          </a>
        </div>
      </div>

      {/* 3. Smooth Scroll to Top Button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-20 sm:bottom-6 end-6 z-40 w-11 h-11 rounded-full bg-neutral-900/90 hover:bg-neutral-800 text-neutral-200 flex items-center justify-center shadow-lg border border-neutral-700 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          title={isAr ? 'العودة للأعلى' : 'Scroll to top'}
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
};
