export const PAGES_WITHOUT_FOOTER_BANNER = [
  '/',
  '/consult',
  '/nidanehr',
  '/solutions/fiscal-integrity',
  '/solutions/lab-bridge',      // <-- NEW
  '/solutions/imaging',         // <-- NEW
  '/solutions/intelligence',    // <-- NEW
  '/solutions/mobile',          // <-- NEW
] as const;

export function shouldHideFooterBanner(pathname: string): boolean {
  return PAGES_WITHOUT_FOOTER_BANNER.includes(pathname as any);
}
