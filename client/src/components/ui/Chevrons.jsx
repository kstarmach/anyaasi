import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"

export const ChevronLeftButton = ({ onClickHandler }) => {
    return (
        <button
            onClick={onClickHandler}
            className='bg-white  rounded-full p-2 shadow-[rgba(0,0,5,0.1)_10px_5px_4px_0px]'
        >
            <ChevronLeftIcon className="h-5 w-5" />

        </button>
    )
}

export const ChevronRightButton = ({ onClickHandler }) => {
    return (
        <button
            onClick={onClickHandler}
            className='bg-white  rounded-full p-2 shadow-[rgba(0,0,5,0.1)_10px_5px_4px_0px]'
        >
            <ChevronRightIcon className="h-5 w-5" />
        </button>
    )
}
