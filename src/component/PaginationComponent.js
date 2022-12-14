import React from 'react'
import ReactPaginate from 'react-paginate'

const PaginationComponent = ({getPage, pageCount}) => {



  const handleClick = (data)=>{
    console.log(data.selected+1);
    getPage(data.selected+1)
  }

  return (
    <ReactPaginate
        breakLabel="..."
        nextLabel="التالى"
        onPageChange={handleClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="السابق"
        containerClassName='pagination justify-content-center p-3'
        pageClassName='page-item'
        pageLinkClassName='page-link'
        previousClassName='page-item'
        previousLinkClassName='page-link'
        nextClassName='page-item'
        nextLinkClassName='page-link'
        breakClassName='page-item'
        breakLinkClassName='page-link'
        activeClassName='active'
      />
  )
}

export default PaginationComponent