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

const Todo = ({ type, refresh, data }) => {
	const { deleteData } = useSrorage();
	const renderIcon = () => {
		switch (type) {
			case 'High':
				return (
					<Feather
						name='alert-circle'
						color='white'
						style={styles.icon}
						size={20}
					/>
				);
			case 'Normal':
				return (
					<MaterialIcons
						color='white'
						style={styles.icon}
						name='label-important'
						size={20}
					/>
				);

			default:
				return (
					<AntDesign name='star' color='white' style={styles.icon} size={20} />
				);
		}
	};
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
		<TouchableOpacity
			style={styles.container}
			onPress={() => {
				deleteData('todos');
				refresh(Math.random());
			}}>
			{renderIcon()}
			<Text numberOfLines={1} ellipsizeMode='tail' style={styles.main}>
				{data.title}
			</Text>
			<View style={styles.date}>
				<Text>18 jun</Text>
				<Text>14:25</Text>
			</View>
		</TouchableOpacity>
	);
};

export default Todo;
