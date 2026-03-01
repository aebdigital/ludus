'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

declare global {
  interface Window {
    Lenis: any;
    __lenis: any;
  }
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Wait for Lenis to be available if it's not immediately ready, though beforeInteractive should handle it
    const initLenis = () => {
      if (typeof window.Lenis === 'function') {
        const lenis = new window.Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          direction: 'vertical',
          gestureDirection: 'vertical',
          smooth: true,
          mouseMultiplier: 1,
          smoothTouch: false,
          touchMultiplier: 2,
        });

        function raf(time: number) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        window.__lenis = lenis;

        // On route change: scroll to hash target or top of page
        const hash = window.location.hash;
        if (hash) {
          requestAnimationFrame(() => {
            const target = document.querySelector(hash);
            if (target) {
              lenis.scrollTo(target, { offset: -112, duration: 1.2, immediate: false });
            }
          });
        } else {
          lenis.scrollTo(0, { immediate: true });
        }

        return lenis;
      }
    };

    const lenisInstance = initLenis();

    return () => {
      lenisInstance?.destroy();
      window.__lenis = null;
    };
  }, [pathname]);

  return <>{children}</>;
}
