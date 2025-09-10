import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    addSuggestionsToStore: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { addSuggestionsToStore } = searchSlice.actions;
export default searchSlice.reducer;
