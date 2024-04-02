import { ArrowLongLeftIcon } from '@heroicons/react/24/solid';
import { NavLink } from "react-router-dom";

export const BackButton = () => {
    const handleGoBack = () => {
        window.history.back();
    };

    return (
        <button
            className='bg-white rounded-full p-2 self-start max-w-max shadow-[rgba(0,0,5,0.1)_10px_5px_4px_0px]'
            onClick={handleGoBack}
        >
            <ArrowLongLeftIcon className="h-5 w-5" />
        </button>
    )
}

export const SignInButton = () => {
    return (
        <NavLink
            to={`login`}
            className="shadow-[rgba(0,0,5,0.1)_10px_5px_4px_0px] bg-indigo-600 hover:bg-indigo-500 text-white  rounded-xl px-3 py-2 flex items-center justify-center  font-semibold "
            aria-current="page"
        >
            Sign in
        </NavLink>
    )
}
