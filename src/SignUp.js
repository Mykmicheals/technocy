import React, { useReducer, useState } from 'react'
import { useHistory } from 'react-router-dom'

const initialState = {
    username: '',
    password1: '',
    password2: '',
    email:''
}

function SignUp() {
       const history = useHistory()
    const [notMatch,setNotMatch] = useState(false)
    const formReducer = (state,action) => {
        if (action.type === 'USERNAME') {
            return {
                ...state,
                username:action.payload
        }
        }
        if (action.type === 'EMAIL') {
            return {
                ...state,
                email:action.payload                
            }
        }
        if (action.type === 'PASSWORD1') {
            return {
                ...state,
                password1:action.payload
            }
        }
        if (action.type === 'PASSWORD2') {
            return {
                ...state,
                password2:action.payload
            }
        }
    }
    
    const [formState, dispatchForm] = useReducer(formReducer,initialState)

    const userNameHandler = (event) => {
        dispatchForm({
            type:'USERNAME',
          payload:event.target.value
        })
       
    }

    const emailHandler = (event) => {
        dispatchForm({
            type: 'EMAIL',
            payload:event.target.value
        })
    }
    
    const password1Handler = (event) => {
        dispatchForm({
            type: 'PASSWORD1',
            payload: event.target.value
        })
           }
    
        
          const password2Handler = (event) => {
            dispatchForm({
                type: 'PASSWORD2',
                payload:event.target.value
           }) 
        }
 
        const signUpHandler = async (event) => {
            event.preventDefault()
            
            const body = {
                username: formState.username,
                email: formState.email,
                password:formState.password1
            }

        if (formState.password1 === formState.password2) {
            const response = await fetch('http://127.0.0.1:8000/registerusers/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)

            })
            const data = await response.json()
            console.log(data)
            console.log(body)
            history.replace('/')
            
        
        } else {
            setNotMatch(true)
        }

           
    }

  return (
       <div className='login'>
        <form className='login-form'>
        <h3>SignUp</h3>
        
            <div>
            <label>Username</label>
            <input onChange={userNameHandler} placeholder='Enter your username...' />
              </div>
              
                <div>
            <label>Email</label>
            <input type='email' onChange={emailHandler} placeholder='Enter your email...' />
            </div>
          
            <div>
            <label>Password</label>
          <input
            type='password'
            placeholder='Enter your password...'
            onChange={password1Handler}
          />
              </div>
              
                <div>
            <label>Confirm Password</label>
          <input
            type='password'
            placeholder='Enter your password...'
            onChange={password2Handler}
          />
              </div>
            {notMatch && <p>Password does not match</p>}

     
                <button onClick={signUpHandler}>signup</button>
        </form>
    </div>
  )
}

export default SignUp