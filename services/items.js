//us-central1-gelaterianaia-a3f12.cloudfunctions.net/app/item/getItems
import axios from "axios";
import { BASE_URL } from "../constants";
export const getAllItems = async () => {
	let result = {
		hasError: false,
		items: [],
		errorMessage: "",
	};

	try {
		await axios({
			method: "GET",
			url: BASE_URL + "item/getItems",
		})
			.then((res) => {
				if (res.status == 200) {
					result.items = res.data.items;
				} else {
				}
			})
			.catch((err) => {});
	} catch (error) {}

	return Promise.resolve(result);
};
