import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import Footer from './Footer';
import Homepage from './Screens/Homepage';
import Login from './Screens/Login';
import Profile from './Screens/Profile';
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //logged in
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          }),
        );
      } else {
        //logged out
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className='App'>
      {!user ? (
        <Login />
      ) : (
        <Router>
          <Switch>
            <Route exact path='/'>
              <Homepage />
            </Route>
            <Route path='/profile'>
              <Profile />
            </Route>
          </Switch>
        </Router>
      )}
      <Footer />
    </div>
  );
}

export default App;
