import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from "react";
import './App.css';
import Home from "./pages/Home";
import Login from "./pages/Login";
import ViewList from "./pages/ViewList";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from './pages/Policy';
import PageNotfound from './pages/PageNotfound';
// import '/bootstrap/dist/css/bootstrap.min.css';


function App() {

  // let [state, setState] = useState({
  //   value: ""
  // });

  // let handleChange = input => {
  //   setState(prevValue => {
  //     return { value: input };
  //   });

  //   console.log(state.value);
  // };
  // return (
  //   <div className="App">
  //     <h1>{state.value}</h1>

  //     <Home handleChange={handleChange} value={state.value} />
  //   </div>
  // );
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="/login" element={<Login />} />
      <Route path="/ViewList" element={<ViewList />} />
      <Route path="*" element={<PageNotfound />} />
    </Routes>
  )
}

export default App;
