import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import vinyl_img from '../vinyl_img.png';
import Track from './Track'
import { Row, Col, Container } from 'react-bootstrap'

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
                            <Container>
                                <Row>
                                    <Col className="col-3">
                                            <img
                                                src={source}
                                                className={`album-art-queue`}
                                                alt="logo"
                                                width="60" 
                                                height="60"
                                            />
                                    </Col>
                                    <Col className="col-9">
                                            <Track 
                                                title={track.title} 
                                                artist={track.user.name}
                                                link={track.permalink}
                                            />
                                    </Col>
                                </Row>
                            </Container>
                        </ListGroup.Item>)
                
                    })}
        </ListGroup>
    )
  }
  