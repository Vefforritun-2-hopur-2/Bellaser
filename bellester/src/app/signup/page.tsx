import React from 'react';
import Image from 'next/image';
import phone from '../../image/phone.svg';
import google from '../../image/google.svg';
const Signup = () => {
  return (
    <div>
      <div className='signupLogin'>
        
        <h2>Sign Up?</h2>
        <a href="/main" className='loginWithIcon'>Sign Up</a>        

        <h3>Have an account?</h3>
        <a href="/login" className="block text-white px-4 py-2">Login</a>
      </div>
    </div>
  );
};

export default Signup;