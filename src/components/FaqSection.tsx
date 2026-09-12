import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';
import { Language, TranslationStrings } from '../types';

interface FaqSectionProps {
  lang: Language;
  t: TranslationStrings;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ lang, t }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      qAr: "هل يشترط تحويل الراتب للحصول على التمويل الشخصي المباشر؟",
      qEn: "Is salary transfer mandatory to obtain direct personal financing?",
      aAr: "لا، التمويل الشخصي المتاح يتميز بأنه بدون تحويل راتب، مما يتيح لك البقاء على حسابك البنكي الحالي والاستفادة من السيولة النقدية دون الحاجة لتغيير جهة إيداع مرتبك.",
      aEn: "No, this financing is specifically provided without salary transfer requirements, enabling you to retain your current bank account without rerouting your salary deposit."
    },
    {
      qAr: "ما هو الحد الأدنى والأعلى لمبالغ التمويل وفترات السداد؟",
      qEn: "What are the minimum and maximum financing limits and tenure?",
      aAr: "تبدأ مبالغ التمويل من 20,000 ريال وتصل حتى 500,000 ريال سعودي. أما فترات السداد فتبدأ من 3 شهور وتمتد حتى 60 شهراً (5 سنوات) وفق جدول أقساط مرن يلائم ميزانيتك الشهرية.",
      aEn: "Financing amounts range from 20,000 SAR up to 500,000 SAR. Repayment periods start from 3 months up to 60 months (5 years) with flexible monthly schedules."
    },
    {
      qAr: "هل يشترط وجود تمويل قائم أو خلو السجل من القروض؟",
      qEn: "Is an existing loan required or does my record need to be completely free of debt?",
      aAr: "لا يشترط وجود تمويل قائم مسبقاً، كما يمكن التقديم حتى في حال وجود تمويلات سابقة، بشرط أن يتناسب القسط الإجمالي مع النسبة النظامية المسموح بها لعبء الدين (DBR) وفق ضوابط البنك المركزي السعودي.",
      aEn: "No prior existing loan is required. You can apply even with active financing, provided the total debt burden ratio (DBR) complies with SAMA regulatory ceilings."
    },
    {
      qAr: "ما هي الصفة القانونية لناصر أبو عبدالله، ومن هي الجهة التمويلية؟",
      qEn: "What is the legal status of Nasser Abu Abdullah, and who is the creditor?",
      aAr: "ناصر أبو عبدالله هو معلن ومسوّق وساطة مالية رقمية مستقل، وليس بنكاً أو مؤسسة إقراض مباشرة. نقوم بالربط وتقديم الاستشارات الاسترشادية للتقديم عبر الجهات التمويلية والشركات والبنوك المرخصة والمعتمدة رسمياً من البنك المركزي السعودي (ساما).",
      aEn: "Nasser Abu Abdullah operates as an independent digital marketing and financing broker, not a lending bank. We facilitate applications and guidance toward SAMA-licensed entities and partner financing institutions."
    },
    {
      qAr: "هل يطلب المعلن أي رسوم استشارة أو أتعاب مسبقة؟",
      qEn: "Does the advertiser charge any advance consultation fees or retainers?",
      aAr: "إطلاقاً، لا نطلب أو نتقاضى أي مبالغ مالية أو رسوم مسبقة من العملاء تحت أي مسمى. الرسوم الإدارية الرسمية تخصم فقط من قبل الجهة التمويلية المعتمدة وفق لوائح البنك المركزي السعودي عند توقيع العقد النهائي.",
      aEn: "Strictly zero advance fees. We never charge upfront retainers. Official administrative fees are strictly levied by the licensed creditor at disbursement according to SAMA rules."
    },
    {
      qAr: "كم يستغرق الوقت من تقديم الطلب حتى استلام التمويل؟",
      qEn: "How long does it take from application to fund disbursement?",
      aAr: "تتم دراسة الطلب المبدئي والتواصل معك خلال دقائق عبر واتساب، وفي حال اكتمال المستندات ومطابقة الشروط الائتمانية لدى الجهة التمويلية، يتم استكمال التوقيع الرقمي وإيداع المبلغ في حسابك خلال مدة قياسية تبدأ من 24 ساعة عمل.",
      aEn: "Initial review occurs in minutes on WhatsApp. Upon document completion and credit clearance with the licensed lender, digital execution and disbursement typically occur within 24 business hours."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white dark:bg-neutral-950 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 text-xs font-bold border border-amber-300/40">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{t.faqTitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 dark:text-white tracking-tight">
            {t.faqTitle}
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
            {t.faqSubtitle}
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-900/40 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-start flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800/50 transition-colors"
                >
                  <span>{lang === 'ar' ? item.qAr : item.qEn}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-emerald-600' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed border-t border-neutral-200/60 dark:border-neutral-800/60">
                    <p>{lang === 'ar' ? item.aAr : item.aEn}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
