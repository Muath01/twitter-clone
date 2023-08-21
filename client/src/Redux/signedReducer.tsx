import { createSlice } from "@reduxjs/toolkit";

const isLoggedIn = localStorage.getItem("loggedUser");
const parsed = JSON.parse(isLoggedIn!) as {
  isLogged: boolean;
  user: string;
};

export interface signedState {
  username?: String;
  signed: Boolean;
}

const initialState: signedState = {
  signed: parsed.isLogged,
  username: parsed.user,
};

export const signedReducer = createSlice({
  name: "signed",
  initialState,
  reducers: {
    setSigned: (state: any, action) => {
      console.log("action: ", action);

      //   state.signed = action.payload;
      return {
        ...state,
        signed: action.payload.success,
        username: action.payload.username,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSigned } = signedReducer.actions;

export default signedReducer.reducer;
