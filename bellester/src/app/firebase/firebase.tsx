import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import * as dotenv from 'dotenv';

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
dotenv.config();
const firebaseConfig = {
    databaseURL: "https://bellaser-73dd8-default-rtdb.europe-west1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service

export const db = getDatabase(app);
