import '../styles/globals.css';
import Login from './login';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../config/firebase';
import Loading from '../components/Loading';
import { useEffect } from 'react';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
function MyApp({ Component, pageProps }) {
  const [loggedInUser, loading, _error] = useAuthState(auth);

  // if (loading) return <Loading />;

  if (!loggedInUser) return <Login />;

  return <Component {...pageProps} />;
}

export default MyApp;
