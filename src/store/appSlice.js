import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    popularVideos: {},
  },
  reducers: {
    toggleMenu: (state, action) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state, action) => {
      state.isMenuOpen = false;
    },
    setPopularVideosInStore: (state, action) => {
      state.popularVideos = action.payload;
    },
  },
});

export const { toggleMenu, closeMenu, setPopularVideosInStore } = appSlice.actions;
export default appSlice.reducer;
