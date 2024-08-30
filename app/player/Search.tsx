import React from "react";
import { genres } from "../actions/utils";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { FormControl, InputLabel } from "@mui/material";
import "../global.css";

type SearchProps = {
  onChange: (genre: string) => void;
  selected_genre: string;
};

export function Search({ onChange, selected_genre }: SearchProps) {
  const onSelect = (genre) => {
    onChange(genre);
  };

  const genre_item = (genre, index) => {
    return (
      <MenuItem
        key={`${genre}-search-${index}`}
        value={genre}
        onClick={(e) => onChange(genre)}
      >
        {genre}
      </MenuItem>
    );
  };

  return (
    <div className={"search-container"}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selected_genre}
          label="Genre"
          onChange={onSelect}
        >
          {genres.map(genre_item)}
        </Select>
      </FormControl>
    </div>
  );
}
