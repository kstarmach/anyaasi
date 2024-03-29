import { NavLink } from "react-router-dom";

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

export default NavigationLinks;