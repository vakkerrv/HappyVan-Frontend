import React from 'react'
import ReactPaginate from 'react-paginate';
import { withRouter } from 'react-router-dom';

const Paginate = ({history, page, pages, isAdmin = false}) => {
    let keyword = history.location.search
    keyword = (keyword==='') ? '?' : keyword.split('&p=')[0]

    const handlePageClick = (data) => {
        history.push(`/catalog/${keyword}&p=${data.selected + 1}`)
    }


    return (
        pages > 1 && (
                <div className='pagination'>
                    <ReactPaginate
                      previousLabel={<div className="pagination-arrow">
                                            <i className="fa-arrow-prev"></i>
                                        </div>}
                      nextLabel={<div href="#" className="pagination-arrow">
                                            <i className="fa-arrow-next"></i>
                                        </div>}
                      breakLabel={'...'}
                      breakClassName={'break-me'}
                      pageCount={pages}
                      marginPagesDisplayed={2}
                      pageRangeDisplayed={5}
                      onPageChange={handlePageClick}
                      // activeClassName={'active'}
                      activeLinkClassName={'pagination-active'}
            
                    />
                </div>
            )
    )
};

export default withRouter(Paginate);