import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Navigation from './components/Nav/index'
import Footer from './components/Footer/index'
import { About } from "./components/About/index";
import  Projects  from "./components/Projects/index";
import { Resume } from "./components/Resume/index"
import  Contact from "./components/Contact/index.js";
import { NoMatch } from "./components/NoMatch/index";
import { Layout } from "./components/Layout/index";


function App() {
  return (
    <React.Fragment>
      <Router>
        <Navigation />
        <Layout>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/MyPortfolio" element={<About />} />

            <Route path="/projects" element={<Projects />} />

            <Route path="/resume" element={<Resume />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="*" element={<NoMatch />} />
          </Routes>
          
        </Layout>
      </Router>
      <Footer />
    </React.Fragment>
  );
}

export default App;
