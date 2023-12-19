// Redux is pizza and Store is slice of pizza

import CartSlice from "./CartSlice";
// import CategorySlice from "./CategorySlice";
import CategorySlice from "./CategorySlice";
import SearchSlice from "./SearchSlice";
// 1. Congig the store
import { configureStore } from "@reduxjs/toolkit";


//  2. just store slices in store{pizza} stored in reducer cause it's compulsory               
export const store = configureStore({
reducer: {
  // we import here file(CartSlice) not cartSlice variable
  cart: CartSlice,
  category: CategorySlice,
  search:SearchSlice 
},

})


