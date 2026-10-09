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
      const existingItem = state.items.find(
        (item) => item.card.info.id === action.payload.card.info.id,
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },
    removeItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.card.info.id === action.payload,
      );

      if (existingItem) {
        existingItem.quantity -= 1;

        if (existingItem.quantity === 0) {
          state.items = state.items.filter(
            (item) => item.card.info.id !== action.payload,
          );
        }
      }
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
