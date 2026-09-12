import React from 'react';
import { 
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  Scale, 
  ExternalLink,
  Lock,
  Building2,
  Home
} from 'lucide-react';
import { Language, LegalModalType, TranslationStrings, ActivePage } from '../types';
import { OFFICIAL_PHONE, DISPLAY_PHONE, SNAPCHAT_USER, SNAPCHAT_URL, createWhatsAppUrl } from '../utils/whatsapp';

interface FooterProps {
  lang: Language;
  t: TranslationStrings;
  onOpenLegal: (type: LegalModalType) => void;
  onNavigate?: (page: ActivePage) => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  lang, 
  t, 
  onOpenLegal,
  onNavigate 
}) => {
  const isAr = lang === 'ar';

  const handlePageClick = (page: ActivePage) => {
    if (onNavigate) {
      onNavigate(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-neutral-950 text-neutral-300 pt-16 pb-24 sm:pb-12 border-t border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-neutral-800">
          {/* Brand Col (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl overflow-hidden bg-emerald-950 border-2 border-amber-400 flex items-center justify-center shrink-0">
                <img 
                  src="/assets/logo.webp" 
                  alt="Nasser Abu Abdullah Logo" 
                  width={48}
                  height={48}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover" 
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.display = 'none';
                  }}
                />
                <span className="text-amber-300 font-black text-xl hidden">NA</span>
              </div>
              <div>
                <h3 className="text-lg font-black text-white">{t.siteTitle}</h3>
                <p className="text-xs text-amber-400 font-bold">{t.advertiserRole}</p>
              </div>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-md">
              {lang === 'ar'
                ? "منصة وساطة وتسويق تمويلي رقمية متخصصة في توجيه العملاء لحلول التمويل الشخصي المباشر بدون تحويل راتب عبر القنوات الرسمية المرخصة من البنك المركزي السعودي."
                : "Digital financial marketing and brokerage portal guiding applicants toward direct personal financing without salary transfer via SAMA-licensed official entities."}
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <a
                href={`tel:${OFFICIAL_PHONE}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 text-xs font-bold border border-neutral-800"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{DISPLAY_PHONE}</span>
              </a>

              <a
                href={SNAPCHAT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 text-xs font-bold border border-neutral-800"
              >
                <span className="text-amber-300">👻 @{SNAPCHAT_USER}</span>
              </a>

              <a
                href={createWhatsAppUrl(lang === 'ar' ? "السلام عليكم أستاذ ناصر، أود الاستفسار عن التمويل الشخصي." : "Hello Mr. Nasser, I would like to inquire about personal financing.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-950 hover:bg-emerald-900 text-emerald-300 text-xs font-bold border border-emerald-800"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>{t.whatsappNow}</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-neutral-100 uppercase tracking-wider">
              {lang === 'ar' ? 'أقسام المنصة' : 'Platform Navigation'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  type="button"
                  onClick={() => handlePageClick('home')}
                  className="hover:text-amber-300 transition-colors text-start cursor-pointer"
                >
                  • {isAr ? 'الصفحة الرئيسية' : 'Home'}
                </button>
              </li>
              <li>
                <button 
                  type="button"
                  onClick={() => handlePageClick('services')}
                  className="hover:text-amber-300 transition-colors text-start cursor-pointer"
                >
                  • {isAr ? 'حلول وخدمات الوساطة الشاملة' : 'Brokerage Services'}
                </button>
              </li>
              <li>
                <button 
                  type="button"
                  onClick={() => handlePageClick('disclaimers')}
                  className="hover:text-amber-300 transition-colors text-start cursor-pointer font-bold text-amber-400"
                >
                  • {isAr ? 'صفحة الإفصاحات وإخلاء المسؤولية' : 'Legal & Disclaimers Page'}
                </button>
              </li>
              <li>
                <a href="#apply" className="hover:text-amber-300 transition-colors">
                  • {lang === 'ar' ? 'طلب الاستشارة التمويلية' : 'Consultation Request'}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-300 transition-colors">
                  • {t.navFaq}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Pages & Documentation (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-neutral-100 uppercase tracking-wider">
              {t.navLegal}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => handlePageClick('disclaimers')}
                  className="hover:text-amber-300 transition-colors text-start text-amber-400 font-bold cursor-pointer"
                >
                  • {t.financialDisclaimer} ({isAr ? 'عرض الصفحة المستقلة' : 'Dedicated Page'})
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal('privacy')}
                  className="hover:text-amber-300 transition-colors text-start cursor-pointer"
                >
                  • {t.privacyPolicy}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal('terms')}
                  className="hover:text-amber-300 transition-colors text-start cursor-pointer"
                >
                  • {t.termsConditions}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal('protection')}
                  className="hover:text-amber-300 transition-colors text-start cursor-pointer"
                >
                  • {t.customerProtection}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal('complaints')}
                  className="hover:text-amber-300 transition-colors text-start cursor-pointer"
                >
                  • {t.complaintsPolicy}
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Clean Compliance & Legal Access Bar */}
        <div className="p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2.5 text-neutral-300 text-center sm:text-start">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>
              {isAr 
                ? 'جميع النصوص القانونية، إخلاء المسؤولية، وسياسات حماية البيانات مجمعة ومتاحة في صفحة مستقلة متوافقة مع أنظمة ساما.'
                : 'All regulatory disclosures and legal policies are consolidated within our dedicated compliance page pursuant to SAMA regulations.'}
            </span>
          </div>

          <button
            type="button"
            onClick={() => handlePageClick('disclaimers')}
            className="shrink-0 px-4 py-2 rounded-xl bg-amber-400/20 hover:bg-amber-400/30 text-amber-300 text-xs font-bold border border-amber-400/40 transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <Scale className="w-3.5 h-3.5" />
            <span>{isAr ? 'الانتقال لصفحة الإفصاحات الكاملة' : 'Open Full Disclosures Page'}</span>
          </button>
        </div>

        {/* Bottom Bar & Agency Attribution */}
        <div className="pt-4 border-t border-neutral-800/80 space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
            <p>{t.footerRights}</p>
            <div className="flex items-center gap-2 text-[11px]">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>{lang === 'ar' ? 'معلن ووسيط رقمي مستقل - خاضع للأنظمة السارية في السعودية' : 'Independent Broker - Subject to Saudi Laws'}</span>
            </div>
          </div>

          {/* Professional Development & Growth Agency Signature */}
          <div className="pt-2 text-center">
            <p className="text-[11px] sm:text-xs text-neutral-400 dark:text-neutral-500 font-medium tracking-wide flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
              <span>{lang === 'ar' ? 'تم بناء وإنشاء وتصميم وتطوير هذه المنصة بواسطة' : 'Platform engineered, designed & developed by'}</span>
              <span className="font-bold text-amber-400/95 dark:text-amber-400">
                {lang === 'ar' ? 'عم المعلنين العرب' : 'The Dean of Arab Advertisers (عم المعلنين العرب)'}
              </span>
              <span className="text-neutral-600 hidden sm:inline">•</span>
              <span className="text-neutral-400 dark:text-neutral-500">
                {lang === 'ar' ? 'تحت إدارة وتطوير' : 'Managed & Scaled by'}
              </span>
              <span className="font-bold text-emerald-400/95 dark:text-emerald-400 tracking-wider">
                Wixadpro Egypt agency growth
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
