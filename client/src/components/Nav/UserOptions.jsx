import { useUserContext } from '../../UserContext';
import { useState, useEffect } from 'react'; // Import useState and useEffect
import { Link, useNavigate } from "react-router-dom";

const UserMenu = ({ handleSignOut, menuOpen }) => {
    return (
        <div
            id="user-menu"
            className={`absolute z-10 top-full right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ${menuOpen ? '' : 'hidden'
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
                        className="bg-white rounded-xl p-3 flex items-center justify-center text-md "
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
                                src={user.avatar}
                                alt=""
                            />
                            <span className='ml-3 mb-1 text-base'>
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

    return (<Link to={`login`} className="font-medium border-transparent text-gray-400 hover:text-black hover:border-blue-700 inline-flex items-center px-1 pt-1 border-b-2" aria-current="page">Sign in</Link>)
}

export default UserOptions;