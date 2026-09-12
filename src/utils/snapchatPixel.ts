/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

declare global {
  interface Window {
    snaptr?: (...args: any[]) => void;
    __snapPixelInitialized?: boolean;
    __snapPageViewTracked?: boolean;
  }
}

/**
 * Validated Snapchat Pixel ID for the Financial Brokerage Platform
 */
export const SNAPCHAT_PIXEL_ID = '9f890d43-eeeb-4761-a999-a269a6641db8';

/**
 * Initializes the Snapchat Pixel tracker safely and ensures single execution.
 */
export function initSnapchatPixel(pixelId: string = SNAPCHAT_PIXEL_ID): void {
  if (typeof window === 'undefined') return;

  if (window.__snapPixelInitialized) {
    return;
  }

  try {
    if (!window.snaptr) {
      const snaptrFn: any = function (...args: any[]) {
        if (snaptrFn.handleRequest) {
          snaptrFn.handleRequest.apply(snaptrFn, args);
        } else {
          snaptrFn.queue.push(args);
        }
      };
      snaptrFn.queue = [];
      window.snaptr = snaptrFn;

      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://sc-static.net/scevent.min.js';
      const firstScript = document.getElementsByTagName('script')[0];
      if (firstScript && firstScript.parentNode) {
        firstScript.parentNode.insertBefore(script, firstScript);
      } else {
        document.head.appendChild(script);
      }
    }

    window.snaptr('init', pixelId);
    window.__snapPixelInitialized = true;
  } catch (err) {
    console.warn('[Snapchat Pixel] Initialization warning:', err);
  }
}

/**
 * 1. PAGE_VIEW
 * Tracked strictly ONCE on page load.
 * Protected by singleton guard to prevent duplicate firing on React re-render or SPA navigation.
 */
export function trackPageView(): void {
  if (typeof window === 'undefined' || !window.snaptr) return;

  if (window.__snapPageViewTracked) {
    // Already fired on initial page load; do not duplicate on SPA route change or re-renders
    return;
  }

  try {
    window.snaptr('track', 'PAGE_VIEW');
    window.__snapPageViewTracked = true;
  } catch (err) {
    console.warn('[Snapchat Pixel] PAGE_VIEW warning:', err);
  }
}

/**
 * 2. VIEW_CONTENT
 * Fired only when viewing an actual service page (BrokerageServicesPage).
 * Strictly contains NO ecommerce parameters and NO financial data.
 */
export function trackViewContent(): void {
  if (typeof window === 'undefined' || !window.snaptr) return;

  try {
    window.snaptr('track', 'VIEW_CONTENT');
  } catch (err) {
    console.warn('[Snapchat Pixel] VIEW_CONTENT warning:', err);
  }
}

/**
 * 3. LEAD
 * Fired ONLY after the successful submission of the contact/consultation form.
 * Strictly contains NO financial data, NO credit details, and NO ecommerce parameters.
 */
export function trackLeadSubmission(): void {
  if (typeof window === 'undefined' || !window.snaptr) return;

  try {
    window.snaptr('track', 'LEAD');
  } catch (err) {
    console.warn('[Snapchat Pixel] LEAD tracking warning:', err);
  }
}

/**
 * 4. WhatsApp Click
 * Logged strictly as an internal micro-conversion for website diagnostics.
 * NOT sent to Snapchat, NOT marked as LEAD, and NO conversation data is transmitted.
 */
export function logWhatsAppClick(source: string): void {
  if (typeof window !== 'undefined') {
    console.info(`[Internal Analytics] Micro-conversion: WhatsApp click from ${source}`);
  }
}

/**
 * 5. Phone Click
 * Logged strictly as an internal micro-conversion.
 * NOT sent to Snapchat.
 */
export function logPhoneClick(source: string): void {
  if (typeof window !== 'undefined') {
    console.info(`[Internal Analytics] Micro-conversion: Phone call from ${source}`);
  }
}
