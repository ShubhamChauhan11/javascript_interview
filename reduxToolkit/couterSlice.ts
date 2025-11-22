// counterSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = { value: number };
const initialState: State = { value: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value += 1;
    }, // Immer lets us "mutate"
    decrement(state) {
      state.value -= 1;
    },
    addBy(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, addBy } = counterSlice.actions;
export default counterSlice.reducer;
