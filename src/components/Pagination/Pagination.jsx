import { useState } from 'react';
import { useGetDataContext } from '../../providers/GetDataProvider';
import './Pagination.scss';


const Pagination = () => {
    const { paginationCount, currentPage, setCurrentPage, loading } = useGetDataContext();
    const onChangePage = (e) => {
        switch (e.target.dataset.pagination) {
            case 'next':
                setCurrentPage((countPage => countPage + 1))
            break;
            case 'prev':
                setCurrentPage((countPage => countPage - 1))
            break;
            case 'start':
                setCurrentPage(1)
                break;
            case 'finish':
                setCurrentPage(paginationCount)
            break;
            case 'count':
                setCurrentPage(+e.target.textContent)
                break;
            default:
            return;
        }
    }
    let firstClass = currentPage === 1 ? 'Pagination-item Pagination-item__active' : 'Pagination-item';
    let secondClass = currentPage !== 1 && currentPage !== paginationCount ? 'Pagination-item Pagination-item__active' : 'Pagination-item';
    let thirdClass = currentPage === paginationCount ? 'Pagination-item Pagination-item__active' : 'Pagination-item';
    // велосипедные аттракционы, детей, беременных и cлабонервных желательно убрать от Ваших экранов
    function renderCount() {
        let thirdCountPage = currentPage + 2;
        let secoundCountPage = currentPage + 1;
        let firstCountPage = currentPage - 1;
        if (paginationCount === 1) {
            secondClass = 'Pagination-item__delete';
            thirdClass = 'Pagination-item__delete';
        } else if (paginationCount === 2)  {
            thirdClass = 'Pagination-item__delete'
            firstCountPage = currentPage - 1;
            secoundCountPage = currentPage + 1;
            secondClass = currentPage !== 1 ? 'Pagination-item Pagination-item__active' : 'Pagination-item';;
        } else {
            if (secondClass === 'Pagination-item Pagination-item__active') { 
                thirdCountPage = currentPage + 1;
            }
            if (thirdClass === 'Pagination-item Pagination-item__active') { 
                secoundCountPage = currentPage - 1;
                firstCountPage = currentPage - 2;
            }
        }
        return (
            <>
                <li className={firstClass} data-pagination='count'>
                     { firstClass === "Pagination-item Pagination-item__active" ? 1 : firstCountPage}
                </li>
                <li className={secondClass} data-pagination='count'>
                    { secondClass === "Pagination-item Pagination-item__active" ? currentPage : secoundCountPage}
                </li>
                <li className={thirdClass} data-pagination='count'>
                     { thirdClass === "Pagination-item Pagination-item__active" ? currentPage : thirdCountPage}
                 </li>
            </>
        )
    }
    return(
        <section className="Pagination">
            {loading ? '' : 
            <ul className="Pagination-items" onClick={(e) => onChangePage(e)}>
            <li className={currentPage === 1 ? "Pagination-item Pagination-item__hidden" : "Pagination-item Pagination-item__left"}  data-pagination='start'>
                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.71401 6.49988L7.80231 1.62545C8.16797 1.275 8.16797 0.706895 7.80231 0.356587C7.43665 0.00613754 6.84368 0.00613754 6.47787 0.356587L0.727266 5.86567C0.544436 6.04091 0.453125 6.27034 0.453125 6.49988C0.453125 6.72951 0.544614 6.9591 0.727266 7.13426L6.47787 12.6433C6.84368 12.9939 7.43668 12.9939 7.80231 12.6433C8.16797 12.293 8.16797 11.7248 7.80231 11.3745L2.71401 6.49988ZM13.632 11.3745C13.9977 11.7248 13.9977 12.293 13.632 12.6433C13.2663 12.9939 12.6735 12.9939 12.3075 12.6433L6.55693 7.13428C6.3741 6.95913 6.28293 6.72953 6.28293 6.49991C6.28293 6.27037 6.37427 6.04077 6.55693 5.8657L12.3075 0.356587C12.6735 0.00613754 13.2663 0.00613754 13.632 0.356587C13.9977 0.706895 13.9977 1.27498 13.632 1.62545L8.54358 6.49988L13.632 11.3745Z" fill=""/>
                </svg>
            </li>
            <li className={currentPage === 1 ? "Pagination-item Pagination-item__hidden" : "Pagination-item Pagination-item__left"} data-pagination='prev'>
                <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.932837 7.13428L6.73159 12.6433C7.10046 12.9939 7.69852 12.9939 8.06721 12.6433C8.43593 12.293 8.43593 11.7248 8.06721 11.3745L2.93621 6.49991L8.06706 1.62545C8.43578 1.275 8.43578 0.706895 8.06706 0.356587C7.69834 0.00613754 7.10031 0.00613754 6.73144 0.356587L0.932687 5.86567C0.748326 6.04091 0.65625 6.27034 0.65625 6.49988C0.65625 6.72953 0.748506 6.95913 0.932837 7.13428Z" fill="" />
                </svg>
            </li>
                {renderCount()}
            <li className={currentPage === paginationCount ? "Pagination-item Pagination-item__hidden" : "Pagination-item Pagination-item__right"} data-pagination='next'>
                <svg style={{transform: "rotate(180deg)"}}  width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.932837 7.13428L6.73159 12.6433C7.10046 12.9939 7.69852 12.9939 8.06721 12.6433C8.43593 12.293 8.43593 11.7248 8.06721 11.3745L2.93621 6.49991L8.06706 1.62545C8.43578 1.275 8.43578 0.706895 8.06706 0.356587C7.69834 0.00613754 7.10031 0.00613754 6.73144 0.356587L0.932687 5.86567C0.748326 6.04091 0.65625 6.27034 0.65625 6.49988C0.65625 6.72953 0.748506 6.95913 0.932837 7.13428Z" fill="" />
                </svg>
            </li>
            <li className={currentPage === paginationCount ? "Pagination-item Pagination-item__hidden" : "Pagination-item Pagination-item__right"} data-pagination='finish'>
                <svg width="14" height="13" style={{transform: "rotate(180deg)"}}    viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.71401 6.49988L7.80231 1.62545C8.16797 1.275 8.16797 0.706895 7.80231 0.356587C7.43665 0.00613754 6.84368 0.00613754 6.47787 0.356587L0.727266 5.86567C0.544436 6.04091 0.453125 6.27034 0.453125 6.49988C0.453125 6.72951 0.544614 6.9591 0.727266 7.13426L6.47787 12.6433C6.84368 12.9939 7.43668 12.9939 7.80231 12.6433C8.16797 12.293 8.16797 11.7248 7.80231 11.3745L2.71401 6.49988ZM13.632 11.3745C13.9977 11.7248 13.9977 12.293 13.632 12.6433C13.2663 12.9939 12.6735 12.9939 12.3075 12.6433L6.55693 7.13428C6.3741 6.95913 6.28293 6.72953 6.28293 6.49991C6.28293 6.27037 6.37427 6.04077 6.55693 5.8657L12.3075 0.356587C12.6735 0.00613754 13.2663 0.00613754 13.632 0.356587C13.9977 0.706895 13.9977 1.27498 13.632 1.62545L8.54358 6.49988L13.632 11.3745Z" fill=""/>
                </svg>
        </li>
        </ul>
            }
        </section>
    )
}

export default Pagination;