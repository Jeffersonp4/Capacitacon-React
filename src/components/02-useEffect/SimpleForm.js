import React, { useEffect, useState } from 'react';
import { Message } from './Message';
import './effects.css'


export const SimpleForm = () => {

    const [FormState, setFormState] = useState({
        name: '',
        email: '',

    });

    const {name,email} = FormState;

    useEffect(()=>{
        // console.log('Hey')
    }, []);

    useEffect(()=>{
        // console.log('FormState Cambio')
    }, [FormState]);

    useEffect(()=>{
        // console.log('email Cambio')
    }, [email]);

    

    const handleInputChange = ({target}) => {

        

      setFormState({
          ...FormState,
          [target.name]: target.value

      })

    }

  return (
      <>

        <h1> useEffect </h1>
        <hr/>

        <div className='form-group' >

            <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Tu Nombre"
                autoComplete="off"
                value={name}
                onChange={handleInputChange}
            />

        </div>
        <hr/>

        <div className='form-group' >

            <input
                type="text"
                name="email"
                className="form-control"
                placeholder="Tu Correo Electronico"
                autoComplete="off"
                value={email}
                onChange={handleInputChange}
            />

        </div>

        { (name === '123')  && <Message/> }



      </>
  )
};
