import {StyleSheet} from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		backgroundColor: "#24292e"
	},

	scrollView: {
		flex: 10,
		flexDirection: "column",
		justifyContent: "center",
		marginHorizontal: "3%",
		marginTop: "3%",
	},
	title: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "flex-start",
		alignContent: "center",
		alignItems: "center",
		marginHorizontal: "3%",
		marginTop: "3%",
	},
	titleInput: {
		flex: 3,
		minHeight: 50,
		height: "auto",
		textAlign: "left",
		borderRadius: 3,
		borderWidth: 1,
		borderColor: "grey",
		marginVertical: "2%",
		paddingHorizontal: "5%",
	},
	touchable: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#ff9050",
		borderWidth: 1,
		borderRadius: 5,
		borderColor: "grey",
		marginHorizontal: "1%",
		paddingTop: "2%"
	},
	touchableText: {
		color: "white",
		fontSize: 13
	},
	bodyInput: {
		flex: 1,
		minHeight: 40,
		lineHeight: 20,
		backgroundColor: "#0000001f",
		height: "auto",
		textAlign: "left",
		color: "white",
		borderRadius: 1,
		borderWidth: 2,
		borderColor: "#ff9050",
		marginVertical: "2%",
		paddingHorizontal: "5%",
		paddingVertical: "2%",
	},
});