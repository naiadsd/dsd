import axios from "axios";
import { BASE_URL } from "../constants";

export const getAllCustomers = async () => {
	let result = {
		hasError: false,
		customers: [],
		errorMessage: "",
	};

	try {
		await axios({
			method: "GET",
			url: BASE_URL + "customer/getcustomersbyrouteday/1/0",
		})
			.then((res) => {
				if (res.status == 200) {
					result.customers = res.data.data;
				} else {
				}
			})
			.catch((err) => {});
	} catch (error) {}

	return Promise.resolve(result);
};
