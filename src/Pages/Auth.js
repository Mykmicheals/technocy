import React, { useState, useContext } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBSpinner,
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
} from 'mdb-react-ui-kit';

import AuthContext from '../Store/AuthContext';
import Loading from '../components/Loading';

function Auth() {

    const params = useParams();

    var signUp = params.name == 'signup'
    let history = useHistory();

    const [signUprror, setSignUpError] = useState(false)

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


    const [confirmPassword, setConfirmPassword] = useState('')


    const emailHandler = (event) => {
        setEmail(event.target.value);
    };

    const emailBlurHandler = () => {
        setEmailTouched(true);
    };

    const userNameHandler = (event) => {
        setFirstName(event.target.value);
    };

    const userNameBlurHandler = (event) => {
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
        ? "invalid-input"
        : "";

    const passwordClass = passwordInvalid
        ? "contact-form-input invalid-input"
        : "contact-form-input";


    const formValid = signUp ? (nameIsValid && emailValid && passwordValid) : (emailValid && passwordValidcle)


    const body = {
        username: firstName,
        password: password,
        email: email
    }

    const loginHandler = async (event) => {
        event.preventDefault();
        if (formValid) {
            setLoading(true)
            const response = await fetch('http://127.0.0.1:8000/user/register/',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json', 'Accept': 'application/json'
                    },
                    body: JSON.stringify(body)
                })

            setLoading(false)
            const data = await response.json()
            console.log(data)


            //  console.log(data)
            setEmailTouched(false);
        } else {
            setEmailTouched(true)
            setNameTouched(true)
            setPasswordTouched(true)
        }
    }

    const authCtx = useContext(AuthContext)

    const SignUpHandler = async (event) => {
        event.preventDefault()
        if (formValid) {
            setLoading(true);

            const response = await fetch(`http://127.0.0.1:8000/${signUp ? 'signup' : 'login'}/`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json', 'Accept': 'application/json'
                    },
                    body: JSON.stringify(body)
                })
            setLoading(false);
            const data = await response.json()
            console.log(data)
            signUp && history.push('/verifyEmail')
            !signUp && history.push('/')


            // if (data.detail) {
            //     setSignUpError(true);
            // } else {
            //     history.push('/verifyEmail')
            // }

        } else {
            setEmailTouched(true)
            setNameTouched(true)
            setPasswordTouched(true)
        }

    }


    return (
        <div>
            <MDBCard style={{ maxWidth: '22rem', textAlign: 'center', margin: 'auto', marginTop: '7rem' }}>
                <MDBCardBody >
                    <MDBCardTitle>{signUp ? 'SignUp' : 'Login'}</MDBCardTitle>
                    {signUprror && <h3>Email has already been taken</h3>}
                    <form>
                        {signUp && <MDBInput
                            onChange={userNameHandler} onBlur={userNameBlurHandler}
                            className={`mt-4 ${NameClass}`} type='username' id='form2Example1' label=' Username' />}
                        {nameInvalid && <small className="error">Name must be greater than 2 characters </small>}
                        <MDBInput
                            onChange={emailHandler} onBlur={emailBlurHandler}
                            className={`mt-4 ${emailClass}`} type='email' id='form2Example1' label='Email address' />
                        {emailInvalid && <small className="error">Enter a valid email address </small>}
                        <MDBInput
                            onChange={passwordHandler} onBlur={passwordBlur}
                            className='mt-4' type='password' id='form2Example2' label='Password' />
                        {passwordInvalid && <small className='error' >Password Must be more than 6 characters</small>}

                        <MDBRow className='mb-4'>

                            <MDBCol>
                                <a href='#!'>Forgot password?</a>
                            </MDBCol>
                        </MDBRow>

                        {!loading ? <MDBBtn
                            style={{ backgroundColor: '#831d34' }}
                            onClick={SignUpHandler} type='submit' className='mb-4' block>
                            {signUp ? 'SignUp' : 'Login'}
                        </MDBBtn>
                            :
                            <MDBBtn disabled
                                style={{ backgroundColor: '#831d34' }}
                            >
                                <MDBSpinner size='sm' role='status' tag='span' className='me-2' />
                                Loading...
                            </MDBBtn>}
                        <div className='text-center'>
                            {signUp ? <p>  Have an Accout? <Link to='/auth/login'>Login</Link>   </p> :
                                <p>  Not a member? <Link to='/auth/signup'>Register</Link>   </p>
                            }

                            {!signUp && <p>password reset?</p>}
                        </div>
                    </form>
                </MDBCardBody>
            </MDBCard>
        </div>

    )
}

export default Auth