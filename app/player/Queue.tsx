import React from "react";
import List from "@mui/material/List";
import Track from "./Track";
import Grid from "@mui/material/Grid";
import ListItem from "@mui/material/ListItem";
import "../global.css";

export default function Queue({ queue, queue_index }) {
  if (queue.length - 1 === queue_index) {
    return <div />;
  }
  return (
    <List className="track-queue w-full">
      {queue.slice(queue_index + 1).map((track, index) => {
        const { artwork } = track;
        const source = artwork ? artwork["150x150"] : "/img/vinyl_img.png";
        return (
          <ListItem
            className={"queue-item w-full"}
            key={`${track.id}_${index}`}
          >
            <Grid container width={"100%"}>
              <Grid item className="col-3">
                {source && (
                  <img
                    src={source}
                    className={`album-art-queue`}
                    alt="logo"
                    width="60"
                    height="60"
                  />
                )}
              </Grid>
              <Grid item className="col-9">
                <Track
                  title={track.title}
                  artist={track.user.name}
                  link={track.permalink}
                />
              </Grid>
            </Grid>
          </ListItem>
        );
      })}
    </List>
  );
}
