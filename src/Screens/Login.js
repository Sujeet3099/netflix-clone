import React, { useState } from 'react';
import './login.css';
import logo from '../assests/netflix_logo.png';
import SignUp from './SignUp';
// import backimg from '../assests/netflix_login_background.jpg';
function Login() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className='login'>
      <div className='login__background'>
        <img src={logo} alt='netflix-login-logo' className='login__logo' />
        <button className='login__button' onClick={() => setSignIn(true)}>
          Sign In
        </button>
        <div className='login__gradient'></div>
      </div>
      <div className='login__body'>
        {signIn ? (
          <SignUp />
        ) : (
          <>
            <h1>Unlimited films ,Tv programmes and More.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your Email to create or restart your
              membership.
            </h3>
            <div className='login__input'>
              <form>
                <input type='email' placeholder='your email' />
                <button
                  onClick={() => setSignIn(true)}
                  className='login__getStarted'
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
