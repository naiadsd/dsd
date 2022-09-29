import React from "react";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import {
	Image,
	Text,
	View,
	StyleSheet,
	SafeAreaView,
	TextInput,
	TouchableOpacity,
} from "react-native";

export default function Login() {
	return (
		<View style={styles.full}>
			<SafeAreaView>
				<View style={styles.parent}>
					<Image
						style={styles.logoStyle}
						source={require("../assets/images/deliverylogo.png")}></Image>
					<View style={styles.formField}>
						<MaterialIcon
							name='email'
							color='grey'
							size={20}
							style={styles.formIcon}></MaterialIcon>
						<TextInput
							style={styles.formTextField}
							keyboardType='email-address'
							placeholder='Email address'></TextInput>
					</View>
					<View style={styles.formField}>
						<MaterialIcon
							name='lock'
							color='grey'
							size={20}
							style={styles.formIcon}></MaterialIcon>
						<TextInput
							style={styles.formTextField}
							secureTextEntry={true}
							placeholder='password'></TextInput>
					</View>
					<TouchableOpacity style={styles.login}>
						<Text style={styles.loginText}>Login</Text>
					</TouchableOpacity>
				</View>
				{/* <View style={styles.design}></View> */}
			</SafeAreaView>
		</View>
	);
}

const styles = StyleSheet.create({
	design: {
		minHeight: 400,
		backgroundColor: "#916BBF",
		width: "100%",
		borderTopLeftRadius: 50,
		borderTopRightRadius: 50,
	},
	logoStyle: {
		height: 250,
		width: "70%",
		aspectRatio: 1,
		alignSelf: "center",
		justifyContent: "center",
	},
	parent: {
		paddingTop: 60,
		paddingVertical: 40,
		paddingHorizontal: 30,
	},
	full: {
		backgroundColor: "#3D2C8D",
		flex: 1,
	},
	formField: {
		marginTop: 10,
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 10,
		borderWidth: 1,
		padding: 2,
		borderRadius: 20,
		color: "white",
	},
	formIcon: {
		fontSize: 20,
		marginRight: 5,
		marginLeft: 5,
		paddingLeft: 4,
		color: "white",
	},
	formTextField: {
		flex: 1,
		fontSize: 15,
		color: "#fff",
		textShadowColor: "white",
	},
	login: {
		alignItems: "center",
		padding: 12,
		marginTop: 70,
		borderRadius: 30,
		backgroundColor: "#916BBF",
	},
	loginText: {
		fontSize: 25,
		color: "white",
		fontWeight: "500",
		//fontFamily: "Roboto-Black",
		fontFamily: "Roboto-MediumItalic",
		fontWeight: "bold",
	},
});
