import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Customers from "../screens/Customers";
import Orders from "../screens/Orders";
import Profile from "../screens/Profile";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
const Tab = createBottomTabNavigator();
const tabBarOptions = {
	showLabel: false,
	inactiveTintColor: "#2D3038",
	activeTintColor: "#FFFFFF",
	style: {
		height: "10%",
		backgroundColor: "#1E1B26",
	},
};
function MyTabs() {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				headerShown: false,
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;

					if (route.name === "Profile") {
						iconName = focused
							? "supervised-user-circle"
							: "supervised-user-circle";
					} else if (route.name === "Customers") {
						iconName = focused ? "people" : "people-outline";
					} else if (route.name === "Orders") {
						iconName = focused ? "local-grocery-store" : "local-grocery-store";
					}

					// You can return any component that you like here!
					return <MaterialIcons name={iconName} size={size} color={color} />;
				},
				tabBarActiveTintColor: "#8080ff",
				tabBarInactiveTintColor: "gray",
			})}>
			<Tab.Screen name='Customers' component={Customers} headerShown={false} />
			<Tab.Screen name='Orders' component={Orders} />
			<Tab.Screen name='Profile' component={Profile} />
		</Tab.Navigator>
	);
}
const screenOptions = (route) => {
	let iconName;

	switch (route.name) {
		case "Customers":
			iconName = "remove-circle-outline";
			break;
		case "Profile":
			iconName = "remove-circle-outline";
			break;
		default:
			break;
	}

	return <MaterialIcons name={iconName} size={24} />;
};
export default MyTabs;
