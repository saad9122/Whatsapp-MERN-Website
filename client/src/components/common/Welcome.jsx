import * as React from 'react';
import Spinner from 'react-bootstrap/Spinner';

export const Welcome = () => {

  return (
    <div className='fixed bg-custom-gray top-0 bottom-0 right-0 left-0 flex justify-center items-center'>
        <div className='flex space-x-2 items-center'>
          
            <div> Loading your data</div>

        </div>
    
    </div>
  )
}