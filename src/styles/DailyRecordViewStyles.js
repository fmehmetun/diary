import {StyleSheet} from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		backgroundColor: "#24292e"
	},

	// Header
	headerContainer: {
		flex: 2,
		flexDirection: "row",
		justifyContent: "center",
		paddingHorizontal: "5%",
		backgroundColor: "#14191e",
	},
	// Header stuff
	logoContainer: {
		flex: 6,
		flexDirection: "row",
		justifyContent: "flex-start",
		alignContent: "center",
		alignItems: "center",
	},
	versionTextTopRight: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
	},
	// Texts
	logo: {
		textAlign: "left",
		fontWeight: "bold",
		fontSize: 35,
		color: "white"
	},
	versionText: {
		textAlign: "right",
		fontSize: 16,
		color: "white"
	},

	// List
	list: {
		flex: 10,
		flexDirection: "column",
		justifyContent: "center",
		marginHorizontal: "3%",
		marginTop: "3%",
	},
	listItem: {
		flex: 1,
		flexDirection: "row",
		alignContent: "space-between",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "white",
		marginBottom: "2%"
	},
	listItemTitle: {
		fontSize: 16,
		fontWeight: "bold",
		color: "black"
	},
});