import React, { useState } from 'react';
import {
	Button,
	Dimensions,
	Pressable,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import Icon from './Icon';
import { LinearGradient } from 'expo-linear-gradient';
import useSrorage from '../hooks/useSrorage';

const AddTask = ({ out, refresh, stored }) => {
	const { storeData } = useSrorage();
	const icons = ['shop', 'game', 'drive', 'event', 'sport', ''];
	const [selectedIcon, setSelectedIcon] = useState(null);
	const [title, setTitle] = useState('');
	const [desc, setDesc] = useState('');
	const [loading, setLoading] = useState(false);
	const addTask = async () => {
		if (!selectedIcon || !title || !desc)
			return alert('Please fill all the fields');
		setLoading(true);
		storeData(
			'todos',
			stored
				? JSON.stringify([
						...stored,
						{
							title,
							desc,
							selectedIcon,
						},
				  ])
				: JSON.stringify([
						{
							title,
							desc,
							selectedIcon,
						},
				  ]),
		);
		out();
		refresh(Math.random());
		setSelectedIcon(null);
		setTitle(null);
		setDesc(null);
		setLoading(false);
	};

	return (
		<View style={styles.container}>
			<LinearGradient
				style={styles.form}
				colors={['#6D399C', '#c19096']}
				end={[1, 1]}>
				<View
					style={{
						alignItems: 'center',
						flexDirection: 'row',
						justifyContent: 'space-between',
					}}>
					<Text style={styles.title}>NEW TASK</Text>
					<AntDesign
						name='closecircleo'
						size={24}
						color='white'
						onPress={() => out()}
					/>
				</View>

				<Text style={styles.placeHolder}>Icon :</Text>
				<View
					style={{
						flexDirection: 'row',
						flexWrap: 'wrap',
					}}>
					{icons.map((icon, i) => (
						<TouchableOpacity
							key={i}
							onPress={() => {
								setSelectedIcon(i);
							}}>
							<Icon
								name={icon}
								selected={i === selectedIcon ? true : false}
								setSelection={setSelectedIcon}
							/>
						</TouchableOpacity>
					))}
				</View>
				<Text style={styles.placeHolder}>Title :</Text>
				<TextInput
					placeholderTextColor='#ffffff55'
					style={{ height: 40, color: 'white' }}
					placeholder='Enter event title'
					value={title}
					onChangeText={(text) => setTitle(text)}
				/>
				<Text style={styles.placeHolder}>Description :</Text>
				<TextInput
					onChangeText={(e) => setDesc(e)}
					placeholderTextColor='#ffffff55'
					placeholder='Enter event description'
					numberOfLines={4}
					style={{ height: 40, color: 'white' }}
					value={desc}
				/>
				<TouchableOpacity>
					<LinearGradient
						style={styles.button}
						end={[1, 1]}
						colors={['#962A9F', '#FD65A7']}>
						<Text
							style={{
								color: 'white',
								textAlign: 'center',
								fontWeight: '700',
								fontSize: 18,
							}}
							onPress={addTask}>
							Add
						</Text>
					</LinearGradient>
				</TouchableOpacity>
			</LinearGradient>
		</View>
	);
};

const styles = StyleSheet.create({
	form: {
		borderBottomRightRadius: 25,
		borderBottomLeftRadius: 25,
		padding: 15,
		overflow: 'scroll',
		height: Dimensions.get('window').height - 50,
	},
	title: {
		fontSize: 23,
		fontWeight: '700',
		marginVertical: 15,
		color: 'white',
	},
	placeHolder: {
		fontSize: 23,
		color: '#ddd',
		marginTop: 25,
	},
	icon: {
		marginRight: 11,
		marginTop: 10,
		backgroundColor: '#00000055',
		borderRadius: 100,
		padding: 7,
	},
	button: {
		width: 100,
		padding: 7,
		marginTop: 25,
		borderRadius: 12,
	},
});

export default AddTask;
