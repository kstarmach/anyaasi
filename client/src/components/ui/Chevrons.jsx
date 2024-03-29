import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"

export const ChevronLeftButton = ({ onClickHandler }) => {
    return (
        <button
            onClick={onClickHandler}
            className='bg-white  rounded-full p-2 '
        >
            <ChevronLeftIcon className="h-5 w-5" />

        </button>
    )
}

export const ChevronRightButton = ({ onClickHandler }) => {
    return (
        <button
            onClick={onClickHandler}
            className='bg-white  rounded-full p-2 '
        >
            <ChevronRightIcon className="h-5 w-5" />
        </button>
    )
}
