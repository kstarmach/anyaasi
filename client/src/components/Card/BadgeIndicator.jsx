function BadgeIndicator({ episodeDifference }) {
    if (episodeDifference > 0) {
        return (
            <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-red-600 px-2 py-1 text-xs font-medium text-white">
                New Episode: {episodeDifference}
            </span>
        )
    }

    return '';
}

export default BadgeIndicator;
