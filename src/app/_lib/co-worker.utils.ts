export const getStatusColor = (status: string) => {
    switch (status) {
        case 'online':
            return 'bg-green-400';
        case 'away':
            return 'bg-yellow-400';
        case 'offline':
            return 'bg-gray-400';
        default:
            return 'bg-gray-400';
    }
};

export const getInitials = (name: string) => {
    return name
        .split(' ')
        .map(word => word.charAt(0))
        .join('')
        .toUpperCase()
        .slice(0, 2);
};