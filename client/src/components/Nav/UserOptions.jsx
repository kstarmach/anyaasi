import { ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react'; // Import useState and useEffect
import { NavLink } from "react-router-dom";
import { useUserContext } from '../../UserContext';

const UserMenu = ({ handleSignOut, menuOpen }) => {
    return (
        <div
            id="user-menu"
            className={` absolute z-10 top-full right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ${menuOpen ? '' : 'hidden'
                }`}
        >
            {/* <a
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
            </a> */}
            <a
                href="#"
                className="flex justify-between w-full px-4 py-2 text-sm text-gray-700 text-right"
                role="menuitem"
                tabIndex="-1"
                onClick={handleSignOut}
            >
                Sign out
                <ArrowRightStartOnRectangleIcon className='w-5 h-5 mr-2' />
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
                        className=" p-3 flex items-center justify-center text-md "
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
                                className="h-10 w-10 rounded-full"
                                src={user.avatar}
                                alt=""
                            />
                            {/* <span className='ml-3 mb-1 text-base'>
                                {user.name}
                            </span>
                            <span className='ml-3  css-1xc3v61-indicatorContainer'>
                                <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="css-tj5bde-Svg"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg>
                            </span> */}
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

    return (<NavLink to={`login`} className="bg-indigo-600 text-white  rounded-xl p-3 flex items-center justify-center text-md " aria-current="page">Sign in</NavLink>)
}

export default UserOptions;