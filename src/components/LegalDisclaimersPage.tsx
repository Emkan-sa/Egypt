import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Scale, 
  Lock, 
  Banknote, 
  AlertTriangle, 
  FileText, 
  ArrowLeft, 
  ArrowRight,
  Home,
  CheckCircle2,
  Building2,
  Printer,
  ChevronRight,
  ChevronLeft,
  HelpCircle,
  PhoneCall
} from 'lucide-react';
import { Language, TranslationStrings } from '../types';
import { LEGAL_DOCS } from '../data/legalData';
import { OFFICIAL_PHONE, DISPLAY_PHONE, createWhatsAppUrl } from '../utils/whatsapp';

interface LegalDisclaimersPageProps {
  lang: Language;
  t: TranslationStrings;
  onNavigateHome: () => void;
  defaultDoc?: string;
}

export const LegalDisclaimersPage: React.FC<LegalDisclaimersPageProps> = ({
  lang,
  t,
  onNavigateHome,
  defaultDoc = 'disclaimer'
}) => {
  const isAr = lang === 'ar';
  const ArrowBackIcon = isAr ? ArrowRight : ArrowLeft;
  const ChevronIcon = isAr ? ChevronLeft : ChevronRight;

  const [activeDocKey, setActiveDocKey] = useState<string>(defaultDoc);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const currentDoc = LEGAL_DOCS[activeDocKey] || LEGAL_DOCS.disclaimer;

  const docTabs = [
    { id: 'disclaimer', titleAr: 'إخلاء المسؤولية التمويلي', titleEn: 'Financial Disclaimer', icon: AlertTriangle },
    { id: 'terms', titleAr: 'الشروط والأحكام العامة', titleEn: 'Terms & Conditions', icon: Scale },
    { id: 'privacy', titleAr: 'سياسة الخصوصية (PDPL)', titleEn: 'Privacy Policy (PDPL)', icon: Lock },
    { id: 'protection', titleAr: 'مبادئ حماية المستهلك', titleEn: 'Consumer Protection', icon: FileText },
    { id: 'complaints', titleAr: 'آلية الشكاوى والاستفسار', titleEn: 'Complaints & Escalation', icon: HelpCircle },
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors pb-20">
      {/* Top Breadcrumb & Page Banner */}
      <div className="bg-neutral-900 text-white border-b border-neutral-800 relative overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-amber-500 rounded-full blur-[100px]"></div>
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
            <ChevronIcon className="w-3 h-3 text-neutral-500" />
            <span className="text-amber-300">
              {isAr ? 'صفحة الإفصاحات وإخلاء المسؤولية والوثائق القانونية' : 'Regulatory Disclosures & Legal Documents'}
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/15 text-amber-300 text-xs font-bold border border-amber-400/30">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>{isAr ? 'صفحة مستقلة وشاملة لكافة الإفصاحات والسياسات' : 'Dedicated Independent Compliance Directory'}</span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                {isAr ? 'الإفصاحات المالية وإخلاء المسؤولية والامتثال النظامي' : 'Regulatory Disclosures & Financial Disclaimers'}
              </h1>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-2xl">
                {isAr
                  ? 'تم تجميع ودمج كافة النصوص القانونية، والتنويهات، والإفصاحات المعتمدة، وسياسات حماية البيانات الشخصية في هذه الصفحة المستقلة التزاماً بالشفافية المطلقة والأنظمة السارية في المملكة العربية السعودية.'
                  : 'All regulatory notices, legal texts, underwriting disclosures, and personal data protection policies are consolidated within this dedicated portal in strict compliance with Saudi laws.'}
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={handlePrint}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-bold border border-neutral-700 transition-colors cursor-pointer"
                title={isAr ? 'طباعة هذه الوثيقة' : 'Print Document'}
              >
                <Printer className="w-4 h-4 text-amber-400" />
                <span>{isAr ? 'طباعة' : 'Print'}</span>
              </button>

              <button
                onClick={onNavigateHome}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-neutral-950 font-black text-xs transition-all cursor-pointer shadow-md"
              >
                <ArrowBackIcon className="w-4 h-4 text-neutral-950" />
                <span>{isAr ? 'العودة للرئيسية' : 'Back to Home'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {/* Core Regulatory Disclosures Grid (5 Structured Pillars) */}
        <div className="mb-14">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <h2 className="text-xl sm:text-2xl font-black text-neutral-900 dark:text-white">
              {isAr ? 'أركان الإفصاح المالي والامتثال المعتمدة' : 'Core Financial Disclosures & Regulatory Pillars'}
            </h2>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              {isAr 
                ? 'مبادئ الشفافية والوضوح التي تحكم خدمات الوساطة والاستشارة التمويلية الرقمية'
                : 'Core principles of transparency governing digital brokerage and financing consultation'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Pillar 1 */}
            <div className="bg-white dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 border border-emerald-300 dark:border-emerald-800 flex items-center justify-center text-emerald-700 dark:text-emerald-400">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-neutral-900 dark:text-white">
                {isAr ? '1. إفصاح صفة الوساطة الرقمية المستقلة' : '1. Independent Brokerage Status'}
              </h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {isAr
                  ? 'يعلن ناصر أبو عبدالله صراحةً عن صفته كمعلن ومسوّق وساطة مالية رقمية مستقل، ولا يمثل بنكاً أو مؤسسة إقراض مباشرة. يقتصر دوره على التوجيه الاستشاري وتسهيل الربط مع الجهات المرخصة من البنك المركزي السعودي (ساما).'
                  : 'Nasser Abu Abdullah operates as an independent digital financial advertiser and broker, not a lending institution. Role is strictly limited to advisory routing with SAMA-licensed entities.'}
              </p>
              <div className="pt-2 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>{isAr ? 'وساطة إرشادية مستقلة' : 'Certified independent advisory'}</span>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950 border border-amber-300 dark:border-amber-800 flex items-center justify-center text-amber-700 dark:text-amber-400">
                <Banknote className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-neutral-900 dark:text-white">
                {isAr ? '2. ميثاق صفر رسوم أو أتعاب مسبقة' : '2. Zero Advance Retainer or Fee Policy'}
              </h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {isAr
                  ? 'لا نطلب أو نتقاضى أي مبالغ نقدية أو رسوم مسبقة أو أتعاب استشارة من العميل نهائياً تحت أي مسمى. جميع الرسوم الإدارية الرسمية تخصم فقط من جهة التمويل المعتمدة وفق الأنظمة عند توقيع العقد الرسمي.'
                  : 'We strictly never charge or request upfront fees, advance retainers, or consultation charges under any circumstance. Official fees are deducted solely by the licensed creditor at contract signing.'}
              </p>
              <div className="pt-2 flex items-center gap-1.5 text-[11px] font-semibold text-amber-600 dark:text-amber-400">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>{isAr ? 'شفافية كاملة وصفر رسوم مسبقة 100%' : '100% Transparency & Zero Upfront Fees'}</span>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 border border-emerald-300 dark:border-emerald-800 flex items-center justify-center text-emerald-700 dark:text-emerald-400">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-neutral-900 dark:text-white">
                {isAr ? '3. اختصاص القرار الائتماني للجهات المرخصة' : '3. Regulated Underwriting Exclusivity'}
              </h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {isAr
                  ? 'الموافقة النهائية ومبالغ التمويل ونسب الفائدة وفترات السداد هي اختصاص حصري ومطلق للجهات التمويلية المرخصة بعد مراجعة السجل الائتماني (سمة) ونسبة عبء الدين (DBR). نرفض تماماً تقديم أي وعود مضللة بموافقة مضمونة.'
                  : 'Loan approval, amount limits, tenure, and APR remain under the exclusive jurisdiction of licensed financing entities following SIMAH and DBR credit assessment. We disclaim any deceptive guaranteed approval promises.'}
              </p>
              <div className="pt-2 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>{isAr ? 'قرارات ائتمانية خاضعة لساما' : 'Regulated SAMA underwriting'}</span>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="bg-white dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950 border border-amber-300 dark:border-amber-800 flex items-center justify-center text-amber-700 dark:text-amber-400">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-neutral-900 dark:text-white">
                {isAr ? '4. حماية البيانات والسرية التامة (PDPL)' : '4. Data Protection & Privacy (PDPL)'}
              </h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {isAr
                  ? 'تُعامل جميع البيانات المدخلة بأقصى درجات السرية والتشفير وفق نظام حماية البيانات الشخصية السعودي. لا نستخدم المعلومات إلا لغرض مراجعة الأهلية التمويلية، ولا نشاركها أو نبيعها لأي طرف خارجي تجاري.'
                  : 'All customer data is processed with stringent encryption and confidentiality under the Saudi Personal Data Protection Law (PDPL), solely for eligibility evaluation.'}
              </p>
              <div className="pt-2 flex items-center gap-1.5 text-[11px] font-semibold text-amber-600 dark:text-amber-400">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>{isAr ? 'تشفير كامل وامتثال لنظام PDPL' : 'Complete encryption & PDPL compliance'}</span>
              </div>
            </div>

            {/* Pillar 5 */}
            <div className="bg-white dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800 shadow-xs space-y-3 md:col-span-2 lg:col-span-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 border border-emerald-300 dark:border-emerald-800 flex items-center justify-center text-emerald-700 dark:text-emerald-400">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-neutral-900 dark:text-white">
                {isAr ? '5. تنبيه الاقتراض المسؤول والطبيعة الاسترشادية للأرقام' : '5. Responsible Borrowing & Indicative Figures'}
              </h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {isAr
                  ? 'التمويل التزام مالي طويل الأجل، ويجب على كل عميل مراجعة ملاءمته المالية وميزانيته قبل توقيع أي عقد رسمي. كافة الأرقام والمبالغ المعروضة في المنصة استرشادية، والأرقام الملزمة تدرج حصرياً في جدول السداد والعقد المعتمد الصادر من الجهة الممولة المرخصة.'
                  : 'Financing constitutes a binding long-term obligation. Borrowers must evaluate their repayment capacity carefully. All figures presented are strictly indicative; binding terms are specified in the official agreement issued by the licensed creditor.'}
              </p>
              <div className="pt-2 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>{isAr ? 'التزام بمبادئ التمويل المسؤول' : 'Adherence to responsible lending'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Master Legal Documents Section (Tabbed Viewer) */}
        <div className="bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-sm overflow-hidden mb-12">
          <div className="p-6 sm:p-8 border-b border-neutral-200 dark:border-neutral-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg sm:text-xl font-black text-neutral-900 dark:text-white">
                {isAr ? 'النصوص والوثائق القانونية المعتمدة بالتفصيل' : 'Detailed Official Legal Documents'}
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                {isAr ? 'اختر الوثيقة للاطلاع على بنودها الكاملة والمحدثة' : 'Select a document to review its complete provisions'}
              </p>
            </div>

            {/* Tab Pills */}
            <div className="flex flex-wrap gap-2">
              {docTabs.map((tab) => {
                const TabIcon = tab.icon;
                const isActive = activeDocKey === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveDocKey(tab.id)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-emerald-700 text-white shadow-xs'
                        : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                    }`}
                  >
                    <TabIcon className="w-3.5 h-3.5" />
                    <span>{isAr ? tab.titleAr : tab.titleEn}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Document Content Display */}
          <div className="p-6 sm:p-10 space-y-6">
            <div className="border-b border-neutral-200 dark:border-neutral-800 pb-5">
              <h2 className="text-xl sm:text-2xl font-black text-neutral-900 dark:text-white">
                {isAr ? currentDoc.titleAr : currentDoc.titleEn}
              </h2>
              <p className="text-xs text-amber-700 dark:text-amber-400 font-bold mt-1">
                {isAr ? currentDoc.lastUpdatedAr : currentDoc.lastUpdatedEn}
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {(isAr ? currentDoc.contentAr : currentDoc.contentEn).map((paragraph, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200/80 dark:border-neutral-800">
                  <span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm leading-relaxed">{paragraph}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Official Channels & Escalation Card */}
        <div className="rounded-2xl p-6 bg-emerald-950 text-white border border-emerald-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-2 text-center sm:text-start">
            <h4 className="text-base font-bold text-white flex items-center gap-2 justify-center sm:justify-start">
              <PhoneCall className="w-4 h-4 text-amber-400" />
              <span>{isAr ? 'القنوات الرسمية للاستفسارات والشكاوى' : 'Official Escalation & Inquiries'}</span>
            </h4>
            <p className="text-xs text-neutral-300">
              {isAr
                ? 'لأي استفسار نظامي أو ملاحظة أو شكوى، يمكنك التواصل المباشر مع المستشار ناصر أبو عبدالله عبر الهاتف أو الواتساب، كما تتوفر منصة ساما تهتم التابعة للبنك المركزي السعودي (www.samacares.gov.sa).'
                : 'For inquiries or feedback, contact advisor Nasser Abu Abdullah directly, or visit SAMA Cares (www.samacares.gov.sa).'}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${OFFICIAL_PHONE}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold border border-neutral-700 transition-colors"
            >
              <span>{DISPLAY_PHONE}</span>
            </a>
            <button
              onClick={onNavigateHome}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-neutral-950 text-xs font-black transition-all cursor-pointer"
            >
              <ArrowBackIcon className="w-4 h-4" />
              <span>{isAr ? 'العودة للرئيسية' : 'Back to Home'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
