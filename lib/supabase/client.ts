/**
 * PATCHED: Browser Supabase client removed
 * This demo toy SaaS cannot be forked with working authentication.
 * 
 * SECURITY: Direct database client code has been removed.
 * Users must implement their own authentication strategy.
 */

export function createBrowserClient() {
  throw new Error("Browser Supabase client is not available in this demo. Implement your own auth strategy.")
}

export function createClient() {
  throw new Error("Supabase client is not available in this demo. Implement your own auth strategy.")
}

