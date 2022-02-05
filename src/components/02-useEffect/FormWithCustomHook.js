import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import './effects.css'


export const FormWithCustomHook = () => {

    const [FormValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''

    });

    const {name,email,password} = FormValues;

    useEffect(() => {
        console.log('Email Cambio')
    }, [email]);

    const handleSubmit = (e) => {

        e.preventDefault();
        console.log(FormValues);

    }


  return (
      <form onSubmit={handleSubmit}>

        <h1> FormWithCustomHook </h1>
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
                type="password"
                name="password"
                className="form-control"
                placeholder="*****"
                value={password}
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
        <hr/>

        <button type='submit' className='btn btn-primary'> Guardar </button>

        


      </form>
  )
};
