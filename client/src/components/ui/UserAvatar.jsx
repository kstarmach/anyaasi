export const UserAvatar = ({ avatar }) => {
    return (
        <img
            className="h-12 w-auto rounded-full"
            src={avatar}
            alt="user avatar"
        />
    )
}