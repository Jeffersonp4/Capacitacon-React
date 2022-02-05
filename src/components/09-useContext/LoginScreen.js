import { getDefaultNormalizer } from '@testing-library/react';
import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {
    
    const {setUser} = useContext(UserContext);


    return(

        <div>
            <h1>LoginScreen</h1>
            <hr/>

            <button className='btn btn-outline-primary'
                    onClick={() => setUser({

                        id: 1234,
                        nombre: 'Jeff',
                        email: 'Jef@gmail.com'
                        
                    })}
            >
                Login
            </button>
        </div>
  )
};
