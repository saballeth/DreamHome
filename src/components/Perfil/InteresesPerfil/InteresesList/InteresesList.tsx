import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import IconButton from '@mui/joy/IconButton';
import Delete from '@mui/icons-material/Delete';
import { useAuth } from '@/Context/AuthContext';

export default function InteresesList() {
    const auth = useAuth();
    const intereses = auth.user.intereses;

    function formatText(text: string) {
        const words = text.split("-").map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        return words.join(' ');
    }

    return (
        <List sx={{ width: '100%' }}>
            {intereses.map((item: any) => {
                return (
                    <ListItem
                        sx={{ borderTop: '1px solid var(--lightGray)' }}
                        endAction={
                            <IconButton aria-label="Delete" size="sm" color="danger">
                                <Delete />
                            </IconButton>
                        }
                    >
                        <ListItemButton>{formatText(item.nombre)}</ListItemButton>
                    </ListItem>
                )
            })}
        </List>
    );
}
