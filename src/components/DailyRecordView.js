import React, { useState, useEffect } from 'react';
import { AsyncStorage, Text, View, SafeAreaView, ScrollView, RefreshControl, TouchableOpacity } from 'react-native';
import * as FileSystem from 'expo-file-system';

// UI stuff
import styles from '../styles/DailyRecordViewStyles.js';
import { Icon, ListItem } from 'react-native-elements';
import Constants from 'expo-constants';

// Project
import LoadingScreen from './LoadingScreen';
import { data_filename_absolute } from '../consts.js';

DailyRecordView = (props) => {
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
					<DailyRecordAddItem
						navigation={props.navigation}
					/>
					{
						(list.length === 0) ? (
							<Text style={{color:"white", textAlign:"center"}}>
								Nothing to see here!
							</Text>
						) : (
							list.map((item, i) => (
								<DailyRecordListItem
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
};

export default DailyRecordView;