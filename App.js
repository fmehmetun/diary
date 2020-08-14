import React from 'react';
import { AppRegistry, StatusBar } from 'react-native';
import { Router, Stack, Scene } from "react-native-router-flux";

import Home from './src/components/Home';
import DailyRecordView from './src/components/DailyRecordView';
import CreateDailyRecord from './src/components/CreateDailyRecord';

export default App = () => {
	return <>
		<StatusBar backgroundColor="#24292e" />
		<Router>
			<Stack key="Root">
				<Scene
					hideNavBar
					key="Home"
					component={Home}
					initial={true}
				/>
				<Scene
					key="CreateDailyRecord"
					component={CreateDailyRecord}
					navigationBarStyle={{
						backgroundColor: "#14191e"
					}}
					navBarButtonColor="white"
					title="Create record"
					titleStyle={{
						textAlign: "center",
						fontSize: 25,
						color: "white"
					}}
					back={true}
				/>
				<Scene
					key="DailyRecordView"
					component={DailyRecordView}
					navigationBarStyle={{
						backgroundColor: "#14191e"
					}}
					navBarButtonColor="white"
					title="View record"
					titleStyle={{
						textAlign: "center",
						fontSize: 25,
						color: "white"
					}}
					back={true}
				/>
			</Stack>
		</Router>
	</>
};

AppRegistry.registerComponent("diary", () => App);