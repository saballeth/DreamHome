import { useAuth } from '@/Context/AuthContext';
import Avatar from '@mui/material/Avatar';

function stringToColor(string: string) {
    let hash = 0;
    let i;
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

function stringAvatar(name: string) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0].toUpperCase()}${name.split(' ')[1][0].toUpperCase()}`,
    };
}

export default function BackgroundLetterAvatars() {
    const auth = useAuth();

    return (
        <Avatar {...stringAvatar(auth.user.nombre +' '+ auth.user.apellido)} sx={{ width: '42%', height: '52%' }}/>
    );
}