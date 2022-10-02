import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Customers from "../screens/Customers";
import Orders from "../screens/Orders";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

function MyTabs() {
	return (
		<Tab.Navigator>
			<Tab.Screen name='Customers' component={Customers} />
			<Tab.Screen name='Orders' component={Orders} />
			<Tab.Screen name='Profile' component={Profile} />
		</Tab.Navigator>
	);
}
export default MyTabs;
