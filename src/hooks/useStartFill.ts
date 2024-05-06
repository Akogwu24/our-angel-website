'use client';

import { useEffect, useState } from 'react';

export function useStartFill() {
  const [startFill, setStartFill] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartFill(startFill < 2 ? startFill + 1 : 0);
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [startFill]);

  return { startFill };
}
