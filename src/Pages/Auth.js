import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBCheckbox,
    MDBBtn,
    MDBIcon,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
} from 'mdb-react-ui-kit';

function Auth() {

    const params = useParams();

    var signUp = params.name == 'signup'

    const [error, setError] = useState()
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


    const formValid = emailValid && emailValid && passwordValid


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

    const SignUpHandler = async (event) => {
        event.preventDefault()
        const response = await fetch(`http://127.0.0.1:8000/auth/${signUp ? 'register' : 'login'}/`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', 'Accept': 'application/json'
                },
                body: JSON.stringify(body)
            })

        const data = await response.json()
        console.log(data)
    }


    return (
        <MDBCard style={{ maxWidth: '22rem', textAlign: 'center', margin: 'auto', marginTop: '5rem' }}>
            <MDBCardBody >
                <MDBCardTitle>{signUp ? 'SignUp' : 'Login'}</MDBCardTitle>
                <form>
                    {signUp && <MDBInput
                        onChange={userNameHandler} onBlur={userNameBlurHandler}
                        className={`mt-4 ${NameClass}`} type='username' id='form2Example1' label=' Username' />}
                    {nameInvalid && <small className="error">Name must be greater than 2 characters </small>}
                    <MDBInput
                        onChange={emailHandler} onBlur={emailBlurHandler}
                        className={`mt-4 ${emailClass}`} type='email' id='form2Example1' label='Email address' />
                    <MDBInput
                        onChange={passwordHandler}
                        className='mt-4' type='password' id='form2Example2' label='Password' />
                    {signUp && <MDBInput
                        onChange={passwordHandler}
                        className={`mt-4 ${passwordClass}`} type='password' id='form2Example2' label='Confirm-password' />}
                    {passwordInvalid && <small className='error' >Password Must be more than 6 characters</small>}

                    <MDBRow className='mb-4'>
                        <MDBCol className='d-flex justify-content-center'>
                            <MDBCheckbox id='form2Example3' label='Remember me' defaultChecked />
                        </MDBCol>
                        <MDBCol>
                            <a href='#!'>Forgot password?</a>
                        </MDBCol>
                    </MDBRow>

                    <MDBBtn onClick={SignUpHandler} type='submit' className='mb-4' block>
                        {signUp ? 'SignUp' : 'Login'}
                    </MDBBtn>

                    <div className='text-center'>
                        {signUp ? <p>  Have an Accout? <Link to='/auth/login'>Login</Link>   </p> :
                            <p>  Not a member? <Link to='/auth/signup'>Register</Link>   </p>
                        }

                        {signUp ? <p>or sign up with:</p> : <p>or Login with:</p>}

                        <MDBBtn floating className='mx-1'>
                            <MDBIcon fab icon='facebook-f' />
                        </MDBBtn>

                        <MDBBtn floating className='mx-1'>
                            <MDBIcon fab icon='google' />
                        </MDBBtn>

                        <MDBBtn floating className='mx-1'>
                            <MDBIcon fab icon='twitter' />
                        </MDBBtn>

                        <MDBBtn floating className='mx-1'>
                            <MDBIcon fab icon='github' />
                        </MDBBtn>
                    </div>
                </form>

            </MDBCardBody>


        </MDBCard>

    )
}

export default Auth