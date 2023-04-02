import type { NextFetchEvent, NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  const ContentSecurityPolicy = `
  img-src 'self' data: https://mc.yandex.ru https://www.google-analytics.com;
  connect-src 'self' https://mc.yandex.ru https://code-ya.jivosite.com https://www.google-analytics.com https://node-sber1-az3-1.jivosite.com;
  default-src 'self';
  script-src 'self' https://mc.yandex.ru https://yastatic.net https://ucalc.pro https://code.jivo.ru https://www.googletagmanager.com;
  child-src blob: https://mc.yandex.ru;
  frame-src blob: https://mc.yandex.ru https://api.ucalc.pro;
  style-src 'self' https://api.ucalc.pro https://code.jivo.ru;
  font-src 'self';  
  media-src 'self' https://code.jivo.ru;
`;

  const response = NextResponse.next();

  response.headers.set('Content-Security-Policy', ContentSecurityPolicy.replace(/\n/g, ''));
  response.headers.set('X-Frame-Options', 'deny');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin');
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Permissions-Policy', 'camera=(self); battery=(); geolocation=(); microphone=()');

  return response;
}