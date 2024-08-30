import axios from "axios";
import { genres } from "../actions/utils";

const API_GATEWAYS = "https://api.audius.co/";
export const APP_NAME = "domigans-discovery";
export const PROVIDER = "https://discoveryprovider2.audius.co/v1";
export const STREAM_PROVIDER =
  "https://discoveryprovider.audius5.prod-us-west-2.staked.cloud/v1";

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
};
const params = {
  app_name: APP_NAME,
};

export const get_api = async () => {
  return await axios.get(API_GATEWAYS);
};

export const get_trending_tracks_by_genre = async (genre) => {
  if (genre !== genres[0]) {
    params["genre"] = genre;
  }
  return await axios.get(PROVIDER + "/tracks/trending", {
    headers: headers,
    params: params,
  });
};

export const search = async (query) => {
  params["query"] = query;
  return await axios.get(PROVIDER + "/tracks/search", {
    headers: headers,
    params: params,
  });
};

export const get_track = async (track_id) => {
  params["track_id"] = track_id;
  return await axios.get(PROVIDER + `/tracks/${track_id}`, {
    headers: headers,
    params: params,
  });
};

export const stream = async (track_id) => {
  const audio = new Audio(
    `${STREAM_PROVIDER}/tracks/${track_id}/stream?app_name=${APP_NAME}`
  );
  await audio.load();
  await audio.play().catch(console.log);
  return audio;
};
