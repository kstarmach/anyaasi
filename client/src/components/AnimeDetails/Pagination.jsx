import { ChevronLeftButton, ChevronRightButton } from "../ui/Chevrons";

const Pagination = ({ currentPage, setCurrentPage }) => {
    return (
        <div className='flex gap-4 items-center'>
            <ChevronLeftButton onClickHandler={() => setCurrentPage(currentPage - 1)} />
            {/* <span>Page {currentPage}/{totalPages}</span> */}
            <ChevronRightButton onClickHandler={() => setCurrentPage(currentPage + 1)} />
        </div>
    )
}

export default Pagination;