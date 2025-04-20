import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
      <Header/>
      {/* <div className="container">
      <div className="row"> */}
        <div className="main_body">
            <App />
      {/* </div>
      </div> */}
      </div>
    </Router>
);


reportWebVitals();
