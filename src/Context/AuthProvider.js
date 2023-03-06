import { createContext, useState, useEffect } from "react";
import app from "../Firebase/Firebase.config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
export const Context = createContext(app);
const auth = getAuth();
const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const [user, setuser] = useState(null);
  const signUp = (email, passoword) => {
    return createUserWithEmailAndPassword(auth, email, passoword);
  };
  const signin = (email, passoword) => {
    return signInWithEmailAndPassword(auth, email, passoword);
  };
  const updateUser = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };
  const google = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const logout = () => {
    return signOut(auth);
  };

  const userInfo = {
    user,
    signUp,
    signin,
    logout,
    updateUser,
    google,
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setuser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return <Context.Provider value={userInfo}>{children}</Context.Provider>;
};

export default AuthProvider;
