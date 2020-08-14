import React, { useState, useEffect } from 'react';
import { AsyncStorage, Text, TextInput, View, SafeAreaView, ScrollView, RefreshControl, TouchableOpacity } from 'react-native';
import * as FileSystem from 'expo-file-system';

// UI stuff
import styles from '../styles/CreateDailyRecordStyles.js';
import { Icon, ListItem, Button } from 'react-native-elements';
import Toast from 'react-native-simple-toast';
import moment from 'moment';
import "moment/locale/en-gb";
moment.locale("en-gb");

// Project
import LoadingScreen from './LoadingScreen';
import { data_filename_absolute } from '../consts.js';
import { sortList_createdAt } from '../utils.js';

CreateDailyRecord = (props) => {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");

	// Date
	const [date, setDate] = useState(moment().format('L'));

	onCreate = () => {
		if(title === "" || body === ""){
			Toast.show("Invalid inputs!");
			return;
		}

		// Read file
		FileSystem.readAsStringAsync(data_filename_absolute)
		.then(resp => {
			let list = JSON.parse(resp);

			let newId;
			if(list.length > 0){
				newId = list.sort(
					(a, b) => (
						(a.id > b.id) ? -1 :
						(a.id < b.id) ? 1 : 0
					)
				)[0].id + 1;
			}else{
				newId = 1;
			}

			// Push the object and sort the list
			list.push({
				id: newId,
				date: date,
				title: title,
				body: body,
				createdAt: moment.now()
			});

			// Write to file
			FileSystem.writeAsStringAsync(data_filename_absolute, JSON.stringify(list))
			.then(resp => {
				Toast.show("Successfully created the record!");
				props.navigation.popTo("Home", {refresh: true});
			})
			.catch(err => {
				console.error(err);
			});
		})
		.catch(err => {
			console.error(err);
		})
	};

	return(
		<View style={styles.container}>
			<View style={styles.content}>
				<View style={styles.titleContainer}>
					{/* Date */}
					<TouchableOpacity
						style={styles.touchable}
					>
						<Text style={styles.touchableText}>{date}</Text>
					</TouchableOpacity>

					{/* Title */}
					<TextInput
						style={styles.titleInput}
						onChangeText={(text) => setTitle(text)}
						placeholder="Title"
						value={title}
						keyboardType="default"
						allowFontScaling={false}
						autoCorrect={false}
						autoCompleteType="off"
						importantForAutofill="no"
						multiline={false}
						scrollEnabled={false}
					/>
				</View>

				<View style={styles.bodyContainer}>
					{/* Body input */}
					<TextInput
						style={styles.bodyInput}
						onChangeText={(text) => setBody(text)}
						placeholder="How was your day?"
						value={body}
						maxLength={1024}
						keyboardType="default"
						allowFontScaling={false}
						autoCorrect={false}
						autoCompleteType="off"
						importantForAutofill="no"
						multiline={true}
						scrollEnabled={true}
					/>
				</View>

				<View style={styles.buttonsContainer}>
					{/* Confirm button */}
					<Button
						title="Create"
						onLongPress={onCreate}
						onPress={() => {
							Toast.show("Hold button to create the record!");
						}}
						buttonStyle={{backgroundColor: "green"}}
						icon={{
							name: "plus-square",
							type: "feather",
							color: "white",
						}}
					/>
				</View>
			</View>
		</View>
	)
};

export default CreateDailyRecord;