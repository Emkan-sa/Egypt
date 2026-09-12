export const OFFICIAL_PHONE = "+966580032068";
export const DISPLAY_PHONE = "058 003 2068";
export const SNAPCHAT_USER = "nasser.ubdall";
export const SNAPCHAT_URL = "https://www.snapchat.com/add/nasser.ubdall";

export function createWhatsAppUrl(customMessage: string): string {
  const cleanPhone = "966580032068";
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(customMessage)}`;
}

export function generateLeadFormMessage(data: {
  fullName: string;
  phone: string;
  city: string;
  employmentSector: string;
  serviceType: string;
  notes?: string;
}, lang: 'ar' | 'en' = 'ar'): string {
  if (lang === 'en') {
    return `New Financing Brokerage & Consultation Request:\n• Full Name: ${data.fullName}\n• Mobile Number: ${data.phone}\n• City: ${data.city}\n• Employer / Sector: ${data.employmentSector}\n• Required Service / Purpose: ${data.serviceType}${data.notes ? `\n• Notes: ${data.notes}` : ''}\n\nI would like to consult on my financing options. Thank you.`;
  }

  return `طلب استشارة ووساطة تمويلية جديد:\n• الاسم الكريم: ${data.fullName}\n• رقم الجوال: ${data.phone}\n• المدينة: ${data.city}\n• جهة العمل: ${data.employmentSector}\n• نوع الخدمة أو الغرض: ${data.serviceType}${data.notes ? `\n• ملاحظات إضافية: ${data.notes}` : ''}\n\nالسلام عليكم أستاذ ناصر، أرجو الاطلاع على طلبي والتواصل معي لبدء إجراءات التمويل بدون تحويل راتب.`;
}

