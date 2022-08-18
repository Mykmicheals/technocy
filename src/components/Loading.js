import React from 'react'
import { MDBSpinner } from 'mdb-react-ui-kit';

function Loading() {
    return (
        <MDBSpinner  style={
            {
                position: 'absolute',
                top: '50vh',
                left:'50vw'
            }} >
            <span className='visually-hidden'>Loading...</span>
        </MDBSpinner>
    )
}

export default Loading