import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { FcGoogle } from "react-icons/fc";
import { toast } from 'react-toastify';
import { db } from "../firebase/firebase.config";
import { useNavigate } from 'react-router-dom'

const OAuthProvider = () => {
  const navigate = useNavigate()
  async function onGoogleClick() {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // check for the user in the database
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if(!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        })
      }
      navigate('/')
      toast.success("Successfully registered")
    } catch (error) {
      toast.error("Couldn't Authorized with Google");
    }
  }
  return (
    <button onClick={onGoogleClick} type='button'  className='flex items-center justify-center w-full bg-red-700 text-white px-7 py-3 uppercase text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out rounded'><FcGoogle className='text-2xl bg-white rounded-full mr-2'/> Continue With Google</button>
  )
}

export default OAuthProvider