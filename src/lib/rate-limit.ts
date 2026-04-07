type Entry = { count: number; resetAt: number }
const store = new Map<string, Entry>()

/**
 * Returns true if the request is allowed, false if it should be rate-limited.
 * Uses an in-memory sliding window — resets on cold start, not shared across
 * multiple serverless instances, but sufficient for a low-traffic site.
 */
export function checkRateLimit(key: string, limit: number, windowMs: number): boolean {
  const now = Date.now()
  const entry = store.get(key)

  if (!entry || now >= entry.resetAt) {
    store.set(key, { count: 1, resetAt: now + windowMs })
    return true
  }

  if (entry.count >= limit) return false

  entry.count++
  return true
}
