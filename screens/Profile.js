import React from "react";
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
	Image,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Gradient from "../components/Gradient";
export default function Profile() {
	let name = "Ram";
	return (
		<View>
			<LinearGradient
				colors={["#7265db", "#7265db", "#40388a", "#40388a"]}
				style={styles.linearGradient}>
				<View style={styles.profile}>
					<Image
						style={styles.avatar}
						source={{
							uri: "https://bootdey.com/img/Content/avatar/avatar6.png",
						}}
					/>
				</View>
				<View style={styles.details}>
					<View style={styles.userdetails}>
						<Text style={styles.username}>Hi {name}</Text>
						<Text style={styles.dailynote}>daily notes would go here</Text>
					</View>
					<View style={styles.actions}>
						<Text style={styles.username}> actions go here</Text>
					</View>
					<View style={styles.values}>
						<View style={styles.leftValues}>
							<View style={styles.leftTop}></View>
							<View style={styles.leftBottom}></View>
						</View>
						<View style={styles.rightValues}>
							<View style={styles.rightTop}></View>
							<View style={styles.rightBottom}></View>
						</View>
					</View>
				</View>
			</LinearGradient>
		</View>
	);
}

const styles = StyleSheet.create({
	linearGradient: {
		height: "100%",
		paddingHorizontal: 10,
		paddingVertical: 20,
	},
	avatar: {
		width: 60,
		height: 60,
		borderRadius: 30,
		borderWidth: 4,
		borderColor: "white",
		marginBottom: 10,
	},
	profile: {
		height: 100,
		alignItems: "flex-end",
		paddingRight: 20,
	},
	userdetails: {},
	details: {
		paddingHorizontal: 20,
	},
	username: {
		color: "#fff",
		fontSize: 25,
		fontWeight: "500",
	},
	dailynote: {
		color: "#e0e0eb",
		fontSize: 15,
		fontWeight: "500",
	},
	actions: {
		minHeight: 100,
		marginTop: 10,
		backgroundColor: "#8080ff",
		borderRadius: 20,
		alignItems: "center",
		justifyContent: "center",
	},
	values: {
		flex: 1,
		justifyContent: "space-evenly",
		flexDirection: "row",
		marginTop: 30,
	},
	leftValues: {},
	leftTop: {
		width: 120,
		padding: 10,
		height: 150,
		borderRadius: 20,
		backgroundColor: "#8080ff",
	},
	leftBottom: {
		width: 120,
		marginTop: 15,
		padding: 10,
		height: 70,
		borderRadius: 20,
		backgroundColor: "#8080ff",
	},
	rightValues: {},
	rightTop: {
		width: 120,
		padding: 10,
		height: 70,
		borderRadius: 20,
		backgroundColor: "#8080ff",
	},
	rightBottom: {
		width: 120,
		marginTop: 15,
		padding: 10,
		height: 150,
		borderRadius: 20,
		backgroundColor: "#8080ff",
	},
});
