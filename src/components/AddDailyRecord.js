import React, { useState, useEffect } from 'react';
import { AsyncStorage, Text, TextInput, View, SafeAreaView, ScrollView, RefreshControl, TouchableOpacity } from 'react-native';
import * as FileSystem from 'expo-file-system';

// UI stuff
import styles from '../styles/AddDailyRecordStyles.js';
import { Icon, ListItem } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import "moment/locale/en-gb";
moment.locale("en-gb");

// Project
import LoadingScreen from './LoadingScreen';
import { data_filename_absolute } from '../consts.js';

AddDailyRecord = (props) => {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");

	// Date
	const [date, setDate] = useState(moment().format('L'));
	const [show, setShow] = useState(false);
	const onDateChange = (event, selectedDate) => {
		setShow(false);
		setDate(moment(selectedDate).format('L'));
	};

	return(
		<View style={styles.container}>
			<SafeAreaView style={styles.scrollView}>
				<ScrollView>
					<View style={styles.title}>

						{/* Title input */}
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

						{/* Date Picker */}
						{
							show ? (
								<DateTimePicker
									testID="dateTimePicker"
									value={date}
									onChange={onDateChange}
									mode="date"
									is24Hour={true}
									display="default"
								/>
							) : null
						}

						{/* Date selection button */}
						<TouchableOpacity
							onPress={() => {setShow(true)}}
							style={styles.touchable}
						>
							<Text style={styles.touchableText}>{date}</Text>
						</TouchableOpacity>
					</View>

					{/* Body input */}
					<TextInput
						style={styles.bodyInput}
						onChangeText={(text) => setBody(text)}
						placeholder="Soo.. how was your day?"
						value={body}
						keyboardType="default"
						allowFontScaling={false}
						autoCorrect={false}
						autoCompleteType="off"
						importantForAutofill="no"
						multiline={true}
						scrollEnabled={true}
					/>
				</ScrollView>
			</SafeAreaView>
		</View>
	)
};

export default AddDailyRecord;