import React, { useState } from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Textarea from '@mui/joy/Textarea';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Rating from '@mui/material/Rating';

interface CommentBoxProps {
    onCerrar: (cerrar: boolean) => void;
    informacion: (informacion: string, calificacion: number) => void; 
    value: any;
}

export default function CommentBox(props: CommentBoxProps) {
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState<number | null>(props.value); 

    const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComment(e.target.value);
    };

    const handleRatingChange = (_event: any,newRating: number | null) => {
        setRating(newRating);
    };

    const handleEnviar = () => {
        props.informacion(comment, rating || 0);
        props.onCerrar(true);
    };

    return (
        <FormControl sx={{ position: 'absolute', right: '20px', width: '300px' }}>
            <FormLabel sx={{ paddingLeft: '103px' }}>Tus comentarios</FormLabel>
            <Textarea
                placeholder="Escribe tus comentarios aquí..."
                minRows={3}
                value={comment}
                onChange={handleCommentChange}
                endDecorator={
                    <Box
                        sx={{
                            display: 'flex',
                            gap: 'var(--Textarea-paddingBlock)',
                            pt: 'var(--Textarea-paddingBlock)',
                            borderTop: '1px solid',
                            borderColor: 'divider',
                            flex: 'auto',
                        }}
                    >
                        <Rating value={rating} onChange={handleRatingChange} /> {/* Renderizar el componente Rating con los valores de estado */}
                        <Button onClick={handleEnviar} sx={{ ml: 'auto' }}>Send</Button>
                    </Box>
                }
                sx={{
                    minWidth: 300,
                }}
            />
        </FormControl>
    );
}
