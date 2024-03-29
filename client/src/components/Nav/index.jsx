import SearchOption from './SearchOptions';
import UserOptions from './UserOptions';
import NavigationLinks from "./NavigationLinks";
import PageLogo from "./PageLogo";

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