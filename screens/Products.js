import React, { useState, useEffect } from "react";
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
import Item from "../components/Item";
import { getAllCustomers, getAllItems } from "../services/items";

function Products({ customer, navigation }) {
	const [items, setItems] = useState([]);
	const [filteredItems, setFilteredItems] = useState([]);
	const [searchText, setSearchText] = useState();
	const heightScreen = Dimensions.get("screen").height;

	const getAllProducts = async () => {
		const res = await getAllItems();
		setItems(res.items);
		setFilteredItems(res.items);
		// console.log(res.items);
	};
	useEffect(() => {
		getAllProducts();
	}, []);
	return (
		<View>
			<Text>Products</Text>
			<FlatList
				data={filteredItems}
				renderItem={(item) => <Item item={item}></Item>}></FlatList>
		</View>
	);
}

export default Products;
