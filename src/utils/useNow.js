import { useEffect, useState } from "react";

/**
 * Returns the current Date, refreshed every `intervalMs` (default: 1 minute).
 * Used anywhere we show "what's on air right now" so it never goes stale
 * while the screen stays open.
 */
export default function useNow(intervalMs = 60 * 1000) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);

  return now;
}
