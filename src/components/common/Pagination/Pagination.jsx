import React, {useState} from 'react'
import style from './Pagination.module.css';

const Pagination = ({currentPage, onPageChanged, ItemsTotalCount, pageSize,portionSize=20}) => {
    let pagesCount = Math.ceil(ItemsTotalCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let firstPortionElement = (portionNumber - 1) * portionSize + 1
    let lastPortionElement = portionNumber * portionSize

    return (
        <div>
            {portionNumber > 1 && <button onClick={()=>{setPortionNumber(portionNumber-1)}}>prev</button>}

            {pages.filter(p => p >= firstPortionElement && p <= lastPortionElement)
                .map(p => {
                    return <span key={p} onClick={() => {
                        onPageChanged(p)
                    }} className={currentPage === p ? style.selectedPage : null}>
                        {p}
                    </span>
                })}

            {portionNumber !== portionCount && <button onClick={()=>{setPortionNumber(portionNumber+1)}}>next</button>}
        </div>
    )
}


export default Pagination;