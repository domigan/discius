"use client";
import "../global.css";
import React, { useEffect, useState } from "react";
import { list_tracks, start_stream } from "../actions/actions";
import { genres, random_genre } from "../actions/utils";
import Vinyl from "./Vinyl";
import Playback from "../player/Playback";
import Track from "../player/Track";
import { Search } from "../player/Search";
import Queue from "../player/Queue";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";

const initState = {
  playing: false,
  queue: [],
  queue_index: 0,
  selected_track: null,
  audio: null,
  selected_genre: genres[0],
};

export default function Turntable() {
  const [state, setState] = useState(initState);

  const play = async () => {
    const { selected_track } = state;
    if (selected_track) {
      const audio = await start_stream(selected_track.id);
      audio.onemptied = (e) => {
        skip();
        play();
      };
      setState({ ...state, playing: true, audio });
    }
  };

  const skip = async () => {
    stop();
    let { queue, queue_index } = state;
    if (queue.length - 1 === queue_index) {
      queue = await list_tracks(random_genre());
      queue_index = 0;
    } else {
      queue_index++;
    }
    const selected_track = queue[queue_index];
    setState({ ...state, selected_track, queue_index });
  };

  const stop = () => {
    const { playing, audio } = state;
    if (playing && audio) {
      audio.pause();
      setState({ ...state, playing: false });
    }
  };

  const select_genre = async (genre) => {
    stop();
    const queue = await list_tracks(genre);
    const selected_track = queue && queue.length ? queue[0] : null;
    setState({ ...state, queue, selected_track, selected_genre: genre });
  };

  useEffect(() => {
    select_genre(state.selected_genre);
  }, []);

  const { selected_track, playing, selected_genre, queue, queue_index } = state;
  return (
    <Grid container className="container">
      <Grid item>
        <Box className="playback-queue-container col-4">
          {selected_track && (
            <div className="track-container">
              <Playback play={play} skip={skip} stop={stop} playing={playing} />
              <Track
                title={selected_track.title}
                artist={selected_track.user.name}
                link={selected_track.permalink}
              />
            </div>
          )}
          <div>
            <Search onChange={select_genre} selected_genre={selected_genre} />
          </div>
          <div>
            <Queue queue={queue} queue_index={queue_index} />
          </div>
        </Box>
        <Box className="vinyl-container col-8">
          {selected_track && selected_track.artwork && (
            <Vinyl artwork={selected_track.artwork} playing={playing} />
          )}
        </Box>
      </Grid>
    </Grid>
  );
}
