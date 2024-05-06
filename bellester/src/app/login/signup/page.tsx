'use client'

import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
require('dotenv').config()
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId
};
const app = initializeApp(firebaseConfig);


const database = getDatabase(app);

function writeUserData(userId: number, name: any, email: any) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
  });
}

import React from 'react';

import { Formik, Field, Form, FormikHelpers } from 'formik';
const signup = () => {
  return (
    <div>  
      <div className='signupLogin' style={{"marginTop":"11em"}}>
        <div>
          
          <h1>Register</h1>
          
          <Formik
                  initialValues={{
                      username: '',
                      password: '',
                  }}

                  onSubmit={(
                    values: Values,
                    { setSubmitting }: FormikHelpers<Values>
                  ) => {
                    setTimeout(() => {
                      console.log(JSON.stringify(values, null, 2))
                      writeUserData(1,"ala","aba")
                      setSubmitting(false);
                    }, 500);
                  }}
              >
                  <Form>
                      <Field id="username" name="username" placeholder="Username" />
                      <br/><br/>
                      <Field type="password" id="password" name="password" placeholder="Password" />
                      <br/><br/>
                      <button type="submit">Register</button>
                  </Form>
              </Formik>
          
          
        </div>
      </div>
    </div>
    
  );
};

export default signup;