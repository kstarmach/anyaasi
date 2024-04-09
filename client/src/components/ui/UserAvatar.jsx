export const UserAvatar = ({ avatar }) => {
    return (
        <img
            className="h-12 w-12 object-cover rounded-full shadow-[rgba(0,0,5,0.1)_10px_5px_4px_0px]"
            src={avatar}
            alt="user avatar"
        />
    )
}