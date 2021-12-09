import React from 'react';
import { list_tracks, start_stream } from '../app/actions';
import { genres, random_genre } from '../app/utils';
import Vinyl from './Vinyl'
import Playback from '../player/Playback'
import Track from '../player/Track'
import Search from '../player/Search'
import Queue from '../player/Queue'
import { Row, Col, Container } from 'react-bootstrap'

export class Turntable extends React.Component {
    
    state = {
        playing: false,
        queue: [],
        queue_index: 0,
        selected_track: null,
        audio: null,
        selected_genre: genres[0]
    }

    componentDidMount() {
        this.select_genre(genres[0])
    }
    componentDidUpdate() {
        console.log(this.state)
    }

    play = async () => {
        const { selected_track } = this.state;
        if (selected_track){
            const audio = await start_stream(selected_track.id)
            audio.onemptied = (e) => {
                this.skip();
                this.play();
            }
            this.setState({playing: true, audio});
        }
    }

    skip = async () => {
        this.stop();
        let { queue, queue_index } = this.state;
        if (queue.length - 1 === queue_index){
            queue = await list_tracks(random_genre());
            queue_index = 0;
        }
        else {
            queue_index++
        }
        const selected_track = queue[queue_index];
        this.setState({ selected_track, queue_index });
    }

    stop = () => {
        const { playing, audio } = this.state;
        if (playing && audio) {
            audio.pause()
            this.setState({ playing: false });
        }
    }

    select_genre = async (genre) => {
        this.stop();
        const queue = await list_tracks(genre);
        const selected_track = queue &&  queue.length ? queue[0] : null;
        this.setState({ queue, selected_track, selected_genre: genre })
    }

    render() {
        const { selected_track, playing, selected_genre, queue, queue_index } = this.state
        return (
        <Container className='container'>
            <Row>
                <Col className='playback-queue-container col-4'>
                    {selected_track && 
                        <div className="track-container">
                            <Playback play={this.play} skip={this.skip} stop={this.stop} playing={playing} />
                            <Track 
                                title={selected_track.title} 
                                artist={selected_track.user.name} 
                                link={selected_track.permalink}
                            />
                        </div>
                    }
                    <div>
                        <Search onChange={this.select_genre} selected_genre={selected_genre}/>
                    </div>
                    <div>
                        <Queue queue={queue} queue_index={queue_index}/>
                    </div>
                </Col>
                <Col className="vinyl-container col-8">
                    {selected_track && selected_track.artwork && 
                        <Vinyl artwork={selected_track.artwork} playing={playing} />
                    }
                </Col>
            </Row>
        </Container>
        );
    }
}
