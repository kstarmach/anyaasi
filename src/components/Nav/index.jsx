import { Link } from "react-router-dom";
import SearchOption from './SearchOptions';
import UserOptions from './UserOptions';

const Nav = () => {
    return (
        <nav className=" top-20 left-0 w-screen mt-20 mb-10">
            <div className="mx-20 ">
                <div className="flex  justify-between">
                    <div className="flex">

                        <div className="flex flex-shrink-0 items-center mr-40">
                            {/* <svg
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                className="text-gray-100"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    width="100%"
                                    height="100%"
                                    rx="16"
                                    fill="currentColor"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                                    fill="black"
                                />
                            </svg> */}
                        </div>
                        <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                            <Link to="/" className="font-medium border-transparent text-gray-400 hover:text-black hover:border-blue-700 inline-flex items-center px-1 pt-1 border-b-2  " aria-current="page">Home</Link>
                            <Link to="/popular" className="font-medium border-transparent text-gray-400 hover:text-black hover:border-blue-700 inline-flex items-center px-1 pt-1 border-b-2 ">Popular</Link>
                            <Link to="/" className="font-medium border-transparent text-gray-400 hover:text-black hover:border-blue-700 inline-flex items-center px-1 pt-1 border-b-2  ">Anime News</Link>
                            <Link to="/" className="font-medium border-transparent text-gray-400 hover:text-black hover:border-blue-700 inline-flex items-center px-1 pt-1 border-b-2 ">Help</Link>
                        </div>
                    </div>
                    <div className="flex">
                        <SearchOption />
                        <UserOptions />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;