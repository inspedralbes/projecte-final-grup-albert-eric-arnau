import { useEffect, useState } from "react";
import { auth } from "../firebase/firebaseConfig";

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        setIsAuthenticated(true);
      } else {
        setUser(null);
        setIsAuthenticated(false);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  return { user, isAuthenticated };
};
