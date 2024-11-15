import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import PredictionForm from "./components/PredictionForm";
import AboutPage from "./components/AboutPage";
import "./style.css";

function App() {
    return (
        <Router>
            <Header />
            <div className="content">
                <Routes>
                    <Route path="/" element={<PredictionForm />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
