import React, { useState, useEffect } from 'react';
import { AsyncStorage, Text, TextInput, View, SafeAreaView, ScrollView, RefreshControl, TouchableOpacity } from 'react-native';
import * as FileSystem from 'expo-file-system';

// UI stuff
import styles from '../styles/DailyRecordViewStyles.js';
import { Icon, ListItem, Button } from 'react-native-elements';
import Toast from 'react-native-simple-toast';

// Project
import LoadingScreen from './LoadingScreen';
import { data_filename_absolute } from '../consts.js';
import { sortList_createdAt } from '../utils.js';

DailyRecordView = (props) => {
	onDelete = () => {
		// Read file
		FileSystem.readAsStringAsync(data_filename_absolute)
		.then(resp => {
			let list = JSON.parse(resp);

			// Delete this item from list
			list = list.filter(i => i.id != props.item.id);

			// Write to file
			FileSystem.writeAsStringAsync(data_filename_absolute, JSON.stringify(list))
			.then(resp => {
				Toast.show("Successfully deleted the record!");
				props.navigation.pop();
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
					{/* Date selection button */}
					<TouchableOpacity
						style={styles.touchable}
						disabled={true}
					>
						<Text style={styles.touchableText}>{props.item.date}</Text>
					</TouchableOpacity>

					{/* Title */}
					<TextInput
						style={styles.titleInput}
						value={props.item.title}
						editable={false}
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
						value={props.item.body}
						editable={false}
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
					{/* Edit button */}
					<Button
						title="Edit"
						onPress={() => {
							props.navigation.replace(
								"CreateDailyRecord",
								{
									edit: true,
									item: props.item
								}
							)
						}}
						icon={{
							name: "edit",
							type: "feather",
							color: "white",
						}}
					/>
					{/* Delete button */}
					<Button
						title="Delete"
						onLongPress={onDelete}
						onPress={() => {
							Toast.show("Hold button to delete the record!");
						}}
						buttonStyle={{backgroundColor: "red"}}
						icon={{
							name: "trash",
							type: "feather",
							color: "white",
						}}
					/>
				</View>
			</View>
		</View>
	)
};

export default DailyRecordView;