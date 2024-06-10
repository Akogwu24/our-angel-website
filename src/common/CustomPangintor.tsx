'use client';

import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

export const CustomPangintor = () => {
  const [pageOffset, setPageOffset] = useState(0);
  const [pageCount, setPageCount] = useState(10);

  const handlePageChange = (event: { selected: number }) => {
    // console.log(event);
    // TODO Only change displayed selected page
    // when its content is loaded in useEffect.
    setPageOffset(event.selected);
  };

  return (
    <ReactPaginate
      className='react-pagination'
      previousLabel='<-- Previous'
      nextLabel='Next -->'
      pageClassName='page-item'
      pageLinkClassName='page-link'
      previousClassName='previous-link'
      previousLinkClassName='page-link'
      nextClassName='next-link'
      nextLinkClassName='page-link'
      breakLabel='...'
      breakClassName='page-item'
      breakLinkClassName='page-link'
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      onPageChange={handlePageChange}
      containerClassName='pagination'
      activeClassName='active'
      forcePage={pageOffset}
    />
  );
};
