/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language, ThemeMode, LegalModalType, ActivePage } from './types';
import { translations } from './translations';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesTeaserCard } from './components/ServicesTeaserCard';
import { FinancingCalculator } from './components/FinancingCalculator';
import { EligibilityChecker } from './components/EligibilityChecker';
import { HowItWorksTimeline } from './components/HowItWorksTimeline';
import { ComparisonTable } from './components/ComparisonTable';
import { LeadForm } from './components/LeadForm';
import { FaqSection } from './components/FaqSection';
import { BrokerageServicesPage } from './components/BrokerageServicesPage';
import { LegalDisclaimersPage } from './components/LegalDisclaimersPage';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { LegalModal } from './components/LegalModal';
import { ShieldCheck, Scale, ArrowLeft, ArrowRight } from 'lucide-react';
import { initSnapchatPixel, trackPageView } from './utils/snapchatPixel';

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('app_lang');
    return (saved === 'en' || saved === 'ar') ? saved : 'ar';
  });

  const [theme, setTheme] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('app_theme');
    return (saved === 'dark' || saved === 'light') ? saved : 'light';
  });

  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [legalModal, setLegalModal] = useState<LegalModalType>(null);
  const [selectedLegalDoc, setSelectedLegalDoc] = useState<string>('disclaimer');

  const t = translations[lang];
  const isAr = lang === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  // Update HTML attributes and localStorage whenever language or theme changes
  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('app_lang', lang);

    if (lang === 'ar') {
      root.classList.add('font-cairo');
      root.classList.remove('font-sans');
    } else {
      root.classList.add('font-sans');
      root.classList.remove('font-cairo');
    }
  }, [lang]);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('app_theme', theme);
  }, [theme]);

  // Ensure Snapchat Pixel is safely initialized and PAGE_VIEW tracked only once on page load
  useEffect(() => {
    initSnapchatPixel();
    trackPageView();
  }, []);

  const toggleLang = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleOpenLegalPage = (docKey: string = 'disclaimer') => {
    setSelectedLegalDoc(docKey);
    setActivePage('disclaimers');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToApply = () => {
    setActivePage('home');
    setTimeout(() => {
      const formEl = document.getElementById('apply');
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 selection:bg-amber-400 selection:text-neutral-950 transition-colors">
      {/* Top Navigation Bar */}
      <Navbar
        lang={lang}
        theme={theme}
        t={t}
        activePage={activePage}
        onNavigate={setActivePage}
        onToggleLang={toggleLang}
        onToggleTheme={toggleTheme}
        onOpenLegal={(type) => handleOpenLegalPage(type || 'disclaimer')}
      />

      {/* Main Routed Content Area */}
      <main>
        {activePage === 'home' && (
          <>
            {/* Direct Personal Finance Hero */}
            <Hero lang={lang} t={t} />

            {/* Compact Brokerage Services Teaser Card */}
            <ServicesTeaserCard
              lang={lang}
              t={t}
              onViewAllServices={() => {
                setActivePage('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Interactive Financing Estimator & Calculator */}
            <FinancingCalculator
              lang={lang}
              t={t}
              onApplyWithAmount={(amount) => {
                const applyEl = document.getElementById('apply');
                if (applyEl) {
                  applyEl.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            />

            {/* 30-Second Pre-Approval Eligibility Wizard */}
            <EligibilityChecker
              lang={lang}
              t={t}
            />

            {/* 4-Step Application & Disbursement Timeline */}
            <HowItWorksTimeline
              lang={lang}
              t={t}
            />

            {/* Traditional Banks vs Digital Brokerage Comparison */}
            <ComparisonTable
              lang={lang}
              t={t}
            />

            {/* Simplified Lead Consultation Form */}
            <LeadForm 
              lang={lang} 
              t={t} 
              onOpenLegal={(type) => handleOpenLegalPage(type || 'privacy')} 
            />

            {/* Frequently Asked Questions */}
            <FaqSection lang={lang} t={t} />

            {/* Clean Single-Box Compliance Callout linking to the dedicated legal page */}
            <section className="py-8 bg-neutral-100 dark:bg-neutral-900/50 border-t border-neutral-200 dark:border-neutral-800">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-start shadow-xs">
                  <div className="space-y-1">
                    <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-bold text-neutral-900 dark:text-white">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <span>{isAr ? 'الامتثال النظامي والشفافية المالية' : 'Regulatory Compliance & Disclosures'}</span>
                    </div>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 max-w-xl">
                      {isAr
                        ? 'تم تجميع ودمج كافة الإفصاحات المالية، وميثاق عدم تقاضي رسوم مسبقة، وإخلاء المسؤولية في صفحة مستقلة متوافقة مع أنظمة البنك المركزي السعودي.'
                        : 'All financial disclosures, zero-advance-fee charters, and legal disclaimers are consolidated into a dedicated regulatory page.'}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleOpenLegalPage('disclaimer')}
                    className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 dark:bg-neutral-800 hover:bg-neutral-800 dark:hover:bg-neutral-700 text-white text-xs font-bold transition-all cursor-pointer shadow-xs"
                  >
                    <Scale className="w-4 h-4 text-amber-400" />
                    <span>{isAr ? 'الانتقال لصفحة الإفصاحات الكاملة' : 'View Full Disclosures Page'}</span>
                    <ArrowIcon className="w-3.5 h-3.5 text-neutral-400" />
                  </button>
                </div>
              </div>
            </section>
          </>
        )}

        {/* Standalone Comprehensive Financial Brokerage Services Page */}
        {activePage === 'services' && (
          <BrokerageServicesPage
            lang={lang}
            t={t}
            onNavigateHome={() => {
              setActivePage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateApply={handleNavigateToApply}
          />
        )}

        {/* Standalone Comprehensive Regulatory Disclosures & Legal Page */}
        {activePage === 'disclaimers' && (
          <LegalDisclaimersPage
            lang={lang}
            t={t}
            onNavigateHome={() => {
              setActivePage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            defaultDoc={selectedLegalDoc}
          />
        )}
      </main>

      {/* Global Clean Footer */}
      <Footer 
        lang={lang} 
        t={t} 
        onOpenLegal={(type) => handleOpenLegalPage(type || 'disclaimer')}
        onNavigate={setActivePage}
      />

      {/* Persistent Floating WhatsApp / Phone Contact Actions */}
      <FloatingActions lang={lang} t={t} />

      {/* Optional Quick Legal Modal */}
      <LegalModal
        type={legalModal}
        lang={lang}
        t={t}
        onClose={() => setLegalModal(null)}
      />
    </div>
  );
}
