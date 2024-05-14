import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import './Rating.css'

export default function RatingSize({ click }: any) {

    const handleClick = () => {
        click(true);
    }

    return (
        <Stack spacing={1}>
            <Rating style={{fontsize:40px} className='rating' name="size-large" defaultValue={4} onClick={handleClick} />
        </Stack>
    );
}
