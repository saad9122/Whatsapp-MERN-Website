import * as React from 'react';
import Spinner from 'react-bootstrap/Spinner';

export const LoadingMessages = () => {

  return (
    <div className='absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center'>
        <div className='flex space-x-2 items-center'>
            <Spinner animation="grow" variant="success" />
            <div> Loading your data</div>

        </div>
    
    </div>
  )
}

