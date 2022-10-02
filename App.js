import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Login from "./authentication/Login";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Customers from "./screens/Customers";
import Products from "./screens/Products";
import MyTabs from "./components/Tabs";
const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
/*
cd C:\Users\dsdna\AppData\Local\Android\Sdk\emulator
        .\emulator.exe -avd "Pixel_5"

*/
export default function App() {
	return (
		<NavigationContainer>
			<MyTabs></MyTabs>
			{/* <Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}>
				<Stack.Screen name='Customers' component={Customers}></Stack.Screen>
				<Stack.Screen name='Products' component={Products}></Stack.Screen>
				<Stack.Screen name='login'>
					{(props) => <Login {...props}></Login>}
				</Stack.Screen>
			</Stack.Navigator> */}
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
