import React from 'react';
import { Link } from 'react-router-dom'

export default function SimpleList() {
  return (
    <div >
      <h1>Hello World</h1>
      <ul>
        <Link to="/auth/signup"><li>Sign up</li></Link>
        <Link to="/auth/login"><li>Login</li></Link>
      </ul>
    </div>
  );
}