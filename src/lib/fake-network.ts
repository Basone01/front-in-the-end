// Shared fake network for demos. Started as a single latency knob for the
// rendering track; the async track added jitter ranges, failure rates, and
// abort support — each the day a lesson needed it, per the rule of three.

export function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export interface FakeFetchOptions {
  /** 0–1 chance the request "fails" (rejects after the latency). */
  failRate?: number;
  /** Extra random latency added on top, in ms (simulates an unstable network). */
  jitter?: number;
  /** Standard AbortSignal; rejects with DOMException('AbortError') when aborted. */
  signal?: AbortSignal;
}

/**
 * A pretend HTTP round-trip. Resolves with the time it took, or rejects with
 * Error('NetworkError') on simulated failure / DOMException on abort.
 */
export function fakeFetch(latency: number, options: FakeFetchOptions = {}): Promise<number> {
  const { failRate = 0, jitter = latency * 0.3, signal } = options;
  const total = Math.max(0, latency + Math.random() * jitter);

  return new Promise((resolve, reject) => {
    if (signal?.aborted) {
      reject(new DOMException('Aborted', 'AbortError'));
      return;
    }
    const timer = setTimeout(() => {
      if (Math.random() < failRate) reject(new Error('NetworkError'));
      else resolve(Math.round(total));
    }, total);
    signal?.addEventListener('abort', () => {
      clearTimeout(timer);
      reject(new DOMException('Aborted', 'AbortError'));
    });
  });
}

/** Millisecond stopwatch for demo timelines. */
export function stopwatch() {
  const start = performance.now();
  return () => Math.round(performance.now() - start);
}
