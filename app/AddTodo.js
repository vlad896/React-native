import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native';

export const AddTodo = ({ onSubmit }) => {
	const [value, setValue] = useState('');
	const pressHandler = () => {
		if (value.trim()) {
			onSubmit(value)
			setValue('')
		} else {
			Alert.alert('error')
		}
	}

	return (
		<View style={styles.container}>

			<TextInput style={styles.textInput}
				onChangeText={setValue}
				value={value}
				placeholder='Введите название дела'
				autoCorrect={false}
				autoCapitalize='words+'
			/>
			<Button title='Добавить' style={styles.button} onPress={pressHandler} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'

	},
	textInput: {
		width: '50%',
		borderStyle: 'solid',
		borderBottomWidth: 2,
		borderBottomColor: '#3949ab',
		padding: 5,
	},
	button: {
		width: '50%'
	}
})