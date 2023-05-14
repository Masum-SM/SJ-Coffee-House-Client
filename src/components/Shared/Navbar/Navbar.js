import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { AuthContext } from '../../../contexts/AuthProvider';

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);
  const handleLogOut = ()=>{
    logOut()
    .then( ()=>{})
    .catch( err => console.log(err))
  }
  const menuItems = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/menu">Menu</Link></li>
    {user?.uid? <li><button onClick={handleLogOut}>Log out</button></li> : <li><Link to="/login">Login</Link></li>}
  </>
  return (
    <div className='navback'>
          <div className="navbar max-w-[1440px] mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-800 rounded-box w-52">
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl logo">SJ Coffee House</Link>
      </div>
      <div className="navbar-center hidden lg:flex ml-80">
        <ul className="menu menu-horizontal px-1">
          {menuItems}
        </ul>
      </div>

    </div>
    </div>
  );
};

export default Navbar;