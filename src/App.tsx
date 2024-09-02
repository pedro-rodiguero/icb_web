import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Icb from "./pages/Icb";
import Ministries from "./pages/ministries/Ministries";
import Messages from "./pages/Messages";
import Contribute from "./pages/Contribute";
import Contact from "./pages/Contact";
import "./styles/App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/icb" element={<Icb />} />
        <Route path="/ministries" element={<Ministries />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/contribute" element={<Contribute />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
