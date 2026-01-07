import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protéger la page d'ajout d'annonce
  if (pathname.startsWith('/add-listing') && !pathname.includes('/add-listing-protected')) {
    // Le middleware ne peut pas accéder à sessionStorage, donc on vérifie via un cookie
    const authCookie = request.cookies.get('addListingAuth')?.value;
    
    // Si pas de cookie d'auth, rediriger vers la page protégée
    if (authCookie !== 'true') {
      return NextResponse.redirect(new URL('/add-listing-protected', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/add-listing/:path*']
};
