// src/App.js
import React from "react";
import VideoGrid from "./components/VideoGrid";
import ControlBar from "./components/ControlBar";
import "./App.css";
import Header from "./components/Header";

function App() {
    return (
        <div className="app">
            <Header />
            <VideoGrid />
            <ControlBar />
        </div>
    );
}

export default App;
