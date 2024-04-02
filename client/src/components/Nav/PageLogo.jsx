import { Link } from "react-router-dom";

const PageLogo = () => {
    return (
        <Link to="/" className="">
            <img
                src="/Website_Logo.jpg"
                alt="Anime Cover"
                className="rounded-xl object-cover  shadow-2xl mx-auto h-32 w-auto shadow-[rgba(0,0,5,0.1)_10px_5px_4px_0px]"
            />
        </Link>
    )
}

export default PageLogo;