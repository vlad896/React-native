import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { THEME } from '../theme'
export const TodoScreen = ({ goBack, todo, onRemove }) => {
	return (
		<View>
			<Text>{todo.title}</Text>
			<View style={styles.buttonContainer} >
				<View style={styles.button}>
					<Button title='Назад' onPress={goBack} />
				</View>
				<View style={styles.button}>
					<Button title='Удалить' color={THEME.DANGER_COLOR} />
				</View>

			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	button: {
		width: '40%'
	}
})
