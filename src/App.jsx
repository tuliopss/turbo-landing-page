import { useState } from "react";
import "./App.css";
import Container from "./components/Container/Container";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Container>
          <Home />
        </Container>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
