import { createSlice } from "@reduxjs/toolkit";

const storedTheme = localStorage.getItem("theme") === "dark";
const initialState = { darkMode: storedTheme };

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
      localStorage.setItem("theme", state.darkMode ? "dark" : "light");
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
