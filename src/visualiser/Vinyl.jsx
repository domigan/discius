import vinyl_img from '../vinyl_img.png';
import React from 'react';
// import classnames 
export default function Vinyl({artwork, playing}) {
    const playing_class = playing ? " vinyl" : ""
    return (
        <div className="vinyl-container">
            <img
                src={artwork['480x480']}
                className={`image2 ${playing_class}`}
                alt="logo"  />
            <img
                src={vinyl_img}
                className={`image1 ${playing_class}`}
                alt="logo"  />          
        </div>
    )
  }
  