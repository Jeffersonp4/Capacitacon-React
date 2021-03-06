import React, { useEffect, useState } from 'react';

export const Message = () => {

  const [coors, setCoors] = useState({x:0, y:0});

  const {x,y} = coors;

    useEffect(() => {

      const mouseMove = (e) => {

         // console.log(e)
         const coors = {x: e.x, y: e.y}
         setCoors(coors);
        
      }
      

      window.addEventListener('mousemove', mouseMove)
    
      return () => {
        window.removeEventListener('mousemove', mouseMove);
        console.log('Componente Desmontado')
      };
    }, []);
    

  return (

    <div>

        <h3> Eres Genial! </h3>
        <hr/>

        <p> X: {x} Y: {y} </p>


    </div>
  ) 
};
