import React, {memo} from 'react';

export const Small = memo(({value}) => {

    console.log('Me volvi a llamr :( ')
  
    return( 

        

            <small> {value} </small>
      
    )
});