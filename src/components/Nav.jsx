import { useState, useEffect } from 'react'; // Import useState and useEffect
import { Link } from "react-router-dom";

const Nav = ({ user }) => {
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
    return (
        <nav className="bg-white shadow-sm absolute top-0 left-0 w-screen">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 justify-between">
                    <div className="flex">

                        <div className="flex flex-shrink-0 items-center">
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


                            <Link to="/" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium" aria-current="page">Dashboard</Link>
                            <Link to="/aninfo" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Anime Info</Link>
                            <Link to="/" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Projects</Link>
                            <Link to="/" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Calendar</Link>
                        </div>
                    </div>
                    {!user ?
                        <Link to={`login`} className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium" aria-current="page">Sign in</Link>
                        :
                        <div className="hidden sm:ml-6 sm:flex sm:items-center relative">
                            <div className="relative ml-3">
                                <button
                                    type="button"
                                    className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
                                    id="user-menu-button"
                                    aria-expanded={menuOpen}
                                    aria-haspopup="true"
                                    onClick={() => {
                                        setMenuOpen(!menuOpen); // Toggle menu open/close
                                    }}
                                >
                                    <span className="absolute -inset-1.5"></span>
                                    <span className="sr-only">Open user menu</span>
                                    <img
                                        className="h-8 w-8 rounded-full"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt=""
                                    />
                                </button>
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
                                    >
                                        Sign out
                                    </a>
                                </div>
                            </div>
                        </div>


                    }
                </div>
            </div>
        </nav>
    )
}

export default Nav;