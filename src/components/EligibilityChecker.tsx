import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, HelpCircle, ArrowRight, ArrowLeft, MessageCircle, ShieldCheck, Sparkles, RefreshCw } from 'lucide-react';
import { Language, TranslationStrings } from '../types';
import { createWhatsAppUrl } from '../utils/whatsapp';
import { logWhatsAppClick } from '../utils/snapchatPixel';

interface EligibilityCheckerProps {
  lang: Language;
  t: TranslationStrings;
}

export const EligibilityChecker: React.FC<EligibilityCheckerProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const [step, setStep] = useState<number>(1);
  const [salaryRange, setSalaryRange] = useState<string>('7000-15000');
  const [sector, setSector] = useState<string>('حكومي');
  const [hasObligations, setHasObligations] = useState<string>('low');

  const handleSalarySelect = (range: string) => {
    setSalaryRange(range);
    setStep(2);
  };

  const handleSectorSelect = (sec: string) => {
    setSector(sec);
    setStep(3);
  };

  const handleObligationSelect = (ob: string) => {
    setHasObligations(ob);
    setStep(4); // Show result

    // Determine estimated limit
    let estimatedLimit = 150000;
    if (salaryRange === '15000+') estimatedLimit = 350000;
    if (salaryRange === '4000-7000') estimatedLimit = 750000;
    if (hasObligations === 'simah') estimatedLimit = 100000;
  };

  const resetChecker = () => {
    setStep(1);
    setSalaryRange('7000-15000');
    setSector('حكومي');
    setHasObligations('low');
  };

  const getResult = () => {
    if (hasObligations === 'simah') {
      return {
        title: isAr ? 'مؤهل لبرنامج سداد المتعثرات وتحديث سمة' : 'Eligible for Debt Clearance & SIMAH Fix',
        badge: isAr ? 'حلول خاصة للمتعثرين' : 'Specialized Clearance Solutions',
        desc: isAr 
          ? 'لديك فرصة للحصول على تمويل لمعالجة التعثرات الائتمانية وإعادة هيكلة وتوحيد الالتزامات في قسط واحد ميسر.'
          : 'You are eligible for debt settlement and restructuring programs to consolidate installments into 1 payment.',
        color: 'emerald',
      };
    }

    let est = '150,000 - 300,000';
    if (salaryRange === '15000+') est = '300,000 - 500,000';
    if (salaryRange === '4000-7000') est = '50,000 - 120,000';

    return {
      title: isAr ? `مؤهل مبدئياً لتمويل حتى ${est} ريال` : `Eligible for up to SAR ${est}`,
      badge: isAr ? 'نسبة قبول مرتفعة جداً' : 'High Probability Approval',
      desc: isAr
        ? 'بناءً على قطاع عملك ودخلك، أنت مؤهل مبدئياً للتمويل الشخصي المباشر بدون اشتراط تحويل الراتب عبر الجهات المرخصة من ساما.'
        : 'Based on your profile, you pre-qualify for direct personal financing without salary transfer via SAMA licensed entities.',
      color: 'emerald',
    };
  };

  const result = getResult();

  const eligibilityWhatsAppMsg = isAr
    ? `السلام عليكم أستاذ ناصر، أجريت فحص الأهلية بالمنصة وكانت النتيجة: (${result.title}) بقطاع (${sector}). أود استكمال الإجراءات ومعرفة العروض.`
    : `Hello Mr. Nasser, I completed the eligibility check: (${result.title}) in (${sector}). I would like to proceed with the best offer.`;

  return (
    <section id="eligibility" className="py-14 bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Card Frame */}
        <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-6 sm:p-10 shadow-sm">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-neutral-200 dark:border-neutral-800">
            <div className="space-y-1 text-center sm:text-start">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>{isAr ? 'فحص الأهلية المبدئي في 30 ثانية' : '30-Sec Eligibility Checker'}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-neutral-900 dark:text-white">
                {isAr ? 'اكتشف فرصتك للحصول على تمويل شخصي' : 'Check Your Pre-Approval Eligibility'}
              </h3>
            </div>

            {/* Progress Indicator */}
            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4].map((s) => (
                <div
                  key={s}
                  className={`h-2 rounded-full transition-all ${
                    step >= s ? 'w-6 bg-emerald-600' : 'w-2 bg-neutral-300 dark:bg-neutral-700'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Step 1: Salary Range */}
          {step === 1 && (
            <div className="pt-8 space-y-6 animate-in fade-in duration-300">
              <div className="space-y-1">
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  {isAr ? 'الخطوة 1 من 3' : 'Step 1 of 3'}
                </span>
                <h4 className="text-base sm:text-lg font-black text-neutral-900 dark:text-white">
                  {isAr ? 'ما هو متوسط راتبك أو دخلك الشهري التقريبي؟' : 'What is your approximate monthly net salary?'}
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: '4000-7000', labelAr: '4,000 إلى 7,000 ريال', labelEn: 'SAR 4,000 - 7,000' },
                  { id: '7000-15000', labelAr: '7,000 إلى 15,000 ريال (الأكثر شيوعاً)', labelEn: 'SAR 7,000 - 15,000 (Most common)' },
                  { id: '15000+', labelAr: 'أكثر من 15,000 ريال', labelEn: 'SAR 15,000+' },
                  { id: 'less-4000', labelAr: 'أقل من 4,000 ريال', labelEn: 'Under SAR 4,000' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => handleSalarySelect(opt.id)}
                    className="p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-emerald-500 text-neutral-800 dark:text-neutral-200 text-start font-bold text-xs sm:text-sm hover:shadow-md transition-all active:scale-98 cursor-pointer flex items-center justify-between"
                  >
                    <span>{isAr ? opt.labelAr : opt.labelEn}</span>
                    <ArrowIcon className="w-4 h-4 text-neutral-400" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Sector */}
          {step === 2 && (
            <div className="pt-8 space-y-6 animate-in fade-in duration-300">
              <div className="space-y-1">
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  {isAr ? 'الخطوة 2 من 3' : 'Step 2 of 3'}
                </span>
                <h4 className="text-base sm:text-lg font-black text-neutral-900 dark:text-white">
                  {isAr ? 'ما هي جهة عملك الحالية؟' : 'What is your current employment sector?'}
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: 'حكومي', labelAr: 'قطاع حكومي (مدني)', labelEn: 'Civil Government' },
                  { id: 'عسكري', labelAr: 'قطاع عسكري', labelEn: 'Military' },
                  { id: 'شبه حكومي', labelAr: 'قطاع شبه حكومي / شركات كبرى', labelEn: 'Semi-Gov / Major Corporates' },
                  { id: 'خاص معتمد', labelAr: 'قطاع خاص معتمد', labelEn: 'Accredited Private Sector' },
                  { id: 'خاص غير معتمد', labelAr: 'قطاع خاص غير معتمد', labelEn: 'Non-Accredited Private' },
                  { id: 'متقاعد', labelAr: 'متقاعد (مدني أو عسكري)', labelEn: 'Retired' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => handleSectorSelect(opt.id)}
                    className="p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-emerald-500 text-neutral-800 dark:text-neutral-200 text-start font-bold text-xs sm:text-sm hover:shadow-md transition-all active:scale-98 cursor-pointer flex items-center justify-between"
                  >
                    <span>{isAr ? opt.labelAr : opt.labelEn}</span>
                    <ArrowIcon className="w-4 h-4 text-neutral-400" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Commitments / SIMAH */}
          {step === 3 && (
            <div className="pt-8 space-y-6 animate-in fade-in duration-300">
              <div className="space-y-1">
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  {isAr ? 'الخطوة 3 من 3' : 'Step 3 of 3'}
                </span>
                <h4 className="text-base sm:text-lg font-black text-neutral-900 dark:text-white">
                  {isAr ? 'هل لديك التزامات مالية أو تعثرات قائمة مسجلة؟' : 'Do you have current obligations or active SIMAH records?'}
                </h4>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {[
                  { 
                    id: 'none', 
                    labelAr: 'لا توجد التزامات قائمة (سجل خالٍ تماماً)', 
                    labelEn: 'No existing commitments (Clear Record)' 
                  },
                  { 
                    id: 'low', 
                    labelAr: 'لدي قرض قائم حالياً (أرغب بتمويل إضافي / تكميلي)', 
                    labelEn: 'I have active finance (Seeking Top-up / Additional)' 
                  },
                  { 
                    id: 'simah', 
                    labelAr: 'لدي تعثرات أو إيقاف خدمات مؤقت (أرغب بسداد المتعثرات وتوحيد الأقساط)', 
                    labelEn: 'I have delayed dues / SIMAH records (Seeking settlement & consolidation)' 
                  },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => handleObligationSelect(opt.id)}
                    className="p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-emerald-500 text-neutral-800 dark:text-neutral-200 text-start font-bold text-xs sm:text-sm hover:shadow-md transition-all active:scale-98 cursor-pointer flex items-center justify-between"
                  >
                    <span>{isAr ? opt.labelAr : opt.labelEn}</span>
                    <ArrowIcon className="w-4 h-4 text-neutral-400" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Instant Result */}
          {step === 4 && (
            <div className="pt-8 space-y-6 animate-in zoom-in-95 duration-300">
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-emerald-950 via-neutral-950 to-neutral-900 text-white space-y-4 border border-emerald-500/30">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{result.badge}</span>
                  </span>

                  <button
                    type="button"
                    onClick={resetChecker}
                    className="text-neutral-400 hover:text-white text-xs flex items-center gap-1 cursor-pointer"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>{isAr ? 'إعادة الفحص' : 'Restart'}</span>
                  </button>
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-xl sm:text-2xl font-black text-amber-300">
                    {result.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-2xl">
                    {result.desc}
                  </p>
                </div>

                {/* Profile tags */}
                <div className="flex flex-wrap gap-2 pt-2 text-xs">
                  <span className="px-3 py-1 rounded-xl bg-white/10 text-neutral-300">
                    {isAr ? `القطاع: ${sector}` : `Sector: ${sector}`}
                  </span>
                  <span className="px-3 py-1 rounded-xl bg-white/10 text-neutral-300">
                    {isAr ? 'بدون تحويل راتب' : 'No Salary Transfer'}
                  </span>
                  <span className="px-3 py-1 rounded-xl bg-white/10 text-emerald-300 font-bold">
                    {isAr ? 'استشارة مجانية 100%' : '100% Free Consultation'}
                  </span>
                </div>

                {/* Action CTAs */}
                <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href={createWhatsAppUrl(eligibilityWhatsAppMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      logWhatsAppClick('eligibility_result_whatsapp');
                    }}
                    className="w-full sm:flex-1 min-h-[48px] py-3.5 px-5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 active:scale-98 transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                    <span>{isAr ? 'متابعة النتيجة مع المستشار في واتساب' : 'Discuss Result on WhatsApp'}</span>
                  </a>

                  <a
                    href="#apply"
                    className="w-full sm:w-auto min-h-[48px] py-3.5 px-6 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs flex items-center justify-center gap-2 border border-white/20 transition-all"
                  >
                    <span>{isAr ? 'قدّم طلبك الآن' : 'Apply Now'}</span>
                    <ArrowIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
