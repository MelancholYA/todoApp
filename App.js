import React, { useEffect, useRef, useState } from 'react';
import {
	ActivityIndicator,
	Animated,
	Dimensions,
	ImageBackground,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import bg from './assets/bg.jpg';
import Constants from 'expo-constants';
import Todo from './components/Todo';
import useSrorage from './hooks/useSrorage';
import Footer from './components/Footer';
import { LinearGradient } from 'expo-linear-gradient';
import AddTask from './components/AddTask';

export default function App() {
	const { data, getData } = useSrorage();
	const [refresh, setRefresh] = useState(null);
	useEffect(() => {
		getData('todos');
	}, [refresh]);

	const slideAnim = useRef(
		new Animated.Value(-Dimensions.get('window').height - 25),
	).current;

	const slideIn = () => {
		Animated.timing(slideAnim, {
			toValue: 0,
			duration: 300,
			useNativeDriver: true,
		}).start();
	};
	const slideOut = () => {
		Animated.timing(slideAnim, {
			toValue: -Dimensions.get('window').height - 25,
			duration: 300,
			useNativeDriver: true,
		}).start();
	};

	return (
		<SafeAreaView
			style={{ ...styles.container, marginTop: Constants.statusBarHeight }}>
			<ImageBackground source={bg} resizeMode='cover' style={styles.image}>
				<Text style={styles.title}>TODOS</Text>

				{data === 'fetching' ? (
					<ActivityIndicator />
				) : !data || data.length === 0 ? (
					<View
						style={{
							flex: 1,
							justifyContent: 'center',
							alignItems: 'center',
						}}>
						<LinearGradient
							end={{ x: 0.9, y: 0.9 }}
							style={{ borderRadius: 100 }}
							colors={['#55ddFF', '#254DDE']}>
							<Text
								style={{
									padding: 15,
									paddingHorizontal: 32,
									fontSize: 20,
									fontWeight: '700',

									color: 'white',
								}}>
								Nothing to do for now
							</Text>
						</LinearGradient>
					</View>
				) : (
					<ScrollView>
						{Array.isArray(data) &&
							data.map((todo) => (
								<Todo
									key={todo.id}
									data={todo}
									all={data}
									refresh={setRefresh}
								/>
							))}
						<View style={{ height: 100 }}></View>
					</ScrollView>
				)}
				<Footer fade={slideIn} />
				<Animated.View
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						transform: [{ translateY: slideAnim }],
					}}>
					<AddTask stored={data} refresh={setRefresh} out={slideOut} />
				</Animated.View>
			</ImageBackground>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	title: {
		padding: 7,
		fontSize: 22,
		fontWeight: '700',
		textAlign: 'center',
	},
	image: { flex: 1 },
});
