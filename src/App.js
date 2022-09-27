import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Home from "./pages/home/home";
import Project from "./pages/project/project";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
// import { useContext } from "react";

function App() {

  return (
    <>
        <Navbar />
      <div className="mt-24">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/project/:id" element={<Project />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
