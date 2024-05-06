import { Grid, Text } from '@chakra-ui/react';
import React from 'react';
import styles from './loading.module.css';

export default function loading() {
  return (
    <div className='min-h-[80vh] w-full grid place-content-center'>
      <div className={styles['loader']}>
        <span>O</span>
        <span>U</span>
        <span>R</span>
        <span>A</span>
        <span>N</span>
        <span>G</span>
        <span>E</span>
        <span>L</span>
      </div>
    </div>
  );
}
