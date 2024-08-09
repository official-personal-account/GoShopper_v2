import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Header";
import PromotionBanner from "./components/PromotinBanner";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <PromotionBanner />
      <main className="py-3 body-colour">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
      <ToastContainer position="bottom-right" theme="dark" autoClose={10000} />
    </>
  );
}

export default App;
