import React from 'react';
import Image from 'next/image';
import phone from '../../image/phone.svg';
import google from '../../image/google.svg';
const Login = () => {
  return (
    <div>
      <div className='signupLogin'>
        <h1>Login</h1>
        <a href='/login/signin'>
          <button>Login</button>
        </a>
        <br /><br />
        <h3>Don't have an account?</h3>
        <a href="/login/signup" className="block text-white px-4 py-2">
          <button>Sign Up</button>
        </a>
      </div>
    </div>
  );
};

export default Login;