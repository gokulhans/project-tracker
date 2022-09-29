import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Home from "./pages/home/home";
import Project from "./pages/project/project";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import AddTask from "./pages/forms/AddTask";
import AddProject from "./pages/forms/AddProject";
import Crud from "./pages/home/crud";


function App() {

  return (
    <>
      <div className="mt-24">
        <Navbar />

        <Routes>
          <Route path="/">
            <Route path="/" element={<Crud />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/project/:id" element={<Project />} />
            <Route path="/add-project" element={<AddProject />} />
            <Route path="/add-task" element={<AddTask />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
