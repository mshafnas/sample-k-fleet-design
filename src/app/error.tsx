"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Keep production error details in the browser console for diagnostics.
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#f8f9ff] px-6 text-center text-[#0b1c30]">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#004ac6]">
        K-SOLUTIONS
      </p>
      <h1 className="mt-4 text-3xl font-extrabold">Something went wrong</h1>
      <p className="mt-3 max-w-md text-slate-600">
        We could not load this page. Please try again.
      </p>
      <button
        onClick={reset}
        className="mt-8 rounded-lg bg-[#004ac6] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#003da8]"
      >
        Try again
      </button>
    </main>
  );
}
