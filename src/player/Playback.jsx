import React from "react";
import Button from 'react-bootstrap/Button';

export default function Playback({ play, stop, skip, playing }) {
    return (
        <div className="controls">
            {!playing && 
                <Button variant="outline-success" className="playback-btn" onClick={play}>
                    <i class="bi bi-play-fill"></i>
                </Button>
            }
            {playing && 
                <Button variant="outline-danger" className="playback-btn" onClick={stop}>
                    <i class="bi bi-stop-fill"></i>
                </Button>
            }
            <Button variant="outline-primary" className="playback-btn" onClick={skip}>
                <i class="bi bi-chevron-bar-right"></i>
            </Button>
        </div>
    )
  }
  