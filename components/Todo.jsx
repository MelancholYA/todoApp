import React from 'react';
import {
	Dimensions,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import useSrorage from '../hooks/useSrorage';

import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Icon from './Icon';

const Todo = ({ type, refresh, data, all }) => {
	const icons = ['shop', 'game', 'drive', 'event', 'sport', ''];
	const { storeData } = useSrorage();

	const styles = StyleSheet.create({
		container: {
			flexDirection: 'row',
			alignItems: 'center',
			backgroundColor: '#fff',
			margin: 7,
			padding: 7,
			paddingTop: 10,
			paddingBottom: 10,
		},
		icon: {
			marginRight: 11,
			backgroundColor:
				type === 'High' ? '#FE1E9A' : type === 'Normal' ? '#FE1E9A' : '#181743',
			borderRadius: 100,
			padding: 7,
		},
		main: {
			width: Dimensions.get('window').width - 130,
			fontSize: 18,
			marginRight: 10,
		},
		date: {
			width: 50,
			textAlign: 'center',
		},
	});

	return (
		<View style={styles.container}>
			<Icon name={icons[data.selectedIcon]} />
			<Text numberOfLines={1} ellipsizeMode='tail' style={styles.main}>
				{data.title}
			</Text>
			<AntDesign
				name='closecircleo'
				size={24}
				color='black'
				onPress={() => {
					console.log(all);
					const newList = all.filter((single) => single.uuid !== data.uuid);
					storeData('todos', JSON.stringify(newList));
					refresh(Math.random());
				}}
			/>
		</View>
	);
};

export default Todo;
