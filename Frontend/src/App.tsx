import React from "react";
import Footer from "./components/Section/Footer/Footer";
import Header from "./components/Section/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterPage from "./components/Section/Register/Register";
import LoginPage from "./components/Section/Login/Login.tsx";
import Home from "./components/Home/Home";
const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/register" Component={RegisterPage} />
        <Route path="/login" Component={LoginPage} />
        {/*<Route path="/" Component={Home} />
        <Route path="/" Component={Home} /> */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
