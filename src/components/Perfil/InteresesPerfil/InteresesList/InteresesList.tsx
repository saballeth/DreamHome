import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import IconButton from '@mui/joy/IconButton';
import Delete from '@mui/icons-material/Delete';
import { useAuth } from '@/Context/AuthContext';
import ApiService from '@/apiCalls.service/apiCalls.service';
import Swal from 'sweetalert2';
import { useState } from 'react';

export default function InteresesList() {
    const auth = useAuth();
    const [intereses, setIntereses] = useState(auth.user.intereses);    
    const apiService = new ApiService(auth.token);

    function formatText(text: string) {
        const words = text.split("-").map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        return words.join(' ');
    }

    const handleDelete = async (idInteres:number,index: number) => {
        Swal.fire({
            title: "¿Estas seguro?",
            text: 'No podras revertir esto!',
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, borrar!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const response = await apiService.delete(`api/interesesPorUsuario/${auth.user.id}/deleteInteresesPorUsuario/${idInteres}/`);
                if(response){
                    const newIntereses = [...intereses];
                    newIntereses.splice(index, 1);  
                    setIntereses(newIntereses);
                    Swal.fire({
                        title: "Borrado!",
                        text: "Tu interes fue borrado",
                        icon: "success"
                    });
                } 
            }
        })
    }

    return (
        <List sx={{ width: '100%' }}>
            {intereses.map((item: any,index:number) => {
                return (
                    <ListItem
                        key={'listItem-'+index}
                        sx={{ borderTop: '1px solid var(--lightGray)' }}
                        endAction={
                            <IconButton onClick={() => handleDelete(item.id,index)} aria-label="Delete" size="sm" color="danger">
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
