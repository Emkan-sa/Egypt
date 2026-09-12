import React, { useState, useMemo } from 'react';
import { Calculator, Sparkles, MessageCircle, ArrowRight, ArrowLeft, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Language, TranslationStrings } from '../types';
import { createWhatsAppUrl } from '../utils/whatsapp';
import { logWhatsAppClick } from '../utils/snapchatPixel';

interface FinancingCalculatorProps {
  lang: Language;
  t: TranslationStrings;
  onApplyWithAmount?: (amount: number, tenure: number, sector: string) => void;
}

export const FinancingCalculator: React.FC<FinancingCalculatorProps> = ({
  lang,
  onApplyWithAmount,
}) => {
  const isAr = lang === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const [amount, setAmount] = useState<number>(100000);
  const [tenureMonths, setTenureMonths] = useState<number>(36);
  const [sector, setSector] = useState<string>('حكومي');

  // Quick preset amount buttons
  const presetAmounts = [30000, 50000, 100000, 200000, 350000, 500000];
  const tenureOptions = [12, 24, 36, 48, 60];

  // Indicative calculations (indicative representative APR between 3.5% and 6.5% flat depending on sector)
  const calculation = useMemo(() => {
    // Representative annual flat profit margin for indicative preview
    let profitRate = 0.045; // 4.5% annual
    if (sector === 'عسكري') profitRate = 0.042;
    if (sector === 'خاص') profitRate = 0.052;
    if (sector === 'متقاعد') profitRate = 0.040;

    const totalProfit = amount * profitRate * (tenureMonths / 12);
    const totalPayable = amount + totalProfit;
    const monthlyInstallment = Math.round(totalPayable / tenureMonths);

    return {
      monthlyInstallment,
      totalProfit: Math.round(totalProfit),
      totalPayable: Math.round(totalPayable),
    };
  }, [amount, tenureMonths, sector]);

  const handleAmountChange = (newVal: number) => {
    setAmount(newVal);
  };

  const handleTenureChange = (months: number) => {
    setTenureMonths(months);
  };

  const handleSectorChange = (sec: string) => {
    setSector(sec);
  };

  const whatsappInquiryMsg = isAr
    ? `السلام عليكم أستاذ ناصر، استخدمت حاسبة التمويل وأود الاستفسار عن إمكانية تمويل شخصي بمبلغ ${amount.toLocaleString()} ريال على ${tenureMonths} شهراً (${sector}).`
    : `Hello Mr. Nasser, I used the financing calculator and wish to inquire about a personal financing of SAR ${amount.toLocaleString()} for ${tenureMonths} months (${sector}).`;

  return (
    <section id="calculator" className="py-16 bg-neutral-50 dark:bg-neutral-900/60 border-t border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 text-xs font-bold">
            <Calculator className="w-3.5 h-3.5 text-emerald-600" />
            <span>{isAr ? 'حاسبة التمويل الشخصي الاسترشادية' : 'Indicative Financing Estimator'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 dark:text-white tracking-tight">
            {isAr ? 'احسب قسطك الشهري التقديري في ثوانٍ' : 'Estimate Your Monthly Installment in Seconds'}
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto">
            {isAr
              ? 'حدّد مبلغ التمويل المطلوب وفترة السداد المناسبة لظروفك واكتشف القسط التقديري بدون تحويل راتب.'
              : 'Select your preferred amount and tenure to discover estimated payments without salary transfer.'}
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="bg-white dark:bg-neutral-950 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Controls Column */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6">
            {/* 1. Financing Amount Slider */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label htmlFor="amount-slider" className="text-xs font-bold text-neutral-700 dark:text-neutral-300">
                  {isAr ? 'مبلغ التمويل المطلوب (ريال)' : 'Financing Amount (SAR)'}
                </label>
                <div className="px-3.5 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 font-black text-base sm:text-lg">
                  {amount.toLocaleString()} {isAr ? 'ر.س' : 'SAR'}
                </div>
              </div>

              <input
                id="amount-slider"
                type="range"
                min={20000}
                max={500000}
                step={5000}
                value={amount}
                onChange={(e) => handleAmountChange(Number(e.target.value))}
                className="w-full h-2.5 bg-neutral-200 dark:bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />

              <div className="flex justify-between text-[11px] text-neutral-400 font-semibold">
                <span>20,000 {isAr ? 'ر.س' : 'SAR'}</span>
                <span>250,000 {isAr ? 'ر.س' : 'SAR'}</span>
                <span>500,000 {isAr ? 'ر.س' : 'SAR'}</span>
              </div>

              {/* Quick Presets */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {presetAmounts.map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => handleAmountChange(preset)}
                    className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                      amount === preset
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200'
                    }`}
                  >
                    {preset >= 1000 ? `${preset / 1000}k` : preset}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Repayment Tenure */}
            <div className="space-y-2.5">
              <label className="text-xs font-bold text-neutral-700 dark:text-neutral-300">
                {isAr ? 'مدة السداد بالشهور' : 'Tenure (Months)'}
              </label>
              <div className="grid grid-cols-5 gap-2">
                {tenureOptions.map((months) => (
                  <button
                    key={months}
                    type="button"
                    onClick={() => handleTenureChange(months)}
                    className={`py-2.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                      tenureMonths === months
                        ? 'bg-emerald-600 text-white shadow-sm ring-2 ring-emerald-400/40'
                        : 'bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800'
                    }`}
                  >
                    {months} {isAr ? 'شهر' : 'Mo'}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Employment Sector */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-neutral-700 dark:text-neutral-300">
                {isAr ? 'جهة العمل' : 'Employment Sector'}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'حكومي', labelAr: 'حكومي (مدني)', labelEn: 'Civil Gov' },
                  { id: 'عسكري', labelAr: 'قطاع عسكري', labelEn: 'Military' },
                  { id: 'خاص', labelAr: 'قطاع خاص', labelEn: 'Private' },
                  { id: 'متقاعد', labelAr: 'متقاعد', labelEn: 'Retired' },
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => handleSectorChange(s.id)}
                    className={`py-2 px-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer truncate ${
                      sector === s.id
                        ? 'bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900'
                        : 'bg-neutral-100 dark:bg-neutral-800/80 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                    }`}
                  >
                    {isAr ? s.labelAr : s.labelEn}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Result Card Column */}
          <div className="lg:col-span-5 bg-gradient-to-br from-emerald-950 via-neutral-950 to-neutral-900 text-white p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-s border-emerald-900/50">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-emerald-300 font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  {isAr ? 'النتيجة الاسترشادية' : 'Estimated Result'}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-md bg-white/10 text-emerald-200">
                  {isAr ? 'بدون تحويل راتب' : 'No Salary Transfer'}
                </span>
              </div>

              {/* Big Monthly Installment */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 text-center space-y-1">
                <p className="text-xs text-neutral-400 font-semibold">
                  {isAr ? 'القسط الشهري التقديري' : 'Estimated Monthly Payment'}
                </p>
                <div className="text-3xl sm:text-4xl font-black text-amber-400 tracking-tight">
                  {calculation.monthlyInstallment.toLocaleString()}
                  <span className="text-sm sm:text-base font-bold text-neutral-300 ms-1">
                    {isAr ? 'ريال / شهر' : 'SAR / mo'}
                  </span>
                </div>
              </div>

              {/* Breakdown Rows */}
              <div className="space-y-2 text-xs text-neutral-300 divide-y divide-neutral-800">
                <div className="flex items-center justify-between pt-1">
                  <span className="text-neutral-400">{isAr ? 'أصل مبلغ التمويل:' : 'Principal Amount:'}</span>
                  <span className="font-bold text-white">{amount.toLocaleString()} {isAr ? 'ر.س' : 'SAR'}</span>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-neutral-400">{isAr ? 'فترة السداد:' : 'Tenure:'}</span>
                  <span className="font-bold text-white">{tenureMonths} {isAr ? 'شهراً' : 'Months'}</span>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-neutral-400">{isAr ? 'إجمالي السداد التقديري:' : 'Total Est. Payable:'}</span>
                  <span className="font-bold text-emerald-400">{calculation.totalPayable.toLocaleString()} {isAr ? 'ر.س' : 'SAR'}</span>
                </div>
              </div>

              {/* Regulatory Notice */}
              <p className="text-[10px] text-neutral-400 leading-relaxed bg-black/30 p-2.5 rounded-xl border border-neutral-800">
                {isAr
                  ? 'تنبيه: الأرقام استرشادية، وتخضع النسبة المئوية السنوية APR ومبلغ التمويل الفعلي للدراسة والتقييم الائتماني لدى الجهات التمويلية المرخصة من ساما.'
                  : 'Notice: Calculations are indicative. Actual APR and approval depend on credit evaluation by SAMA-licensed entities.'}
              </p>
            </div>

            {/* CTAs */}
            <div className="pt-6 space-y-2.5">
              <a
                href={createWhatsAppUrl(whatsappInquiryMsg)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  logWhatsAppClick('calculator_result_btn');
                }}
                className="w-full min-h-[48px] py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50 active:scale-98 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                <span>{isAr ? 'طلب التمويل بهذا المبلغ عبر واتساب' : 'Apply for this Amount via WhatsApp'}</span>
              </a>

              <a
                href="#apply"
                onClick={() => {
                  if (onApplyWithAmount) {
                    onApplyWithAmount(amount, tenureMonths, sector);
                  }
                }}
                className="w-full min-h-[44px] py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs flex items-center justify-center gap-2 border border-white/20 transition-all cursor-pointer"
              >
                <span>{isAr ? 'تعبئة نموذج الاستشارة السريع' : 'Fill Consultation Form'}</span>
                <ArrowIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
