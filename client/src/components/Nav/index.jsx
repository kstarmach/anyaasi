import { Link, NavLink } from "react-router-dom";
import SearchOption from './SearchOptions';
import UserOptions from './UserOptions';
// import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const PageLogo = () => {
    return (
        <Link to="/" className="">
            <img
                src="./Website_Logo.jpg"
                alt="Anime Cover"
                className="rounded-xl object-cover  shadow-2xl mx-auto h-32 w-auto "
            />

        </Link>
    )
}

const NavigationLinks = () => {
    // Define styles
    const defaultStyle = "text-gray-400 hover:text-black hover:border-b-2 hover:border-indigo-700";
    const activeStyle = "text-black border-b-2 border-indigo-700";

    return (
        <div className="flex gap-4 text-xl">
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive ? activeStyle : defaultStyle
                }
                aria-current="page"
            >
                Home
            </NavLink>
            <NavLink
                to="/popular"
                className={({ isActive }) =>
                    isActive ? activeStyle : defaultStyle
                }
                aria-current="page"
            >
                Popular
            </NavLink>
        </div>
    )
}






const Nav = () => {
    return (
        <nav className="top-20 left-0  mt-20 mb-10 ">
            <div className="mx-20 flex flex-wrap gap-4 items-center justify-between">
                <PageLogo />

                <NavigationLinks />

                <div className="flex gap-4">
                    <SearchOption />
                    <UserOptions />
                </div>
            </div>
        </nav>
    )
}

export default Nav;