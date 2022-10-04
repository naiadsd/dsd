import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
	name: "user",
	initialState: {
		firstName: null,
		lastName: null,
		id: null,
		uuid: null,
		email: null,
		phoneNumber: null,
		role: null,
		route: null,
		note: null,
		totalOrders: null,
		valueAdded: null,
		userId: null,
	},
	reducers: {
		setUser(state, action) {
			state = action.payload;
		},
		setRoute(state, action) {
			state.route = action.payload;
		},
		setTotals(state, action) {
			state.totalOrders = action.payload.totalOrders;
			state.valueAdded = action.payload.valueAdded;
		},
	},
});

export const { setUser, setRoute, setTotals } = user.actions;

export const getUser = (state) => state;

export const getUserId = (state) => state.userId;

export const getUUID = (state) => state.uuid;

export default user.reducer;
