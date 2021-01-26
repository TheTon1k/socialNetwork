import React from 'react'
import style from './Pagination.module.css';


const Pagination = ({currentPage, onPageChanged, usersTotalCount, pageSize}) => {
    let pagesCount = Math.ceil(usersTotalCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map(p => {
                return (<span key={p} onClick={() => {
                        onPageChanged(p)
                    }} className={currentPage === p ? style.selectedPage : null}>
                        {p}
                    </span>
                )
            })
            }
        </div>
    )
}


export default Pagination;