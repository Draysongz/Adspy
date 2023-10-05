"use client";

import Nav from "../../components/Nav";
import Hero from "../../components/Hero";
import Know from "../../components/Know";
import Steps from "../../components/Steps";
import Check from "../../components/Check";
import Faq from "../../components/Faq";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../../components/Login";
import Register from "../../components/Register";
import FaqPage from "../../components/FaqPage";
import Products from "../../components/Products";
import Footer from "../../components/Footer";

export default function Landing() {
  return (
    <div>
      <Nav />
      <Hero />
      <Know />
      <Steps />
      <Check />
      <Faq />
      <Footer />
    </div>
  );
}

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/faq" element={<FaqPage />} />
//         <Route path="/products" element={<Products />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
