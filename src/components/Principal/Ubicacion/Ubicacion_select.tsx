import React, { useState } from 'react';
import Select from 'react-select';

const options = [
    {
        value: "medellin",
        label: "Medellin"
    },
    {
        value: "valledupar",
        label: "Valledupar"
    },
    {
        value: "santa marta",
        label: "Santa Marta"
    },
];

const customStyles = {
    control: (provided: any) => ({
      ...provided,
      background: 'transparent',
      display: 'flex',
      flexWrap: 'nowrap',
      borderColor: 'hsl(0deg 78.56% 55.56%);',
      width: '150px',
      border: 'None',
      color: '#0000',
    }),
    menu: (provided: any) => ({
      ...provided,
      background: '#FFFF',
      width: '150px'
    }),
    placeholder: (defaultStyles: any) => {
        return {
            ...defaultStyles,
            color: 'var(--darkOrange)',
            fontSize: 'medium',
        }
    },
};

const Ubicacion: React.FC = () => {
    const [isClearable, setIsClearable] = useState(true);
    const [isSearchable, setIsSearchable] = useState(true);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isRtl, setIsRtl] = useState(false);
    
    return (
        <>
            <Select
                className="basic-single"
                classNamePrefix="select"
                isDisabled={isDisabled}
                isLoading={isLoading}
                isClearable={isClearable}
                isRtl={isRtl}
                isSearchable={isSearchable}
                placeholder="Tu ubicacion"
                options={options}
                styles={customStyles}
            />
        </>
    );
};

export default Ubicacion
