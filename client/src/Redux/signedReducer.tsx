import { createSlice } from "@reduxjs/toolkit";

if (!localStorage.getItem("loggedUser")) {
  let whoLogged = {
    isLogged: false,
    user: "none",
    id: "none",
  };
  let whoLoggedObjectString = JSON.stringify(whoLogged);
  localStorage.setItem("loggedUser", whoLoggedObjectString);
} else {
  console.log("there is a logged user");
}

const isLoggedIn = localStorage.getItem("loggedUser");
const parsed = JSON.parse(isLoggedIn!) as {
  isLogged: boolean;
  user: string;
  id: string;
};

export interface signedState {
  username?: String;
  signed: Boolean;
  _id?: String;
}
const initialState: signedState = {
  signed: parsed.isLogged,
  username: parsed.user,
  _id: parsed.id,
};

export const signedReducer = createSlice({
  name: "signed",
  initialState,
  reducers: {
    setSigned: (state: any, action) => {
      console.log("actionUser: ", action.payload);
      const payload = action.payload;

      //   state.signed = action.payload;
      return {
        ...state,
        signed: payload.success,
        username: payload.username,
        _id: payload._id,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSigned } = signedReducer.actions;

export default signedReducer.reducer;
