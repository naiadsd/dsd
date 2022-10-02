import LinearGradient from "react-native-linear-gradient";

import React from "react";
import { StyleSheet } from "react-native";

export default function Gradient() {
	return (
		<LinearGradient
			colors={["#7265db", "#7265db", "#40388a", "#40388a"]}
			style={styles.linearGradient}></LinearGradient>
	);
}

var styles = StyleSheet.create({
	buttonText: {
		fontSize: 18,
		fontFamily: "Gill Sans",
		textAlign: "center",
		margin: 10,
		color: "#ffffff",
		backgroundColor: "transparent",
	},
});
0;
