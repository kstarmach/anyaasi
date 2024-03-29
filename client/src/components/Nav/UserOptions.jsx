import { ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/solid';
import { NavLink } from "react-router-dom";
import { useUserContext } from '../../UserContext';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

const UserOptions = () => {
    const { user, setUser } = useUserContext();

    const handleSignOut = () => {
        localStorage.removeItem('user');
        setUser(null);
        window.location.href = '/';
    }

    if (user) {
        return (

            <Menu as="div" className="relative ">
                <div>
                    <Menu.Button className="flex w-full justify-center ">
                        <img
                            className="h-12 w-auto rounded-full"
                            src={user.avatar}
                            alt="user avatar"
                        />
                    </Menu.Button>
                </div>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                            <Menu.Item>
                                <span className='block w-full px-4 py-2 text-left text-sm '> Signed in as <span className='text-slate-400'> {user.name}</span></span>
                            </Menu.Item>

                            <form method="POST" action="#">
                                <Menu.Item>
                                    <button
                                        type="submit"
                                        className='block w-full px-4 py-2 text-left text-sm flex justify-between'
                                        onClick={handleSignOut}
                                    >
                                        Sign out
                                        <ArrowRightStartOnRectangleIcon className='w-5 h-5 mr-2' />
                                    </button>
                                </Menu.Item>
                            </form>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu >
        )
    }

    return (<NavLink to={`login`} className="bg-indigo-600 text-white  rounded-xl px-3 flex items-center justify-center text-md " aria-current="page">Sign in</NavLink>)
}

export default UserOptions;