import { configureStore, combineReducers } from "@reduxjs/toolkit";
import UserReducer from "./slices/userSlice";
import CartReducer from "./slices/cartSlice";
import CustomerReducer from "./slices/customerSlice";
import ItemReducer from "./slices/itemSlice";

const reducers = combineReducers({
	user: UserReducer,
	cart: CartReducer,
	item: ItemReducer,
	customer: CustomerReducer,
});

export const store = configureStore({
	reducer: reducers,
});
