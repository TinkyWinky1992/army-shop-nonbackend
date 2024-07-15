import { configureStore, createSelector } from '@reduxjs/toolkit';
import { ItemListInterface } from '../../assets';


interface CartState {
  items: ItemListInterface[];
}

const initialState: CartState = {
  items: [],
};

const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {...state, items: [...state.items, action.payload] };
    case 'UPDATE_ITEM':
      const updatedItems = state.items.map((item) => {
        if (item.img === action.payload.image) {
          return action.payload;
        }
        return item;
      });
      return {...state, items: updatedItems };
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: cartReducer,
});



type RootState = ReturnType<typeof store.getState>;
export const selectCartItems = createSelector(
  (state: RootState) => state.items,
  (items) => {
    const uniqueItems = Array.from(new Set(items.map((item) => item.image)));
    return uniqueItems.map((image) => {
      const itemData = items.find((item) => item.image === image);
      return {
        image: itemData.image,
        name: itemData.name,
        price: itemData.price,
        quantity: itemData.quantity,
      };
    });
  }
);



export const addItemToCart = (item: ItemListInterface, quantity: number) => {
  return {
    type: 'ADD_ITEM',
    payload: { ...item, quantity },
  };
};

