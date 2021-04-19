import React, { useRef } from 'react';
import './signup.css';
import { auth } from '../firebase';
function SignUp() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value,
      )
      .then((authUser) => {
        // console.log(authUser);
      })
      .catch((error) => {
        alert(error);
      });
  };
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value,
      )
      .then((authUser) => {
        // console.log(authUser);
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div className='signup'>
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type='email' placeholder='email' />
        <input ref={passwordRef} type='password' placeholder='Password' />
        <button type='submit' onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className='signup__gray'>New To Netflix? </span>
          <span className='signup__link' onClick={register}>
            Sign Up Now
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUp;
