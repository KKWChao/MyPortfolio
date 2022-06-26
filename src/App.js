import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home } from './Home'
import { About } from './About'
import { Contact } from './Contact'
import { NoMatch } from './NoMatch'
import { Layout } from './components/Layout/index.js'

function App() {
  return (
    <React.Fragment>
      <Layout>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
