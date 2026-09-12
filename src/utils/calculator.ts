export interface CalculationResult {
  monthlyInstallment: number;
  totalRepayment: number;
  totalProfit: number;
  annualRatePct: number;
  dbrPercentage: number;
  isWithinSamaLimit: boolean;
}

export function calculateFinance(
  amount: number,
  months: number,
  monthlySalary: number = 8000,
  sector: 'gov' | 'semi-gov' | 'private' | 'military' | 'retired' = 'gov'
): CalculationResult {
  // Competitive standard indicative flat margin based on sector
  let annualFlatRate = 0.038; // 3.8% flat per year for government
  if (sector === 'semi-gov') annualFlatRate = 0.040;
  if (sector === 'military') annualFlatRate = 0.039;
  if (sector === 'private') annualFlatRate = 0.045;
  if (sector === 'retired') annualFlatRate = 0.042;

  const years = months / 12;
  const totalProfit = amount * annualFlatRate * years;
  const totalRepayment = amount + totalProfit;
  const monthlyInstallment = Math.round(totalRepayment / months);

  const dbrPercentage = monthlySalary > 0 ? Math.round((monthlyInstallment / monthlySalary) * 100) : 0;
  const maxSamaDbr = 33.33;
  const isWithinSamaLimit = dbrPercentage <= maxSamaDbr;

  return {
    monthlyInstallment,
    totalRepayment: Math.round(totalRepayment),
    totalProfit: Math.round(totalProfit),
    annualRatePct: +(annualFlatRate * 100).toFixed(1),
    dbrPercentage,
    isWithinSamaLimit,
  };
}

export function formatCurrency(val: number, lang: 'ar' | 'en' = 'ar'): string {
  return new Intl.NumberFormat(lang === 'ar' ? 'ar-SA' : 'en-US').format(val);
}
