import type { NextRequest } from "next/server"

// SECURITY: Supabase middleware removed - auth logic intentionally disabled

export async function middleware(request: NextRequest) {
  // DEMO MODE: No authentication middleware in demo toy SaaS
  return undefined
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
}

