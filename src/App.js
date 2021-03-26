import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./components/Login";
import { auth } from "./firebase";

function App() {
  const [session, setSession] = useState({
    isLoggedIn: false,
    currentUser: null,
    errorMessage: null,
  });

  useEffect(() => {
    const handdleAuth = auth.OnAuthStateChange((user) => {
      if (user) {
        setSession({
          isLoggedIn: true,
          currentUser: user,
          errormessage: null,
        });
      }
    });

    return () => {
      handdleAuth();
    };
  }, []);

  return (
    <div>
      {session.isLoggedIn ? <fire /> : <Login setSession={setSession} />}
    </div>
  );
}

export default App;
