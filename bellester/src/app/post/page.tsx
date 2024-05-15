'use client';
import React from "react";
import { getDatabase, push, ref, set } from "firebase/database";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { initializeApp } from "firebase/app";

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
function writeUserPost(dogName: string, aldur: number, stad: string, date: number, Kr: number, phone: number) {
    const db = getDatabase();
    const newPostRef = push(ref(db, 'dogs'), {
        dogName: dogName,
        aldur: aldur,
        stad: stad,
        date: date,
        Kr: Kr,
        phone: phone,
    });
    newPostRef.then(() => {
        console.log("Post added successfully");
        window.location.replace("/");
    }).catch((error) => {
        console.error("Error adding post:", error);
        // Handle error
    });
}

// þetta brítur kóðan. það þarf að redirecta öðruvísi
//if (sessionStorage.getItem("loginas")==undefined){
//  window.location.replace("/login"); 
//}


const post = () => {
    return (
                <div>  
      <div className='signupLogin' style={{"marginTop":"13em"}}>
        <div>
          
          <h1>Create post</h1>
            <Formik
                  initialValues={{
                      dogName: '',
                      aldur: '',
                      stad: '',
                      date: '',
                      Kr: '',
                      phone: ''
                  }}

                  onSubmit={(
                    values: any,
                    { setSubmitting }: FormikHelpers<any>
                  ) => {
                    setTimeout(() => {
                      console.log(JSON.stringify(values, null, 2))
                      
                      writeUserPost(values.dogName,values.aldur,values.stad,values.date,values.Kr,values.phone)
                        
                    
                      setSubmitting(false);
                    }, 500);
                  }}
              >
                  <Form>
                      <Field className="inputField" id="dogName" name="dogName" placeholder="Nafn hunds" />
                      <br/><br/>
                      <Field className="inputField" id="aldur" name="aldur" placeholder="Aldur" />
                      <br/><br/>
                      <Field className="inputField" id="stad" name="stad" placeholder="Staðsetning" />
                      <br/><br/>
                      <Field className="inputField" id="date" name="date" placeholder="Dagsetning" />
                      <br/><br/>
                      <Field className="inputField" id="Kr" name="Kr" placeholder="Kr" />
                      <br/><br/>
                      <Field className="inputField" id="Phone" name="Phone" placeholder="Símanúmer" />
                      <br/><br/>
                      <button type="submit">Post</button>
                  </Form>
              </Formik>
        </div>
        </div>
      </div>
    )
}

export default post