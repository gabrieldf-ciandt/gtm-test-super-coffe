// src/utils/analytics.ts
export const sendGTMEvent = (event: string, data?: Record<string, string | number>) => {
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event, // The name GTM listens for
      ...data, // Any extra details (price, item name, etc.)
    });
  }
};