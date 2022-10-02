import React, { useState } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {
	View,
	Text,
	SafeAreaView,
	StyleSheet,
	Dimensions,
	TextInput,
	TouchableOpacity,
	FlatList,
	ScrollView,
} from "react-native";
function Item({ item }) {
	const product = item.item;
	const [currentPrice, setCurrentPrice] = useState(0.0);
	const [currentQuantity, setCurrentQuantity] = useState(0);
	return (
		<View style={styles.item}>
			<View style={styles.itemInfo}>
				<View>
					<Text>{product.itemId}</Text>
					<Text>{product.description}</Text>
					<Text>{product.descriptionForSales}</Text>
				</View>
				<View style={styles.itemValues}>
					<Text>${item.salePriceTwo}</Text>
					<Text>CS/{item.reOrderQuantity}</Text>
					<Text>${currentPrice}</Text>
				</View>
			</View>
			<View style={styles.itemAction}>
				{currentQuantity <= 0 ? (
					<TouchableOpacity
						onPress={() => {
							setCurrentQuantity(1);
						}}>
						<View style={styles.addButton}>
							<Text style={styles.addButtonText}>Add</Text>
						</View>
					</TouchableOpacity>
				) : (
					<View style={styles.addButtonMore}>
						<TouchableOpacity
							onPress={() => {
								setCurrentQuantity(currentQuantity - 1);
							}}>
							<MaterialIcons
								name='remove-circle-outline'
								size={25}
								color='white'></MaterialIcons>
						</TouchableOpacity>

						<Text style={styles.addButtonText}>{currentQuantity}</Text>
						<TouchableOpacity
							onPress={() => {
								setCurrentQuantity(currentQuantity + 1);
							}}>
							<MaterialIcons
								name='add-circle-outline'
								size={25}
								color='white'></MaterialIcons>
						</TouchableOpacity>
					</View>
				)}
			</View>
		</View>
	);
}

export default Item;
const widthS = Dimensions.get("screen").width;
const styles = StyleSheet.create({
	item: {
		padding: 10,
		marginHorizontal: 10,
		marginVertical: 10,
		borderRadius: 10,
		minHeight: 120,
		backgroundColor: "#5451d6",
		flex: 1,
		flexDirection: "row",
	},
	itemInfo: {
		flex: 0.8,
		flexDirection: "column",
	},
	itemAction: {
		alignItems: "center",
		justifyContent: "center",
		flex: 0.2,
	},
	itemValues: {
		flex: 0.6,
		width: 150,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	addButton: {
		backgroundColor: "#817fe3",
		padding: 7,
		width: 60,
		alignItems: "center",
		borderRadius: 15,
		shadowColor: "white",
		shadowOpacity: 10,
		shadowRadius: 4,
	},
	addButtonText: {
		color: "white",
		fontSize: 15,
		fontFamily: "MyriadPro-Bold",
		fontWeight: "600",
	},
	addButtonMore: {
		backgroundColor: "#817fe3",
		padding: 7,
		width: 60,
		alignItems: "center",
		borderRadius: 15,
		shadowColor: "white",
		shadowOpacity: 10,
		shadowRadius: 4,
	},
});
