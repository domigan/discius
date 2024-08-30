import React from "react";
import "../global.css";
import Image from "next/image";

export default function Vinyl({ artwork, playing }) {
  const playing_class = playing ? " vinyl" : "";
  return (
    <div className="vinyl-container">
      <img
        src={artwork["480x480"]}
        className={`image2 ${playing_class}`}
        alt="logo"
      />

      <Image
        src="/img/vinyl_img.png"
        width={500}
        height={500}
        className={`image1 ${playing_class}`}
        alt="vinyl"
      />
    </div>
  );
}
