import React, { ReactNode } from 'react';

export function PageWrapper({ children }: { children: ReactNode }) {
  return <div className='w-full max-w-[1350px] mx-auto '>{children}</div>;
}
