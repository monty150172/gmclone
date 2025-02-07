// src/components/VideoTile.js
import React from "react";
import "../App.css";

function VideoTile({ participant }) {
    return (
        <div className="video-tile">
            {participant.image ? (
                <img src={participant.image} alt={participant.name} />
            ) : (
                <div className="initial-avatar">{participant.initial}</div>
            )}
            <div className="unmute-icon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e8eaed"
                >
                    <path d="m710-362-58-58q14-23 21-48t7-52h80q0 44-13 83.5T710-362ZM480-594Zm112 112-72-72v-206q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760v126l-80-80v-46q0-50 35-85t85-35q50 0 85 35t35 85v240q0 11-2.5 20t-5.5 18ZM440-120v-123q-104-14-172-93t-68-184h80q0 83 57.5 141.5T480-320q34 0 64.5-10.5T600-360l57 57q-29 23-63.5 39T520-243v123h-80Zm352 64L56-792l56-56 736 736-56 56Z" />
                </svg>
            </div>
            <div className="participant-name">{participant.name}</div>
        </div>
    );
}

export default VideoTile;
