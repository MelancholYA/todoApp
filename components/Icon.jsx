import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';

import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

const Icon = ({ name, selected }) => {
	const renderGradient = (name) => {
		switch (name) {
			case 'shop':
				return ['#F965B7', '#FBC289'];
			case 'game':
				return ['#254DDE', '#FE1E9A'];
			case 'drive':
				return ['#181743', '#254DDE'];
			case 'event':
				return ['#00FFFF', '#254DDE'];
			case 'sport':
				return ['#FE1E9A', '#254DDE'];

			default:
				return ['#88889F', '#181743'];
		}
	};
	const renderIcon = (name) => {
		switch (name) {
			case 'shop':
				return <Entypo name='shop' size={20} color='white' />;
			case 'game':
				return <FontAwesome5 name='baseball-ball' size={20} color='white' />;
			case 'drive':
				return <Entypo name='location' size={20} color='white' />;
			case 'event':
				return <FontAwesome5 name='wine-glass-alt' size={20} color='white' />;
			case 'sport':
				return (
					<MaterialCommunityIcons
						name='weight-lifter'
						size={24}
						color='white'
					/>
				);

			default:
				return <MaterialIcons name='event' size={24} color='white' />;
		}
	};

	const iconStyle = StyleSheet.create({
		icon: {
			alignItems: 'center',
			justifyContent: 'center',
			marginRight: 11,
			marginTop: 10,
			borderRadius: 100,
			padding: 10,
			width: 45,
			height: 45,
			borderWidth: selected ? 2 : 0,
			borderColor: 'white',
		},
	});

	return (
		<LinearGradient style={iconStyle.icon} colors={renderGradient(name)}>
			<View>{renderIcon(name)}</View>
		</LinearGradient>
	);
};

export default Icon;
