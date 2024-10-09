import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/Firebase.config";

export const AuthContext = createContext(null);

const AuthContexProvider = ({ children }) => {
  const [products, setproducts] = useState([]);
  const [loading, setloading] = useState(true);
  const [user, setuser] = useState();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const emailAndPasswordLogin = (email, password) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    setloading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const githubLogin = () => {
    setloading(true);
    return signInWithPopup(auth, githubProvider);
  };

  const logOut = () => {
    setloading(true);
    return signOut(auth);
  };

  // update profile
  const updateUserProfile = (obj) => {
    setloading(true);
    return updateProfile(auth.currentUser, obj);
  };

  const ResetPassword = (email) => {
    setloading(true);
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unsebscribe = onAuthStateChanged(auth, (currentUser) => {
      setuser(currentUser);
      setloading(false);
    });

    return () => {
      unsebscribe();
    };
  }, []);

  const Info = {
    products,
    updateUserProfile,
    ResetPassword,
    loading,
    setloading,
    setproducts,
    user,
    createUser,
    githubLogin,
    googleLogin,
    emailAndPasswordLogin,
    logOut,
  };

  return <AuthContext.Provider value={Info}>{children}</AuthContext.Provider>;
};

export default AuthContexProvider;
