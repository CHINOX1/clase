import { firebaseConfig } from "./Credenciales.js";
  // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);