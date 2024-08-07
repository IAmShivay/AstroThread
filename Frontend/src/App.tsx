import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./store.tsx";
import Products from "./components/Section/products/Products.tsx";
import LoadingComponent from "./components/Loading/Loading.tsx";
import ProductDetails from "./components/Section/ProductDetails/ProductDetails.tsx";
import {
  selectIsAdmin,
  selectIsAuthenticated,
  selectIsUser,
} from "./app/middleware/authentication.tsx";
const Footer = lazy(() => import("./components/Section/Footer/Footer"));
const Header = lazy(() => import("./components/Section/Header/Header"));
const RegisterPage = lazy(
  () => import("./components/Section/Register/Register")
);
const LoginPage = lazy(() => import("./components/Section/Login/Login.tsx"));
const Home = lazy(() => import("./components/Home/Home"));
const Main = lazy(() => import("./components/Admin/Main.tsx"));
const AdminAcessRequest = lazy(
  () => import("./components/Admin/AdminAcessRequest.tsx")
);
const AboutUs = lazy(() => import("./components/Section/AboutUs/AboutUs.tsx"));
const ContactUs = lazy(
  () => import("./components/Section/ContactUs/ContactUS.tsx")
);
const UserDashboard = lazy(() => import("./components/User/Main.tsx"));

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingComponent />}>
        <Routes>
          <Route path="/*" element={<GenralRoute />} />
          <Route path="/user/*" element={<PublicRoute />} />
          <Route path="/app/v1*" element={<PrivateRoute />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

const GenralRoute: React.FC = () => (
  <React.Fragment>
    <Header />
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/product/:name/:id" element={<ProductDetails />} />
      <Route path="contactUs" element={<ContactUs />} />
      <Route path="aboutUs" element={<AboutUs />} />
      <Route path="products" element={<Products />} />
    </Routes>
    <Footer />
  </React.Fragment>
);

const PublicRoute: React.FC = () => (
  <React.Fragment>
    <Header />
    <Routes>
      <Route path="register" element={<RegisterPage />} />
      <Route path="login" element={<LoginPage />} />
    </Routes>
    <Footer />
  </React.Fragment>
);
const PrivateRoute: React.FC = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isAdmin = useSelector(selectIsAdmin);
  const isUser = useSelector(selectIsUser);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <Routes>
      {isAdmin && <Route path="/admin/dashboard" element={<Main />} />} 
      {isUser && <Route path="/user/dashboard" element={<UserDashboard />} />}
    </Routes>
  );
};

export default App;
