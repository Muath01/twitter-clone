import { createSlice } from "@reduxjs/toolkit";

interface DarkModeType {
  darkMode: boolean;
}
const initialState: DarkModeType = {
  darkMode: false,
};

export const displayReducer = createSlice({
  name: "display",
  initialState,
  reducers: {
    setDisplay: (state, action) => {
      return {
        ...state,
        darkMode: action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDisplay } = displayReducer.actions;

export default displayReducer.reducer;
