import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import vinyl_img from '../vinyl_img.png';
import Track from './Track'

export default function Queue({ queue, queue_index }) {
    if (queue.length - 1 === queue_index) {
        return <div />
    }
    return (
        <ListGroup className="track-queue" as="ol" numbered>
            {queue.slice(queue_index + 1).map((track, index) => {
                const { artwork } = track
                const source = artwork ? artwork['150x150'] : vinyl_img
                return (<ListGroup.Item className={"queue-item"} key={`${track.id}${index}`}>
                    <img
                        src={source}
                        className={`album-art-queue`}
                        alt="logo"
                        width="150" 
                        height="150"
                     />
                     <Track 
                        title={track.title} 
                        artist={track.user.name}
                        link={track.permalink}
                    />
                </ListGroup.Item>)
            })}
        </ListGroup>
    )
  }
  