import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import GroomingService from './Components/GroomingService';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import ProductCarousel from './Components/Ourbestseller';
import CategorySection from './Components/OurCategory';
import StorePage from './Components/StorePage'; 
import { ContactPage } from "./Components/ContactPage";
import ProductDetails from "./Components/ProductDetails";
import GroomingPage from "./Components/GroomingPage";
import ShoppingCart from "./Components/cart";
import CheckoutPage from "./Components/CheckoutPage";
import { Provider } from "react-redux";
import store from "./utils/store";
import Footer from "./Components/footer"
import AnimatedStackCards from "./Components/Cardstack";
import LoginPage from "./Components/LoginPage";
import RegisterPage from "./Components/RegisterPage";

import ScrollToTop from "./Components/ScrollToTop";
import LoginForm from "./Components/login";
import RegisterForm from "./Components/register";
import ProfilePage from "./Components/ProfilePage";
import UserProfile from "./Components/profile";

function App() {
  return (
    <Provider store={store}>
    <Router>
      <ScrollToTop/>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <ProductCarousel />
            <CategorySection />
            <GroomingService />
            <AnimatedStackCards/>
          </>
        } />
        <Route path="/store" element={<StorePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/productdetails" element={<ProductDetails />} />
        <Route path="/grooming" element={<GroomingPage />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/user" element={<LoginForm />} />
        <Route path="/user/register" element={<RegisterForm/>} />


        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />

        <Route path="/register" element={<RegisterPage />} />



      </Routes>
      <Footer/>
    </Router>
    </Provider>
  );
}

export default App;

