import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Form from './components/Form';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Form />} />
        </Routes>
    </Router>
  );
};

export default App;
