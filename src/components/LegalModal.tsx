import React from 'react';
import { X, ShieldCheck, Scale, FileText, Lock } from 'lucide-react';
import { Language, LegalModalType, TranslationStrings } from '../types';
import { LEGAL_DOCS } from '../data/legalData';

interface LegalModalProps {
  type: LegalModalType;
  lang: Language;
  t: TranslationStrings;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, lang, t, onClose }) => {
  if (!type) return null;

  const doc = LEGAL_DOCS[type];
  if (!doc) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white dark:bg-neutral-900 rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between gap-4 bg-neutral-50 dark:bg-neutral-950">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 flex items-center justify-center">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-neutral-900 dark:text-white">
                {lang === 'ar' ? doc.titleAr : doc.titleEn}
              </h3>
              <p className="text-[11px] text-neutral-500">
                {lang === 'ar' ? doc.lastUpdatedAr : doc.lastUpdatedEn}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
          {(lang === 'ar' ? doc.contentAr : doc.contentEn).map((paragraph, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-950/60 border border-neutral-200/60 dark:border-neutral-800/60">
              <p>{paragraph}</p>
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-[11px] text-neutral-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>{lang === 'ar' ? 'معتمد وفق أنظمة المملكة العربية السعودية' : 'Compliant with KSA Regulations'}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs"
          >
            {t.closeModal}
          </button>
        </div>
      </div>
    </div>
  );
};
