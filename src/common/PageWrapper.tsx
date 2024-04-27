import React, { ReactNode } from 'react';

export function PageWrapper({ children }: { children: ReactNode }) {
  return <div className='w-full max-w-[1400px] mx-auto px-[4%]'>{children}</div>;
}
