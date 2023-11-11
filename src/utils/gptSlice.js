import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearchArea: false,
  },
  reducers: {
    toggleGptSearchArea: (state) => {
      state.showGptSearchArea = !state.showGptSearchArea;
    },
  },
});

export const { toggleGptSearchArea } = gptSlice.actions;

export default gptSlice.reducer;
