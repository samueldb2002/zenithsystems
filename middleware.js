import { rewrite } from '@vercel/edge';

export const config = {
  matcher: ['/'],
};

export default function middleware(request) {
  const host = request.headers.get('host') || '';

  if (host === 'frontdesk.zenithintelligence.ai') {
    return rewrite(new URL('/frontdesk.html', request.url));
  }
}
