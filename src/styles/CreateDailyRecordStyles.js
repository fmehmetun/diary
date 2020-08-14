import {StyleSheet} from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		backgroundColor: "#24292e"
	},

	content: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		alignContent: "center",
		alignItems: "stretch",
		marginTop: "3%",
	},
	titleContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignContent: "space-between",
		alignItems: "center",
		marginHorizontal: "3%",
	},
	// Title input
	titleInput: {
		flex: 3,
		minHeight: 50,
		textAlign: "left",
		borderRadius: 1,
		borderWidth: 2,
		borderColor: "grey",
		color: "white",
		paddingHorizontal: "3%",
	},
	// Date button
	touchable: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#0000001f",
		borderColor: "grey",
		borderRadius: 1,
		borderWidth: 2,
		width: "100%",
		height: "80%",
	},
	touchableText: {
		color: "white",
		fontSize: 13
	},
	// Body
	bodyContainer: {
		flex: 7,
		justifyContent: "flex-start",
		alignContent: "flex-start",
		alignItems: "stretch",
		marginHorizontal: "3%",
	},
	bodyInput: {
		minHeight: 80,
		lineHeight: 20,
		backgroundColor: "#0000001f",
		borderColor: "#ff9050",
		borderRadius: 1,
		borderWidth: 1,
		height: "auto",
		textAlign: "left",
		color: "white",
		marginVertical: "2%",
		paddingHorizontal: "3%",
		paddingVertical: "1%",
	},
	// Buttons
	buttonsContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
		alignContent: "center",
		alignItems: "stretch",
		marginHorizontal: "3%",
	},
});