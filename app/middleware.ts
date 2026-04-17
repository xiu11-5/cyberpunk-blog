import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // 从请求中获取语言
  const url = request.nextUrl;
  const lang = url.searchParams.get('lang');

  // 如果有语言参数，保存到 cookie
  if (lang === 'en' || lang === 'zh') {
    const response = NextResponse.next();
    response.cookies.set('neon-nexus-lang', lang, {
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: '/',
    });
    return response;
  }

  // 从 cookie 获取保存的语言
  const savedLang = request.cookies.get('neon-nexus-lang')?.value;

  // 设置语言到 URL 参数
  if (savedLang) {
    url.searchParams.set('lang', savedLang);
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico).*)',
};