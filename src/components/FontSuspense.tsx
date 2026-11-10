import React, { Suspense } from 'react';

// Resource cache for React Suspense font loading
let fontPromise: Promise<boolean> | null = null;
let fontsLoaded = false;

function readFontResource() {
  if (fontsLoaded) return true;

  if (!fontPromise) {
    fontPromise = new Promise<boolean>((resolve) => {
      if (typeof document === 'undefined' || !document.fonts) {
        fontsLoaded = true;
        resolve(true);
        return;
      }

      // Check if fonts are already loaded
      if (document.fonts.status === 'loaded') {
        fontsLoaded = true;
        resolve(true);
        return;
      }

      // Safety timeout so user is never blocked longer than 1.2s even on slow connections
      const timeoutId = setTimeout(() => {
        fontsLoaded = true;
        resolve(true);
      }, 1200);

      document.fonts.ready
        .then(() => {
          clearTimeout(timeoutId);
          fontsLoaded = true;
          resolve(true);
        })
        .catch(() => {
          clearTimeout(timeoutId);
          fontsLoaded = true;
          resolve(true);
        });
    });
  }

  if (!fontsLoaded) {
    throw fontPromise;
  }

  return true;
}

// Inner reader component that triggers React Suspense
const FontLoaderCheck: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  readFontResource();
  return <>{children}</>;
};

// Polished fallback loading indicator
export const FontLoadingFallback: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#f8f9ff] text-[#0b1c30] transition-opacity duration-300">
      <div className="flex flex-col items-center max-w-sm px-6 text-center">
        {/* Brand Logo with gentle pulse */}
        <div className="relative mb-6 flex items-center justify-center">
          <div className="absolute inset-0 -m-3 rounded-2xl bg-[#004ac6]/10 animate-ping opacity-60 pointer-events-none" />
          <div className="relative bg-white px-5 py-3 rounded-2xl shadow-lg border border-[#dae2fd]">
            <img
              alt="K-SOLUTIONS"
              className="h-10 w-auto object-contain"
              src="https://lh3.googleusercontent.com/aida/AEtjO1WM8GEUZjjs6gyTBNfawSqY-NA-ryKYglO47iGxngoGeyWC7-43o1ewgflXuTQ8q4yJxkCMfsPijledvFswKLOeo9YMV190ieIYOo8-pDcia7DEWpVo0Qd0NruiobJPVrHnVWHpQGF71DwGjQwFPJuSgJ7DD9PnlLsQ3D20wXj4FAuyeY01tOXLXHl-2pp4MsJozv72vocEgMDOWt0XKV__JPrdjh5dZ01K2jkYnq6htmYjih4GFqLujhg"
            />
          </div>
        </div>

        {/* Loading spinner */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-5 h-5 border-2 border-[#004ac6] border-t-transparent rounded-full animate-spin" />
          <span className="text-sm font-semibold text-[#0b1c30] tracking-wide">
            Loading typography & fonts...
          </span>
        </div>

        <p className="text-xs text-slate-500 font-medium">
          フォントライブラリを準備中 · Preparing fonts
        </p>
      </div>
    </div>
  );
};

export const FontSuspenseBoundary: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Suspense fallback={<FontLoadingFallback />}>
      <FontLoaderCheck>{children}</FontLoaderCheck>
    </Suspense>
  );
};
