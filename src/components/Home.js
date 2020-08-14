import React, { useState, useEffect } from 'react';
import { AsyncStorage, Text, View, SafeAreaView, ScrollView, RefreshControl } from 'react-native';
import * as FileSystem from 'expo-file-system';

// UI stuff
import styles from '../styles/HomeStyles.js';
import { Icon, ListItem } from 'react-native-elements';
import Constants from 'expo-constants';
import moment from 'moment';
import "moment/locale/en-gb";
moment.locale("en-gb");

// Project
import LoadingScreen from './LoadingScreen';
import { data_filename_absolute } from '../consts.js';

Home = (props) => {
	const [loading, setLoading] = useState(false);
	const [refreshing, setRefreshing] = useState(false);

	const [list, setList] = useState([]);
	// Check if record for today exists
	useEffect(() => {
		if(list.filter(item => item.date === moment().format('L')).length > 0){
			setRecordForTodayExist(true);
		}else{
			setRecordForTodayExist(false);
		}
	}, [list]);
	const [recordForTodayExist, setRecordForTodayExist] = useState(false);

	componentDidMount = () => {
		setLoading(true);
		FileSystem.writeAsStringAsync(data_filename_absolute, `
			[
				{
					"date": "13/08/2020",
					"title": "Başlık",
					"body": "ilginç bir başlık..."
				},
				{
					"date": "12/08/2020",
					"title": "Başlık",
					"body": "ilginç bir başlık..."
				},
				{
					"date": "11/08/2020",
					"title": "Başlık",
					"body": "ilginç bir başlık..."
				},
				{
					"date": "10/08/2020",
					"title": "Başlık",
					"body": "ilginç bir başlık..."
				},
				{
					"date": "09/08/2020",
					"title": "Başlık",
					"body": "ilginç bir başlık..."
				}
			]
		`);
		initiateFile();
		readFile();
	}
	useEffect(componentDidMount, []);

	initiateFile = () => {
		// Check file, if it's not there, create it
		FileSystem.getInfoAsync(data_filename_absolute)
		.then(resp => {
			if(!resp.exists){
				FileSystem.writeAsStringAsync(data_filename_absolute, "[]")
				.then(resp => {
					console.log("Fresh file created");
				})
				.catch(err => {
					console.error(err);
				});
			}
		})
		.catch(err => {
			console.error(err);
		})
	}

	readFile = () => {
		setLoading(true);

		// Read file
		FileSystem.readAsStringAsync(data_filename_absolute)
		.then(resp => {
			setList(JSON.parse(resp));
			setLoading(false);
		})
		.catch(err => {
			console.error(err);
		})
	}

	onRefresh = () => {
		setRefreshing(true);
		readFile();
		setRefreshing(false);
	}

	if(loading){
		return <LoadingScreen />;
	}
	if(!loading && list){
		return(
			<View style={styles.container}>
				<View style={styles.headerContainer}>
					{/* Logo */}
					<View style={styles.logoContainer}>
						<Text style={styles.logo}>Diary</Text>
					</View>
	
					{/* Version right */}
					<View style={styles.versionTextTopRight}>
						<Text style={styles.versionText}>{Constants.manifest.version}</Text>
					</View>
				</View>

				<SafeAreaView style={styles.list}>
					<ScrollView
						refreshControl={
							<RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={["#1890ff"]} />
						}
					>
						{/* Add Item */}
						{
							(!recordForTodayExist) ? (
								<HomeAddItem
									navigation={props.navigation}
								/>
							) : null
						}
						{/* Normal Items */}
						{
							(list.length === 0) ? (
								<Text style={{color:"white", textAlign:"center"}}>
									Nothing to see here!
								</Text>
							) : (
								list.map((item, i) => (
									<HomeListItem
										key={i}
										index={i}
										item={item}
										navigation={props.navigation}
									/>
								))
							)
						}
					</ScrollView>
				</SafeAreaView>
			</View>
		)
	}
	return <LoadingScreen />;
};

HomeListItem = (props) => {
	let todayDate = moment().format('L');
	return(
		<ListItem
			key={props.index}
			style={styles.listItem}
			onPress={() => {
				// props.navigation.push(
				// 	"DailyRecordView",
				// 	{
				// 		item: props.item
				// 	}
				// );
			}}

			// Book Icon
			leftIcon={
				<Icon
					name="book-open"
					type="feather" size={26}
					color={
						(props.item.date === todayDate) ? "#ff9050" : "#000000cf"
					}
				/>
			}

			// Title
			title={props.item.title}
			titleStyle={
				(props.item.date === todayDate) ? styles.listItemHighlightTitle : styles.listItemTitle
			}
			subtitle={props.item.date}

			// View Icon
			rightIcon={<Icon name="eye" type="feather" size={29} color="#0000005f" />}
		/>
	);
};

HomeAddItem = (props) => {
	return(
		<ListItem
			key={props.index}
			style={styles.listItem}
			onPress={() => {
				props.navigation.push("AddDailyRecord");
			}}

			// Add Icon
			leftIcon={<Icon name="plus-square" type="feather" size={26} color="#ff9050" />}

			// Title
			title={"Write for today!"}
			titleStyle={{...styles.listItemTitle, fontWeight: "bold", fontSize: 17}}

			// Edit Icon
			rightIcon={<Icon name="edit" type="feather" size={29} color="#0000005f" />}
		/>
	);
};

export default Home;