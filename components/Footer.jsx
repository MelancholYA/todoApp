import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const Footer = ({ fade }) => {
	return (
		<LinearGradient
			// Background Linear Gradient
			colors={['#ffffff00', '#000000cc']}
			style={styles.container}>
			<TouchableOpacity onPress={() => fade()}>
				<LinearGradient
					end={{ x: 0.9, y: 0.9 }}
					style={{ ...styles.icon }}
					colors={['#FC67BA', '#254DDE']}>
					<AntDesign name='plus' color='white' size={25} />
				</LinearGradient>
			</TouchableOpacity>
		</LinearGradient>
	);
};

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		bottom: 0,
		height: 100,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	icon: {
		borderRadius: 100,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: -5,
		padding: 12,
		shadowColor: 'red',
	},
});

export default Footer;
