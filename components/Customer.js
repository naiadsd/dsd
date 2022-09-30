import React, { Children } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Customer({ item }) {
	const customer = item.item;
	// console.log(customer);
	return (
		<View style={styles.customer}>
			<View style={styles.child}>
				<Text style={styles.customerName}>
					{customer.customerName} - {customer.customerId}
				</Text>
			</View>
			<View style={styles.parent}>
				<Text style={styles.address}>{customer.shipToAddressLineOne}</Text>
				<Text style={styles.address}>{customer.shipToCity}</Text>
				<Text style={styles.address}>
					{customer.shipToSate}- {customer.shipToZip}
				</Text>
				<Text style={styles.address}>
					{customer.soldhere ? customer.soldhere : "soldhere"}
				</Text>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	customer: {
		marginHorizontal: 10,
		marginVertical: 10,
		borderRadius: 10,
		minHeight: 150,
		backgroundColor: "#5451d6",
	},
	parent: {
		height: 90,
		padding: 5,
		color: "white",
	},
	address: {
		color: "#EEEEEE",
		fontSize: 15,
		fontWeight: "700",
		fontFamily: "Roboto-Regular",
	},
	child: {
		paddingHorizontal: 5,
		height: 60,
		// backgroundColor: "#7162e1",
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		justifyContent: "center",
	},
	customerName: {
		color: "#EEEEEE",
		fontSize: 20,
		fontWeight: "500",
		fontFamily: "Roboto-Medium",
	},
});
