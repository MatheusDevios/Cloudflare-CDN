import React from 'react';
import './navBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className='c-navBar'>
      <div>
        <Link to='/'>
          <h2>Home</h2>
        </Link>
      </div>
      <div>
        <Link to='/question1'>
          <h2>Question 1</h2>
        </Link>
      </div>
      <div>
        <Link to='/question2'>
          <h2>Question 2</h2>
        </Link>
      </div>
      <div>
        <Link to='/question3'>
          <h2>Question 3</h2>
        </Link>
      </div>
      <div>
        <Link to='/question4'>
          <h2>Question 4</h2>
        </Link>
      </div>
      <div>
        <Link to='/question5'>
          <h2>Question 5</h2>
        </Link>
      </div>
      <div>
        <Link to='/question6'>
          <h2>Question 6</h2>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
