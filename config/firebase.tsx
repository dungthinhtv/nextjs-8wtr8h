// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_APIKEY,
//   authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
//   projectId: process.env.NEXT_PUBLIC_PROJECTID,
//   storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
//   appId: process.env.NEXT_PUBLIC_APPID,
// };

const firebaseConfig = {
  apiKey: 'AIzaSyD3zd58eNLxOUYousdaAImJYNXQlqmKUcE',
  authDomain: 'whatsapp-clone-33c7d.firebaseapp.com',
  projectId: 'whatsapp-clone-33c7d',
  storageBucket: 'whatsapp-clone-33c7d.appspot.com',
  messagingSenderId: '224203047842',
  appId: '1:224203047842:web:f41830e551a5bcc96368fb',
  measurementId: 'G-E07TS0G0HQ',
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { db, auth, provider };
