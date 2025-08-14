'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: false });

export default function ProgressBar() {
  const pathname = usePathname();

  useEffect(() => {
    // Start NProgress when route changes
    NProgress.start();

    // Simulate loading for 800ms, then stop
    const timer = setTimeout(() => {
      NProgress.done();
    }, 800);

    // Cleanup
    return () => {
      clearTimeout(timer);
      NProgress.done();
    };
  }, [pathname]); // rerun when path changes

  return null;
}
