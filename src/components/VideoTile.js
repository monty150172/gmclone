// src/components/VideoTile.js
import React from "react";

function VideoTile({ participant }) {
    return (
        <div className="video-tile">
            {participant.image ? (
                <img src={participant.image} alt={participant.name} />
            ) : (
                <div className="initial-avatar">{participant.initial}</div>
            )}
            <div className="participant-name">{participant.name}</div>
        </div>
    );
}

export default VideoTile;
