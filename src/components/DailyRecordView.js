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
			</View>
		</View>
	)
};

export default DailyRecordView;