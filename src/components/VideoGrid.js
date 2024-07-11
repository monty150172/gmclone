// src/components/VideoGrid.js
import React from "react";
import VideoTile from "./VideoTile";

function VideoGrid() {
    // Beispiel-Teilnehmer
    const participants = [
        { id: 1, name: "Stefan Kirsch", initial: "S" },
        { id: 2, name: "Ralf Schmitz", initial: "R" },
        { id: 3, name: "Marius Weber", initial: "M" },
        { id: 4, name: "Paul Schilling", initial: "P" },
        { id: 5, name: "Philipp Sauerlaender", initial: "P" },
        { id: 6, name: "Johannes Müller", initial: "J" },
        { id: 7, name: "Lena Schmidt", initial: "L" },
        { id: 8, name: "Katharina Schuster", initial: "K" },
    ];

    return (
        <div className="video-grid">
            {participants.map((participant) => (
                <VideoTile key={participant.id} participant={participant} />
            ))}
        </div>
    );
}

export default VideoGrid;
