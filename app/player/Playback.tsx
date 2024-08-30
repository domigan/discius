import React from "react";
import Button from "@mui/material/Button";
// import PlayArrowIcon from "@mui/icons-material/PlayArrow";
// import StopIcon from "@mui/icons-material/Stop";
// import SkipNextIcon from "@mui/icons-material/SkipNext";
import "../global.css";

export default function Playback({ play, stop, skip, playing }) {
  return (
    <div className="controls">
      {!playing && (
        <Button variant="outlined" onClick={play}>
          {/* <PlayArrowIcon /> */}
          PLAY
        </Button>
      )}
      {playing && (
        <Button className="playback-btn" onClick={stop}>
          {/* <StopIcon /> */}
          STOP
        </Button>
      )}
      <Button className="playback-btn" onClick={skip}>
        {/* <SkipNextIcon /> */}
        NEXT
      </Button>
    </div>
  );
}
