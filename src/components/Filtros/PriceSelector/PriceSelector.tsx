import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';

const AirbnbSlider = styled(Slider)(({ theme }) => ({
    color: 'var(--black)',
    height: 3,
    padding: '13px 0',  
    '& .MuiSlider-thumb': {
        height: 27,
        width: 27,
        backgroundColor: '#fff',
        border: '1px solid currentColor',
        '&:hover': {
            boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
        },
        '& .airbnb-bar': {
            height: 9,
            width: 1,
            backgroundColor: 'currentColor',
            marginLeft: 1,
            marginRight: 1,
        },
    },
    '& .MuiSlider-track': {
        height: 3,
    },
    '& .MuiSlider-rail': {
        color: theme.palette.mode === 'dark' ? '#bfbfbf' : '#d8d8d8',
        opacity: theme.palette.mode === 'dark' ? undefined : 1,
        height: 3,
    },
}));

interface AirbnbThumbComponentProps extends React.HTMLAttributes<unknown> { }

function AirbnbThumbComponent(props: AirbnbThumbComponentProps) {
    const { children, ...other } = props;
    return (
        <SliderThumb {...other}>
            {children}
            <span className="airbnb-bar" />
            <span className="airbnb-bar" />
            <span className="airbnb-bar" />
        </SliderThumb>
    );
}

interface PriceProps{
    max: number;
    min: number;
    onChange: any;
    selectedRangePrice: any;
}

export default function CustomizedSlider({ max, min, onChange, selectedRangePrice }:PriceProps) {
    const [priceRange, setPriceRange] = useState({
        minValue: min,
        maxValue: max
    });
    
    function handleChangePrice(_: Event,newValue: number | number[]) {
        if (Array.isArray(newValue)){
            setPriceRange({
                minValue: newValue[0],
                maxValue: newValue[1]
              });
        } 
    }
    
    function handleValuesChangeFinish() {
        onChange(priceRange);
    }

    useEffect(() => {
        setPriceRange({
          minValue: selectedRangePrice?.minValue || min,
          maxValue: selectedRangePrice?.maxValue || max
        });
      
        if (!selectedRangePrice) {
          onChange({ minValue: min, maxValue: max });
        }
    }, [selectedRangePrice, onChange, min, max]);
    
    return (
        <Box sx={{ width: 320 }}>
            <Box sx={{ m: 3 }} />   
            <Typography gutterBottom>$ {priceRange.minValue.toLocaleString()} - $ {priceRange.maxValue.toLocaleString()}+</Typography>
            <AirbnbSlider
                slots={{ thumb: AirbnbThumbComponent }}
                getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
                value={[priceRange.minValue, priceRange.maxValue]}
                onChangeCommitted={handleValuesChangeFinish}
                onChange={handleChangePrice}
                min={min}
                max={max}
            />
        </Box>
    );
}