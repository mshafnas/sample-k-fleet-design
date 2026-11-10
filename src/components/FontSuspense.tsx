import React, { Suspense } from 'react';
import { CarLoader } from './CarLoader';

// Resource cache for React Suspense font & initial automotive asset loading
let fontPromise: Promise<boolean> | null = null;
let fontsLoaded = false;

function readFontResource() {
  if (fontsLoaded) return true;

  if (!fontPromise) {
    fontPromise = new Promise<boolean>((resolve) => {
      // Allow car loader animation to display its smooth inspection cycle (~1.6s)
      const minTimer = new Promise<void>((res) => setTimeout(res, 1600));

      const fontTimer =
        typeof document !== 'undefined' && document.fonts
          ? Promise.race([
              document.fonts.ready,
              new Promise<void>((res) => setTimeout(res, 1200)),
            ])
          : Promise.resolve();

      Promise.all([fontTimer, minTimer])
        .then(() => {
          fontsLoaded = true;
          resolve(true);
        })
        .catch(() => {
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

// Polished fallback loading indicator featuring the custom car animation
export const FontLoadingFallback: React.FC = () => {
  return <CarLoader minDurationMs={1600} />;
};

export const FontSuspenseBoundary: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Suspense fallback={<FontLoadingFallback />}>
      <FontLoaderCheck>{children}</FontLoaderCheck>
    </Suspense>
  );
};
