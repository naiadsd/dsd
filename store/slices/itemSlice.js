import { createSlice } from "@reduxjs/toolkit";

const item = createSlice({
	name: "item",
	initialState: {
		items: [],
		lastLoadedOn: null,
	},
	reducers: {
		addItems(state, action) {
			state.items = action.payload.items;
			state.lastLoadedOn = new Date();
		},
	},
});

export const { addItems } = item.actions;
export default item.reducer;
