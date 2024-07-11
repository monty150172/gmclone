// src/components/ControlBar.js
import React from "react";

function ControlBar() {
    return (
        <div className="control-bar">
            <button title="Mikrofon">🎤</button>
            <button title="Kamera">🎥</button>
            <button title="Bildschirm teilen">🖥️</button>
            <button title="Chat">💬</button>
            <button title="Teilnehmer">👥</button>
            <button title="Auflegen">📞</button>
        </div>
    );
}

export default ControlBar;
