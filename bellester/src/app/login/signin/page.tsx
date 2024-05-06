'use client'
import 'dotenv/config'
import { initializeApp } from "firebase/app";
require('dotenv').config()
const firebaseConfig = {

  databaseURL: process.env.databaseURL,
};
const app = initializeApp(firebaseConfig);

import { getDatabase, ref, set } from "firebase/database";

function writeUserData( userId: any,name: any, email: any) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
  });
}
import React from 'react';

import { Formik, Field, Form, FormikHelpers } from 'formik';
import firebase from 'firebase/compat/app';
const signin = () => {
  return (
    <div>  
      <div className='signupLogin' style={{"marginTop":"11em"}}>
        <div>
          
          <h1>Signin</h1>
          
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
                      setSubmitting(false);
                    }, 500);
                  }}
              >
                  <Form>
                      <Field id="username" name="username" placeholder="Username" />
                      <br/><br/>
                      <Field type="password" id="password" name="password" placeholder="Password" />
                      <br/><br/>
                      <button type="submit">Login</button>
                  </Form>
              </Formik>
          
          
        </div>
      </div>
    </div>
    
  );
};

export default signin;