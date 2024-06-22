import React from "react";
import { Container } from "semantic-ui-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./Auth/AuthContext";
import ConfirmSignUp from "./Auth/ConfirmSignUp";
import ForgotPassword from "./Auth/ForgotPassword";
import Login from "./Auth/Login";
import ResetPassword from "./Auth/ResetPassword";
import SignUp from "./Auth/SignUp";
import Profile from "./Auth/UserProfile";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from "./Navbar";
import RouteGuard from "./RouteGuard";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Container>
          <Navbar />
        </Container>
        <Container >
          <p>
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<Profile />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="/confirm-sign-up" element={<ConfirmSignUp />} />
                <Route
                  path="/profile"
                  element={
                    <RouteGuard>
                      <Profile />
                    </RouteGuard>
                  }
                />
              </Routes>
            </main>
          </p>
        </Container>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
