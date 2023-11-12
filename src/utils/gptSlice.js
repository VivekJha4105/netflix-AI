import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearchArea: false,
    movieNames: null,
    movieResults: null,
  },
  reducers: {
    toggleGptSearchArea: (state) => {
      state.showGptSearchArea = !state.showGptSearchArea;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
    clearMovieData: (state) => {
      state.movieNames = null;
      state.movieResults = null;
    },
    clearDataOnLogout: (state) => {
      state.showGptSearchArea = false;
      state.movieNames = null;
      state.movieResults = null;
    },
  },
});

export const {
  toggleGptSearchArea,
  addGptMovieResult,
  clearMovieData,
  clearDataOnLogout,
} = gptSlice.actions;

export default gptSlice.reducer;
