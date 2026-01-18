import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type Character } from "@/types/types";

const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    items: [] as Character[],
  },
  reducers: {
    setCharacters: (state, action: PayloadAction<Character[]>) => {
      state.items = action.payload;
    },
  },
});

export const { setCharacters } = charactersSlice.actions;
export default charactersSlice.reducer;
