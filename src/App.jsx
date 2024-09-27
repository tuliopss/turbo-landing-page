import { useState } from "react";
import "./App.css";
import Container from "./components/Container/Container";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Purchase from "./pages/Purchase/Purchase";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Container>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/purchase' element={<Purchase />} />
          </Routes>
        </Container>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
