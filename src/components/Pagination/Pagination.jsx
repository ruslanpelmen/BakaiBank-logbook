import React from "react";
import { v4 } from "uuid";
import classNames from "classnames";
import { usePagination } from "../../hooks/usePagination";
import { Button } from '../components'
import { TriangleButton } from './components/TriangleButton'
import cl from './Pagination.module.scss'

const Pagination = ({ className, currentPage, totalCount, limit, changePage }) => {
    const [pagesArray, totalPages] = usePagination(totalCount, limit, currentPage)

    return (
        <div className={classNames(cl.pagination, className)}>
            {currentPage - 1 > 0 && (
                <TriangleButton variant='prev' onClick={() => changePage(currentPage - 1)} />
            )}
            <div className={cl.pages}>
                {pagesArray.map((item) => (
                    <Button
                        className={classNames(cl.page, currentPage === item && cl.currentPage, { [cl.dots]: item === "..." })}
                        key={v4()}
                        pagination
                        onClick={item !== '...' ? () => changePage(item) : null}
                    >
                        {item}
                    </Button>
                ))}
            </div>
            {currentPage + 1 <= totalPages && (
                <TriangleButton variant='next' onClick={() => changePage(currentPage + 1)} />
            )}
        </div>
    );
};


export { Pagination }