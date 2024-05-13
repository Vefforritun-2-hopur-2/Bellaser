'use client'
import 'dotenv/config'
import { initializeApp } from "firebase/app";
require('dotenv').config()
const firebaseConfig = {
apiKey: "AIzaSyBBRbx5fVL51TTYp-RjaDvaYT9k5UaBo20",
authDomain: "bellaser-73dd8.firebaseapp.com",
databaseURL: "https://bellaser-73dd8-default-rtdb.europe-west1.firebasedatabase.app",
projectId: "bellaser-73dd8",
storageBucket: "bellaser-73dd8.appspot.com",
messagingSenderId: "986734973667",
appId: "1:986734973667:web:878f3bbdf4772ea2f3abd6"
};
const app = initializeApp(firebaseConfig);

import { child, get, getDatabase, ref} from "firebase/database";
import React from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';



function loginer(user:any,pass:any){
  const dbRef = ref(getDatabase());
  get(child(dbRef, `users`)).then((snapshot) => {
  let userarr = Object.entries(snapshot.val());
  let temp:any
  for(let n=0;n<userarr.length;n++){
    temp = userarr[n][1]
    
    if(user==temp.username && pass==temp.password){
      sessionStorage.setItem("loginas",user)
      window.location.replace("/");
    }
  
  }
  })
}





const signin = () => {
  return (
    <div>  
      <div className='signupLogin' style={{"marginTop":"11em"}}>
        <div>
          
          <h1>Login</h1>
          
          <Formik
                  initialValues={{
                      username: '',
                      password: '',
                  }}

                  onSubmit={(
                    values: any,
                    { setSubmitting }: FormikHelpers<any>
                  ) => {
                    setTimeout(() => {
                      console.log(JSON.stringify(values, null, 2))
                      loginer(values.username,values.password)
                      setSubmitting(false);
                    }, 500);
                  }}
              >
                  <Form>
                      <Field className="inputField" id="username" name="username" placeholder="Username" />
                      <br/><br/>
                      <Field className="inputField" type="password" id="password" name="password" placeholder="Password" />
                      <br/><br/>
                      <button type="submit">Enter</button>
                  </Form>
              </Formik>
          
          
        </div>
      </div>
    </div>
    
  );
};

export default signin;