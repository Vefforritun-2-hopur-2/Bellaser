import React from 'react';
import Image from 'next/image';
import phone from '../../image/phone.svg';
import google from '../../image/google.svg';
const Signup = () => {
  return (
    <div>
      <div className='signupLogin'>
        <h1>Sign Up</h1>
        <div className='loginTemplate'></div>
        <h2>Sign Up with Google <Image src={google} alt='googleLogo' height={500} width={500}></Image></h2>
        <h2>Signup with Phone <Image src={phone} alt='phoneIcon' height={500} width={500}></Image></h2>

        <h3>Have an account?</h3>
        <a href="/login" className="block text-white px-4 py-2">Login</a>
      </div>
    </div>
  );
};

export default Signup;