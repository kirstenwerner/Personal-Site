import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <ToastContainer />
        <NavBar />
        <Route exact path='/' component={Home} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Route exact path='/resume' component={Resume} />
        <Route exact path='/contact' component={Contact} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
