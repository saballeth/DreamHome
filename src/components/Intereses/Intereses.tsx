import React from 'react';
import './Intereses.css';
import {
  Box,
  HStack,
  Stack,
  useCheckbox,
  useCheckboxGroup,
  UseCheckboxProps,
} from '@chakra-ui/react';

type CheckboxCardProps = {
  children: React.ReactNode;
} & UseCheckboxProps;

const CheckboxCard = ({ children, ...props }: CheckboxCardProps) => {
  const { getInputProps, getCheckboxProps } = useCheckbox(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: 'teal.600',
          color: 'white',
          borderColor: 'teal.600',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        px={5}
        py={3}
      >
        {children}
      </Box>
    </Box>
  );
};

const CustomCheckboxButtons = () => {
  const options = ['react', 'vue', 'svelte'];

  const { value, getCheckboxProps } = useCheckboxGroup({
    defaultValue: ['react', 'vue'],
    onChange: console.log,
  });
  console.log(value);

  return (
    <>
      <div className="intereses_container">
        <div className="intereses_panel">
            {options.map((value) => {
              const props = getCheckboxProps({ value });
              return (
                <CheckboxCard key={value} {...props}>
                  {value}
                </CheckboxCard>
              );
            })}
        </div>
      </div>
    </>
  );
};


export const InteresesPage = () => (
  <Stack>
    <CustomCheckboxButtons />
  </Stack>
);
