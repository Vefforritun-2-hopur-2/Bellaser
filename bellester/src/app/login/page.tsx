import React from 'react';
import Image from 'next/image';
import phone from '../../image/phone.svg';
import google from '../../image/google.svg';
const Login = () => {
  return (
    <div>
      <div className='signupLogin'>
        <h1>Login</h1>
        <div className='loginWithIcon'><a href='/login/signin'>Login</a></div>
        
        //við munum ekki hafa google eða síma login
        {/*
        
        <div className='loginWithIcon'>
          <h2>Login with Google</h2>
          <Image src={google} alt='googleLogo' height={500} width={500}></Image>
        </div>

        <div className='loginWithIcon'>
          <h2>Login with Phone</h2>
          <Image src={phone} alt='phoneIcon' height={500} width={500}></Image>
        </div> 
        
        */}
 
        

        <h3>Don't have an account?</h3>
        <a href="/login/signup" className="block text-white px-4 py-2">Sign Up</a>
      </div>
    </div>
  );
};

export default Login;