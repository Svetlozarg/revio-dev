/*
    This file indicates the protected routes of the project
    Only authenticated users can gain access to those routes
*/

export { default } from 'next-auth/middleware';

export const config = {
  matcher: [
    '/',
    '/inbox/:path*',
    '/broadcast/:path*',
    '/contacts/:path*',
    '/automations/:path*',
    '/reviews/:path*',
    '/settings/:path*',
  ],
};
