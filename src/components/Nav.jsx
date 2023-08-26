import { useState, useEffect } from 'react'; // Import useState and useEffect
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from '../UserContext';


const UserMenu = ({ handleSignOut, menuOpen }) => {
    return (
        <div
            id="user-menu"
            className={`absolute top-full right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${menuOpen ? '' : 'hidden'
                }`}
        >
            <a
                href="#"
                className="flex w-full px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabIndex="-1"
            >
                Your Profile
            </a>
            <a
                href="#"
                className="flex w-full px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabIndex="-1"
            >
                Settings
            </a>
            <a
                href="#"
                className="flex w-full px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabIndex="-1"
                onClick={handleSignOut}
            >
                Sign out
            </a>
        </div>
    )
}



const SearchOption = () => {
    const [inputVisible, setInputVisible] = useState(false);

    const handleButtonClick = () => {
        setInputVisible((prevInputVisible) => !prevInputVisible);
    };
    
    return (
        <div className="flex items-center  bg-white rounded-xl ">
            <button
                className="sm:ml-6 sm:flex sm:items-center relative mr-5"
                onClick={handleButtonClick}
            >
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                </svg>
            </button>
            {inputVisible && (
                <div className="ml-2">
                    {/* <p>Enter your search:</p> */}
                    <input
                        type="text"
                        className="bg-white rounded-xl p-2"
                        placeholder="Enter your search"
                    />
                </div>
            )}
        </div>
    );
};




const UserOptions = () => {
    const { user, setUser } = useUserContext();
    const [menuOpen, setMenuOpen] = useState(false); // State to track menu open/close

    useEffect(() => {
        // Add a click event listener to the document
        const handleClickOutside = (event) => {
            const menu = document.getElementById('user-menu');
            const button = document.getElementById('user-menu-button');

            if (menu && button && !menu.contains(event.target) && !button.contains(event.target)) {
                // Click was outside the menu and button, so close the menu
                setMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []); // Run only once when the component mounts

    const handleSignOut = () => {
        localStorage.removeItem('user');
        setUser(null);
        window.location.href = '/';
    }

    if (user) {
        return (
            <div className="hidden sm:ml-6 sm:flex sm:items-center relative">
                <div className=" ">
                    <button
                        type="button"
                        className="bg-white rounded-xl p-3 flex items-center justify-center text-md focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
                        id="user-menu-button"
                        aria-expanded={menuOpen}
                        aria-haspopup="true"
                        onClick={() => {
                            setMenuOpen(!menuOpen); // Toggle menu open/close
                        }}
                    >
                        <span className="sr-only">Open user menu</span>
                        <div className="flex items-center">
                            <img
                                className="h-8 w-8 rounded-full"
                                src={user.avatar.large}
                                alt=""
                            />
                            <span className='ml-3 mb-2'>
                                {user.name}
                            </span>
                            <span className='ml-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                    <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                                </svg>
                            </span>
                        </div>
                    </button>

                    <UserMenu
                        handleSignOut={handleSignOut}
                        menuOpen={menuOpen}
                    />

                </div>
            </div>

        )
    }

    return (<Link to={`login`} className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium" aria-current="page">Sign in</Link>)
}


const Nav = () => {
    return (
        <nav className="absolute top-20 left-0 w-screen">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 justify-between">
                    <div className="flex">

                        <div className="flex flex-shrink-0 items-center mr-20">
                            <svg
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
                            </svg>
                        </div>
                        <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">


                            <Link to="/" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2  " aria-current="page">Home</Link>
                            <Link to="/aninfo" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 ">Popular</Link>
                            <Link to="/" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2  ">Anime News</Link>
                            <Link to="/" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 ">Help</Link>
                        </div>
                    </div>

                    <SearchOption />
                    <UserOptions />
                </div>
            </div>
        </nav>
    )
}

export default Nav;