import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    addItem(state, action) {
      state.items = state.items.push(action.payload);
    },

    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },

    clearItems(state) {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearItems } = mainSlice.actions;
export default mainSlice.reducer;
