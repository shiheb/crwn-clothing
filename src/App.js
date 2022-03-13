import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { auth } from "../src/Firebase/utils";
import "./App.css";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import ShopPage from "./pages/ShopPage";
import SignInAndSignUp from "./pages/SignInAndSignUp";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  let unsubscribeFromAuth = null;
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, [unsubscribeFromAuth]);

  return (
    <div>
      <Router>
        <Header currentUser={currentUser} />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/sign" element={<SignInAndSignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
