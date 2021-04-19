import React from 'react';
import Navbar from '../Navbar';
import userlogo from '../assests/user_gray.png';
import './profile.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
function Profile() {
  const user = useSelector(selectUser);
  return (
    <div className='profile'>
      <Navbar />
      <div className='profile__body'>
        <h1>Edit Profile</h1>
        <div className='profile__info'>
          <img src={userlogo} alt='user logo' className='profile__userLogo' />
          <div className='profile__details'>
            <h2>{user.email}</h2>
            <div className='profile__plans'>
              <h3>Plan &emsp;&emsp; Premium</h3>
              <h3>Stream Quality &emsp;&emsp; 4k</h3>
              <button
                className='profile__signout'
                onClick={() => auth.signOut()}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
