import React from 'react';
import { MdLocalShipping } from 'react-icons/md';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiLogIn } from 'react-icons/fi';
import { useAuth0 } from '@auth0/auth0-react';
import { CiLogout, CiUser } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return (
    <>
      <div className='header'>
        <div className='top-header'>
          <div className='icon'>
            <MdLocalShipping />
          </div>
          <div className='info'>
            <p>Free Shipping When Shopping up to $1000</p>
          </div>
        </div>
        <div className='min-head'>
          <div className='logo'>
            <img src='./image/logo.png' alt='logo' />
          </div>
          <div className='search-box'>
            <input type='text' value='' placeholder='search' />
            <button><AiOutlineSearch /></button>
          </div>
          {isAuthenticated ? (
            // Logout Button
            <div className='user'>
              <div className='icon'>
                <CiLogout />
              </div>
              <div className='btn'>
                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
              </div>
            </div>
          ) : (
            // Login Button
            <div className='user'>
              <div className='icon'>
                <FiLogIn />
              </div>
              <div className='btn'>
                <button onClick={loginWithRedirect}>Login</button>
              </div>
            </div>
          )}
        </div>
        <div className='last-header'>
          <div className='user_profile'>
            {isAuthenticated ? (
              <>
                <div className='icon'>
                  <CiUser />
                </div>
                <div className='info'>
                  <h2>{user.name}</h2>
                  <p>{user.email}</p>
                </div>
              </>
            ) : (
              <>
                <div className='icon'>
                  <CiUser />
                </div>
                <div className='info'>
                  <p>Please Login</p>
                </div>
              </>
            )}
          </div>
          <div className='nav'>
            <ul>
              <li><Link to='/' className='link'>Home</Link></li>
              <li><Link to='/shop' className='link'>Shop</Link></li>
              <li><Link to='/collection' className='link'>Collection</Link></li>
              <li><Link to='/about' className='link'>About</Link></li>
              <li><Link to='/contact' className='link'>Contact</Link></li>
            </ul>
          </div>
          <div className='offer'>
            <p>flat 10% over all iphone</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
