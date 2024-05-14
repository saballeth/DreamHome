import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Textarea from '@mui/joy/Textarea';

export default function ExampleTextareaComment() {

    return (
        <FormControl>
            <FormLabel>Tus comentarios</FormLabel>
            <Textarea
                placeholder="Escribe tus comentarios aquí..."
                minRows={3}
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
                        <Button sx={{ ml: 'auto' }}>Send</Button>
                    </Box>
                }
                sx={{
                    minWidth: 300,
                }}
            />
        </FormControl>
    );
}
