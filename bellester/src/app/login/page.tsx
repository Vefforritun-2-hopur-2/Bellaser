import React from 'react';
// import Image from 'next/image';
// import phone from './image/phone.svg'
// import google from './image/google.svg'

const Login = () => {
  return (
    <div>
        
      
      <div className='signupLogin'>
        <h1>Login</h1>
        <div className='loginTemplate'></div>
        {/* <h2>Login with Google <Image src={google} alt='googleLogo' height={500}></Image></h2> */}
        {/* <h2>Login with Phone <Image src={phone} alt='phoneIcon' height={500}></Image></h2> */}

        <h3>Don't have an account?</h3>
        <button>Sign Up</button>
      </div>

    </div>
  );
};

export default Login;