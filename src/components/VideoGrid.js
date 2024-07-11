// src/components/VideoGrid.js
import React from "react";
import VideoTile from "./VideoTile";

function VideoGrid() {
    // Beispiel-Teilnehmer
    const participants = [
        { id: 1, name: "Julijana Uneva Kjumbeva", initial: "J" },
        { id: 2, name: "Ralf Schmitz", initial: "R" },
        { id: 3, name: "Marius Weber", initial: "M" },
        { id: 4, name: "Paul Schilling", initial: "P" },
        { id: 5, name: "Philipp Sauerlaender", initial: "P" },
        { id: 6, name: "Kevin Lampe", initial: "L" },
        { id: 7, name: "Manuel Fahrenholz", initial: "M" },
        { id: 8, name: "Oscar van Velsen", initial: "O" },
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
