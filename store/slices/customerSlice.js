import { createSlice } from "@reduxjs/toolkit";

const customer = createSlice({
	name: "customer",
	initialState: {
		customers: [],
		lastLoadedOn: null,
	},
	reducers: {
		addCustomers(state, action) {
			state.customers = action.payload.customers;
			state.lastLoadedOn = new Date();
		},
	},
});

export const { addCustomers } = customer.actions;
export default customer.reducer;
