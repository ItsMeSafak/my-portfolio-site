'use client';

import { useEffect } from 'react';

export default function CastReceiverPage() {
  useEffect(() => {
    // Load the Cast Receiver SDK dynamically
    const script = document.createElement('script');
    script.src =
      'https://www.gstatic.com/cast/sdk/libs/caf_receiver/v3/cast_receiver_framework.js';
    script.async = true;

    script.onload = () => {
      // @ts-ignore
      const context = cast.framework.CastReceiverContext.getInstance();

      // Optional: handle messages later
      // const playerManager = context.getPlayerManager();

      context.start();
    };

    document.body.appendChild(script);
  }, []);

  return (
    <h1>Loading...</h1>
  );
}
