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
  const [loader, setLoader] = useState(true);
  const signUp = (email, passoword) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, passoword);
  };
  const signin = (email, passoword) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, passoword);
  };
  const updateUser = (profile) => {
    setLoader(true);
    return updateProfile(auth.currentUser, profile);
  };
  const google = () => {
    setLoader(true);
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
    loader,
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setuser(currentUser);
      setLoader(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return <Context.Provider value={userInfo}>{children}</Context.Provider>;
};

export default AuthProvider;
