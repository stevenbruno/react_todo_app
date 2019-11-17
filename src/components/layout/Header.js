import React from 'react';
import { Link } from 'react-router-dom';

export default function header() {
  return (
    <React.Fragment>
      <header>
        <div className='headerContent' >
          <h1 className='appName'>TodoList</h1>
          <Link to="/" className='navLink'>Home</Link>
          <Link to="/about" className='navLink'>About</Link>
        </div>
      </header>
    </React.Fragment>
  )
}