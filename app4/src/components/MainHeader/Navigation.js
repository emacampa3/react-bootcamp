import React, { useContext } from 'react';

import classes from './Navigation.module.css';
import AuthContext from '../../context/auth-context';

const Navigation = (props) => {
  const ctx = useContext(AuthContext) /* calling it, using a pointer to the context */

  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && ( /* using ctx instead of props */
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {prctxops.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
