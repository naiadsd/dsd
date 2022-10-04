import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
	name: "cart",
	initialState: {
		totalPrice: 0.0,
		totalItems: 0,
		items: [],
		customer: {},
	},
	reducers: {
		addItem(state, action) {
			let items = state.items;
			let currentItem = action.payload.item;
			if (items.length == 0) {
				items.push(currentItem);
				state.totalPrice = state.totalPrice + action.payload.item.price;
				state.totalItems = state.totalItems + action.payload.item.quantity;
			} else {
				let index = items.findIndex((item) => (item.id = currentItem.id));
				if (index == -1) {
					items.push(currentItem);
					state.totalPrice = state.totalPrice + action.payload.item.price;
					state.totalItems = state.totalItems + action.payload.item.quantity;
				} else {
					state.totalPrice =
						state.totalPrice + action.payload.price - items[index].price;
					state.totalItems =
						state.totalItems + action.payload.quantity - items[index].quantity;
					items[index] = currentItem;
				}
			}
			state.items = items;
		},
		removeItem(state, action) {
			let items = state.items;
			let latestItems = items.filter(
				(item) => item.id !== action.payload.item.id
			);

			let totalPrice = items.reduce((pre, cur) => {
				pre + cur.price;
			}, 0);
			let totalQunt = items.reduce((pre, cur) => {
				pre + cur.quantity;
			}, 0);

			state.items = items;
			state.totalItems = totalQunt;
			state.totalPrice = totalPrice;
		},
	},
});

export const { addItem, removeItem } = cart.actions;

const getCartValues = (state) => {
	return { totalPrice: state.totalPrice, totalQuantity: state.totalQuantity };
};
