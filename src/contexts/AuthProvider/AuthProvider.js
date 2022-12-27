import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app, { secondaryApp } from "../../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
// Secondary Auth for prevent firebase kicks out current user
// ONLY for create admin
const secondaryAuth = getAuth(secondaryApp);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(secondaryAuth, email, password);
  };

  // Logout secondary Auth after creating user(Admin in case)
  const secondaryAuthSignOut = () => {
    setLoading(true);
    return signOut(secondaryAuth);
  }

  const updateSecondaryAuth = (userInfo) => {
    return updateProfile(secondaryAuth.currentUser, userInfo);
  };

  const updateUser = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe;
  }, []);

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const authInfo = {
    user,
    createUser,
    updateUser,
    signIn,
    logOut,
    secondaryAuthSignOut,
    updateSecondaryAuth,
    loading,
    setLoading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
