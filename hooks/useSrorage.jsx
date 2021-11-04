import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useSrorage = () => {
	const [data, setData] = useState('fetching');
	const getData = async (key) => {
		try {
			const value = await AsyncStorage.getItem(key);
			const proccesed = JSON.parse(value);
			proccesed ? setData(proccesed) : setData(value);
		} catch (e) {
			alert('error');
		}
	};
	const storeData = async (key, value) => {
		try {
			await AsyncStorage.setItem(key, value);
		} catch (e) {
			alert('eror');
		}
	};
	const deleteData = async (key) => {
		try {
			await AsyncStorage.removeItem(key);
		} catch (e) {
			console.log(e);
			alert('error');
		}
	};
	const deleteTodo = async () => {
		await getData('todos');
		console.log(data);
	};
	return { getData, data, storeData, deleteData, deleteTodo };
};

export default useSrorage;
