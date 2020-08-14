import React from 'react';
import { Text, ActivityIndicator, View } from 'react-native';

// UI stuff
import styles from '../styles/LoadingScreenStyles.js';

LoadingScreen = (props) => {
	return(
		<View style={styles.loadingScreenContainer}>
			<ActivityIndicator size="large" color="white"/>
			<Text style={styles.loadingText}>Loading...</Text>
		</View>
	);
};

export default LoadingScreen;