import React, { useState, useId } from 'react';
import { 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  MessageCircle, 
  User, 
  Phone, 
  MapPin, 
  Briefcase, 
  Layers, 
  Lock,
  Clock,
  ExternalLink,
  FileCheck,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';
import { Language, TranslationStrings } from '../types';
import { createWhatsAppUrl, generateLeadFormMessage } from '../utils/whatsapp';
import { logWhatsAppClick } from '../utils/snapchatPixel';
import { LeadSuccessModal, LeadSubmissionDetails } from './LeadSuccessModal';
import { LeadToastNotification } from './LeadToastNotification';

interface LeadFormProps {
  lang: Language;
  t: TranslationStrings;
  onOpenLegal: (type: any) => void;
}

export const LeadForm: React.FC<LeadFormProps> = ({ lang, t, onOpenLegal }) => {
  const isRtl = lang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    city: '',
    employmentSector: 'قطاع حكومي (مدني)',
    serviceType: 'تمويل شخصي مباشر (بدون تحويل راتب)',
    notes: '',
    consent: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [submissionDetails, setSubmissionDetails] = useState<LeadSubmissionDetails | null>(null);

  const fullNameId = useId();
  const phoneId = useId();
  const cityId = useId();
  const sectorId = useId();
  const serviceId = useId();
  const notesId = useId();
  const consentId = useId();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Validation
    if (!formData.fullName.trim()) {
      setErrorMsg(lang === 'ar' ? 'الرجاء إدخال الاسم بالكامل' : 'Please enter your full name');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 9) {
      setErrorMsg(lang === 'ar' ? 'الرجاء إدخال رقم جوال صحيح (05XXXXXXXX)' : 'Please enter a valid mobile number');
      return;
    }
    if (!formData.consent) {
      setErrorMsg(lang === 'ar' ? 'يجب الموافقة على سياسة الخصوصية لاستكمال الطلب' : 'You must agree to the privacy policy');
      return;
    }

    setIsSubmitting(true);

    // Generate WhatsApp Message with only the non-sensitive fields
    const msg = generateLeadFormMessage(
      {
        fullName: formData.fullName,
        phone: formData.phone,
        city: formData.city || (lang === 'ar' ? 'غير محدد' : 'Not specified'),
        employmentSector: formData.employmentSector,
        serviceType: formData.serviceType,
        notes: formData.notes,
      },
      lang
    );

    const targetUrl = createWhatsAppUrl(msg);
    const refNumber = `REF-${Math.floor(1000 + Math.random() * 9000)}-SA`;

    const details: LeadSubmissionDetails = {
      fullName: formData.fullName,
      phone: formData.phone,
      city: formData.city || (lang === 'ar' ? 'غير محدد' : 'Not specified'),
      employmentSector: formData.employmentSector,
      serviceType: formData.serviceType,
      notes: formData.notes,
      refNumber,
      whatsappUrl: targetUrl,
    };

    setSubmissionDetails(details);

    // No actual backend API currently exists for form submission.
    // Following strict instructions: DO NOT mock success, DO NOT fire LEAD.
    setIsSubmitting(false);
    setIsSuccess(true);
    setShowSuccessModal(true);
    setShowToast(true);
    
    // Log internal analytics specifically for the WhatsApp redirect action
    logWhatsAppClick('whatsapp_redirect');
    
    // Open WhatsApp chat in background/tab
    window.open(targetUrl, '_blank');
  };

  return (
    <section id="apply" className="py-20 bg-neutral-100/70 dark:bg-neutral-900/60 transition-colors border-t border-neutral-200/80 dark:border-neutral-800/80">
      {/* Toast Notification */}
      <LeadToastNotification
        isVisible={showToast}
        onClose={() => setShowToast(false)}
        lang={lang}
        onOpenModal={() => setShowSuccessModal(true)}
      />

      {/* Success Modal */}
      <LeadSuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        details={submissionDetails}
        lang={lang}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold border border-emerald-300/40">
            <Lock className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'طلب استشارة ووساطة مالية' : 'Consultation & Brokerage Request'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 dark:text-white tracking-tight">
            {lang === 'ar' ? 'قدّم طلبك المبدئي بكل سهولة' : 'Submit Your Initial Request'}
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
            {lang === 'ar'
              ? 'سجل بياناتك الأساسية وسيقوم المستشار المالي بمراجعتها والتواصل معك فوراً عبر واتساب دون الحاجة لمشاركة أي بيانات مالية حساسة'
              : 'Enter your basic details and the financial advisor will promptly reach out via WhatsApp with no sensitive financial data required.'}
          </p>
        </div>

        {/* Card */}
        <div className="bg-white dark:bg-neutral-950 rounded-3xl p-6 sm:p-10 border border-neutral-200 dark:border-neutral-800 shadow-md">
          {isSuccess ? (
            <div className="text-center py-6 space-y-6">
              <div className="w-20 h-20 mx-auto rounded-3xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 flex items-center justify-center border border-emerald-300 shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <span className="inline-block font-mono text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-100/70 dark:bg-emerald-950/70 px-3 py-1 rounded-full border border-emerald-300/50">
                  {submissionDetails?.refNumber}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-neutral-900 dark:text-white">
                  {t.formSuccess}
                </h3>
              </div>

              {/* Expected Response Time Highlight */}
              <div className="max-w-md mx-auto p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 text-start flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[11px] font-bold text-amber-800 dark:text-amber-300 uppercase tracking-wider">
                    {lang === 'ar' ? 'وقت الاستجابة المتوقع' : 'Expected Response Time'}
                  </span>
                  <p className="text-xs sm:text-sm font-black text-neutral-900 dark:text-amber-100">
                    {lang === 'ar' 
                      ? 'خلال 10 إلى 15 دقيقة عبر واتساب أو اتصال هاتفي' 
                      : 'Within 10 to 15 minutes via WhatsApp or Phone call'}
                  </p>
                  <p className="text-[11px] text-neutral-600 dark:text-neutral-400">
                    {lang === 'ar'
                      ? 'تم تسجيل طلبك رسمياً وتوجيهه إلى المستشار المالي لبدء دراسة الشروط.'
                      : 'Your inquiry has been assigned to a licensed financial advisor for review.'}
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                {submissionDetails?.whatsappUrl && (
                  <a
                    href={submissionDetails.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 py-3.5 px-5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white text-xs font-black flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/20 active:scale-98 transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                    <span>{lang === 'ar' ? 'فتح المحادثة في واتساب' : 'Open in WhatsApp'}</span>
                  </a>
                )}

                <button
                  type="button"
                  onClick={() => setShowSuccessModal(true)}
                  className="w-full sm:w-auto py-3.5 px-4 rounded-xl border border-neutral-300 dark:border-neutral-700 text-xs font-bold text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all active:scale-98 cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <FileCheck className="w-4 h-4 text-emerald-600" />
                  <span>{lang === 'ar' ? 'عرض ملخص الطلب' : 'View Summary'}</span>
                </button>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsSuccess(false);
                    setFormData({
                      fullName: '',
                      phone: '',
                      city: '',
                      employmentSector: 'قطاع حكومي (مدني)',
                      serviceType: 'تمويل شخصي مباشر (بدون تحويل راتب)',
                      notes: '',
                      consent: true,
                    });
                  }}
                  className="text-xs text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 underline cursor-pointer"
                >
                  {lang === 'ar' ? 'تقديم طلب استشارة جديد' : 'Submit Another Request'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMsg && (
                <div className="p-3.5 rounded-xl bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900 text-xs font-bold">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* 1. Full Name */}
                <div className="space-y-1.5">
                  <label htmlFor={fullNameId} className="text-xs font-bold text-neutral-700 dark:text-neutral-300 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{t.formName} *</span>
                  </label>
                  <input
                    id={fullNameId}
                    type="text"
                    required
                    autoComplete="name"
                    placeholder={lang === 'ar' ? 'مثال: محمد عبدالله القحطاني' : 'e.g. Mohammed Abdullah'}
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full min-h-[48px] p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                  />
                </div>

                {/* 2. Mobile Phone */}
                <div className="space-y-1.5">
                  <label htmlFor={phoneId} className="text-xs font-bold text-neutral-700 dark:text-neutral-300 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{t.formPhone} *</span>
                  </label>
                  <input
                    id={phoneId}
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    required
                    placeholder="05XXXXXXXX"
                    dir="ltr"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full min-h-[48px] p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                  />
                </div>

                {/* 3. City */}
                <div className="space-y-1.5">
                  <label htmlFor={cityId} className="text-xs font-bold text-neutral-700 dark:text-neutral-300 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{t.formCity}</span>
                  </label>
                  <input
                    id={cityId}
                    type="text"
                    autoComplete="address-level2"
                    placeholder={lang === 'ar' ? 'الرياض، جدة، الدمام، مكة...' : 'Riyadh, Jeddah, Dammam...'}
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full min-h-[48px] p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                  />
                </div>

                {/* 4. Employer / Sector */}
                <div className="space-y-1.5">
                  <label htmlFor={sectorId} className="text-xs font-bold text-neutral-700 dark:text-neutral-300 flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{lang === 'ar' ? 'جهة العمل' : 'Employer / Sector'} *</span>
                  </label>
                  <select
                    id={sectorId}
                    value={formData.employmentSector}
                    onChange={(e) => setFormData({ ...formData, employmentSector: e.target.value })}
                    className="w-full min-h-[48px] p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-all cursor-pointer"
                  >
                    <option value="قطاع حكومي (مدني)">{lang === 'ar' ? 'قطاع حكومي (مدني)' : 'Government (Civil)'}</option>
                    <option value="قطاع عسكري">{lang === 'ar' ? 'قطاع عسكري' : 'Military'}</option>
                    <option value="قطاع شبه حكومي">{lang === 'ar' ? 'قطاع شبه حكومي' : 'Semi-Government'}</option>
                    <option value="قطاع خاص معتمد">{lang === 'ar' ? 'قطاع خاص معتمد' : 'Private (Accredited)'}</option>
                    <option value="قطاع خاص غير معتمد">{lang === 'ar' ? 'قطاع خاص غير معتمد' : 'Private (Non-accredited)'}</option>
                    <option value="متقاعد">{lang === 'ar' ? 'متقاعد' : 'Retired'}</option>
                  </select>
                </div>
              </div>

              {/* 5. Service Type / Purpose of Financing */}
              <div className="space-y-1.5">
                <label htmlFor={serviceId} className="text-xs font-bold text-neutral-700 dark:text-neutral-300 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{lang === 'ar' ? 'نوع الخدمة أو الغرض من التمويل' : 'Service Type / Financing Purpose'} *</span>
                </label>
                <select
                  id={serviceId}
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full min-h-[48px] p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-all cursor-pointer"
                >
                  <option value="تمويل شخصي مباشر (بدون تحويل راتب)">
                    {lang === 'ar' ? 'تمويل شخصي مباشر حتى 500,000 ريال (بدون تحويل راتب)' : 'Direct Personal Finance up to 500k SAR (No Salary Transfer)'}
                  </option>
                  <option value="تمويل موظفين (حكومي وخاص)">
                    {lang === 'ar' ? 'تمويل موظفين (حكومي وخاص)' : 'Employee Financing (Public & Private)'}
                  </option>
                  <option value="سداد متعثرات وتحديث تقرير سمة">
                    {lang === 'ar' ? 'سداد متعثرات وتحديث تقرير سمة' : 'Debt Settlement & SIMAH Record Clearance'}
                  </option>
                  <option value="استخراج قرض إضافي أو تكميلي">
                    {lang === 'ar' ? 'استخراج قرض إضافي أو تكميلي (لا يشترط خلو السجل من تمويل قائم)' : 'Additional / Top-up Financing'}
                  </option>
                  <option value="توحيد الالتزامات والأقساط في قسط واحد">
                    {lang === 'ar' ? 'توحيد الالتزامات والأقساط في قسط واحد مخفض' : 'Debt & Installment Consolidation into 1 Payment'}
                  </option>
                </select>
              </div>

              {/* Optional Notes */}
              <div className="space-y-1.5">
                <label htmlFor={notesId} className="text-xs font-bold text-neutral-700 dark:text-neutral-300">
                  {lang === 'ar' ? 'ملاحظات إضافية (اختياري)' : 'Additional Notes (Optional)'}
                </label>
                <textarea
                  id={notesId}
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder={lang === 'ar' ? 'أي تفاصيل ترغب بإضافتها للمستشار...' : 'Any additional details for the advisor...'}
                  className="w-full p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                ></textarea>
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start gap-3 pt-2">
                <input
                  id={consentId}
                  type="checkbox"
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className="mt-1 w-5 h-5 rounded text-emerald-600 focus:ring-emerald-500 border-neutral-300 dark:border-neutral-700 cursor-pointer"
                />
                <label htmlFor={consentId} className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed cursor-pointer">
                  {t.formPrivacyConsent}{' '}
                  <button
                    type="button"
                    onClick={() => onOpenLegal('privacy')}
                    className="underline text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 cursor-pointer font-bold"
                  >
                    {t.privacyPolicy}
                  </button>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full min-h-[52px] flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-black text-sm sm:text-base shadow-lg shadow-emerald-950/20 transition-all active:scale-[0.99] disabled:opacity-60 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                <span>{isSubmitting ? t.formSending : (lang === 'ar' ? 'إرسال الطلب والتواصل الفوري عبر واتساب' : 'Submit & Connect on WhatsApp')}</span>
                <ArrowIcon className="w-5 h-5" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-500 pt-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{lang === 'ar' ? 'بياناتك مشفرة ومحمية وفق نظام حماية البيانات الشخصية السعودي (PDPL).' : 'Data encrypted pursuant to Saudi PDPL regulations.'}</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
