import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
  name: "countDown",
  initialState: {
    value: 0
  },
  reducers: {
    down: (state, action) => {
      state.value = state.value - action.payload;
    }
  }
});
export const {down} = slice.actions
export default slice;