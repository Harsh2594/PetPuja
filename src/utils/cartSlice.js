import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //vanilla(older)Redux-> DO NOT mutate state, returining was mandatory
      //const newState = [...state];
      //newState.item.push(action.payload)
      //return newState

      //REDUX Toolkit(Use immer library to implement this uses older logic)
      //We have to mutate the state here
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
