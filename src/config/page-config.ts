/**
 * Page Configuration
 * Centralized configuration for page-specific behaviors
 */

/**
 * Pages that should hide the global footer banner
 * (because they have custom CTAs or are the form itself)
 */
export const PAGES_WITHOUT_FOOTER_BANNER = [
  '/',
  '/consult',
  '/nidanehr',
  '/solutions/fiscal-integrity',
] as const;

/**
 * Check if a pathname should hide the footer banner
 */
export function shouldHideFooterBanner(pathname: string): boolean {
  return PAGES_WITHOUT_FOOTER_BANNER.includes(pathname as any);
}
