import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ObjectList from "./components/ObjectList";
import FileUpload from "./components/FileUpload";

const App = () => (
    <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<ObjectList />} />
            <Route path="/upload" element={<FileUpload />} />
        </Routes>
    </Router>
);

export default App;
