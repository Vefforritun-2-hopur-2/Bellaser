import React from 'react';
import Image from 'next/image';
const Login = () => {
  return (
    <div>
      <div className='signupLogin'>
        
        <button className='loginWithIcon'>Login</button>

        <h3>Don't have an account?</h3>
        <a href="/signup" className="block text-white px-4 py-2">Sign Up</a>
      </div>
    </div>
  );
};

export default Login;