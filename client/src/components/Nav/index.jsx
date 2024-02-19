import { Link } from "react-router-dom";
import SearchOption from './SearchOptions';
import UserOptions from './UserOptions';

const Nav = () => {
    return (
        <nav className="top-20 left-0  mt-20 mb-10 ">
            <div className="mx-20 flex items-center justify-normal">
                <div className="flex mr-40">
                    <img
                        src="./Website_Logo.jpg"
                        alt="Anime Cover"
                        className="rounded-xl object-cover  shadow-2xl mx-auto h-32 w-auto "
                    />

                </div>
                <div className="flex">

                    <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                        <Link to="/" className="font-medium border-transparent text-gray-400 hover:text-black hover:border-blue-700 inline-flex items-center px-1 pt-1 border-b-2  " aria-current="page">Home</Link>
                        <Link to="/popular" className="font-medium border-transparent text-gray-400 hover:text-black hover:border-blue-700 inline-flex items-center px-1 pt-1 border-b-2 ">Popular</Link>
                    </div>
                </div>

                <div className="flex ml-auto">
                    <SearchOption />
                    <UserOptions />
                </div>
            </div>
        </nav>
    )
}

export default Nav;