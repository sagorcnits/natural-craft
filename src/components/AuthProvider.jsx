import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase-config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [reload, setReload] = useState(false);
  const [loading, setLoading] = useState(true);
  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user
  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // log out user

  const logOutUser = () => {
    setLoading(true);
    signOut(auth)
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // Update profile
  const updateProfileUser = (name, photoURL) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  useEffect(() => {
    const onAuthChange = onAuthStateChanged(auth, (user) => {
      setUser(user);
      //   console.log("wrok Here");
      setLoading(false);
    });
    return () => {
      onAuthChange();
    };
  }, [reload]);

  // console.log(user);

  const authInfor = {
    user,
    createUser,
    logInUser,
    logOutUser,
    reload,
    setReload,
    loading,
    setLoading,
    updateProfileUser,
  };
  return (
    <AuthContext.Provider value={authInfor}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
