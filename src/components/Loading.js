import React from 'react'
import { MDBSpinner } from 'mdb-react-ui-kit';

function Loading() {
    return (
        <MDBSpinner grow>
            <span className='visually-hidden'>Loading...</span>
        </MDBSpinner>
    )
}

export default Loading