import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
import { NextRequest, NextResponse } from 'next/server';
import { APP_URL } from './config';

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};

const intlMiddleware = createMiddleware(routing);

export default async function middleware(request: NextRequest) {
  const response = intlMiddleware(request);

  const privateRoutes = [
    '/account'
  ];

  const { pathname } = request.nextUrl;
  const pathnameWithoutLocale = pathname.replace(/\/.{2}\//, '/');
  const isPrivate = privateRoutes.some((route) => pathnameWithoutLocale.startsWith(route));

  if (isPrivate) {
    const token = request.cookies.get('token');

    if (!token) {
      return NextResponse.redirect(new URL(`${APP_URL}`, request.url));
    }
  }

  return response;
}