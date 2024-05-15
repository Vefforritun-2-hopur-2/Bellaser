import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";


// spaceRef now points to "images/space.jpg"
// imagesRef still points to "images"

export default function dogpics(){
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
    
    const storage = getStorage(app);
    
    // Create a child reference
    const imagesRef = ref(storage, 'images');
    // imagesRef now points to 'images'
    
    // Child references can also take paths delimited by '/'
    const spaceRef = ref(storage, 'images/kuro.jpg');
    console.log("hundapic")
    let hundar = document.querySelectorAll("#id")
    console.log(hundar)
}