import React from 'react'
import { Link } from 'react-router-dom'

function EmailVerify() {
    return (
        <div className='email-verify'>
            <p>A verification link has been sent to your email, please click the link and login. Thanks</p>
        <Link to='/'>Home</Link>
        </div>
      
    )
}

export default EmailVerify