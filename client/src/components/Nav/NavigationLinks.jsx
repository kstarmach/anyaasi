import { NavLink } from "react-router-dom";

const NavigationLinks = () => {
    // Define styles
    const defaultStyle = "text-gray-400 hover:text-black border-b-2 border-neutral-50 dark:border-indigo-950 hover:border-orange-600 dark:hover:text-slate-100 dark:hover:border-orange-600";
    const activeStyle = "text-black border-b-2  dark:text-slate-100 border-orange-600";

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

export default NavigationLinks;