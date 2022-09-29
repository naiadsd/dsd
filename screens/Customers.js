import React, { useState } from "react";
import {
	View,
	Text,
	SafeAreaView,
	StyleSheet,
	Dimensions,
	TextInput,
	TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import AntIcon from "react-native-vector-icons/AntDesign";

export default function Customers() {
	const heightScreen = Dimensions.get("screen").height;
	const [totalCustomers, setTotatlCustomers] = useState(100);
	const [seachText, setSeachText] = useState();
	return (
		<SafeAreaView>
			<View style={styles.topContainer}>
				{/* Search container	 */}
				<View style={styles.searchContainer}>
					<View>
						<Text style={styles.searchHeader}>
							Customers available Today ..!
						</Text>

						<Text style={styles.searchTotal}>
							Search in <Text style={{ color: "#fff" }}>{totalCustomers}</Text>{" "}
							customers
						</Text>
					</View>
					<View style={styles.search}>
						<View style={styles.searchBox}>
							<TextInput
								value={seachText}
								style={styles.searchText}
								placeholder='Search customers'></TextInput>
							<TouchableOpacity>
								<Icon
									name='md-send'
									size={25}
									color={"black"}
									style={{ marginRight: 10, fontWeight: "bold" }}></Icon>
							</TouchableOpacity>
						</View>
						{/* <View style={styles.searchButton}>
							<TouchableOpacity>
								<AntIcon name='dotchart' size={22} />
							</TouchableOpacity>
						</View> */}
					</View>
				</View>
				{/* Customers list*/}
				<View style={{ ...styles.customers, height: heightScreen - 150 }}>
					<Text>Customer list</Text>
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	topContainer: {
		height: "100%",
		flexDirection: "column",
		backgroundColor: "#6757E7",
	},
	searchContainer: {
		height: 200,
		paddingTop: 20,
		paddingHorizontal: 20,
	},
	searchHeader: {
		fontSize: 25,
		color: "white",
		fontWeight: "bold",
		fontFamily: "Roboto-MediumItalic",
	},
	searchTotal: {
		fontSize: 25,
		color: "grey",
		fontWeight: "bold",
		fontFamily: "Roboto-MediumItalic",
	},
	search: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		alignSelf: "center",
	},

	searchBox: {
		flex: 1,
		paddingTop: 5,
		paddingBottom: 5,
		paddingLeft: 6,
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "white",
		borderRadius: 12,
		marginTop: 15,
		height: 45,
	},
	searchText: {
		flex: 1,
		color: "black",
		fontSize: 15,
		fontWeight: "300",
		fontFamily: "Roboto-Black",
		paddingLeft: 5,
	},
	searchButton: {
		width: 50,
		marginLeft: 5,
		marginTop: 12,
		flex: 0.1,
		height: 45,
		padding: 5,
		justifyContent: "center",
		alignItems: "center",
		color: "black",
		fontSize: 15,
		fontWeight: "300",
		fontFamily: "Roboto-Black",
		backgroundColor: "white",
		borderRadius: 10,
	},
	customers: {
		backgroundColor: "#3D2C8D",
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
	},
	bottomContainer: {},
});
