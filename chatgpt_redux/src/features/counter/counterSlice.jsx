import { createSlice } from "@redux.js/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state, action) => {
      state.value += action.payload || 1;
    },
    decrement: (state, action) => {
      state.value -= action.payload || 1;
    },
  },
});


export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducers;
