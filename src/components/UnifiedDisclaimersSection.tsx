import React from 'react';
import { 
  ShieldCheck, 
  Scale, 
  Lock, 
  Banknote, 
  AlertTriangle, 
  FileText, 
  ExternalLink,
  CheckCircle2,
  Building2
} from 'lucide-react';
import { Language, LegalModalType, TranslationStrings } from '../types';

interface UnifiedDisclaimersSectionProps {
  lang: Language;
  t: TranslationStrings;
  onOpenLegal: (type: LegalModalType) => void;
}

export const UnifiedDisclaimersSection: React.FC<UnifiedDisclaimersSectionProps> = ({ 
  lang, 
  t, 
  onOpenLegal 
}) => {
  const isAr = lang === 'ar';

  const legalCards = [
    {
      id: 'disclaimer' as const,
      icon: AlertTriangle,
      titleAr: "إخلاء المسؤولية التمويلي الشامل",
      titleEn: "Comprehensive Financial Disclaimer",
      descAr: "بيان شامل بشأن استقلالية الوساطة وعدم تقديم ضمانات تمويلية مسبقة، واختصاص الجهات المرخصة بقرارات المنح.",
      descEn: "Full declaration on brokerage independence, credit underwriting exclusivity, and absence of guaranteed approvals.",
    },
    {
      id: 'terms' as const,
      icon: Scale,
      titleAr: "الشروط والأحكام العامة",
      titleEn: "Terms & Conditions",
      descAr: "ضوابط استخدام المنصة والخدمات الاستشارية والتنظيمية ومعايير الأهلية المبدئية المقررة نظاماً.",
      descEn: "Platform terms of use, advisory regulations, and preliminary eligibility guidelines.",
    },
    {
      id: 'privacy' as const,
      icon: Lock,
      titleAr: "سياسة الخصوصية وحماية البيانات (PDPL)",
      titleEn: "Privacy Policy & PDPL Compliance",
      descAr: "التزام صارم بنظام حماية البيانات الشخصية السعودي، وتشفير المعلومات وعدم مشاركتها لأي أغراض تجارية.",
      descEn: "Strict adherence to Saudi Personal Data Protection Law, full encryption, and non-commercial data handling.",
    },
    {
      id: 'rights' as const,
      icon: FileText,
      titleAr: "ميثاق حقوق ومبادئ المستهلك المالي",
      titleEn: "Financial Consumer Rights Charter",
      descAr: "المبادئ العامة المعتمدة من البنك المركزي لحماية المستهلك المالي والتعامل بعدالة وشفافية مطلقة.",
      descEn: "SAMA core principles for financial consumer protection, equitable treatment, and complete transparency.",
    },
  ];

  return (
    <section 
      id="disclaimers" 
      className="py-16 bg-neutral-900 text-neutral-100 border-t-2 border-amber-400/30 transition-colors relative overflow-hidden"
    >
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-500 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-500 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/15 text-amber-300 text-xs font-bold border border-amber-400/30">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>{isAr ? 'الإفصاحات النظامية والامتثال المالي' : 'Regulatory Disclosures & Financial Compliance'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            {isAr ? 'قسم إخلاء المسؤولية والتنويهات النظامية المعتمدة' : 'Unified Regulatory Notices & Legal Disclaimers'}
          </h2>

          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-2xl mx-auto">
            {isAr
              ? 'تلتزم المنصة بأعلى معايير الشفافية والامتثال للأنظمة والتعليمات الصادرة عن البنك المركزي السعودي (ساما) ونظام حماية البيانات الشخصية (PDPL).'
              : 'Our platform strictly adheres to the regulations set forth by the Saudi Central Bank (SAMA) and the Saudi Personal Data Protection Law (PDPL).'}
          </p>
        </div>

        {/* Master Disclosure Grid (4 Structured Pillar Blocks) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Pillar 1: Independent Brokerage Disclosure */}
          <div className="bg-neutral-800/80 rounded-2xl p-6 border border-neutral-700/80 hover:border-emerald-500/40 transition-all space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-700/50 flex items-center justify-center text-emerald-400 shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">
                {isAr ? 'إفصاح صفة الوساطة الرقمية المستقلة' : 'Independent Brokerage Status'}
              </h3>
            </div>
            <p className="text-xs text-neutral-300 leading-relaxed">
              {isAr
                ? 'يعلن "ناصر أبو عبدالله" صراحةً عن صفته كمعلن ومسوّق وساطة مالية رقمية مستقل، ولا يمثل بنكاً أو مؤسسة إقراض مباشرة. يقتصر دور المنصة على تقديم الاستشارات الإرشادية وتسهيل الربط مع البنوك والشركات التمويلية المرخصة رسمياً من البنك المركزي السعودي (ساما).'
                : 'Nasser Abu Abdullah explicitly declares operating as an independent digital financial advertiser and broker, not a lending bank. Our role is strictly limited to advisory routing and connecting applicants with SAMA-licensed financing institutions.'}
            </p>
            <div className="pt-2 flex items-center gap-2 text-[11px] font-semibold text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              <span>{isAr ? 'وساطة إرشادية مستقلة معتمدة' : 'Certified independent advisory liaison'}</span>
            </div>
          </div>

          {/* Pillar 2: Zero Upfront Fees Guarantee */}
          <div className="bg-neutral-800/80 rounded-2xl p-6 border border-neutral-700/80 hover:border-amber-500/40 transition-all space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-950 border border-amber-700/50 flex items-center justify-center text-amber-400 shrink-0">
                <Banknote className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">
                {isAr ? 'ميثاق عدم تقاضي أي أتعاب أو رسوم مسبقة' : 'Zero Advance Retainer or Fee Policy'}
              </h3>
            </div>
            <p className="text-xs text-neutral-300 leading-relaxed">
              {isAr
                ? 'لا نطلب أو نتقاضى أي مبالغ نقدية أو رسوم مسبقة أو أتعاب استشارة من العميل نهائياً تحت أي مسمى. جميع الرسوم الإدارية الرسمية، إن وجدت، يتم خصمها حصرياً ومباشرةً من قبل الجهة التمويلية المعتمدة وفق الأنظمة والحدود المقررة من ساما عند توقيع العقد.'
                : 'We strictly never charge or request upfront advisory fees, retainers, or cash advances under any pretext. All official administrative costs, if applicable, are deducted exclusively by the licensed creditor pursuant to SAMA guidelines upon contract execution.'}
            </p>
            <div className="pt-2 flex items-center gap-2 text-[11px] font-semibold text-amber-400">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              <span>{isAr ? 'شفافية كاملة وصفر رسوم مسبقة 100%' : '100% Transparency & Zero Upfront Costs'}</span>
            </div>
          </div>

          {/* Pillar 3: Credit Decision & No Guaranteed Approvals */}
          <div className="bg-neutral-800/80 rounded-2xl p-6 border border-neutral-700/80 hover:border-emerald-500/40 transition-all space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-700/50 flex items-center justify-center text-emerald-400 shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">
                {isAr ? 'اختصاص القرار الائتماني للجهات المرخصة' : 'Licensed Underwriting Exclusivity'}
              </h3>
            </div>
            <p className="text-xs text-neutral-300 leading-relaxed">
              {isAr
                ? 'الموافقة النهائية على التمويل، وتحديد مبلغه، ومدة سداده، ومعدل النسبة السنوي (APR) هي اختصاص حصري للجهات التمويلية المرخصة وفقاً للتقييم الائتماني (سمة) ونسبة عبء الدين (DBR). نرفض تماماً تقديم أي وعود مضللة بموافقة مؤكدة دون خضوع الطلب للدراسة الائتمانية الرسمية.'
                : 'Final loan approval, ceiling amount, tenure, and APR remain under the exclusive purview of the licensed financing company based on credit rating (SIMAH) and debt burden ratio (DBR). We strictly disclaim misleading 100% guarantee promises without formal underwriting.'}
            </p>
            <div className="pt-2 flex items-center gap-2 text-[11px] font-semibold text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              <span>{isAr ? 'قرارات ائتمانية نظامية خاضعة لساما' : 'Regulated underwriting decisions'}</span>
            </div>
          </div>

          {/* Pillar 4: PDPL & Data Privacy Security */}
          <div className="bg-neutral-800/80 rounded-2xl p-6 border border-neutral-700/80 hover:border-amber-500/40 transition-all space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-950 border border-amber-700/50 flex items-center justify-center text-amber-400 shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">
                {isAr ? 'حماية البيانات الشخصية والسرية التامة (PDPL)' : 'Personal Data Protection (PDPL)'}
              </h3>
            </div>
            <p className="text-xs text-neutral-300 leading-relaxed">
              {isAr
                ? 'تعامل كافة البيانات المدخلة والمقدمة من العملاء بأقصى درجات السرية والأمان المشفر، وذلك تنفيذاً لنظام حماية البيانات الشخصية السعودي. لا يتم استخدام بيانات العميل إلا لغرض مراجعة الأهلية والتواصل الاستشاري، ولا تتم مشاركتها أو بيعها لأي طرف خارجي غير معني.'
                : 'All applicant data is processed with stringent confidentiality and encryption in compliance with the Saudi Personal Data Protection Law (PDPL). Details are used solely for preliminary qualification and advisory communication, never sold or shared.'}
            </p>
            <div className="pt-2 flex items-center gap-2 text-[11px] font-semibold text-amber-400">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              <span>{isAr ? 'تشفير كامل وامتثال لنظام PDPL' : 'Complete encryption & PDPL compliance'}</span>
            </div>
          </div>
        </div>

        {/* Responsible Borrowing Warning Box */}
        <div className="rounded-2xl p-5 sm:p-6 bg-neutral-950 border border-amber-400/40 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs text-neutral-300 mb-10">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h4 className="font-bold text-amber-300 text-sm">
              {isAr ? 'تنبيه بشأن الاقتراض المسؤول والأرقام الاسترشادية' : 'Responsible Borrowing & Indicative Estimates Warning'}
            </h4>
            <p className="text-neutral-400 leading-relaxed">
              {isAr
                ? 'التمويل التزام مالي طويل الأجل، ويجب على كل عميل دراسة ميزانيته الشخصية وقدرته على سداد الأقساط الشهرية قبل إبرام أي عقد رسمي. جميع القيم والمبالغ المذكورة في هذه المنصة هي استرشادية، والأرقام الملزمة تدرج في جدول السداد النهائي الصادر من جهة التمويل المرخصة.'
                : 'Financing constitutes a binding long-term obligation. Applicants should carefully evaluate repayment ability against monthly budgets. All figures displayed are strictly indicative; binding commitments are detailed in the official agreement issued by the licensed creditor.'}
            </p>
          </div>
        </div>

        {/* Legal Documents Direct Modal Access Cards */}
        <div className="space-y-4">
          <div className="text-center">
            <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-400">
              {isAr ? 'الوثائق القانونية والسياسات المعتمدة (اضغط للاطلاع الكامل)' : 'Certified Legal Documents & Policies (Click to View)'}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {legalCards.map((card) => {
              const CardIcon = card.icon;
              return (
                <button
                  key={card.id}
                  type="button"
                  onClick={() => onOpenLegal(card.id)}
                  className="bg-neutral-800/60 hover:bg-neutral-800 rounded-xl p-4 border border-neutral-700 hover:border-amber-400/60 transition-all text-start group flex flex-col justify-between cursor-pointer"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-700 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                        <CardIcon className="w-4 h-4" />
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-neutral-500 group-hover:text-amber-300 transition-colors" />
                    </div>

                    <h4 className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                      {isAr ? card.titleAr : card.titleEn}
                    </h4>

                    <p className="text-[11px] text-neutral-400 line-clamp-2 leading-relaxed">
                      {isAr ? card.descAr : card.descEn}
                    </p>
                  </div>

                  <span className="mt-3 text-[10px] font-semibold text-emerald-400 flex items-center gap-1">
                    <span>{isAr ? 'عرض الوثيقة الكاملة' : 'View Full Document'}</span>
                    <span>→</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
