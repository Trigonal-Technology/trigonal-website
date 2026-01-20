/**
 * Page Configuration
 * Centralized configuration for page-specific behaviors
 */

/**
 * Pages that should hide the global footer banner
 * (because they have custom CTAs or are the form itself)
 * 
 * Uses pattern matching for maintainability:
 * - Exact paths: '/', '/consult'
 * - Path prefixes: '/nidanehr', '/solutions/fiscal-integrity'
 * - Pattern matching: pages starting with '/admin' or '/case-studies/'
 */
const FOOTER_BANNER_EXCLUSIONS = [
  // Exact matches
  '/',
  '/consult',
  // Product pages with custom CTAs
  '/nidanehr',
  '/solutions/fiscal-integrity',
  // Pattern-based (for future pages)
  // '/case-studies/', // Uncomment when case study pages have custom CTAs
] as const;

/**
 * Pattern-based matching for path exclusions
 * This allows us to exclude entire sections without listing every page
 */
const FOOTER_BANNER_PATTERNS = [
  // Add patterns here, e.g.:
  // /^\/admin\//,  // All admin pages
  // /^\/case-studies\/[^/]+$/,  // Individual case study pages
] as const;

/**
 * Check if a pathname should hide the footer banner
 * 
 * @param pathname - The current pathname (e.g., '/nidanehr')
 * @returns true if the banner should be hidden
 */
export function shouldHideFooterBanner(pathname: string): boolean {
  // Check exact matches
  if (FOOTER_BANNER_EXCLUSIONS.includes(pathname as any)) {
    return true;
  }
  
  // Check pattern matches
  return FOOTER_BANNER_PATTERNS.some(pattern => pattern.test(pathname));
}
