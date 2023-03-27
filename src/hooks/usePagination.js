import { useMemo } from 'react'

const usePagination = (totalRecords, limit, currentPage) => {
    const totalPages = useMemo(() => Math.ceil(totalRecords / limit), [totalRecords, limit]);
    const pagesArray = useMemo(() => {
        let pages = [];

        if (totalPages > 10) {
            const start = currentPage <= 5 ? 1 : currentPage - 4;
            const end = start + 9 >= totalPages ? totalPages : start + 9;
            pages = Array.from({ length: end - start + 1 }, (_, i) => start + i);

            if (start > 1) {
                pages.unshift('...');
                pages.unshift(1);
            }

            if (end < totalPages) {
                pages.push('...');
                pages.push(totalPages);
            }
        } else {
            pages = Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        return pages;
    }, [totalPages, currentPage]);

    return [pagesArray, totalPages];
}

export { usePagination }