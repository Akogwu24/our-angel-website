import React from 'react';

type TProgressbarLineProps = {
  fillStart: boolean;
};

export default function ProgressbarLine({ fillStart }: TProgressbarLineProps) {
  return (
    <div className='progress-container'>
      <div className='progress-bar'>
        <div className={fillStart ? 'fill' : ''} id='progress1'></div>
      </div>
    </div>
  );
}
