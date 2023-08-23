import { createContext } from "react";

export const postMenuContext = createContext({
  postModal: false,
  setPostModal: (value: boolean) => {},
});
