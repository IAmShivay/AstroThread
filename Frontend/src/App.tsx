import React from "react";
import Footer from "./components/Section/Footer/Footer";
import Header from "./components/Section/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterPage from "./components/Section/Register/Register";
import LoginPage from "./components/Section/Login/Login.tsx";
import Home from "./components/Home/Home";
import Main from "./components/Admin/Main.tsx";
import { useSelector } from "react-redux";
import { RootState } from "./store.tsx";
import AdminAcessRequest from "./components/Admin/AdminAcessRequest.tsx";
import AboutUs from "./components/Section/AboutUs/AboutUs.tsx";
import ContactUs from "./components/Section/ContactUs/ContactUS.tsx";


// Genral Route

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicRoute />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/user/*" element={<PublicRoute />} />
        <Route path="/admin/*" element={<PrivateRoute />} />
      </Routes>
    </Router>
  );
};

// Public Routes For User Access

const PublicRoute: React.FC = () => (
  <React.Fragment>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
    <Footer />
  </React.Fragment>
);

// Private Access For Admin

const PrivateRoute: React.FC = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const isAuthorised = useSelector((state: RootState) => state.auth.role);

  return isAuthenticated && isAuthorised === "admin" ? (
    <Routes>
      <Route path="dashboard" element={<Main />} />
    </Routes>
  ) : (
    <AdminAcessRequest />
  );
};

export default App;
