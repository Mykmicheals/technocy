import React, { useState } from 'react'

function Profile() {
    const [userName, setUserName] = useState('')
    const [firstName, setFName] = useState('')
    const [LastName, setLName] = useState('')
    const [email, setEmail] = useState('')


    return (
        <div className='profile'>
            <h2>Profile Page</h2>
            <div className='profile-inner'>
                <label>Username</label>
                <p>{localStorage.getItem('user')}</p>
                <p>{localStorage.getItem('firstname')}</p>
           </div>
        </div>
    )
}

export default Profile