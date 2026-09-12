import React from 'react';
import { 
  Phone, 
  MessageCircle, 
  Globe, 
  Sun, 
  Moon, 
  ShieldCheck, 
  Scale, 
  Menu, 
  X,
  FileCheck2,
  Handshake,
  Home
} from 'lucide-react';
import { Language, ThemeMode, TranslationStrings, ActivePage } from '../types';
import { OFFICIAL_PHONE, DISPLAY_PHONE, createWhatsAppUrl } from '../utils/whatsapp';

interface NavbarProps {
  lang: Language;
  theme: ThemeMode;
  t: TranslationStrings;
  activePage: ActivePage;
  onNavigate: (page: ActivePage) => void;
  onToggleLang: () => void;
  onToggleTheme: () => void;
  onOpenLegal: (type: any) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  theme,
  t,
  activePage,
  onNavigate,
  onToggleLang,
  onToggleTheme,
  onOpenLegal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const isAr = lang === 'ar';

  const handleNavClick = (page: ActivePage, hashTarget?: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    if (hashTarget) {
      setTimeout(() => {
        const el = document.getElementById(hashTarget);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-40 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border-b border-emerald-950/10 dark:border-emerald-500/15 shadow-xs transition-colors">
      {/* Clean Top Contact & Regulatory Portal Bar */}
      <div className="bg-emerald-950 text-emerald-100 text-xs py-1.5 px-4 font-medium border-b border-emerald-900/60">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          {/* Status badge & phone */}
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-[11px] text-emerald-300">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>{isAr ? 'وساطة تمويلية رقمية مستقلة' : 'Independent Digital Brokerage'}</span>
            </span>
            <span className="text-emerald-700 hidden sm:inline">•</span>
            <a 
              href={`tel:${OFFICIAL_PHONE}`} 
              className="hidden sm:flex items-center gap-1 hover:text-amber-300 transition-colors text-[11px]"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>{DISPLAY_PHONE}</span>
            </a>
          </div>

          {/* Clean direct access to standalone Disclaimers & Legal page */}
          <div className="flex items-center gap-3 text-[11px]">
            <button 
              type="button"
              onClick={() => handleNavClick('disclaimers')} 
              className="text-neutral-300 hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Scale className="w-3.5 h-3.5 text-amber-400" />
              <span className="underline font-semibold">{isAr ? 'صفحة الإفصاحات وإخلاء المسؤولية' : 'Regulatory Disclosures Page'}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <button 
            type="button"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3.5 group text-start cursor-pointer"
          >
            <div className="w-12 h-12 rounded-2xl overflow-hidden bg-emerald-950 border-2 border-amber-400/80 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform shrink-0">
              <img 
                src="/assets/logo.jpg" 
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
              <span className="text-amber-300 font-black text-xl tracking-tight hidden">NA</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black tracking-tight text-emerald-950 dark:text-emerald-100 group-hover:text-emerald-700 transition-colors">
                  {t.siteTitle}
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded-full font-bold bg-amber-500/15 text-amber-600 dark:text-amber-300 border border-amber-500/30">
                  TM
                </span>
              </div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                {t.siteSubtitle}
              </p>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleNavClick('home')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activePage === 'home'
                  ? 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800'
                  : 'text-neutral-700 dark:text-neutral-200 hover:text-emerald-700 dark:hover:text-emerald-400'
              }`}
            >
              {isAr ? 'الرئيسية' : 'Home'}
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('services')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activePage === 'services'
                  ? 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800'
                  : 'text-neutral-700 dark:text-neutral-200 hover:text-emerald-700 dark:hover:text-emerald-400'
              }`}
            >
              {isAr ? 'حلول وخدمات الوساطة' : 'Brokerage Services'}
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('home', 'calculator')}
              className="px-3.5 py-2 rounded-xl text-xs font-bold text-neutral-700 dark:text-neutral-200 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors cursor-pointer"
            >
              {isAr ? 'حاسبة التمويل' : 'Calculator'}
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('home', 'eligibility')}
              className="px-3.5 py-2 rounded-xl text-xs font-bold text-neutral-700 dark:text-neutral-200 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors cursor-pointer"
            >
              {isAr ? 'فحص الأهلية' : 'Check Eligibility'}
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('home', 'apply')}
              className="px-3.5 py-2 rounded-xl text-xs font-bold text-neutral-700 dark:text-neutral-200 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors cursor-pointer"
            >
              {isAr ? 'طلب الاستشارة' : 'Consultation'}
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('home', 'faq')}
              className="px-3.5 py-2 rounded-xl text-xs font-bold text-neutral-700 dark:text-neutral-200 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors cursor-pointer"
            >
              {t.navFaq}
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('disclaimers')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activePage === 'disclaimers'
                  ? 'bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-300 border border-amber-300 dark:border-amber-800'
                  : 'text-neutral-700 dark:text-neutral-200 hover:text-amber-600 dark:hover:text-amber-400'
              }`}
            >
              {isAr ? 'الإفصاحات وإخلاء المسؤولية' : 'Legal & Disclaimers'}
            </button>
          </div>

          {/* Actions & Toggles */}
          <div className="flex items-center gap-2.5">
            {/* Language Switcher */}
            <button
              id="lang-toggle-btn"
              onClick={onToggleLang}
              className="p-2 rounded-xl text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors flex items-center gap-1 text-xs font-bold border border-neutral-200 dark:border-neutral-700 cursor-pointer"
              title="Change Language / تغيير اللغة"
            >
              <Globe className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>{lang === 'ar' ? 'English' : 'العربية'}</span>
            </button>

            {/* Dark/Light Toggle */}
            <button
              id="theme-toggle-btn"
              onClick={onToggleTheme}
              className="p-2 rounded-xl text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors border border-neutral-200 dark:border-neutral-700 cursor-pointer"
              title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-neutral-600" />
              )}
            </button>

            {/* Direct WhatsApp Action Button */}
            <a
              href={createWhatsAppUrl(lang === 'ar' ? "السلام عليكم أستاذ ناصر، أود الاستفسار عن التمويل الشخصي بدون تحويل راتب." : "Hello Mr. Nasser, I would like to inquire about personal financing without salary transfer.")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs shadow-sm transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
              <span>{t.whatsappNow}</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 px-4 py-5 space-y-2">
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            className={`w-full text-start px-3 py-2.5 rounded-xl text-sm font-bold ${
              activePage === 'home' ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300' : 'text-neutral-800 dark:text-neutral-100'
            }`}
          >
            {isAr ? 'الرئيسية' : 'Home'}
          </button>

          <button
            type="button"
            onClick={() => handleNavClick('services')}
            className={`w-full text-start px-3 py-2.5 rounded-xl text-sm font-bold ${
              activePage === 'services' ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300' : 'text-neutral-800 dark:text-neutral-100'
            }`}
          >
            {isAr ? 'حلول وخدمات الوساطة الشاملة' : 'Brokerage Services'}
          </button>

          <button
            type="button"
            onClick={() => handleNavClick('home', 'calculator')}
            className="w-full text-start px-3 py-2.5 rounded-xl text-sm font-bold text-neutral-800 dark:text-neutral-100"
          >
            {isAr ? 'حاسبة التمويل الشخصي' : 'Financing Calculator'}
          </button>

          <button
            type="button"
            onClick={() => handleNavClick('home', 'eligibility')}
            className="w-full text-start px-3 py-2.5 rounded-xl text-sm font-bold text-neutral-800 dark:text-neutral-100"
          >
            {isAr ? 'فحص الأهلية المبدئي (30 ثانية)' : 'Check Eligibility (30s)'}
          </button>

          <button
            type="button"
            onClick={() => handleNavClick('home', 'apply')}
            className="w-full text-start px-3 py-2.5 rounded-xl text-sm font-bold text-neutral-800 dark:text-neutral-100"
          >
            {isAr ? 'طلب الاستشارة والوساطة' : 'Request Consultation'}
          </button>

          <button
            type="button"
            onClick={() => handleNavClick('home', 'faq')}
            className="w-full text-start px-3 py-2.5 rounded-xl text-sm font-bold text-neutral-800 dark:text-neutral-100"
          >
            {t.navFaq}
          </button>

          <button
            type="button"
            onClick={() => handleNavClick('disclaimers')}
            className={`w-full text-start px-3 py-2.5 rounded-xl text-sm font-bold ${
              activePage === 'disclaimers' ? 'bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-300' : 'text-neutral-800 dark:text-neutral-100'
            }`}
          >
            {isAr ? 'الإفصاحات وإخلاء المسؤولية والوثائق القانونية' : 'Legal & Disclaimers'}
          </button>

          <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800 flex flex-col gap-2">
            <a
              href={createWhatsAppUrl(isAr ? "السلام عليكم أستاذ ناصر، أود الاستفسار عن التمويل الشخصي بدون تحويل راتب." : "Hello Mr. Nasser, I would like to inquire about personal financing without salary transfer.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 text-white font-bold text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t.whatsappNow}</span>
            </a>
            <a
              href={`tel:${OFFICIAL_PHONE}`}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 font-bold text-sm"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>{t.callNow} ({DISPLAY_PHONE})</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
