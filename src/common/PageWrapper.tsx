import React, { ReactNode } from 'react';

export function PageWrapper({ children }: { children: ReactNode }) {
  return <div className='w-full max-w-[1400px] mx-auto px-[1%]'>{children}</div>;
}
