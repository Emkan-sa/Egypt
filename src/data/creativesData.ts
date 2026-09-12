export interface AdCreative {
  id: string;
  number: string;
  nameAr: string;
  nameEn: string;
  theme: string;
  headlineAr: string;
  headlineEn: string;
  hookAr: string;
  hookEn: string;
  descriptionAr: string;
  descriptionEn: string;
  ctaAr: string;
  ctaEn: string;
  highlightsAr: string[];
  highlightsEn: string[];
  disclaimerAr: string;
  disclaimerEn: string;
  svgTemplate: (lang: 'ar' | 'en') => string;
}

export const SNAPCHAT_CREATIVES: AdCreative[] = [
  {
    id: "creative-01",
    number: "01",
    nameAr: "إعلان الخطاف والجذب (The Hook)",
    nameEn: "Hook Message Ad",
    theme: "emerald-gold",
    headlineAr: "تبحث عن تمويل يسندك؟",
    headlineEn: "Looking for Flexible Finance?",
    hookAr: "إعلان أوضح. رحلة عميل أفضل.",
    hookEn: "Clearer Ad. Superior Journey.",
    descriptionAr: "التمويل الشخصي المباشر يلبي احتياجاتك بدون تحويل راتب وبمبالغ تصل حتى 500,000 ريال سعودي.",
    descriptionEn: "Direct personal financing without salary transfer, up to 500,000 SAR across the Kingdom.",
    ctaAr: "تواصل عبر واتساب الآن",
    ctaEn: "Chat on WhatsApp Now",
    highlightsAr: ["من 20,000 إلى 500,000 ريال", "بدون تحويل راتب", "مدة من 3 إلى 60 شهراً", "تجربة رقمية بالكامل"],
    highlightsEn: ["20,000 - 500,000 SAR", "No Salary Transfer", "3 to 60 Months", "100% Digital Journey"],
    disclaimerAr: "جميع طلبات التمويل تخضع للمراجعة والدراسة من قبل الجهات الممولة وفقاً لسياساتها وشروطها. معلن وسيط مستقل.",
    disclaimerEn: "All financing applications are subject to underwriting review by licensed entities under SAMA. Independent Broker.",
    svgTemplate: (lang: 'ar' | 'en') => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1920" width="1080" height="1920">
  <defs>
    <linearGradient id="bg1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#021a11"/>
      <stop offset="50%" stop-color="#053322"/>
      <stop offset="100%" stop-color="#01140d"/>
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E5C77A"/>
      <stop offset="50%" stop-color="#C59B3F"/>
      <stop offset="100%" stop-color="#9E7825"/>
    </linearGradient>
    <linearGradient id="btnGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0F9758"/>
      <stop offset="100%" stop-color="#14B86D"/>
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="16" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="1080" height="1920" fill="url(#bg1)"/>
  
  <!-- Subtle decorative grid -->
  <g stroke="#0e4b34" stroke-width="1.2" opacity="0.45">
    <line x1="120" y1="0" x2="120" y2="1920"/>
    <line x1="960" y1="0" x2="960" y2="1920"/>
    <line x1="540" y1="0" x2="540" y2="1920"/>
    <line x1="0" y1="210" x2="1080" y2="210" stroke-dasharray="8 8"/>
    <line x1="0" y1="1620" x2="1080" y2="1620" stroke-dasharray="8 8"/>
  </g>

  <!-- Header: Outside Top Safe Zone (>210px) -->
  <g transform="translate(100, 240)">
    <!-- NA Logo Badge -->
    <rect x="0" y="0" width="80" height="80" rx="20" fill="#0b452e" stroke="#C59B3F" stroke-width="2"/>
    <text x="40" y="52" fill="#E5C77A" font-family="Arial, sans-serif" font-weight="900" font-size="34" text-anchor="middle">NA</text>
    
    <text x="100" y="38" fill="#FFFFFF" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="800" font-size="28" letter-spacing="1">NASSER ABU ABDULLAH</text>
    <text x="100" y="66" fill="#C59B3F" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="600" font-size="18" letter-spacing="2">INDEPENDENT DIGITAL ADVERTISER</text>
    
    <text x="880" y="52" fill="#E5C77A" font-family="Arial, sans-serif" font-weight="700" font-size="32" text-anchor="end">01</text>
  </g>

  <!-- Main Focal Hook Radar Graphics -->
  <g transform="translate(540, 680)">
    <circle r="260" fill="none" stroke="#0e563a" stroke-width="2" opacity="0.6"/>
    <circle r="190" fill="none" stroke="#176b4a" stroke-width="2.5" opacity="0.7"/>
    <circle r="120" fill="none" stroke="#C59B3F" stroke-width="3" opacity="0.8"/>
    <circle r="40" fill="#0b452e" stroke="#E5C77A" stroke-width="4"/>
    <circle r="12" fill="#E5C77A"/>
  </g>

  <!-- Hook Text -->
  <g transform="translate(540, 780)" text-anchor="middle">
    <text y="0" fill="#FFFFFF" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="900" font-size="64">${lang === 'ar' ? 'إعلان أوضح.' : 'Clearer Advertising.'}</text>
    <text y="75" fill="url(#goldGrad)" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="900" font-size="64">${lang === 'ar' ? 'رحلة عميل أفضل.' : 'Superior Client Journey.'}</text>
    <text y="140" fill="#9FBDB0" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="500" font-size="26">${lang === 'ar' ? 'إدارة حملات رقمية للقطاع المالي برسالة واضحة ومسار موثوق' : 'Digital financial campaigns with transparent terms and verified funnel'}</text>
  </g>

  <!-- 4 Feature Badges in 2x2 Grid -->
  <g transform="translate(140, 1020)">
    <rect x="0" y="0" width="380" height="110" rx="20" fill="#062e1e" stroke="#165e41" stroke-width="1.5"/>
    <text x="190" y="48" fill="#E5C77A" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="800" font-size="24" text-anchor="middle">${lang === 'ar' ? 'حتى 500,000 ريال' : 'Up to 500,000 SAR'}</text>
    <text x="190" y="80" fill="#CBD5E1" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="500" font-size="18" text-anchor="middle">${lang === 'ar' ? 'يبدأ من 20 ألف ريال' : 'Starts from 20k SAR'}</text>

    <rect x="420" y="0" width="380" height="110" rx="20" fill="#062e1e" stroke="#165e41" stroke-width="1.5"/>
    <text x="610" y="48" fill="#E5C77A" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="800" font-size="24" text-anchor="middle">${lang === 'ar' ? 'بدون تحويل راتب' : 'No Salary Transfer'}</text>
    <text x="610" y="80" fill="#CBD5E1" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="500" font-size="18" text-anchor="middle">${lang === 'ar' ? 'لا يشترط وجود تمويل قائم' : 'No existing loan needed'}</text>

    <rect x="0" y="130" width="380" height="110" rx="20" fill="#062e1e" stroke="#165e41" stroke-width="1.5"/>
    <text x="190" y="178" fill="#E5C77A" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="800" font-size="24" text-anchor="middle">${lang === 'ar' ? 'سداد من 3 إلى 60 شهراً' : 'Tenure 3 - 60 Months'}</text>
    <text x="190" y="210" fill="#CBD5E1" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="500" font-size="18" text-anchor="middle">${lang === 'ar' ? 'أقساط ميسرة ومناسبة' : 'Flexible installments'}</text>

    <rect x="420" y="130" width="380" height="110" rx="20" fill="#062e1e" stroke="#165e41" stroke-width="1.5"/>
    <text x="610" y="178" fill="#E5C77A" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="800" font-size="24" text-anchor="middle">${lang === 'ar' ? 'تجربة رقمية بالكامل' : '100% Digital Experience'}</text>
    <text x="610" y="210" fill="#CBD5E1" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="500" font-size="18" text-anchor="middle">${lang === 'ar' ? 'إجراءات سريعة ومبسطة' : 'Fast automated study'}</text>
  </g>

  <!-- Legal Notice Container -->
  <g transform="translate(140, 1310)">
    <rect width="800" height="120" rx="18" fill="#032015" stroke="#C59B3F" stroke-width="1.5"/>
    <circle cx="50" cy="60" r="22" fill="#0b452e" stroke="#E5C77A" stroke-width="2"/>
    <text x="50" y="68" fill="#E5C77A" font-family="Arial" font-weight="900" font-size="22" text-anchor="middle">✓</text>
    <text x="90" y="52" fill="#FFFFFF" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="700" font-size="20">${lang === 'ar' ? 'جميع طلبات التمويل تخضع للمراجعة والدراسة من قبل الجهات الممولة' : 'All financing requests undergo credit review by licensed creditors'}</text>
    <text x="90" y="84" fill="#9EB7AB" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="500" font-size="18">${lang === 'ar' ? 'مرخصة وخاضعة لرقابة البنك المركزي السعودي (ساما) • تطبق الشروط والأحكام' : 'Regulated by Saudi Central Bank (SAMA) • Terms & Conditions apply'}</text>
  </g>

  <!-- CTA Button: Above 1620px Safe Zone -->
  <g transform="translate(140, 1470)">
    <rect width="800" height="95" rx="47" fill="url(#btnGrad)" filter="url(#glow)"/>
    <text x="400" y="60" fill="#FFFFFF" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="900" font-size="32" text-anchor="middle">${lang === 'ar' ? 'تواصل عبر واتساب الآن ✆' : 'Connect on WhatsApp Now ✆'}</text>
  </g>

  <!-- Footer Info Bar -->
  <g transform="translate(540, 1600)" text-anchor="middle">
    <text y="0" fill="#6A8F7E" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="600" font-size="18">SNAPCHAT ADS • PERFORMANCE MARKETING • SAUDI ARABIA • GCC</text>
  </g>
</svg>
    `
  },
  {
    id: "creative-02",
    number: "02",
    nameAr: "إعلان الحاسبة والشفافية (Transparency Calculator)",
    nameEn: "Calculator Ad",
    theme: "emerald-slider",
    headlineAr: "افهم العرض قبل أن تتخذ القرار",
    headlineEn: "Understand The Offer Before Deciding",
    hookAr: "محاكاة استرشادية بدون مفاجآت",
    hookEn: "Transparent Indicative Simulation",
    descriptionAr: "حاسبة تمويل ذكية توضح لك مبلغ التمويل من 20,000 إلى 500,000 ريال والمدة من 3 إلى 60 شهراً.",
    descriptionEn: "Smart finance calculator illustrating 20,000 to 500,000 SAR tenure across 3 to 60 months.",
    ctaAr: "احسب قسطك التقديري وتواصل",
    ctaEn: "Calculate & Connect",
    highlightsAr: ["منزلق تمويل حتى 500k", "سداد مرن 3 - 60 شهراً", "إفصاح استرشادي شفاف", "قرار ائتماني رسمي"],
    highlightsEn: ["500k Financing Slider", "3-60 Months Tenure", "Transparent Guidance", "Official SAMA Underwriting"],
    disclaimerAr: "المحاكاة استرشادية وليست عرضاً ملزماً. القرار النهائي تحدده الجهة التمويلية وفق الأهلية.",
    disclaimerEn: "Simulation is indicative only and not a binding offer. Final decision rests with licensed lender.",
    svgTemplate: (lang: 'ar' | 'en') => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1920" width="1080" height="1920">
  <defs>
    <linearGradient id="bg2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#021c13"/>
      <stop offset="50%" stop-color="#053323"/>
      <stop offset="100%" stop-color="#01130d"/>
    </linearGradient>
    <linearGradient id="goldGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F3DC94"/>
      <stop offset="100%" stop-color="#C59B3F"/>
    </linearGradient>
    <linearGradient id="btnGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#C59B3F"/>
      <stop offset="100%" stop-color="#E5C77A"/>
    </linearGradient>
  </defs>

  <rect width="1080" height="1920" fill="url(#bg2)"/>

  <!-- Top Header -->
  <g transform="translate(100, 240)">
    <rect x="0" y="0" width="80" height="80" rx="20" fill="#0b452e" stroke="#C59B3F" stroke-width="2"/>
    <text x="40" y="52" fill="#E5C77A" font-family="Arial, sans-serif" font-weight="900" font-size="34" text-anchor="middle">NA</text>
    <text x="100" y="38" fill="#FFFFFF" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="800" font-size="28">NASSER ABU ABDULLAH</text>
    <text x="100" y="66" fill="#C59B3F" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="600" font-size="18">INDEPENDENT DIGITAL ADVERTISER</text>
    <text x="880" y="52" fill="#E5C77A" font-family="Arial, sans-serif" font-weight="700" font-size="32" text-anchor="end">02</text>
  </g>

  <!-- Big Title -->
  <g transform="translate(540, 480)" text-anchor="middle">
    <text y="0" fill="#FFFFFF" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="900" font-size="62">${lang === 'ar' ? 'افهم العرض' : 'Understand The Offer'}</text>
    <text y="75" fill="url(#goldGrad2)" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="900" font-size="62">${lang === 'ar' ? 'قبل أن تتخذ القرار.' : 'Before Making A Decision.'}</text>
  </g>

  <!-- Main Interactive Calculator Visual Box -->
  <g transform="translate(120, 640)">
    <rect width="840" height="580" rx="28" fill="#05261b" stroke="#165e41" stroke-width="2"/>
    
    <text x="420" y="60" fill="#C59B3F" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="700" font-size="26" text-anchor="middle">${lang === 'ar' ? 'محاكاة تمويلية استرشادية' : 'Indicative Financing Simulation'}</text>
    
    <!-- Amount Box -->
    <text x="80" y="130" fill="#9FBDB0" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="600" font-size="22">${lang === 'ar' ? 'مبلغ التمويل المستهدف' : 'Target Financing Amount'}</text>
    <text x="760" y="130" fill="#FFFFFF" font-family="Arial, sans-serif" font-weight="900" font-size="36" text-anchor="end">500,000 <tspan font-size="22" fill="#E5C77A">${lang === 'ar' ? 'ريال' : 'SAR'}</tspan></text>
    
    <!-- Slider Graphic 1 -->
    <rect x="80" y="160" width="680" height="12" rx="6" fill="#0d4630"/>
    <rect x="80" y="160" width="620" height="12" rx="6" fill="url(#goldGrad2)"/>
    <circle cx="700" cy="166" r="22" fill="#FFFFFF" stroke="#C59B3F" stroke-width="5"/>

    <!-- Duration Box -->
    <text x="80" y="270" fill="#9FBDB0" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="600" font-size="22">${lang === 'ar' ? 'مدة التمويل' : 'Repayment Duration'}</text>
    <text x="760" y="270" fill="#FFFFFF" font-family="Arial, sans-serif" font-weight="900" font-size="36" text-anchor="end">3 – 60 <tspan font-size="22" fill="#E5C77A">${lang === 'ar' ? 'شهراً' : 'Months'}</tspan></text>
    
    <!-- Slider Graphic 2 -->
    <rect x="80" y="300" width="680" height="12" rx="6" fill="#0d4630"/>
    <rect x="80" y="300" width="540" height="12" rx="6" fill="url(#goldGrad2)"/>
    <circle cx="620" cy="306" r="22" fill="#FFFFFF" stroke="#C59B3F" stroke-width="5"/>

    <!-- Result Banner -->
    <rect x="60" y="380" width="720" height="150" rx="20" fill="#031b13" stroke="#C59B3F" stroke-width="1.5"/>
    <text x="420" y="430" fill="#9FBDB0" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="600" font-size="22" text-anchor="middle">${lang === 'ar' ? 'بدون تحويل راتب • لا يشترط تمويل قائم' : 'No Salary Transfer • No Active Loan Required'}</text>
    <text x="420" y="490" fill="#22C55E" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="900" font-size="32" text-anchor="middle">${lang === 'ar' ? 'قسط ميسر يتناسب مع دخلك الشهري' : 'Affordable Installment Matching Your Income'}</text>
  </g>

  <!-- Legal Box -->
  <g transform="translate(120, 1270)">
    <rect width="840" height="140" rx="22" fill="#031c13" stroke="#C59B3F" stroke-width="1.5"/>
    <text x="420" y="55" fill="#E5C77A" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="800" font-size="24" text-anchor="middle">${lang === 'ar' ? 'القرار النهائي تحدده الجهة التمويلية' : 'Final Decision Rests with Creditor'}</text>
    <text x="420" y="95" fill="#CBD5E1" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="500" font-size="20" text-anchor="middle">${lang === 'ar' ? 'وفق الأهلية الائتمانية والضوابط المعتمدة من البنك المركزي السعودي' : 'Pursuant to credit scoring and SAMA regulations • Terms apply'}</text>
  </g>

  <!-- CTA Button -->
  <g transform="translate(120, 1460)">
    <rect width="840" height="96" rx="48" fill="url(#btnGrad2)"/>
    <text x="420" y="60" fill="#072b1d" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="900" font-size="32" text-anchor="middle">${lang === 'ar' ? 'احسب تمويلك وتواصل عبر واتساب' : 'Calculate & Connect via WhatsApp'}</text>
  </g>

  <g transform="translate(540, 1600)" text-anchor="middle">
    <text y="0" fill="#6A8F7E" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="600" font-size="18">SNAPCHAT ADS • PERFORMANCE MARKETING • SAUDI ARABIA • GCC</text>
  </g>
</svg>
    `
  },
  {
    id: "creative-03",
    number: "03",
    nameAr: "إعلان الخطوات الأربع (The 4 Steps Journey)",
    nameEn: "4 Steps Journey Ad",
    theme: "emerald-steps",
    headlineAr: "4 خطوات من الاستفسار إلى القرار",
    headlineEn: "4 Steps From Inquiry to Decision",
    hookAr: "رحلة واضحة بدون تعقيد",
    hookEn: "Seamless Clear Financial Journey",
    descriptionAr: "خطوات واضحة تبدأ بالتحقق من الأهلية وتقديم البيانات ثم مراجعة العرض واتخاذ القرار المستنير.",
    descriptionEn: "Transparent journey: eligibility review, data submission, offer analysis, informed decision.",
    ctaAr: "ابدأ بالمعلومة الصحيحة",
    ctaEn: "Start With Verified Facts",
    highlightsAr: ["1. تحقق من الأهلية", "2. قدّم بياناتك", "3. راجع العرض المالي", "4. اتخذ قرارك"],
    highlightsEn: ["1. Check Eligibility", "2. Submit Info", "3. Review Offer", "4. Decide Confidently"],
    disclaimerAr: "دراسة ائتمانية من قبل الجهة الممولة المرخصة من ساما. تطبق الشروط والأحكام.",
    disclaimerEn: "Credit underwriting by SAMA-authorized licensed entities. Terms & Conditions apply.",
    svgTemplate: (lang: 'ar' | 'en') => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1920" width="1080" height="1920">
  <defs>
    <linearGradient id="bg3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#021c12"/>
      <stop offset="50%" stop-color="#063625"/>
      <stop offset="100%" stop-color="#01130d"/>
    </linearGradient>
    <linearGradient id="gold3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F2DB93"/>
      <stop offset="100%" stop-color="#C59B3F"/>
    </linearGradient>
  </defs>

  <rect width="1080" height="1920" fill="url(#bg3)"/>

  <!-- Header -->
  <g transform="translate(100, 240)">
    <rect x="0" y="0" width="80" height="80" rx="20" fill="#0b452e" stroke="#C59B3F" stroke-width="2"/>
    <text x="40" y="52" fill="#E5C77A" font-family="Arial, sans-serif" font-weight="900" font-size="34" text-anchor="middle">NA</text>
    <text x="100" y="38" fill="#FFFFFF" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="800" font-size="28">NASSER ABU ABDULLAH</text>
    <text x="100" y="66" fill="#C59B3F" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="600" font-size="18">INDEPENDENT DIGITAL ADVERTISER</text>
    <text x="880" y="52" fill="#E5C77A" font-family="Arial, sans-serif" font-weight="700" font-size="32" text-anchor="end">03</text>
  </g>

  <!-- Big Title -->
  <g transform="translate(540, 480)" text-anchor="middle">
    <text y="0" fill="#FFFFFF" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="900" font-size="62">${lang === 'ar' ? '4 خطوات' : '4 Simple Steps'}</text>
    <text y="75" fill="url(#gold3)" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="900" font-size="62">${lang === 'ar' ? 'من الاستفسار إلى القرار.' : 'From Inquiry to Decision.'}</text>
  </g>

  <!-- Steps Vertical Flow -->
  <g transform="translate(130, 640)">
    <!-- Connecting Line -->
    <line x1="60" y1="60" x2="60" y2="520" stroke="#C59B3F" stroke-width="4" stroke-dasharray="10 8"/>

    <!-- Step 1 -->
    <circle cx="60" cy="60" r="34" fill="#C59B3F"/>
    <text x="60" y="70" fill="#042317" font-family="Arial" font-weight="900" font-size="26" text-anchor="middle">01</text>
    <text x="130" y="52" fill="#FFFFFF" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="800" font-size="30">${lang === 'ar' ? 'تحقق من الأهلية' : 'Check Eligibility'}</text>
    <text x="130" y="86" fill="#9FBDB0" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="500" font-size="20">${lang === 'ar' ? 'راجع الشروط الأساسية (سعودي، راتب، قطاع)' : 'Review core criteria (Sector, Salary, Limits)'}</text>

    <!-- Step 2 -->
    <circle cx="60" cy="210" r="34" fill="#C59B3F"/>
    <text x="60" y="220" fill="#042317" font-family="Arial" font-weight="900" font-size="26" text-anchor="middle">02</text>
    <text x="130" y="202" fill="#FFFFFF" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="800" font-size="30">${lang === 'ar' ? 'قدّم البيانات' : 'Submit Information'}</text>
    <text x="130" y="236" fill="#9FBDB0" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="500" font-size="20">${lang === 'ar' ? 'استخدم القناة الرسمية أو تواصل عبر واتساب' : 'Use the verified portal or WhatsApp channel'}</text>

    <!-- Step 3 -->
    <circle cx="60" cy="360" r="34" fill="#C59B3F"/>
    <text x="60" y="370" fill="#042317" font-family="Arial" font-weight="900" font-size="26" text-anchor="middle">03</text>
    <text x="130" y="352" fill="#FFFFFF" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="800" font-size="30">${lang === 'ar' ? 'راجع العرض التمويلي' : 'Review Financial Offer'}</text>
    <text x="130" y="386" fill="#9FBDB0" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="500" font-size="20">${lang === 'ar' ? 'اقرأ الرسوم والمدة ومعدل النسبة السنوي بدقة' : 'Examine fees, duration, APR and terms closely'}</text>

    <!-- Step 4 -->
    <circle cx="60" cy="510" r="34" fill="#C59B3F"/>
    <text x="60" y="520" fill="#042317" font-family="Arial" font-weight="900" font-size="26" text-anchor="middle">04</text>
    <text x="130" y="502" fill="#FFFFFF" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="800" font-size="30">${lang === 'ar' ? 'اتخذ قرارك بوعي' : 'Decide With Confidence'}</text>
    <text x="130" y="536" fill="#9FBDB0" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="500" font-size="20">${lang === 'ar' ? 'توقيع إلكتروني سريع واستلام التمويل' : 'Digital sign-off and fund disbursement'}</text>
  </g>

  <!-- Legal Box -->
  <g transform="translate(130, 1280)">
    <rect width="820" height="130" rx="20" fill="#031e14" stroke="#165e41" stroke-width="1.5"/>
    <text x="410" y="52" fill="#E5C77A" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="800" font-size="22" text-anchor="middle">${lang === 'ar' ? 'التمويل بدون تحويل راتب • حتى 500,000 ريال' : 'No Salary Transfer • Up to 500k SAR'}</text>
    <text x="410" y="88" fill="#CBD5E1" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="500" font-size="18" text-anchor="middle">${lang === 'ar' ? 'تخضع جميع الطلبات لدراسة الأهلية المعتمدة من الجهة التمويلية' : 'Underwritten by licensed SAMA financing institutions'}</text>
  </g>

  <!-- CTA Button -->
  <g transform="translate(130, 1460)">
    <rect width="820" height="96" rx="48" fill="#0F9758"/>
    <text x="410" y="60" fill="#FFFFFF" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="900" font-size="32" text-anchor="middle">${lang === 'ar' ? 'ابدأ بالمعلومة الصحيحة الآن' : 'Start With Verified Information Now'}</text>
  </g>

  <g transform="translate(540, 1600)" text-anchor="middle">
    <text y="0" fill="#6A8F7E" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="600" font-size="18">SNAPCHAT ADS • PERFORMANCE MARKETING • SAUDI ARABIA • GCC</text>
  </g>
</svg>
    `
  },
  {
    id: "creative-04",
    number: "04",
    nameAr: "إعلان الشفافية والهدف الذهبي (Independent Broker)",
    nameEn: "Transparency & Trust Ad",
    theme: "gold-radar",
    headlineAr: "معلن مستقل. ولست الجهة التمويلية.",
    headlineEn: "Independent Advertiser. Not The Lender.",
    hookAr: "وضوح العلاقة يحمي قرارك المالي",
    hookEn: "Clear Identity Protects Your Decisions",
    descriptionAr: "نؤمن بأعلى معايير الشفافية والنزاهة: وساطة تسويقية رقمية معتمدة تربطك بأفضل العروض الرسمية.",
    descriptionEn: "We prioritize complete transparency: certified digital marketing connecting you with official lenders.",
    ctaAr: "شفافية • وضوح • التزام",
    ctaEn: "Transparency • Clarity • Trust",
    highlightsAr: ["معلن وسيط مستقل", "عروض جهات مرخصة من ساما", "حماية كاملة لبياناتك", "صفر رسوم استشارة مسبقة"],
    highlightsEn: ["Independent Marketing Broker", "SAMA Licensed Entities", "256-bit Data Privacy", "Zero Upfront Fees"],
    disclaimerAr: "المحتوى توضيحي وتسويقي ولا يعد عرضاً ملزماً. جميع القرارات تحددها الجهة التمويلية.",
    disclaimerEn: "Marketing content only. Final underwriting rests with authorized financing institutions.",
    svgTemplate: (lang: 'ar' | 'en') => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1920" width="1080" height="1920">
  <defs>
    <linearGradient id="bg4" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#031b12"/>
      <stop offset="50%" stop-color="#063223"/>
      <stop offset="100%" stop-color="#01120c"/>
    </linearGradient>
    <linearGradient id="gold4" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F2DB93"/>
      <stop offset="100%" stop-color="#C59B3F"/>
    </linearGradient>
  </defs>

  <rect width="1080" height="1920" fill="url(#bg4)"/>

  <!-- Header -->
  <g transform="translate(100, 240)">
    <rect x="0" y="0" width="80" height="80" rx="20" fill="#0b452e" stroke="#C59B3F" stroke-width="2"/>
    <text x="40" y="52" fill="#E5C77A" font-family="Arial, sans-serif" font-weight="900" font-size="34" text-anchor="middle">NA</text>
    <text x="100" y="38" fill="#FFFFFF" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="800" font-size="28">NASSER ABU ABDULLAH</text>
    <text x="100" y="66" fill="#C59B3F" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="600" font-size="18">INDEPENDENT DIGITAL ADVERTISER</text>
    <text x="880" y="52" fill="#E5C77A" font-family="Arial, sans-serif" font-weight="700" font-size="32" text-anchor="end">04</text>
  </g>

  <!-- Giant Golden Concentric Target Motif -->
  <g transform="translate(540, 720)">
    <circle r="340" fill="none" stroke="#C59B3F" stroke-width="2" opacity="0.3"/>
    <circle r="260" fill="none" stroke="#C59B3F" stroke-width="2.5" opacity="0.5"/>
    <circle r="180" fill="none" stroke="#C59B3F" stroke-width="3" opacity="0.7"/>
    <circle r="100" fill="none" stroke="#C59B3F" stroke-width="3.5" opacity="0.9"/>
    
    <!-- Dynamic Diagonal Pointer Line -->
    <line x1="-380" y1="260" x2="280" y2="-280" stroke="#F2DB93" stroke-width="7" stroke-linecap="round"/>
    <circle cx="0" cy="0" r="18" fill="#FFFFFF" stroke="#C59B3F" stroke-width="6"/>
  </g>

  <!-- Typography Block -->
  <g transform="translate(540, 1150)" text-anchor="middle">
    <text y="0" fill="#FFFFFF" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="900" font-size="56">${lang === 'ar' ? 'معلن مستقل.' : 'Independent Advertiser.'}</text>
    <text y="70" fill="url(#gold4)" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="900" font-size="56">${lang === 'ar' ? 'ولست الجهة التمويلية.' : 'Not The Lending Institution.'}</text>
    <text y="130" fill="#9FBDB0" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="600" font-size="28">${lang === 'ar' ? 'وضوح العلاقة يحمي القرار المالي السليم' : 'Role clarity protects your financial choices'}</text>
  </g>

  <!-- Disclaimer Pill -->
  <g transform="translate(140, 1340)">
    <rect width="800" height="90" rx="45" fill="#04261b" stroke="#C59B3F" stroke-width="1.5"/>
    <text x="400" y="55" fill="#E5C77A" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="800" font-size="26" text-anchor="middle">${lang === 'ar' ? 'شفافية كاملة • وضوح تام • التزام مهني' : 'Full Transparency • Absolute Clarity • Integrity'}</text>
  </g>

  <!-- CTA -->
  <g transform="translate(140, 1470)">
    <rect width="800" height="95" rx="47" fill="#0F9758"/>
    <text x="400" y="60" fill="#FFFFFF" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="900" font-size="32" text-anchor="middle">${lang === 'ar' ? 'طلب استشارة ووساطة تمويلية' : 'Request Brokerage Consultation'}</text>
  </g>

  <g transform="translate(540, 1600)" text-anchor="middle">
    <text y="0" fill="#6A8F7E" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="600" font-size="18">SNAPCHAT ADS • PERFORMANCE MARKETING • SAUDI ARABIA • GCC</text>
  </g>
</svg>
    `
  },
  {
    id: "creative-05",
    number: "05",
    nameAr: "إعلان التقديم السريع والقناة الرسمية (Official Channel)",
    nameEn: "Quick Submission Ad",
    theme: "emerald-form",
    headlineAr: "خطوة واحدة. ابدأ من القناة الرسمية.",
    headlineEn: "One Single Step. Direct From Official Channel.",
    hookAr: "سجل بياناتك المبدئية وتواصل فوراً",
    hookEn: "Submit Details & Connect Directly",
    descriptionAr: "نموذج تقديم مبسط وسريع، معالجة فورية وتواصل عبر واتساب لدراسة إمكانية التمويل حتى 500,000 ريال.",
    descriptionEn: "Streamlined lead capture, instant response on WhatsApp to evaluate financing up to 500k SAR.",
    ctaAr: "إرسال الاستفسار عبر واتساب",
    ctaEn: "Send Inquiry via WhatsApp",
    highlightsAr: ["اسم ورقم جوال فقط", "معالجة فورية خلال دقائق", "بدون رسوم مسبقة", "خصوصية مشفرة"],
    highlightsEn: ["Name & Phone Only", "Minutes Quick Response", "Zero Upfront Fees", "Encrypted Privacy"],
    disclaimerAr: "لا يعني إرسال البيانات الموافقة على التمويل. تخضع الطلبات لتقييم الجهة الممولة.",
    disclaimerEn: "Submission does not guarantee approval. All requests undergo licensed credit assessment.",
    svgTemplate: (lang: 'ar' | 'en') => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1920" width="1080" height="1920">
  <defs>
    <linearGradient id="bg5" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#021a11"/>
      <stop offset="50%" stop-color="#053322"/>
      <stop offset="100%" stop-color="#01130d"/>
    </linearGradient>
    <linearGradient id="gold5" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F2DB93"/>
      <stop offset="100%" stop-color="#C59B3F"/>
    </linearGradient>
  </defs>

  <rect width="1080" height="1920" fill="url(#bg5)"/>

  <!-- Header -->
  <g transform="translate(100, 240)">
    <rect x="0" y="0" width="80" height="80" rx="20" fill="#0b452e" stroke="#C59B3F" stroke-width="2"/>
    <text x="40" y="52" fill="#E5C77A" font-family="Arial, sans-serif" font-weight="900" font-size="34" text-anchor="middle">NA</text>
    <text x="100" y="38" fill="#FFFFFF" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="800" font-size="28">NASSER ABU ABDULLAH</text>
    <text x="100" y="66" fill="#C59B3F" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="600" font-size="18">INDEPENDENT DIGITAL ADVERTISER</text>
    <text x="880" y="52" fill="#E5C77A" font-family="Arial, sans-serif" font-weight="700" font-size="32" text-anchor="end">05</text>
  </g>

  <!-- Big Title -->
  <g transform="translate(540, 480)" text-anchor="middle">
    <text y="0" fill="#FFFFFF" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="900" font-size="62">${lang === 'ar' ? 'خطوة واحدة' : 'One Single Step'}</text>
    <text y="75" fill="url(#gold5)" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="900" font-size="62">${lang === 'ar' ? 'ابدأ من القناة الرسمية.' : 'Start From Verified Channel.'}</text>
  </g>

  <!-- Realistic Form Mockup Graphic -->
  <g transform="translate(120, 640)">
    <rect width="840" height="620" rx="28" fill="#05271c" stroke="#165e41" stroke-width="2"/>

    <!-- Field 1: Name -->
    <text x="80" y="70" fill="#9FBDB0" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="700" font-size="22">${lang === 'ar' ? 'الاسم الكريم' : 'Full Name'}</text>
    <rect x="80" y="90" width="680" height="80" rx="16" fill="#021a12" stroke="#0e5339" stroke-width="1.5"/>
    <text x="120" y="142" fill="#6A8F7E" font-family="'Cairo', 'Tajawal', sans-serif" font-size="22">${lang === 'ar' ? 'اكتب اسمك الثلاثي...' : 'Enter your legal name...'}</text>

    <!-- Field 2: Phone -->
    <text x="80" y="225" fill="#9FBDB0" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="700" font-size="22">${lang === 'ar' ? 'رقم الجوال' : 'Mobile Number'}</text>
    <rect x="80" y="245" width="680" height="80" rx="16" fill="#021a12" stroke="#0e5339" stroke-width="1.5"/>
    <text x="120" y="297" fill="#6A8F7E" font-family="Arial" font-size="22">05X XXX XXXX</text>

    <!-- Field 3: Service -->
    <text x="80" y="380" fill="#9FBDB0" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="700" font-size="22">${lang === 'ar' ? 'نوع التمويل المطلوب' : 'Financing Service'}</text>
    <rect x="80" y="400" width="680" height="80" rx="16" fill="#021a12" stroke="#0e5339" stroke-width="1.5"/>
    <text x="120" y="452" fill="#E5C77A" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="600" font-size="22">${lang === 'ar' ? 'تمويل شخصي مباشر حتى 500,000 ريال' : 'Direct Personal Finance to 500k SAR'}</text>

    <!-- Disclaimer small note -->
    <text x="420" y="550" fill="#9FBDB0" font-family="'Cairo', 'Tajawal', sans-serif" font-size="19" text-anchor="middle">${lang === 'ar' ? 'لا يعني إرسال البيانات الموافقة على التمويل • دراسة رسمية' : 'Submission does not equal approval • Official credit assessment'}</text>
  </g>

  <!-- CTA Button -->
  <g transform="translate(120, 1420)">
    <rect width="840" height="100" rx="50" fill="#0F9758"/>
    <text x="420" y="62" fill="#FFFFFF" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="900" font-size="34" text-anchor="middle">${lang === 'ar' ? 'إرسال الاستفسار وتواصل عبر واتساب ✆' : 'Send Inquiry via WhatsApp ✆'}</text>
  </g>

  <g transform="translate(540, 1600)" text-anchor="middle">
    <text y="0" fill="#6A8F7E" font-family="'Cairo', 'Tajawal', sans-serif" font-weight="600" font-size="18">SNAPCHAT ADS • PERFORMANCE MARKETING • SAUDI ARABIA • GCC</text>
  </g>
</svg>
    `
  }
];
