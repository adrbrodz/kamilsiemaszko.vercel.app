'use client';

import { useEffect } from 'react';

export default function GoogleReviews() {
  useEffect(() => {
    // Wait a tick to make sure the container exists
    const script = document.createElement('script');
    script.src = 'https://cdn.trustindex.io/loader.js?bd4f68f5261627433896c2b5ef0';
    script.async = true;
    const container = document.getElementById('trustindex-widget');
    if (container) {
      container.appendChild(script);
    }
  }, []);

  return (
    <div className="lg:mt-10 sm:px-20 lg:px-75 px-5" id="trustindex-widget"></div>
  );
}
