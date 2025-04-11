import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'it', 'pt'],
  localeDetection: true,
 
  // Used when no locale matches
  defaultLocale: 'it'
});