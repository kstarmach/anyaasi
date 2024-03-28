import { Link, NavLink } from "react-router-dom";
// import SearchOption from './SearchOptions';
import UserOptions from './UserOptions';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const Nav = () => {
    return (
        <nav className="top-20 left-0  mt-20 mb-10 ">
            <div className="mx-20 flex items-center justify-between">
                <Link to="/" className="">
                    <img
                        src="./Website_Logo.jpg"
                        alt="Anime Cover"
                        className="rounded-xl object-cover  shadow-2xl mx-auto h-32 w-auto "
                    />

                </Link>
                <div className="">

                    <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isActive
                                    ? "font-medium border-transparent text-black border-indigo-700 inline-flex items-center px-1 pt-1 border-b-2 cursor-default"
                                    : isPending
                                        ? "font-medium border-transparent text-gray-400 hover:text-black hover:border-indigo-700 inline-flex items-center px-1 pt-1 border-b-2 pending"
                                        : "font-medium border-transparent text-gray-400 hover:text-black hover:border-indigo-700 inline-flex items-center px-1 pt-1 border-b-2"
                            }
                            aria-current="page"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/popular"
                            className={({ isActive, isPending }) =>
                                isActive
                                    ? "font-medium border-transparent text-black border-blue-700 inline-flex items-center px-1 pt-1 border-b-2 cursor-default"
                                    : isPending
                                        ? "font-medium border-transparent text-gray-400 hover:text-black hover:border-indigo-700 inline-flex items-center px-1 pt-1 border-b-2 pending"
                                        : "font-medium border-transparent text-gray-400 hover:text-black hover:border-indigo-700 inline-flex items-center px-1 pt-1 border-b-2"
                            }
                            aria-current="page"
                        >
                            Popular
                        </NavLink>

                    </div>
                </div>

                <div className="flex">
                    {/* <SearchOption /> */}
                    <div className="flex items-center  py-2 px-4 cursor-pointer">
                        <MagnifyingGlassIcon className="h-5 w-5  sm:flex sm:items-center relative" />
                    </div>
                    <UserOptions />
                </div>
            </div>
        </nav>
    )
}

export default Nav;