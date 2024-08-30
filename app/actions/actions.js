import { get_trending_tracks_by_genre, stream } from "../audius-api/api_v1";
import { shuffleArray } from "./utils";

export const list_tracks = async (genre) => {
  try {
    const result = await get_trending_tracks_by_genre(genre);
    return shuffleArray(result.data.data);
  } catch (e) {
    console.log("GET ERROR!");
    console.log(e);
  }
};

export const start_stream = (track_id) => {
  try {
    return stream(track_id);
  } catch (e) {
    console.log("STREAM ERROR!");
    console.log(e);
  }
};
