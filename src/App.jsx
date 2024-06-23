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
import About from "./About";
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
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password" element={<ResetPassword />} />
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
        </Container>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
