export type Language = 'ar' | 'en';
export type ThemeMode = 'light' | 'dark';
export type ActivePage = 'home' | 'services' | 'disclaimers';

export interface TranslationStrings {
  // Navigation & Meta
  siteTitle: string;
  siteSubtitle: string;
  advertiserRole: string;
  navCalculator: string;
  navEligibility: string;
  navServices: string;
  navSnapchatAds: string;
  navFaq: string;
  navLegal: string;
  callNow: string;
  whatsappNow: string;
  applyNow: string;

  // Hero Section
  heroKicker: string;
  heroHeadline: string;
  heroHeadlineSpan: string;
  heroDescription: string;
  heroAmountLabel: string;
  heroAmountValue: string;
  heroAmountSub: string;
  heroFeature1: string;
  heroFeature2: string;
  heroFeature3: string;
  heroFeature4: string;
  heroTrustText: string;
  heroOfficialBadge: string;
  heroCtaPrimary: string;
  heroCtaSecondary: string;

  // Key Value Props
  prop1Title: string;
  prop1Desc: string;
  prop2Title: string;
  prop2Desc: string;
  prop3Title: string;
  prop3Desc: string;
  prop4Title: string;
  prop4Desc: string;

  // Calculator
  calcTitle: string;
  calcSubtitle: string;
  calcAmountLabel: string;
  calcDurationLabel: string;
  calcMonthsUnit: string;
  calcSectorLabel: string;
  calcSalaryLabel: string;
  calcInstallmentResult: string;
  calcTotalRepay: string;
  calcDbrNotice: string;
  calcDisclaimer: string;
  calcShareWhatsapp: string;
  calcRecalculate: string;

  // Eligibility Checker
  eligTitle: string;
  eligSubtitle: string;
  eligStep1: string;
  eligStep2: string;
  eligStep3: string;
  eligSuccessTitle: string;
  eligSuccessDesc: string;
  eligFailTitle: string;
  eligFailDesc: string;
  eligCheckCta: string;

  // Services
  servicesTitle: string;
  servicesSubtitle: string;
  service1Title: string;
  service1Desc: string;
  service2Title: string;
  service2Desc: string;
  service3Title: string;
  service3Desc: string;
  service4Title: string;
  service4Desc: string;
  service5Title: string;
  service5Desc: string;

  // Snapchat Ads
  snapTitle: string;
  snapSubtitle: string;
  snapDownloadPng: string;
  snapDownload4k: string;
  snapDownloadAll: string;
  snapSafeZones: string;
  snapDesign1: string;
  snapDesign2: string;
  snapDesign3: string;
  snapDesign4: string;
  snapDesign5: string;
  snapExportSuccess: string;

  // Form
  formTitle: string;
  formSubtitle: string;
  formName: string;
  formPhone: string;
  formCity: string;
  formSalary: string;
  formObligations: string;
  formPurpose: string;
  formSubmit: string;
  formSending: string;
  formSuccess: string;
  formPrivacyConsent: string;

  // FAQs
  faqTitle: string;
  faqSubtitle: string;

  // Legal
  legalNoticeTitle: string;
  legalNoticeContent: string;
  privacyPolicy: string;
  termsConditions: string;
  financialDisclaimer: string;
  customerProtection: string;
  complaintsPolicy: string;
  footerRights: string;
  closeModal: string;
}

export type LegalDocType = 'privacy' | 'terms' | 'disclaimer' | 'protection' | 'complaints' | null;
export type LegalModalType = LegalDocType;

export interface LeadFormData {
  fullName: string;
  phone: string;
  city: string;
  employmentSector: string;
  serviceType: string;
  notes?: string;
}


export interface SnapchatAdSpec {
  id: string;
  number: string;
  titleAr: string;
  titleEn: string;
  subtitleAr: string;
  subtitleEn: string;
  category: string;
  hookAr: string;
  hookEn: string;
  ctaTextAr: string;
  ctaTextEn: string;
  legalNoticeAr: string;
  legalNoticeEn: string;
  accentColor: string;
}
