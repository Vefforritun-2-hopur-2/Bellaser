'use client'
import React from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { initializeApp } from "firebase/app";
import { push,child } from "firebase/database";
import { getDatabase, ref, get } from "firebase/database";

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

const database = getDatabase(app);

function writenewuser(name: any, email: any, password:any) {
  const db = getDatabase();
  push(ref(db, 'users'), {
    username: name,
    email: email,
    password: password,
  });
  console.log("user written")
  window.location.replace("/login/signin");

}

function checkemail(email:any,usern:any,password:number){
  const dbRef = ref(getDatabase());
  
  get(child(dbRef, `users`)).then((snapshot) => {
  console.log(snapshot.val())
  let userarr = Object.entries(snapshot.val());
  let temp:any
  for(let n=0;n<userarr.length;n++){
    temp = userarr[n][1]
    console.log(temp.email)

    if(temp.email==email || temp.email==usern){
      alert("Email/username er núþegar til")
      break
    }
    else{
      writenewuser(usern,email,password)
      
    }
  }
})}



const signup = () => {
  return (
    <div>  
      <div className='signupLogin' style={{"marginTop":"11em"}}>
        <div>
          
          <h1>Sign Up</h1>
          
          <Formik
                  initialValues={{
                      username: '',
                      email: '',
                      password: '',
                      passwordconf: '',
                  }}

                  onSubmit={(
                    values: any,
                    { setSubmitting }: FormikHelpers<any>
                  ) => {
                    setTimeout(() => {
                      console.log(JSON.stringify(values, null, 2))
                      if(values.password==values.passwordconf){
                        checkemail(values.email,values.username,values.password)
                        
                        
                      }
                      else{alert("invalid input")}
                      setSubmitting(false);
                    }, 500);
                  }}
              >
                  <Form>
                      <Field className="inputField" id="username" name="username" placeholder="Username" />
                      <br/><br/>
                      <Field className="inputField" id="email" name="email" placeholder="Email" />
                      <br/><br/>
                      <Field className="inputField" type="password" id="password" name="password" placeholder="Password" />
                      <br/><br/>
                      <Field className="inputField" type="password" id="passwordconf" name="passwordconf" placeholder="Confirm password" />
                      <br/><br/>
                      <button type="submit">Enter</button>
                  </Form>
              </Formik>
          
          
        </div>
      </div>
    </div>
    
  );
};

export default signup;