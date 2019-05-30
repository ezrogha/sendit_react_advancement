import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../../assets/images/nav_logo.png';
import '../../assets/css/NavBar.css';

const NavBar = ({ onSignout }) => (
    <nav>
      <NavLink to={`/make-order`}>
        <img src={Logo} className='logo' alt='Logo' />
      </NavLink>
      <ul>
        <li>
          <NavLink to={`/make-order`}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={`/orders`}>
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink to='/' id='signout' onClick={onSignout}>
            Signout
          </NavLink>
        </li>
      </ul>
    </nav>
  );

export default NavBar;
