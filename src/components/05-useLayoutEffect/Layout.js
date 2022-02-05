import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';

export const Layout = () => {

    const {counter,increment} =  useCounter(1)


    const {data} = useFetch( `https://www.breakingbadapi.com/api/quotes/${counter}` );
    const {quote} = !!data && data[0];

    const pTag = useRef();

    const [boxZise, setboxZise] = useState({});

    useLayoutEffect(() => {


        setboxZise(pTag.current.getBoundingClientRect());

    }, [quote])
   

  return (


        <div>

            <h1> Layout Effect </h1>
            <hr/>        

            <blockquote className="blockquote text-end" >
            <p 
                    className="mb-0"
                    ref={pTag}
            
            > 
            
            {quote}
            
            </p>
            </blockquote>

            <pre>
                {
                    JSON.stringify( boxZise, null , 3 )
                }
            </pre>
                       
                    
            
            <button className='btn btn-primary' onClick={increment}>

                Siguiente Quote

            </button>

           
           


        </div>    
  
  )
};
