import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Login from "./authentication/Login";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Customers from "./screens/Customers";
import Products from "./screens/Products";
import MyTabs from "./components/Tabs";
import Orders from "./screens/Orders";
import Profile from "./screens/Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Tab = createBottomTabNavigator();

export default function App() {
	const storeData = async () => {
		try {
			await AsyncStorage.setItem("dsditem", "RAM");
		} catch (error) {}
	};
	const getData = async () => {
		try {
			const res = await AsyncStorage.getItem("dsditem");
			alert(res);
		} catch (error) {}
		return res;
	};
	const clear = async () => {
		try {
			const res = await AsyncStorage.clear("dsditem");
			alert(res);
		} catch (error) {}
		return res;
	};
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={({ route }) => ({
					headerShown: false,
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;

						if (route.name === "UserInfo") {
							iconName = focused
								? "supervised-user-circle"
								: "supervised-user-circle";
						} else if (route.name === "Customers") {
							iconName = focused ? "people" : "people-outline";
						} else if (route.name === "Orders") {
							iconName = focused
								? "local-grocery-store"
								: "local-grocery-store";
						}

						// You can return any component that you like here!
						return <MaterialIcons name={iconName} size={size} color={color} />;
					},
					tabBarActiveTintColor: "#8080ff",
					tabBarInactiveTintColor: "gray",
				})}>
				<Tab.Screen name='Customers' component={OrderStackScreen}></Tab.Screen>
				<Tab.Screen name='Orders' component={OrdersStackScreen}></Tab.Screen>
				<Tab.Screen name='UserInfo' component={UserStackScreen}></Tab.Screen>
			</Tab.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
const Stack = createNativeStackNavigator();

const OrderStack = createNativeStackNavigator();
function OrderStackScreen() {
	return (
		<OrderStack.Navigator screenOptions={{ headerShown: false }}>
			<OrderStack.Screen name='Customer' component={Customers} />
			<OrderStack.Screen name='Products' component={Products} />
		</OrderStack.Navigator>
	);
}
const OrdersStack = createNativeStackNavigator();

function OrdersStackScreen() {
	return (
		<OrdersStack.Navigator
			screenOptions={({ route }) => ({
				headerShown: false,
			})}>
			<OrdersStack.Screen name='Orders' component={Orders} />
		</OrdersStack.Navigator>
	);
}

const UserStack = createNativeStackNavigator();

function UserStackScreen() {
	return (
		<UserStack.Navigator>
			<UserStack.Screen name='Profile' component={Profile} />
		</UserStack.Navigator>
	);
}
