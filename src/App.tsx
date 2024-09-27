import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Icb from "./pages/Icb";
import Ministries from "./pages/ministries/Ministries";
import Messages from "./pages/Messages";
import Contribute from "./pages/Contribute";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import "./styles/App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="App-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/icb" element={<Icb />} />
            <Route path="/ministries" element={<Ministries />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/contribute" element={<Contribute />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
