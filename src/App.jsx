import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Courses from "./pages/courses/Courses";
import Roadmap from "./pages/roadmap/Roadmap";
import TestSeries from "./pages/testSeries/TestSeries";
import Mentor from "./pages/mentor/Mentor";
import FinancialResources from "./pages/financialResources/FinancialResources";
import Contact from "./pages/contact/Contact";
import Profile from "./pages/profile/Profile";
import "./App.css";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/roadmap" element={<Roadmap />} />
                <Route path="/test-series" element={<TestSeries />} />
                <Route path="/mentor" element={<Mentor />} />
                <Route
                    path="/financial-resources"
                    element={<FinancialResources />}
                />
                <Route path="/contact" element={<Contact />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </Router>
    );
}

export default App;
