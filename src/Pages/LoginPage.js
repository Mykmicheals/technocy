
import React, { useState, useContext, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import AuthContext from '../Store/AuthContext'




function Login() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const authCtx = useContext(AuthContext)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const [firstName, setFirstName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const nameIsValid = firstName.trim().length > 2;
  const nameInvalid = nameTouched && !nameIsValid;

  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const emailValid = email.match(mailformat);
  const emailInvalid = emailTouched && !emailValid;

  const [password, setPassword] = useState('')
  const [passwordTouched, setPasswordTouched] = useState(false);
  const passwordValid = password.trim().length > 6
  const passwordInvalid = passwordTouched && !passwordValid


  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const emailBlurHandler = () => {
    setEmailTouched(true);
  };

  const firstNameHandler = (event) => {
    setFirstName(event.target.value);
  };

  const firstNameBlurHandler = (event) => {
    setNameTouched(true);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value)
  }

  const passwordBlur = () => {
    setPasswordTouched(true)
  }

  const confirmPasswordHander = (event) => {
    setConfirmPassword(event.target.value)
  }

  const NameClass = nameInvalid
    ? "contact-form-input invalid-input"
    : "contact-form-input";

  const emailClass = emailInvalid
    ? "contact-form-input invalid-input"
    : "contact-form-input";

  const passwordClass = passwordInvalid
    ? "contact-form-input invalid-input"
    : "contact-form-input";


  const formValid = nameIsValid && passwordValid


  const history = useHistory()

  const body = {
    username: firstName,
    password: password,
    // email: email
  }

  const loginHandler = async (event) => {
    event.preventDefault();
    if (formValid) {
      setLoading(true)
      const response = await fetch('http://127.0.0.1:8000/user/api/token/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json', 'Accept': 'application/json'
          },
          body: JSON.stringify(body)
        })

      setLoading(false)
      const data = await response.json()
      if (data.detail) {
        setError(data.detail)
        setEmailTouched(true)
        setNameTouched(true)
        setPasswordTouched(true)
      } else {
        history.replace('/')
        // authCtx.login(data.access, data.user)
        localStorage.setItem('token', JSON.stringify(data.access))
        localStorage.setItem('user', data.user)
        localStorage.setItem('firstname', data.firstname)
        localStorage.setItem('lasttname', data.lastname)
        var userName = localStorage.getItem('user', data.access)
        var token = localStorage.getItem('token')
        var firstName = localStorage.getItem('firstname', data.firstname)
        var lastName = localStorage.getItem('lastname', data.lastname)
        var details = [firstName, lastName]
        authCtx.login(token, userName, details)
      }
    }
  }

  return (
    <div className='logins'>
      {console.log(authCtx.token)}
      <div className="contact-form">
        <h4>Login</h4>
        <p className='error'>{error}</p>
        <input
          type='text'
          name='name'
          onChange={firstNameHandler}
          onBlur={firstNameBlurHandler}
          className={NameClass}
          value={firstName}

          placeholder="enter your name"
        />
        {nameInvalid && (
          <small className="error">
            Name must be greater than 2 characters
          </small>
        )}
        {/* 
        <input
          type='email'
          name='email'
          onChange={emailHandler}
          onBlur={emailBlurHandler}
          className={emailClass}
          value={email}
          placeholder="enter email-address"
        />
        {emailInvalid && (
          <small className="error">Pls enter a valid email</small>
        )} */}

        <input
          onBlur={passwordBlur}
          onChange={passwordHandler}
          type='Enter your password'
          className={passwordClass}
          placeholder='enter your password'

        />
        {passwordInvalid && <small className='error' >Password Must be more than 6 characters</small>}

        <button onClick={loginHandler} className="logins-btn">SignUp</button>
        <p>You dont have an account <Link to='/signup'>SignUp</Link></p>
      </div>
    </div>
  )
}

export default Login