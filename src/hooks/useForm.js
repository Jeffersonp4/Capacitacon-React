import  { useState } from 'react';

// Hook personalizado para crear rapidamente la validacion de una caja de texto

export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState);

    const reset = () =>{

        setValues(initialState);
    }

    const handleInputChange = ({target}) => {

        setValues({
            ...values,
            [target.name]: target.value
        });
    }

    return [values, handleInputChange, reset];
};
