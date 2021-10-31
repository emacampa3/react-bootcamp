import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './context/auth-context';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []); /* no dependancies */

  const loginHandler = (email, password) => {
		// We should of course check email and password
		localStorage.setItem("isLoggedIn", "1");
		setIsLoggedIn(true);
	};

  const logoutHandler = () => {
    localStorage.removeItem('isLogged')
    setIsLoggedIn(false);
  };

  /* using context: knowing we need it in our whole app, 
  we wrap it inside the App.js component: 
  all components inside Provider and all their children can use context */
  return (
/*  <React.Fragment> no need for using it*/
    <AuthContext.Provider
      value={{isLoggedIn: isLoggedIn, onLogout: logoutHandler}}
    > 
      <MainHeader />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
/*  </React.Fragment> */
  );
}

export default App;
