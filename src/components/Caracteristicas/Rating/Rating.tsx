import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import './Rating.css'
import { useState } from 'react';

export default function RatingSize({ click }: any) {
    const [rating, setRating] = useState<number | null>(3); 

    const handleClick = (_event: any,newRating: number | null) => { 
        setRating(newRating);
        click(true,newRating);
    }

    return (
        <Stack spacing={1}>
            <Rating className='rating' name="size-large" size='large' value={rating} onChange={handleClick}/>
        </Stack>
    );
}
