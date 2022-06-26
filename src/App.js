import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navigation from './components/Nav/index'
import { Home } from "./Home";
import { About } from "./components/About/index";
import { Projects } from "./components/Projects/index";
import { Contact } from "./components/Contact/index";
import { NoMatch } from "./components/NoMatch/index";
import { Layout } from "./components/Layout/index";


function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Layout>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route path="/projects" element={<Projects />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
