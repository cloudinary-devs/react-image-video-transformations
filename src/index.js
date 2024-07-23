import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Images,
  Videos,
} from "./components";

ReactDOM.render(
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Images />} />
        <Route path="/images" element={<Images />} />
        <Route path="/videos" element={<Videos />} />
      </Routes>
    </Router>,
  
    document.getElementById("root")
);
  