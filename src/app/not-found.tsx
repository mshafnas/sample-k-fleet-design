import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#f8f9ff] px-6 text-center text-[#0b1c30]">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#004ac6]">
        K-SOLUTIONS
      </p>
      <h1 className="mt-4 text-4xl font-extrabold">Page not found</h1>
      <p className="mt-3 max-w-md text-slate-600">
        The page you are looking for may have moved or is no longer available.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-lg bg-[#004ac6] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#003da8]"
      >
        Back to home
      </Link>
    </main>
  );
}
