import React, { useState } from "react";
import {
	StyleSheet,
	View,
	Text,
	Button,
	Modal,
	TextInput,
	Alert,
} from "react-native";
import { THEME } from "../theme";
import { AppButton } from '../ui/AppButton';

export const EditModal = ({ visible, onClose, todo, onSave }) => {
	const [newTodo, setNewTodo] = useState(todo);

	const saveHandler = () => {
		if (newTodo.trim().length < 3) {
			Alert.alert(
				"Ошибка",
				`Минимальная длина названия 3 символа. Сейчас ${newTodo.trim().length}`
			);
		} else {
			onSave(newTodo);
		}
	};

	const cancelHandler = () => {
		setNewTodo(todo)
		onClose()
	}
	return (
		<Modal visible={visible} animationType="slide" transparent={false}>
			<View style={styles.wrap}>
				<TextInput
					style={styles.input}
					value={newTodo}
					onChangeText={setNewTodo}
					placeholder="Введите значение"
					autoCapitalize="none"
					autoCorrect={false}
					maxLength={64}
				/>
				<View style={styles.button}>
					<AppButton

						onPress={cancelHandler}
						color={THEME.DANGER_COLOR}
					>
						Отменить
					</AppButton>
					<AppButton color={THEME.MAIN_COLOR} onPress={saveHandler}>Сохранить</AppButton>

				</View>
			</View>
		</Modal>
	);
};
const styles = StyleSheet.create({
	wrap: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	button: {
		width: "100%",
		marginTop: 10,
		flexDirection: "row",
		justifyContent: "space-around",
	},
	input: {
		padding: 10,
		borderBottomColor: THEME.DANGER_COLOR,
		borderBottomWidth: 2,
		width: "80%",
	},
});
