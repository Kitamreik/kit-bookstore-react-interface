import React from "react"; //{ useState } 
import './App.css';
// import { Routes, Route } from "react-router-dom";

import Header from "./shared/Header";
import Footer from "./shared/Footer";
import Home from "./components/Home";
// import Admin from "./components/Admin";
// //admin for books and authors
// import Create from "./components/Create";
// // for books and authors
// import Login from "./components/Login";
// import Register from "./components/Register";
// import Update from "./components/Update";
//for books and authors

function App() {
  //const [user, setUser] = useState(localStorage.getItem("user") || {});
  return (
    <div className="App">
      <Header />
    {/* <Header user={user} setUser={setUser}/>  */}
    {/* user={user} setUser={setUser} */}
    {/* <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/create" element={<Create />} />
      <Route
        path="/login"
        element={<Login user={user} setUser={setUser} />}
      />
      <Route
        path="/register"
        element={<Register user={user} setUser={setUser} />}
      />
      <Route path="/update" element={<Update />} />
    </Routes> */}
    <Home />
    <Footer />
  </div>
  )
}

export default App
