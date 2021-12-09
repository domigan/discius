import React from "react";

export default function Track({ title, artist, link }) {
    return (
        <div className="track-info">
            <p><i>
                <a href={`https://www.audius.co${link}`} target={'_blank'}>
                    <b>{title}</b>
                </a>
            </i></p>
            <p><b>{artist}</b></p>
        </div>
    )
  }
  